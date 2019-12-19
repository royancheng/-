import * as React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router-dom'

export interface Props {
    isShow: any
    ctx: any
    showService(): void
    history: any
}

class AppSidebar extends React.Component<Props & RouteComponentProps<any>, any> {
    constructor(props: Props & RouteComponentProps<any>) {
        super(props)
        this.state = {}
    }

    getSelectedMenu() {
        const pathname = window.location.pathname
        return [pathname.replace('/', '')]
    }

    getMenuData() {
        return [
            { key: 'users', icon: 'wechat', text: '用户管理' },
        ]
    }

    onClickMenu(item: any, key?: any, keyPath?: any) {
        this.props.history.push(`/${key}`)
    }

    newGuide() {
        window.open('https://mp.weixin.qq.com/s/CJ2TR73WK3_lVTHadZNN9A')
    }

    onCollapse(collapsed: any) {
        this.setState({ isSideCollapsed: collapsed })
    }

    render() {
        if (!this.props.isShow) {
            return null
        }
        const ctx = this.props.ctx
        return (
            <Layout.Sider
                collapsible
                style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
                collapsed={ctx.state.isSideCollapsed}
                onCollapse={collapsed => ctx.setState({ isSideCollapsed: collapsed })}
            >
                <div className="logo" style={{ color: '#fff', textAlign: 'center', padding: '15px' }}>
                    <img
                        src="https://img.lycheer.net/picture/pgy/fedffa2cfca391c84697598e57cc65ef.jpg"
                        width='40px'
                        style={{ marginRight: ctx.state.isSideCollapsed ? '0px' : '10px' }}
                        alt="logo"
                    />
                    {!ctx.state.isSideCollapsed && '管理后台'}
                </div>

                <Menu
                    onClick={({ item, key, keyPath }) => { this.onClickMenu(item, key, keyPath) }}
                    theme="dark"
                    mode="inline"
                    selectedKeys={this.getSelectedMenu()}
                    style={{ textAlign: 'left' }}
                >
                    {this.getMenuData().map(item => (
                        <Menu.Item key={item.key}>
                            <Icon type={item.icon} />
                            <span className="nav-text">{item.text}</span>
                        </Menu.Item>
                    ))}
                </Menu>
            </Layout.Sider>
        )
    }
}

export default withRouter(AppSidebar)
