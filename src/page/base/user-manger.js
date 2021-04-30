import React,{ Component } from 'react'
import { Button, Input, Switch, Table } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import '@/common/less/content.less'
import NewUserPopup from './new-user'

const columns = [
    {
      align: 'center',
      title: 'ID',
      dataIndex: 'id',
    },
    {  
      align: 'center',
      title: '姓名',
      dataIndex: 'userName',
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      align: 'center',
      title: '联系邮箱',
      dataIndex: 'email',
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      align: 'center',
      title: '岗位类型',
      dataIndex: 'postType',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
        align: 'center',
        title: '创建时间',
        dataIndex: 'createTime',
        ellipsis: true,
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
      },
      {
        align: 'center',
        title: '状态',
        dataIndex: 'store',
        render: (text,record) => (<Switch defaultChecked={text} />)
      },
  ]

const dataSource = [
    {
        key: '1',
        id: 1,
        userName: 'zhangjianming',
        email: 'admin@intellicredit.cn',
        postType: '保安',
        createTime: '2014-12-24  23:12:00',
        store: true
    },
    {
        key: '2',
        id: 2,
        userName: 'zhangjianming',
        email: 'admin@intellicredit.cn',
        postType: '保安',
        createTime: '2014-12-24  23:12:00',
        store: true
    },
    {
        key: '3',
        id: 3,
        userName: 'zhangjianming',
        email: 'admin@intellicredit.cn',
        postType: '保安',
        createTime: '2014-12-24  23:12:00',
        store: true
    },
    {
        key: '4',
        id: 4,
        userName: 'zhangjianming',
        email: 'admin@intellicredit.cn',
        postType: '保安',
        createTime: '2014-12-24  23:12:00',
        store: true
    },
    {
        key: '5',
        id: 5,
        userName: 'zhangjianming',
        email: 'admin@intellicredit.cn',
        postType: '保安',
        createTime: '2014-12-24  23:12:00',
        store: true
    },
    {
      key: '6',
      id: 6,
      userName: 'zhangjianming',
      email: 'admin@intellicredit.cn',
      postType: '保安',
      createTime: '2014-12-24  23:12:00',
      store: true
  },
  {
      key: '7',
      id: 7,
      userName: 'zhangjianming',
      email: 'admin@intellicredit.cn',
      postType: '保安',
      createTime: '2014-12-24  23:12:00',
      store: true
  },
  {
      key: '8',
      id: 8,
      userName: 'zhangjianming',
      email: 'admin@intellicredit.cn',
      postType: '保安',
      createTime: '2014-12-24  23:12:00',
      store: true
  },
  {
      key: '9',
      id: 9,
      userName: 'zhangjianming',
      email: 'admin@intellicredit.cn',
      postType: '保安',
      createTime: '2014-12-24  23:12:00',
      store: true
  },
  {
      key: '10',
      id: 10,
      userName: 'zhangjianming',
      email: 'admin@intellicredit.cn',
      postType: '保安',
      createTime: '2014-12-24  23:12:00',
      store: true
  },
    
]


export default class Usermanger extends Component {
    constructor(props) {
      super(props)
        this.state = {
          UserPopupType: null, // null, 'createUser', 'editUser'
          openUserPopup: false,
          isloading: false
        }
    }

    editUserDetail(record,ev) {
        this.setState({
          isloading: true
        })
        this.timer = setTimeout(() =>{
          this.setState((oldState) =>{
            clearTimeout(this.timer)
            return this.setState({
              isloading:false,
              openUserPopup: true
            })
          })
        },400)
    }

    createUser(type) {
      this.setState({
        isloading: true
      })
      this.timer = setTimeout(() =>{
        this.setState((oldState) =>{
          clearTimeout(this.timer)
          return this.setState({
            isloading:false,
            ...type
          })
        })
      },400)
    }

    render() {
      const { openUserPopup, isloading, UserPopupType } = this.state
        return (
            <div className="tenant-detail-box">
               <div className="table-menu">
                    <span className="table-menu-serch">
                        <Input.Search className="serch-input" allowClear placeholder="请输入查询项目" />
                        <Button className="submitBtn" type="primary">查询</Button>
                        <Button className="submitBtn">重置</Button>
                    </span>
                    
                    <Button 
                        className="submitBtn" 
                        icon={<PlusOutlined />} 
                        type="primary"
                        onClick={() => this.createUser({openUserPopup: true})}>新建用户</Button>
                </div>
                <div className="table-box">
                    <Table 
                        onRow={record =>{
                            return {
                              onDoubleClick: event =>{
                                    this.editUserDetail(record,event)
                                }
                            }
                        }}
                        columns={columns} 
                        dataSource={dataSource} 
                        scroll={{y:500}} 
                        size={'small'}
                        loading={isloading}
                    />
                </div>
                {
                  openUserPopup && <NewUserPopup 
                                      Type={UserPopupType}
                                      createUser={this.createUser.bind(this)}
                                    />
                }
            </div>
        )
    }
}
