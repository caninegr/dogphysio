// src/hooks/useAos.js
import { useEffect } from "react";

export default function useAos(options = {}) {
  useEffect(() => {
    let cancelled = false;
    let AOSRef = null;

    (async () => {
      // Load JS + CSS only when a component calls this hook
      const [{ default: AOS }] = await Promise.all([
        import("aos"),
        import("aos/dist/aos.css"),
      ]);

      if (cancelled) return;

      AOSRef = AOS;

      AOS.init({
        duration: 1200,
        once: true, // helps avoid extra work + unexpected shifts
        ...options,
      });

      // In case elements render after init (lazy routes), refresh once
      setTimeout(() => {
        if (!cancelled) AOS.refresh();
      }, 0);
    })();

    return () => {
      cancelled = true;
      // No hard cleanup needed; AOS doesn't expose a true destroy in v2
      // But we avoid running init/refresh after unmount.
      AOSRef = null;
    };
  }, [options]);
}
