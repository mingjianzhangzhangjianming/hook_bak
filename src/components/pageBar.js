import React,{ useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Menu, Dropdown,  Modal } from 'antd'
import '@/common/less/pageBar.less'
import { UserOutlined } from '@ant-design/icons'

const LoginOut = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal visible={isModalVisible} okText="确认" cancelText="取消" onOk={handleOk} onCancel={handleCancel}>
            确认要退出登录吗?
    </Modal>
  );
};

const PageBar = (props) => {
    let history = useHistory()
    const { children } = props
    const hanleSelectMenu = ({key}) => {
        if(key==="changePassword") {
          // console.log("修改密码")
        } else if(key==="loginOut") {
          localStorage.clear()
          history.push("/login")
        }
    }

    return (
        <div className="page-content">
            <div className="header-content">
                <header className="user-exit">
                    <div style={{flex: "1 1 0%"}}></div>
                    <div className="right-exit">
                        <Dropdown overlay={
                          <Menu >
                            <Menu.Item key="changePassword" onClick={hanleSelectMenu}>修改密码</Menu.Item>
                            <Menu.Item key="loginOut" onClick={hanleSelectMenu}>退出登录</Menu.Item>
                          </Menu>
                        }>
                            <a className="ant-dropdown-link" href="#" onClick={e => e.preventDefault()}>
                                <UserOutlined />
                                zhangjianming@intellicredit.cn
                            </a>
                        </Dropdown>
                    </div>
                </header>
            </div>
            <div className="page-block">
                {children}
                <LoginOut />
            </div>
            <footer>
                <h5>Copyright  2020 中智诚征信技术部出品</h5>
            </footer>
        </div>
    )
}

export default PageBar
