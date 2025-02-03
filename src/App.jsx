import './buttons.scss';
import './app.css';
import { Router } from './Components/058/Router';
import Main from './Components/058/Main';

function App() {

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
                    <Main />



                </header>
            </div>
        </Router>
    );
}

export default App;