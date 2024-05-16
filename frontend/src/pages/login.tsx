import * as React from 'react';
import { _axios } from '@/axios/axios';

import Input from '@/component/atoms/input';
import Button from '@/component/atoms/button';

import styled from 'styled-components';

const Login = () => {
    return (
        <Wrapper>
            <LoginBox.Container>
                <LoginBox.Logo>Logo</LoginBox.Logo>
                <LoginBox.Form>
                    <TextInput type="text" placeholder="ID"></TextInput>
                    <TextInput type="text" placeholder="PW"></TextInput>
                    <Button width={300} height={38}></Button>
                </LoginBox.Form>
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

    Form: styled.div`
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    `,
};

const TextInput = styled(Input)`
    width: 300px;
    height: 38px;

    border: 1px solid #d5d5d5;
    text-indent: 10px;
    &::placeholder {
        color: #d8d8d8;
    }
`;
