import React from 'react';
import { Layout, Row, Col, Breadcrumb, Tooltip, Icon, Dropdown, Menu,Modal } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { getRouteMap } from '../../services'
import { AccountContext } from '../../context/accountContext';
import {storage} from '../../services';
import history from '../../services/history';

const { Header } = Layout;
const confirm = Modal.confirm;

interface Props {
}

class AppHeader extends React.Component<Props & RouteComponentProps<any>, any> {
    getRouteName() {
        const routeName = getRouteMap(window.location.pathname.slice(1)) || [{ name: '管理后台', href: '' }]
        let len = routeName.length - 1
        document.title = routeName[len].name
        return routeName
    }

    back(url: string) {
        if (url) {
            this.props.history.push(url)
        }
    }

    logout(){
        confirm({
          title: '确认退出吗？',
          okText:'确定',
          cancelText:'取消',
          onOk() {
            storage.removeItem('pgy_admin_token')
            history.push('/login')
          }
        })
      }

    render() {
        return (<AccountContext.Consumer>
            {(value: any) => (
                <Header className='g-bg-white' style={{ display: 'block' }}>
                    <Row type='flex' style={{ alignItems: 'center' }}>
                        <Col span={8} style={{ textAlign: 'left' }}>
                            <Breadcrumb>
                                {this.getRouteName().map((item: any, index: number) => {
                                    return <Breadcrumb.Item key={index}><span onClick={e => this.back(item.href)} className='before-bar' style={{cursor:'pointer'}} >{item.name}</span></Breadcrumb.Item>
                                })}
                            </Breadcrumb>
                        </Col>
                        <Col span={8} offset={8} className='g-flex' style={{ display: 'flex', justifyContent: 'flex-end', textAlign: 'right' }}>
                            <div style={{ paddingTop: '2px' }}>
                                <Tooltip placement="bottom" title='通知中心'>
                                    <Icon type="bell" onClick={() => this.props.history.push(`/notify_list`)} style={{ marginRight: '23px', fontSize: '21px', cursor: 'pointer', color: true ? '#1990ff' : '' }} />
                                </Tooltip>
                            </div>
                            <Dropdown overlay={(
                                <Menu>
                                    <Menu.Item key="1" onClick={() => this.props.history.push(`/account`)}>账号信息</Menu.Item>
                                    <Menu.Item key="3" onClick={() => {this.logout() }}>退出登录</Menu.Item>
                                </Menu>
                            )}>
                                <span>{value.account.nickname}<Icon type="down" style={{ marginLeft: '6px' }} /></span>
                            </Dropdown>
                        </Col>
                    </Row>

                </Header>)}
        </AccountContext.Consumer>)
    }
}

export default withRouter(AppHeader)
