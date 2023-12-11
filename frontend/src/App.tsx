import * as React from 'react';

import Router from '@/router';

const App = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    return (
        <>
            <Router isOpen={isOpen} />
        </>
    );
};
export default App;
