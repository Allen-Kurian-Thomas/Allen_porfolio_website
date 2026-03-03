import { useEffect, useRef } from "react";

/**
 * CustomCursor — event delegation approach with proper hover tracking
 */
export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Track state to prevent redundant class toggles
    let isCursorInited = false;
    let isOverInteractable = false;

    // ── visibility ───────────────────────────────────────────────────────────
    const initCursor = () => {
      if (isCursorInited) return;
      cursor.classList.add("custom-cursor--init");
      isCursorInited = true;
    };

    const destroyCursor = () => {
      cursor.classList.remove("custom-cursor--init");
      isCursorInited = false;
    };

    // ── movement ─────────────────────────────────────────────────────────────
    const onMove = (e: MouseEvent) => {
      if (!isCursorInited) initCursor();
      cursor.style.setProperty("translate", `${e.clientX}px ${e.clientY}px`);

      // Re-check on every move to handle dynamic DOM changes
      const target = document.elementFromPoint(
        e.clientX,
        e.clientY,
      ) as HTMLElement | null;
      const shouldBeActive = !!target?.closest(
        "a, button, [data-cursor-hover]",
      );

      if (shouldBeActive && !isOverInteractable) {
        cursor.classList.add("custom-cursor--link");
        isOverInteractable = true;
      } else if (!shouldBeActive && isOverInteractable) {
        cursor.classList.remove("custom-cursor--link");
        isOverInteractable = false;
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", destroyCursor);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", destroyCursor);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}
