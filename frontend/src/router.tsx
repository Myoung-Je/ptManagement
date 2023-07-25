import * as React from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

import { reactLazy } from '@/utils/lazy/reactLazy';

const Router = (props: { open: boolean }) => {
    return (
        <React.Suspense>
            <Routes>
                <Route index element={<Navigate to="/home" />} />
            </Routes>
        </React.Suspense>
    );
};
