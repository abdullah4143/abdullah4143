"use client";
import { useEffect } from "react";

export default function DisableDevTools() {
  useEffect(() => {
    // Block right-click context menu
    const blockContext = (e: MouseEvent) => e.preventDefault();

    // Block common DevTools keyboard shortcuts
    const blockKeys = (e: KeyboardEvent) => {
      const ctrl = e.ctrlKey || e.metaKey;
      if (
        e.key === "F12" ||
        (ctrl && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) ||
        (ctrl && e.key.toUpperCase() === "U")
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // Block text selection (optional hardening)
    const blockSelect = (e: Event) => e.preventDefault();

    document.addEventListener("contextmenu", blockContext);
    document.addEventListener("keydown", blockKeys);
    document.addEventListener("selectstart", blockSelect);

    return () => {
      document.removeEventListener("contextmenu", blockContext);
      document.removeEventListener("keydown", blockKeys);
      document.removeEventListener("selectstart", blockSelect);
    };
  }, []);

  return null;
}
