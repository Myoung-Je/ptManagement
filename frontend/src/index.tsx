import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from '@/styles/globalStyle';
import App from '@/App';

const container = document.querySelector('#root');
const root = createRoot(container!);

root.render(
    <RecoilRoot>
        <BrowserRouter>
            <GlobalStyle />
            <App />
        </BrowserRouter>
    </RecoilRoot>,
);
