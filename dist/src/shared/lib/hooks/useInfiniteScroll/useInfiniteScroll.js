import { useEffect } from 'react';
export function useInfiniteScroll(_a) {
    var callback = _a.callback, wrapperRef = _a.wrapperRef, triggerRef = _a.triggerRef;
    useEffect(function () {
        var observer = null;
        var wrapperElement = wrapperRef.current; // где находится скролл
        var triggerElement = triggerRef.current;
        if (callback) {
            var options = {
                root: wrapperElement,
                rootMargin: '1px',
                threshold: 1.0,
            };
            observer = new IntersectionObserver(function (_a) {
                var entry = _a[0];
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
            observer.observe(triggerElement); // зачем следим
        }
        return function () {
            if (observer && triggerElement) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
