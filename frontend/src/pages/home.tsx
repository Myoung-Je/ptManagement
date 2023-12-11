import { _axios } from '@/axios/axios';
import * as React from 'react';

import styled from 'styled-components';

const Home = () => {
    const axios = _axios();

    React.useEffect(() => {
        test();
    }, []);

    const test = async () => {
        const res = await axios.post('/api/test');

        if (res.data) {
            console.log(res.data);
        }
    };
    return (
        <Wrapper>
            <div>asd</div>
        </Wrapper>
    );
};

export default Home;

const Wrapper = styled.div`
    height: calc(100vh - 60px);
    display: grid;
    grid-template-rows: 4.2fr 5.8fr;
`;
