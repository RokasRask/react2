
import './app.css';
import './buttons.scss';


import { Router } from './Components/059/Router';
import Main from './Components/059/Main';
import Nav from './Components/059/Nav';
import Wrapper from './Components/059/Wrapper';



function App() {

    return (
        <Router>
            <Wrapper>

                <Nav />
                <Main />

            </Wrapper>
        </Router>
    );
}

export default App;