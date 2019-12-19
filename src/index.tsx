
import { hot } from 'react-hot-loader';
import React from 'react';
import history from './services/history';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import ZhCN from 'antd/lib/locale-provider/zh_CN';
import { Router, Route, Switch } from 'react-router-dom';
import './index.css';

import App from './App';

import * as serviceWorker from './serviceWorker';
import { configAxios } from './services';

configAxios();

const defaultApp = () => (<Switch>
  
  <Route path="/" component={App} />
</Switch>)

const RouteApp = process.env.REACT_APP_ENV === 'development' ? hot(module)(defaultApp) : defaultApp;


ReactDOM.render(<Router history={history}>
  <ConfigProvider locale={ZhCN}>
    <RouteApp />
  </ConfigProvider>
</Router>, document.getElementById('root'));

serviceWorker.unregister();
