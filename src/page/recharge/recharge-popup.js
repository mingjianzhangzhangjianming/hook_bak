import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'antd'

export default class Rechargepop extends Component {
    static propTypes = {
            visible: PropTypes.bool,
            width: PropTypes.number,
            title: PropTypes.string,
            mask: PropTypes.bool,
            cancelText: PropTypes.string,
            okText: PropTypes.string,
            confirmLoading: PropTypes.bool,
            zIndex: PropTypes.number,
            destroyOnClose: PropTypes.bool,
            keyboard: PropTypes.bool,
            centered: PropTypes.bool,
            handleOk: PropTypes.func,
            handleCancel: PropTypes.func
    }
    
    static defaultProps = {
        width: 1000,
        mask: true,
        cancelText: '取消',
        okText: '确认',
        zIndex: 1000,
        destroyOnClose: true,
        keyboard: true,
        centered: true, //默认垂直居中
    }

    constructor(props) {
        super(props)
        this.state = {
           
        }
    }
    

    render() {
        const { title, centered, visible, width, confirmLoading, destroyOnClose,
             keyboard, mask, cancelText, okText, zIndex, handleCancel, handleOk,children} = this.props
        return (
            <Modal
                title= {title}
                centered = {centered}
                visible= {visible}
                width= {width}
                confirmLoading={confirmLoading}
                destroyOnClose={destroyOnClose}
                keyboard={keyboard}
                mask={mask}
                cancelText={cancelText}
                okText={okText}
                zIndex={zIndex}
                onCancel={handleCancel}
                onOk={handleOk}>
                {children}
            </Modal>
        )
    }
}
