"use client";

import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon, XIcon } from "lucide-react";
import Lightbox, { type ThumbnailsRef, type ZoomRef } from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Looking at the pictures in a conversation (MC-304): a click on one opens it full screen on black, with the others
// in the conversation to go through, left and right, and a strip of them below. All the pictures shown in it count,
// the person's and the agent's, in the order they show; videos play where they are.
//
// Pictures say they can be looked at with data-viewable (or by being in a message, [data-quotable]); the viewer reads
// them from the page when it opens, so they're those loaded so far.

const VIEWABLE = "img[data-viewable], [data-quotable] img";

interface Slide {
  src: string;
  title: string;
}

const ImageViewerContext = React.createContext<(src: string) => void>((src) => window.open(src, "_blank", "noopener"));

/** Opens the viewer at the picture with this address. */
export function useOpenImage() {
  return React.useContext(ImageViewerContext);
}

/** The viewer for the pictures inside `scope`: what's in it opens them with useOpenImage. */
export function ImageViewer({
  scope,
  children,
}: {
  scope: React.RefObject<HTMLElement | null>;
  children: React.ReactNode;
}) {
  const [slides, setSlides] = React.useState<Slide[]>([]);
  const [index, setIndex] = React.useState(-1);

  function open(src: string) {
    const found: Slide[] = [];
    for (const img of scope.current?.querySelectorAll<HTMLImageElement>(VIEWABLE) ?? []) {
      const at = img.currentSrc || img.src;
      if (!at || found.some((s) => s.src === at)) continue;
      found.push({ src: at, title: img.alt || "" });
    }
    const absolute = new URL(src, window.location.href).href;
    let at = found.findIndex((s) => s.src === absolute || s.src === src);
    if (at < 0) {
      found.push({ src: absolute, title: "" });
      at = found.length - 1;
    }
    setSlides(found);
    setIndex(at);
  }

  return (
    <ImageViewerContext.Provider value={open}>
      {children}
      <MediaViewer
        slides={slides.map((slide) => ({ kind: "image", src: slide.src, title: slide.title }))}
        index={index}
        onIndex={setIndex}
      />
    </ImageViewerContext.Provider>
  );
}

/** A picture or a video in the viewer, with what its footer needs (a file the agent sent, MC-325). */
export interface ViewerSlide {
  kind: "image" | "video";
  src: string;
  title: string;
  /** A video's own size, so the player has its shape (a portrait video, a portrait player); 16:9 till it's known. */
  width?: number;
  height?: number;
}

/**
 * The full-screen viewer (MC-304), for the pictures in a conversation and for the media panel's pictures and videos
 * (MC-325), as Codex drew it (MC-350): a dark backdrop, a bar at the top with the name and the count, the others in a
 * slim column on the left (not on a phone, where a swipe goes through them), and `footer` under the one shown, e.g. a
 * box to write to the agent about it. Closed while `index` is -1.
 */
export function MediaViewer<S extends ViewerSlide>({
  slides,
  index,
  onIndex,
  footer,
}: {
  slides: S[];
  index: number;
  onIndex: (index: number) => void;
  footer?: (slide: S) => React.ReactNode;
}) {
  const zoom = React.useRef<ZoomRef>(null);
  // A pointer that can hover is a mouse: a click switches between fitting the screen and the picture's own size.
  // Touch has pinching and double taps for that.
  const mouse = useMedia("(hover: hover) and (pointer: fine)");
  const phone = useMedia("(max-width: 767px)");
  const shown = slides[index];
  // The viewer renders the slides beside the one shown too, each with its footer: ours by its address.
  const ours = (slide: { src?: string; sources?: { src: string }[] }) =>
    slides.find((s) => s.src === (slide.src ?? slide.sources?.[0]?.src));
  const many = slides.length > 1;
  // The column of the others, but on a phone, or with none to go to; the list may come in after the viewer opens.
  const thumbnails = React.useRef<ThumbnailsRef>(null);
  const withThumbnails = many && !phone;
  React.useEffect(() => {
    if (withThumbnails) thumbnails.current?.show();
    else thumbnails.current?.hide();
  }, [withThumbnails, index]);
  const footerSpace = footer ? (phone ? 132 : 150) : 16;
  return (
    <Lightbox
      open={index >= 0}
      index={Math.max(index, 0)}
      close={() => onIndex(-1)}
      slides={slides.map((slide) =>
        slide.kind === "video"
          ? {
              type: "video" as const,
              sources: [{ src: slide.src, type: "video/mp4" }],
              title: slide.title,
              width: slide.width ?? 1920,
              height: slide.height ?? 1080,
            }
          : { src: slide.src, title: slide.title },
      )}
      plugins={[Thumbnails, Video, Zoom]}
      on={{
        view: ({ index: current }) => onIndex(current),
        click: () => {
          if (!mouse || !zoom.current || shown?.kind !== "image") return;
          const { zoom: level, maxZoom, changeZoom } = zoom.current;
          changeZoom(level > 1 ? 1 : maxZoom);
        },
      }}
      zoom={{ ref: zoom, maxZoomPixelRatio: 1, doubleClickMaxStops: 1, scrollToZoom: true }}
      // Read with CORS, so a frame can be drawn to comment on it (MC-324); the Worker allows it.
      video={{ controls: true, playsInline: true, autoPlay: true, preload: "metadata", crossOrigin: "anonymous" }}
      // Closed by its X (or Escape) only: a pinch on a phone read as pulling it down, or as a tap on the backdrop, and
      // closed it (MC-350).
      controller={{ closeOnPullDown: false, closeOnPullUp: false, closeOnBackdropClick: mouse }}
      carousel={{ finite: true, padding: 0, spacing: 16 }}
      toolbar={{ buttons: [] }}
      thumbnails={{
        ref: thumbnails,
        position: "start",
        width: 64,
        height: 64,
        border: 0,
        padding: 0,
        gap: 10,
        imageFit: "cover",
        vignette: false,
        hidden: !withThumbnails,
        showToggle: false,
      }}
      render={{
        // The bar at the top: close, the name, the count, open it on its own.
        controls: () =>
          shown ? (
            <TopBar
              title={shown.title}
              count={many ? `${index + 1} / ${slides.length}` : null}
              href={shown.src}
              phone={phone}
              onClose={() => onIndex(-1)}
            />
          ) : null,
        slideFooter: footer
          ? ({ slide }) => {
              const found = ours(slide as { src?: string });
              return found ? footer(found) : null;
            }
          : undefined,
        // On a phone a swipe goes to the others; with one, there's nowhere to go.
        iconPrev: () => <ChevronLeftIcon className="size-5 text-white/85" strokeWidth={1.5} />,
        iconNext: () => <ChevronRightIcon className="size-5 text-white/85" strokeWidth={1.5} />,
        buttonPrev: many && !phone ? undefined : () => null,
        buttonNext: many && !phone ? undefined : () => null,
      }}
      styles={{
        container: { backgroundColor: "var(--viewer-bg)" },
        slide: { paddingTop: TOP_BAR + 16, paddingBottom: footerSpace, paddingInline: phone ? 0 : 72 },
        navigationPrev: NAV_BUTTON,
        navigationNext: NAV_BUTTON,
        thumbnailsContainer: { backgroundColor: "var(--viewer-bg)", borderRight: "1px solid rgb(255 255 255 / 0.08)", paddingTop: TOP_BAR + 16 },
        root: {
          "--viewer-bg": "#161616",
          "--yarl__color_backdrop": "#161616",
          "--yarl__thumbnails_thumbnail_background": "#161616",
          "--yarl__thumbnails_thumbnail_active_border_color": "#fff",
          "--yarl__thumbnails_thumbnail_border_radius": "6px",
          "--yarl__thumbnails_thumbnail_active_border": "2px",
        } as NonNullable<React.ComponentProps<typeof Lightbox>["styles"]>["root"],
      }}
      className="media-viewer"
    />
  );
}

const TOP_BAR = 56;

/** The buttons to the one before and after: quiet circles with a hairline, as drawn. */
const NAV_BUTTON: NonNullable<NonNullable<React.ComponentProps<typeof Lightbox>["styles"]>["navigationPrev"]> = {
  width: 44,
  height: 44,
  margin: "0 16px",
  borderRadius: 9999,
  border: "1px solid rgb(255 255 255 / 0.2)",
  backgroundColor: "rgb(255 255 255 / 0.04)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  filter: "none",
};

function useMedia(query: string) {
  return React.useSyncExternalStore(
    (changed) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", changed);
      return () => list.removeEventListener("change", changed);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

function TopBar({
  title,
  count,
  href,
  phone,
  onClose,
}: {
  title: string;
  count: string | null;
  href: string;
  phone: boolean;
  onClose: () => void;
}) {
  const button = "flex size-11 shrink-0 items-center justify-center rounded-md text-white/80 transition-colors hover:bg-white/10 hover:text-white";
  return (
    <div
      style={{ height: TOP_BAR }}
      className="absolute inset-x-0 top-0 z-10 flex items-center gap-2 border-b border-white/[0.08] bg-[#161616] px-2 text-white sm:px-3"
    >
      <button type="button" aria-label="Close" onClick={onClose} className={button}>
        <XIcon className="size-5" strokeWidth={1.5} />
      </button>
      {phone ? (
        <div className="grid min-w-0 flex-1 justify-items-center text-center leading-tight">
          <span className="max-w-full truncate text-[15px] font-medium">{title}</span>
          {count && <span className="text-xs text-white/50 tabular-nums">{count}</span>}
        </div>
      ) : (
        <>
          <span aria-hidden className="mx-1 h-6 w-px bg-white/15" />
          <span className="min-w-0 flex-1 truncate text-sm font-medium">{title}</span>
          {count && (
            <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 text-sm text-white/70 tabular-nums">
              {count}
            </span>
          )}
        </>
      )}
      <a href={href} target="_blank" rel="noopener" aria-label="Open on its own" title="Open on its own" className={button}>
        <ExternalLinkIcon className="size-[18px]" strokeWidth={1.5} />
      </a>
    </div>
  );
}
