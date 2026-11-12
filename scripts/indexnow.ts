// Tells Bing, Yandex and the other IndexNow search engines that pages changed, so they recrawl them in hours instead
// of weeks. Run it after a deploy that adds or changes marketing pages:
//
//   npm run seo:indexnow -- /ai-employees /zh/ai-employees
//   npm run seo:indexnow -- --sitemap      # every URL in the live sitemap
//
// The key isn't a secret: IndexNow checks ownership by fetching it from public/<key>.txt on the live site, so that
// file has to be deployed first. https://www.indexnow.org/documentation

const host = "crewmark.ai";
const key = "1bb2f2c72a67670c830cf20b2aeb70f9";

async function urls(args: string[]) {
  if (!args.includes("--sitemap")) return args.map((path) => new URL(path, `https://${host}`).href);
  const xml = await (await fetch(`https://${host}/sitemap.xml`)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
}

async function main() {
  const urlList = await urls(process.argv.slice(2));
  if (!urlList.length) {
    console.error("Usage: npm run seo:indexnow -- <path or URL>... | --sitemap");
    process.exit(1);
  }

  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
  });
  // 200 and 202 both mean accepted; 403 means the key file isn't live yet.
  console.log(`IndexNow: ${response.status} ${response.statusText} for ${urlList.length} URLs`);
  if (!response.ok) process.exit(1);
}

void main();
