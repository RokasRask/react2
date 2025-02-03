import { createContext, useEffect, useState } from 'react';

const RouterContext = createContext();



export const Router = ({ children }) => {

    const [page, setPage] = useState(window.location.hash.replace('#', ''));
    const [parameters, setParameters] = useState(_ => {
        let hash = window.location.hash.replace('#', '');
        hash = hash.split('/').shift();
        return hash;
    })

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

        console.log('hash', page);

    }, [hash])

    return (
        <RouterContext.Provider value={{page}}>
            {children}
        </RouterContext.Provider>
    );
}

export default RouterContext;