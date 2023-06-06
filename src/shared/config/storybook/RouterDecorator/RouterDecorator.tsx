import 'app/styles/index.scss';
import { Decorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

export const RouterDecorator:Decorator = (Story) => (
    <BrowserRouter>
        <Suspense fallback=""><Story /></Suspense>
    </BrowserRouter>
);
