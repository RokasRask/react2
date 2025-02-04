import { createContext, useEffect, useState } from 'react';
import Wrapper from './Wrapper';

const RouterContext = createContext();



export const Router = ({ children }) => {

    const [page, setPage] = useState(_ => {
        let hash = window.location.hash.replace('#', '');
        hash = hash.split('/').shift();
        return hash;
    })
    const [parameters, setParameters] = useState(_ => {
        let hash = window.location.hash.replace('#', '');
        hash = hash.split('/');
        hash.shift();
        return hash;
    })

    const [showComponent, setShowComponent] = useState(null);

    useEffect(_ => {

        // hash change event JS
        window.addEventListener('hashchange', _ => {
            let hash = window.location.hash.replace('#', '');
            hash = hash.split('/');
            setPage(hash.shift());
            setParameters(hash);
        });

    }, [])

    useEffect(_ => {

        console.log('page', page);

    }, [page])

    useEffect(_ => {

        console.log('parameters', parameters);

    }, [parameters])

    return (
        <RouterContext.Provider value={{
            page,
            parameters
            }}>
            {children}
            {showComponent === null ? children : <Wrapper><h1>Kažkas ne taip</h1></Wrapper>}
        </RouterContext.Provider>
    );
}

export default RouterContext;