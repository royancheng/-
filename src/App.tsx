import React from 'react';
import axios from 'axios';
import { Layout, Icon, Modal, Button } from 'antd';
import './App.css';

import AppSidebar from './layout/appSidebar';
import AppHeader from './layout/appHeader';
import AppContent from './layout/appContent';

import { AccountContext } from './context/accountContext'

const { Footer } = Layout;

interface State {
  isSideCollapsed: boolean;
  account: any;
  initialized: boolean;
  serviceModal: boolean;
}

export default class App extends React.Component<any, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      isSideCollapsed: false,
      account: {
        
      },
      initialized: true,
      serviceModal: false
    };
    this.getAccountInfo = this.getAccountInfo.bind(this);
  }

  componentDidMount() {
    this.getAccountInfo();
  }

  getAccountInfo() {

  }

  getLayoutMarginLeft() {
    if (this.state.isSideCollapsed) {
      return '80px'
    }
    return '200px'
  }

  showServiceModal() {
    this.setState({
      serviceModal: true,
    })
  }

  hideModal() {
    this.setState({
      serviceModal: false,
    })
  }

  render() {
    const { initialized, account, serviceModal } = this.state;
    return (
      <div className="App">
        <Layout style={{ height: '100%', minHeight: '100vh' }}>
          <AppSidebar ctx={this} isShow={true} showService={() => this.showServiceModal()} />
          {initialized && <AccountContext.Provider value={{ account: account }}>
            <Layout style={{ marginLeft: this.getLayoutMarginLeft() }}>
              <AppHeader />
              <AppContent />
              <Footer style={{ textAlign: 'center' }}>
                <Icon type="copyright" style={{ marginRight: '5px' }} />
                2019
              </Footer>
            </Layout>
          </AccountContext.Provider>}
        </Layout>
      </div>
    );
  }

}
