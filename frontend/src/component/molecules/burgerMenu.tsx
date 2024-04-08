import * as React from 'react';

interface BugerMenuProps {
    isOpen: boolean;
    onClick: () => void;
}

const BurgerMenu = (props: BugerMenuProps) => {
    return (
        <div className="burger-menu" onClick={props.onClick}>
            <div className={props.isOpen ? 'burger-menu-icon open' : 'burger-menu-icon'}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </div>
    );
};

export default BurgerMenu;
