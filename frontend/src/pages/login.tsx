import * as React from 'react';
import { _axios } from '@/axios/axios';

import styled from 'styled-components';

const Login = () => {
    return (
        <Wrapper>
            <LoginBox.Container>
                <LoginBox.Logo>Logo</LoginBox.Logo>
                <LoginBox.Form></LoginBox.Form>
            </LoginBox.Container>
        </Wrapper>
    );
};

export default Login;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginBox = {
    Container: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;

        border: 1px solid #000;
        width: 650px;
        height: 400px;

        margin-top: 13%;
    `,
    Logo: styled.div`
        font-size: 32px;
        color: #4682b4;
    `,

    Form: styled.div``,
};
