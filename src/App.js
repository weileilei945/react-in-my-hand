/**
 * @file App 主页面
 * @author weileilei
 */

import logo from './logo.svg';
import './App.css';

function App() { // eslint-disable-line
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    let's create a new web by react.
                </p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App; // eslint-disable-line
