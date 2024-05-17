import * as React from 'react';

import styled, { css } from 'styled-components';

import Input from '@/component/atoms/input';

interface IInput {
    value?: number | string;
    name?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Iprops extends IInput {}

const Checkbox = (props: Iprops) => {
    return (
        <RadioInput
            type="checkbox"
            value={props.value}
            name={props.name}
            checked={props.checked}
            onChange={props.onChange}
            disabled={props.disabled}
        />
    );
};

const RadioInput = styled(Input)<IInput>``;
