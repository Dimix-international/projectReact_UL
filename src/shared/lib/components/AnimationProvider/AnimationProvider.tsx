import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

type SpringType = typeof import('@react-spring/web'); // выводим типы библиотек
type GestureType = typeof import('@use-gesture/react');

// типы контекста
interface AnimationContextPayload {
    Gesture?: GestureType;
    Spring?: SpringType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({});

// Обе либы зависят друг от друга - подгружаем библиотеки асинхронно
// можно так же подтягивать стили, файлы json, модули, пакеты
const getAsyncAnimationModules = async () => {
    return Promise.all([
        import('@react-spring/web'), // асинхронный импорт
        import('@use-gesture/react'),
    ]);
};

// хук который будет возвращать данные из контекста
export const useAnimationLibs = () => {
    return useContext(AnimationContext) as Required<AnimationContextPayload>;
};

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
    const SpringRef = useRef<SpringType>(); // храним библиотеки
    const GestureRef = useRef<GestureType>(); // храним библиотеки
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getAsyncAnimationModules().then(([Spring, Gesture]) => {
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsLoaded(true);
        });
    }, []);

    const value = useMemo(
        () => ({
            Gesture: GestureRef.current,
            Spring: SpringRef.current,
            isLoaded,
        }),
        [isLoaded],
    );

    return (
        <AnimationContext.Provider value={value}>
            {children}
        </AnimationContext.Provider>
    );
};
