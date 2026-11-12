"use client";

import * as React from "react";

/**
 * The landing page's motion: a border under the nav once the page scrolls, .reveal blocks rising in as they enter
 * the view, and .play blocks running their CSS sequence (replayed every data-loop ms while visible). Nothing is
 * hidden until this runs (the CSS keys off html.js), so the server-rendered page reads complete without script.
 */
export function LandingMotion() {
  React.useEffect(() => {
    const html = document.documentElement;
    html.classList.add("js");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const nav = document.getElementById("nav");
    const onScroll = () => nav?.classList.toggle("scrolled", scrollY > 8);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });

    const loops = new Map<Element, number>();
    function start(el: HTMLElement) {
      el.classList.add("on");
      const every = Number(el.dataset.loop);
      if (!every || reduced) return;
      loops.set(
        el,
        window.setInterval(() => {
          el.classList.remove("on");
          void el.offsetWidth; // restart the CSS animations
          el.classList.add("on");
        }, every),
      );
    }
    function stop(el: HTMLElement) {
      clearInterval(loops.get(el));
      loops.delete(el);
      el.classList.remove("on");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const { target, isIntersecting } of entries) {
          const el = target as HTMLElement;
          if (isIntersecting) {
            el.classList.add("in");
            if (el.classList.contains("play") && !el.classList.contains("on")) start(el);
          } else if (el.classList.contains("play")) {
            stop(el);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    document.querySelectorAll(".reveal, .play").forEach((el) => observer.observe(el));

    return () => {
      removeEventListener("scroll", onScroll);
      observer.disconnect();
      loops.forEach((id) => clearInterval(id));
      html.classList.remove("js");
    };
  }, []);

  return null;
}
