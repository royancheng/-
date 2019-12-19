import React from 'react';
import { Layout } from 'antd';
import { Route, Redirect, Switch } from 'react-router-dom';


const { Content } = Layout;

export default class AppContent extends React.Component {
    render() {
        return (<Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className='g-content' style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                <Switch>
                    <Route path="/404" render={() => <span>404</span>} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        </Content>)
    }
}