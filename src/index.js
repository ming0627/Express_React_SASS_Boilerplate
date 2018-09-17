import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.scss';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

const Apps = () => (
        <Router>
         <App />
        </Router>
      );

render(<Apps />, document.getElementById('root'));
registerServiceWorker();
