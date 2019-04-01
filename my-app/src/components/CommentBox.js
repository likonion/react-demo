import React from 'react';
class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handelSubmit = this.handelSubmit.bind(this);
        this.handelChange = this.handelChange.bind(this);
    }
    handelSubmit (e) {
        e.preventDefault();
        const text = this.inputText.value;
        text ? this.props.onAddComment(text) : alert('请输入评论内容！');
        this.setState({
            value: ''
        })
    }
    handelChange (e) {
        this.setState({
            value: e.target.value
        })
    }
    render () {
        return (
            <form>
                <div className="form-group">
                    <label>留言内容</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="请输入内容"
                        value={this.state.value}
                        onChange={this.handelChange}
                        ref={(inputText) => this.inputText = inputText}
                    />
                </div>
                <button type="submit" className="float-left btn btn-primary" onClick={this.handelSubmit}>留言 </button>
                <p className="float-right small text-muted">已有{this.props.commentsLength}条评论</p>
            </form>
        )
    }
}
export default CommentBox;