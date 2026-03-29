import { useState, useRef, useEffect, useCallback } from 'react';

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  onIntersect?: (entry: IntersectionObserverEntry) => void;
  enabled?: boolean;
}

export function useIntersectionObserver({
  root = null,
  rootMargin = '0px',
  threshold = 0,
  onIntersect,
  enabled = true,
}: UseIntersectionObserverOptions = {}) {
  
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const onIntersectRef = useRef(onIntersect);

  useEffect(() => {
    onIntersectRef.current = onIntersect;
  }, [onIntersect]);

  const ref = useCallback(
    (node: Element | null) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      if (!enabled || !node) {
        setEntry(null);
        return;
      }

      if (typeof IntersectionObserver === 'undefined') {
        console.warn('IntersectionObserver not supported.');
        return;
      }

      observerRef.current = new IntersectionObserver(
        ([observedEntry]) => {
          setEntry(observedEntry);
          if (observedEntry.isIntersecting) {
            onIntersectRef.current?.(observedEntry);
          }
        },
        { root, rootMargin, threshold }
      );

      observerRef.current.observe(node);
    },
    [enabled, root, rootMargin, threshold]
  );

  useEffect(() => {
    return () => observerRef.current?.disconnect();
  }, []);

  return {
    ref,
    entry,
    isIntersecting: !!entry?.isIntersecting
  };
}