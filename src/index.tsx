/* @refresh reload */
import { render } from 'solid-js/web';

import './styles/bulma.scss';
import './styles/spinner.scss';

import App from './App';
import { Router } from '@solidjs/router';

render(() => (
  <Router>
    <App />
  </Router>
), document.getElementById('root') as HTMLElement);
