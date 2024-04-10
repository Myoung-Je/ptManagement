import * as React from 'react';
import { _axios } from '@/axios/axios';

import styled from 'styled-components';

import Text from '@/component/atoms/text';

const Login = () => {
    return (
        <Wrapper>
            <LoginBox.Container>
                <LoginBox.Logo>
                    <Text></Text>
                </LoginBox.Logo>
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
        justify-content: center;

        border: 1px solid #000;
        width: 650px;
        height: 400px;

        margin-top: 13%;
    `,
    Logo: styled.div`
        border: 1px solid #000;
    `,
};
