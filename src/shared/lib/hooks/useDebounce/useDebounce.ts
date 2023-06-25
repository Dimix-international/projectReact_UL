import { MutableRefObject, useCallback, useRef } from 'react';

/**
 * Хук для задержки вывода данных
 * @param callback
 * @param delay
 */

export function useDebounce(callback: (...args: any[]) => void, delay: number) {
    const timer = useRef() as MutableRefObject<any>; // можно или нет вызывать callback

    return useCallback((...args: any[]) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
}
