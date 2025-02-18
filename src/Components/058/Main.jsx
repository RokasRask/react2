import Shop from './Shop';
import Contacts from './Contacts';
import About from './About';
import Home from './Home';
import { useContext } from 'react';
import RouterContext from './Router';
import Product from './Product';

export default function Main() {

    const { page, parameters, setShowComponent } = useContext(RouterContext);

    const routes = {
        shop: {c: <Shop />, title: 'Shop', params: 0},
        contacts: {c: <Contacts />, title: 'Contacts', params: 1, validParams: 
            [
                'kaunas', 'vilnius'
            ]},
        about: {c: <About />, title: 'About', params: 0},
        product: {c: <Product />, title: 'Product', params: 2},
        '': {c: <Home />, title: 'Home', params: 0},
    };

    const route = _ => {
        if (routes[page] === undefined) {
            setShowComponent('error404');
            return null;
        }
        if (parameters.length !== routes[page].params) {
            setShowComponent('error404');
            return null;
        }
        if (routes[page].validParams !== undefined) {
            for (let i = 0; i < routes[page].params; i++) {
                if (!routes[page].validParams[i].includes(parameters[i])) {
                    setShowComponent('error404');
                    return null;
                }
            }
        }
        return routes[page].c;
    };

    return (
        <main>
            {route()}
        </main>
    )
}