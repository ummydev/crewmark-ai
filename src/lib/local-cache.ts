// What the dashboard last showed, kept in this browser's IndexedDB (MC-235), so a page opens with it at once and
// updates when Crewmark answers, as a chat app does: Messages' conversations, direct messages and employees' work.
// Kept in memory too, so going back to something already seen this visit shows it in the same frame. A cache only:
// Crewmark stays the source, anything here may be out of date, and losing it (private browsing, cleared site data)
// only means waiting for Crewmark as before. Keys start with the person's id, and signing out empties it.

const DB_NAME = "crewmark-cache";
const STORE = "entries";
/** Bump when what's stored changes shape, so an old browser's entries aren't read as the new kind. */
const VERSION = "v1";

const memory = new Map<string, unknown>();
let opening: Promise<IDBDatabase | null> | null = null;

function open() {
  opening ??= new Promise<IDBDatabase | null>((resolve) => {
    try {
      const request = indexedDB.open(DB_NAME, 1);
      request.onupgradeneeded = () => request.result.createObjectStore(STORE);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => resolve(null);
      request.onblocked = () => resolve(null);
    } catch {
      resolve(null); // No IndexedDB here: memory only.
    }
  });
  return opening;
}

function run<T>(mode: IDBTransactionMode, ask: (store: IDBObjectStore) => IDBRequest<T>) {
  return open().then(
    (db) =>
      new Promise<T | undefined>((resolve) => {
        if (!db) return resolve(undefined);
        try {
          const request = ask(db.transaction(STORE, mode).objectStore(STORE));
          request.onsuccess = () => resolve(request.result);
          request.onerror = () => resolve(undefined);
        } catch {
          resolve(undefined);
        }
      }),
  );
}

/** A key for one person's copy of something, e.g. cacheKey(user, org, "dm", employeeId). */
export function cacheKey(...parts: string[]) {
  return [VERSION, ...parts].join(":");
}

/** What's in memory for the key: something already read or written this visit, at once. */
export function peekCache<T>(key: string): T | undefined {
  return memory.get(key) as T | undefined;
}

/** What's stored for the key, from memory or else from IndexedDB. */
export async function readCache<T>(key: string): Promise<T | undefined> {
  if (memory.has(key)) return memory.get(key) as T;
  const value = await run<T>("readonly", (store) => store.get(key));
  // Something written while this was reading is newer.
  if (value !== undefined && !memory.has(key)) memory.set(key, value);
  return memory.get(key) as T | undefined;
}

/** Stores the value for the key, in memory at once and in IndexedDB behind it. */
export function writeCache(key: string, value: unknown) {
  memory.set(key, value);
  void run("readwrite", (store) => store.put(value, key));
}

/** Forgets everything stored: on signing out, so the next person on this browser doesn't see it. */
export async function clearCache() {
  memory.clear();
  await run("readwrite", (store) => store.clear());
}
