import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './common/globalStyles/GlobalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </Router>
    </React.StrictMode>,
);
