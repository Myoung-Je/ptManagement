import styled, { css } from 'styled-components';

export interface Iprops {
    width?: number | string;
    height?: number | string;
}

const Button = styled.button<Iprops>`
    border: none;
    outline: none;
    padding: 0 12px;

    ${(props) => {
        switch (typeof props.width) {
            case 'number':
                return css`
                    width: ${props.width}px;
                `;

            case 'string':
                return css`
                    width: ${props.width};
                `;
        }
    }}

    ${(props) => {
        switch (typeof props.height) {
            case 'number':
                return css`
                    height: ${props.height}px;
                `;

            case 'string':
                return css`
                    height: ${props.height};
                `;
        }
    }}
`;
