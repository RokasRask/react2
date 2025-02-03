import './buttons.scss';
import './app.css';
import { useEffect, useState } from 'react';

import Home from './Components/058/Home';
import Shop from './Components/058/Shop';
import Contacts from './Components/058/Contacts';
import About from './Components/058/About';
import { Router } from './Components/058/Router';

function App() {

    const [hash, setHash] = useState(window.location.hash.replace('#', ''));

    useEffect(_ => {

        // hash change event JS
        window.addEventListener('hashchange', _ => {
            let hash = window.location.hash.replace('#', '');
            setHash(hash);
        });

    }, [])

    useEffect(_ => {

        console.log('hash', hash);

    }, [hash])

    return (
        <Router>
            <div className="app">
                <header className="app-header">

                    <nav className="top-menu">
                        <ul>
                            <li><a href="/#">Home</a></li>
                            <li><a href="/#shop">Shop</a></li>
                            <li><a href="/#contacts">Contacts</a></li>
                            <li><a href="/#about">About</a></li>
                        </ul>
                    </nav>
                    {hash === 'shop' && <Shop />}
                    {hash === 'contacts' && <Contacts />}
                    {hash === 'about' && <About />}
                    {hash === '' && <Home />}

                </header>
            </div>
        </Router>
    );
}

export default App;