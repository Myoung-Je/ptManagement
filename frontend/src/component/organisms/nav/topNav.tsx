import * as React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from '@/component/atoms/icon';
import Text from '@/component/atoms/text';

import jsonData from './TopNav.json';

const TopNav = () => {
    // 메뉴
    const [menuList] = React.useState(jsonData.data.Menu);

    return (
        <Wrapper>
            <Container>
                <Title>
                    <Link to="home">
                        {/* <Icon>Icon</Icon> */}
                        Icon
                    </Link>
                </Title>
                <Menu.Container>
                    <Menu.List>
                        {menuList.map((menu: any) => (
                            <Menu.ListItem key={menu.menuNm}>
                                <Menu.Text color="white">{menu.menuNm}</Menu.Text>

                                <Menu.SubList>
                                    {menu.subMenu.map((subMenu: any) => (
                                        <Menu.SubListItem key={subMenu.menuNm}>
                                            <Link to={subMenu.pathId}>
                                                <Menu.LinkText width="100%" height="100%" color="white">
                                                    {subMenu.menuNm}
                                                </Menu.LinkText>
                                            </Link>
                                        </Menu.SubListItem>
                                    ))}
                                </Menu.SubList>
                            </Menu.ListItem>
                        ))}
                    </Menu.List>
                </Menu.Container>
            </Container>
            <Login>login</Login>
        </Wrapper>
    );
};

export default TopNav;

const Wrapper = styled.div`
    background-color: #4682b4;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 80px;

    max-width: 1140px;

    padding: 0 40px;
    margin: 0 auto;
    height: 60px;
`;

const Title = styled.div``;

const Login = styled.div`
    float: right;
    margin-top: -40px;
    margin-right: 20px;
`;

const Menu = {
    Container: styled.div`
        height: 100%;
    `,

    List: styled.div`
        display: table;
        table-layout: fixed;
        text-align: center;

        height: 100%;
    `,

    ListItem: styled.li`
        display: table-cell;
        vertical-align: middle;

        position: relative;

        width: 186px;

        padding: 0 24px;

        &:hover {
            & > span {
                &::after {
                    background-image: url('@/assets/images/icon/arrow_up.png');
                }
            }

            & > ul {
                display: block !important;
            }
        }

        color: #232323;

        &:hover {
            color: #000;

            & > span {
                color: #000080;
            }
        }
    `,
    Text: styled(Text)`
        position: relative;

        &::after {
            content: '';

            position: absolute;
            right: -24px;

            width: 16px;
            height: 16px;

            background-image: url('@/assets/images/icon/arrow_down.png');
        }
    `,

    SubList: styled.ul`
        display: none;

        position: absolute;
        left: -1px;
        top: 60px;

        z-index: 1000;

        width: 100%;

        background-color: #4682b4;
    `,

    SubListItem: styled.li`
        height: 42px;

        color: #232323;

        &:hover {
            background-color: #346d9d;

            & > a > span {
                color: #fff;
            }
        }
    `,

    LinkText: styled(Text)`
        display: flex;
        justify-content: center;
        align-items: center;
    `,
};
