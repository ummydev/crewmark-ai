import * as React from "react";

/**
 * Keeps a chat scrolled to its newest item while the person is there: as items arrive and as they lay out (pictures,
 * markdown). Put scrollerRef on the scrolling box and contentRef on what's inside it; set atBottomRef to true to
 * follow again, e.g. after sending.
 */
export function useFollowBottom() {
  const scroller = React.useRef<HTMLDivElement>(null);
  const content = React.useRef<HTMLDivElement>(null);
  const atBottom = React.useRef(true);
  React.useEffect(() => {
    const view = scroller.current;
    const inner = content.current;
    if (!view || !inner) return;
    const onScroll = () => {
      atBottom.current = view.scrollHeight - view.scrollTop - view.clientHeight < 48;
    };
    const follow = new ResizeObserver(() => {
      if (atBottom.current) view.scrollTop = view.scrollHeight;
    });
    view.addEventListener("scroll", onScroll, { passive: true });
    follow.observe(inner);
    return () => {
      view.removeEventListener("scroll", onScroll);
      follow.disconnect();
    };
  }, []);
  return { scrollerRef: scroller, contentRef: content, atBottomRef: atBottom };
}
