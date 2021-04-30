import React,{ Component } from 'react'
import { Switch, Divider, Affix, Modal, Drawer, Button, Input, InputNumber, Select } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import '@/common/less/popup-test.less'
const { Option } = Select
const filteredOptions = ['姓名','身份证','手机号','贷款类型']
const testServer = ['验证','分层','报告']
const testConfig = [
    {
        title:'黑名单V3.0高阶版',
        testNum: 100,
        ev: 'test',
        list: ['姓名','身份证']
    },
    {
        title:'反欺诈V2.1版',
        testNum: 200,
        ev: 'prod',
        list: ['手机号','贷款类型']
    },
    {
        title:'VC V2.2版',
        testNum: 10,
        ev: 'test',
        list: []
    },
    {
        title:'VC V3.0版',
        testNum: 10,
        ev: 'test',
        list: ['手机号']
    },
    {
        title:'VC V3.1版',
        testNum: 999,
        ev: 'prod',
        list: []
    },
    {
        title:'神月',
        testNum: 10,
        ev: 'prod',
        list: ['身份证','手机号']
    },
    {
        title:'雨点分',
        testNum: 90,
        ev: 'prod',
        list: []
    },
    {
        title:'宙斯盾',
        testNum: 80,
        ev: 'prod',
        list: ['姓名','身份证','手机号'],
        zuse: {
            testServer: ['验证','分层','报告'],//宙斯盾
            serach_val: '0',
            is_back: true,
            filter_text: '0'
        }
    },
    {
        title: '新颜定制V1.3',
        testNum: 80,
        ev: 'prod',
        list: ['姓名','身份证','手机号'],
    },
    {
        title: '新颜定制V2.1',
        testNum: 80,
        ev: 'prod',
        list: ['姓名','身份证','手机号'],
    }
]

export default class Popuptest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedItems: []
        }
        
    }
    handleChange = selectedItems => {
        this.setState({ selectedItems });
    };
    render() {
        const { popupClose, popupVisible } = this.props
        const { selectedItems } = this.state;
        // const optionList = filteredOptions.filter(o => !selectedItems.includes(o));
        return (
            <Drawer
                title={'测试状态: 未解压(zipped)'}
                width={820}
                onClose={popupClose}
                visible={popupVisible}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                    <div
                        style={{
                        textAlign: 'right',
                        }}>
                        <Button onClick={popupClose} style={{ marginRight: 8 }}>
                            取消
                        </Button>
                        <Button onClick={popupClose} type="primary">
                            运行
                        </Button>
                    </div>
                }>
                <Affix offsetTop={80}>
                    <div className="fileDownload">
                        <Button 
                            type="dashed" 
                            icon={<DownloadOutlined />}>
                                下载
                        </Button>
                    </div>
                </Affix>
                <div className="test-config-scorll">
                    
                    {
                        testConfig.map((items,index) => {
                            return (
                                <div key={index}>
                                    <div className="test-config-item">
                                        <span className="test-config-wrap">
                                            <label>{items.title}</label>
                                            <InputNumber 
                                                value={items.testNum}
                                                placeholder="测试条数"
                                                min={0}/>
                                        </span>
                                        <Select
                                            value={items.ev}
                                            placeholder="选择环境"
                                            allowClear>
                                            <Option value="prod">生产环境</Option>
                                            <Option value="test">测试环境</Option>
                                        </Select>
                                        <Select
                                            value={items.list}
                                            mode="multiple"
                                            placeholder="以下字段是否忽略"
                                            onChange={this.handleChange}>
                                            {filteredOptions.map(item => (
                                                <Option key={item} value={item}>
                                                    {item}
                                                </Option>
                                            ))}
                                        </Select>
                                    </div>
                                    {
                                        items.zuse &&
                                            (
                                                <div className="zuse_config">
                                                    <span className="flex-end">
                                                        <Select
                                                            value={items.zuse.serach_val}
                                                            placeholder="选择报告查询方式"
                                                            allowClear>
                                                            <Option value="0">只查A</Option>
                                                            <Option value="1">只查B</Option>
                                                            <Option value="2">A+B</Option>
                                                        </Select>
                                                        <Select
                                                            value={items.zuse.filter_text}
                                                            placeholder="选择是否过滤报告"
                                                            allowClear>
                                                            <Option value="0">过滤报告</Option>
                                                            <Option value="1">验证过滤</Option>
                                                        </Select>
                                                        <Select
                                                            value={items.zuse.testServer}
                                                            mode="multiple"
                                                            placeholder="选择测试的服务"
                                                            onChange={this.handleChange}>
                                                            {testServer.map(item => (
                                                                <Option key={item} value={item}>
                                                                    {item}
                                                                </Option>
                                                            ))}
                                                        </Select> 
                                                        <Switch checkedChildren="回溯" unCheckedChildren="非回溯" defaultChecked={items.zuse.is_back}/>
                                                    </span>
                                                </div>
                                            )
                                    }
                                    <Divider dashed />
                                </div>
                            )
                                
                        })
                    }
                </div>
                <Testmodal />
            </Drawer>
        )
    }
}


class Testmodal extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            loading: false,
            visible: false,
        }
    }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Open Modal with customized footer
        </Button>
        {/* <Modal
          visible={visible}
          title="测试状态: 未解压(zipped)"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
                取消
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                解压
            </Button>
          ]}
        >
          <span className="model-item">
                <label>文件名</label>
                <Input disabled value="Please enter user name" />
          </span>
          <span className="model-item">
                <label>解压密码</label>
                <Input />
          </span>
        </Modal> */}
        <Modal
          visible={visible}
          title="测试状态: 已完成(fulfilled)"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
                取消
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                重新测试
            </Button>
          ]}
        >
          <span className="model-item">
                测试已完成，是否需要重新测试？
          </span>
        </Modal>
        
      </>
    );
  }
}
