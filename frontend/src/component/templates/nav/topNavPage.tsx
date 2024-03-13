import * as React from 'react';

import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import TopNav from '@/component/organisms/nav/topNav';

const TopNavPage = () => {
    return (
        <Wrapper>
            <TopNav />

            <Page>
                <Outlet />
            </Page>
        </Wrapper>
    );
};

export default TopNavPage;

const Wrapper = styled.div``;

const Page = styled.div``;
