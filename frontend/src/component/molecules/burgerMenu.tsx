import * as React from 'react';
import styled, { css } from 'styled-components';

interface BugerMenuProps {
    isOpen: boolean;
    onClick: () => void;
}

const BurgerMenu = (props: BugerMenuProps) => {
    return (
        <Wrapper onClick={props.onClick}>
            <div className={props.isOpen ? 'burger-menu-icon open' : 'burger-menu-icon'}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </Wrapper>
    );
};

export default BurgerMenu;

const Wrapper = styled.div`
    width: 30px;
    height: 20px;
    position: relative;
    display: inline-block;
`;

const Bar = styled.div`
    width: 100%;
    height: 3px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
`;
