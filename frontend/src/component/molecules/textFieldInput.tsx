import * as React from 'react';

import { UseFormRegisterReturn } from 'react-hook-form';
import styled, { css } from 'styled-components';

import Input from '@/component/atoms/input';

export const TextFieldProps = {
    type: ['text', 'number', 'password'] as const,
    color: ['default', 'error'] as const,
};

interface Iprops {
    type: (typeof TextFieldProps.type)[number];
    readOnly?: boolean;
    placeholder?: string;
    value?: number | string;
    maxLength?: number;
    onClick?: () => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;

    register?: UseFormRegisterReturn; // 유효성
}

const TextFieldInput = (props: Iprops) => {
    return (
        <Wrapper
            type={props.type}
            width="100%"
            height="100%"
            color="none"
            readOnly={props.readOnly}
            placeholder={props.placeholder}
            value={props.value}
            maxLength={props.maxLength}
            pointer={!!props.onClick}
            onChange={props.onChange}
            onKeyUp={props.onKeyUp}
            {...props.register}
        />
    );
};

const Wrapper = styled(Input)<Iprops & { pointer: boolean }>`
    ${(props) => {
        switch (props.type) {
            case 'number':
                return css`
                    text-align: right;
                `;

            case 'text':
                return css`
                    text-align: left;
                `;
        }
    }}

    ${(props) => {
        if (props.pointer) {
            return css`
                cursor: pointer !important;
            `;
        }
    }}
`;
