import * as React from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

import { reactLazy } from '@/utils/lazy/reactLazy';

const Home = reactLazy(() => import(/* webpackChunkName: 'home' */ '@/pages/home'));

const Router = (props: { isOpen: boolean }) => {
    return (
        <React.Suspense fallback={<div>loading...</div>}>
            <Routes>
                {props.isOpen && <Route index element={<Navigate to="/home" />} />}
                {ManageRouter()}
            </Routes>
        </React.Suspense>
    );
};

export default Router;

const ManageRouter = () => {
    return (
        <Route>
            <Route path="/home" element={<Home />} />
        </Route>
    );
};
