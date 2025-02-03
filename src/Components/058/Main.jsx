import Shop from './Shop';
import Contacts from './Contacts';
import About from './About';
import Home from './Home';
import { useContext } from 'react';
import RouterContext from './Router';
import Page404 from './Page404';

export default function Main() {

    const { page } = useContext(RouterContext);

    const routes = {
        shop: <Shop />,
        contacts: <Contacts />,
        about: <About />,
        '': <Home />
    };

    return (
        <main>
            {routes[hash] ?? <Page404 />}
        </main>
    )
}