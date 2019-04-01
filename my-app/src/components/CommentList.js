import React from 'react';
class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.removeItem = this.removeItem.bind(this);
    }
    removeItem (index) {
        this.props.onRemoveComment(index)
    }
    render () {
        return (
            <div className="comment-list-component">
                <label>评论列表</label>
                {this.props.comments.length === 0 && <div className="text-muted small text-center">没有任何评论！</div>}
                <ul className="list-group mb-3">
                    {
                        this.props.comments.map((comment, index) =>
                            <li key={index} className="alert alert-success list-group-item">
                                <span
                                    className="float-right btn btn-danger btn-sm"
                                    onClick={this.removeItem.bind(this, index)}
                                >X</span>
                                {comment}
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
export default CommentList;