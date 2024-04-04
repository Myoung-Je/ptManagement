import * as React from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

import { reactLazy } from '@/utils/lazy/reactLazy';
import TopNavPage from '@/component/templates/nav/topNavPage';

const Home = reactLazy(() => import(/* webpackChunkName: 'home' */ '@/pages/home'));
const Login = reactLazy(() => import(/* webpackChunkName: 'login' */ '@/pages/login'));

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
        <Route element={<TopNavPage />}>
            <Route path="/home" element={<Home />} />
        </Route>
    );
};
