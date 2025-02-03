import { createContext } from 'react';
 
const RouterContext = createContext();
 
 
 
export const Router = ({ children }) => {
 
    return (
        <RouterContext.Provider value={{}}>
            {children}
        </RouterContext.Provider>
    );
}

export default RouterContext;