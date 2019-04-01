import React, { Component } from 'react';
import './index.css';

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTxt: '',
            list: [
                {
                    txt: "测试待办事项一",
                    checked: false
                },
                {
                    txt: "测试待办事项二",
                    checked: false
                },
                {
                    txt: "测试待办事项三",
                    checked: true
                },
                {
                    txt: "测试待办事项四",
                    checked: true
                }
            ]
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.handleEditItem = this.handleEditItem.bind(this);
    }
    // 输入待办事项
    handleInputChange (e) {
        this.setState({
            inputTxt: e.target.value
        })
    }
    // 添加待办事项
    handleAddItem (e) {
        e.preventDefault();
        this.setState({
            inputTxt: '',
            list: [{ txt: this.state.inputTxt, checked: false }, ...this.state.list]
        })
    }
    // 完成待办事项
    handleComplete (e) {
        let list = this.state.list;
        list[e].checked = !list[e].checked;
        this.setState({
            list: list
        })
    }
    // 删除待办事项
    handleRemoveItem (e) {
        let list = this.state.list;
        list.splice(e, 1);
        this.setState({
            list: list
        })
    }
    // 编辑待办事项
    handleEditItem (index, event) {
        this.setState({
            list: this.state.list.map((item, _index) => _index === index ? { ...item, txt: event.target.value } : item)
        });
    }
    render () {
        return (
            <div className="Todolist">
                <h1>Todolist</h1>
                <form onSubmit={this.handleAddItem}>
                    <input
                        type="text"
                        className="Todolist__input"
                        placeholder="请输入待办事项"
                        onChange={this.handleInputChange}
                        value={this.state.inputTxt}
                    />
                </form>
                <List list={this.state.list} handleComplete={this.handleComplete} handleRemoveItem={this.handleRemoveItem} handleEditItem={this.handleEditItem} />
            </div>
        );
    }
}
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render () {
        const { list, handleComplete, handleRemoveItem, handleEditItem } = this.props;
        return (
            <div>
                {/* 正在进行 */}
                <h4><span className="number-box">{list.filter(item => item.checked === false).length}</span>正在进行</h4>
                <ul className="List">
                    {
                        list.map((item, index) =>
                            !item.checked && <li
                                className="List__item"
                                key={index}
                            >
                                <span className="List__item--remove" onClick={handleRemoveItem.bind(this, index)}>X</span>
                                <div className={item.checked ? 'List__item--complete' : null}>
                                    <input
                                        type="checkbox"
                                        checked={item.checked}
                                        onChange={handleComplete.bind(this, index)}
                                    />
                                    <input
                                        type="text"
                                        value={item.txt}
                                        onChange={handleEditItem.bind(this, index)}
                                        className="List__value" />
                                </div>
                            </li>
                        )
                    }
                </ul>
                {/* 已经完成 */}
                <h4><span className="number-box">{list.filter(item => item.checked === true).length}</span>已经完成</h4>
                <ul className="List">
                    {
                        list.map((item, index) =>
                            item.checked && <li
                                className="List__item"
                                key={index}
                            >
                                <span className="List__item--remove" onClick={handleRemoveItem.bind(this, index)}>X</span>
                                <div className={item.checked ? 'List__item--complete' : null}>
                                    <input
                                        type="checkbox"
                                        checked={item.checked}
                                        onChange={handleComplete.bind(this, index)}
                                    />{item.txt}
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Todolist;