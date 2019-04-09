import React, { Component } from 'react';
import { Input, List, Badge, Icon, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import store from '../../store';
// 3. 引入 actionCreators
import { getInputChangeAction, getAddItemAction, getItemDeleteAction, getItemToggleAction, getItemEditAction } from '../../store/actionCreators';

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleToggleItem = this.handleToggleItem.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.handleEditItem = this.handleEditItem.bind(this);
        // 绑定方法 handleStoreChange 来处理 Redux 返回回来的数据
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    // 输入待办事项
    handleInputChange (e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    // 在 handleStoreChange 中处理数据
    handleStoreChange () {
        this.setState(store.getState());
    }
    // 添加待办事项
    handleAddItem (e) {
        e.preventDefault();
        // 4. 通过 dispatch(action)，将数据传递给 store
        const action = getAddItemAction();
        store.dispatch(action);
    }
    // 完成 && 取消完成待办事项
    handleToggleItem (index) {
        const action = getItemToggleAction(index);
        store.dispatch(action);
    }
    // 删除待办事项
    handleRemoveItem (index) {
        // 3. 通过 dispatch(action)，将数据传递给 store
        const action = getItemDeleteAction(index);
        store.dispatch(action);
    }
    // 编辑待办事项
    handleEditItem (index, event) {
        const action = getItemEditAction(index, event);
        store.dispatch(action);
    }
    render () {
        return (
            <div className="Todolist">
                <h1>Todolist</h1>
                <form onSubmit={this.handleAddItem}>
                    <Input
                        type="text"
                        className="Todolist__input"
                        placeholder="请输入待办事项"
                        onChange={this.handleInputChange}
                        value={this.state.inputTxt}
                    />
                </form>
                <ListWrapper list={this.state.list} handleToggleItem={this.handleToggleItem} handleRemoveItem={this.handleRemoveItem} handleEditItem={this.handleEditItem} />
            </div>
        );
    }
}
class ListWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render () {
        const { list, handleToggleItem, handleRemoveItem, handleEditItem } = this.props;
        return (
            <div>
                {/* 正在进行 */}
                <List
                    size="small"
                    split={false}
                    header={
                        <h4>
                            <Badge
                                style={{ backgroundColor: '#52c41a' }}
                                className="number-box"
                                count={list.filter(item => item.checked === false).length}
                            />
                            正在进行
                        </h4>
                    }
                    dataSource={list}
                    renderItem={(item, index) => {
                        if (item.checked) {
                            return <React.Fragment></React.Fragment>
                        } else {
                            return <List.Item key={index}>
                                <Input
                                    type="text"
                                    value={item.txt}
                                    onChange={handleEditItem.bind(this, index)}
                                    addonBefore={<Checkbox
                                        checked={item.checked}
                                        onChange={handleToggleItem.bind(this, index)}
                                    />}
                                    addonAfter={<Icon onClick={handleRemoveItem.bind(this, index)} type="delete" />}
                                />

                            </List.Item>
                        }
                    }}
                />
                {/* 已经完成 */}
                <List
                    size="small"
                    header={
                        <h4>
                            <Badge
                                style={{ backgroundColor: '#52c41a' }}
                                className="number-box"
                                count={list.filter(item => item.checked === true).length}
                            />
                            已经完成
                        </h4>
                    }
                    dataSource={list}
                    renderItem={(item, index) => {
                        if (!item.checked) {
                            return <React.Fragment></React.Fragment>
                        } else {
                            return <List.Item key={index}>
                                <List.Item.Meta
                                    avatar={<Checkbox
                                        checked={item.checked}
                                        onChange={handleToggleItem.bind(this, index)}
                                    />}
                                    description={
                                        item.txt
                                    }
                                />
                                <Button type="danger" onClick={handleRemoveItem.bind(this, index)}><Icon type="delete" /></Button>
                            </List.Item>
                        }
                    }}
                />
            </div>
        )
    }
}

export default Todolist;