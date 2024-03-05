import * as React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <Wrapper>
            <Container>
                <Title></Title>
            </Container>
        </Wrapper>
    );
};

export default TopNav;

const Wrapper = styled.div``;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 80px;

    padding: 0 40px;
    margin: 0 auto;
    height: 60px;
`;

const Title = styled.div``;

const Menu = {
    Container: styled.div``,

    List: styled.div``,

    ListItem: styled.li``,
};
