import React from 'react';
// import ReactDOM from 'react-dom';
import CommentBox from './components/CommentBox';
import CommentList from './components/CommentList';
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
        this.addComment = this.addComment.bind(this);
        this.removeComment = this.removeComment.bind(this);
    }
    componentDidMount () {
        fetch('/mock/comments.json').then(res => {
            if (res.ok) {
                res.json().then(data => {
                    this.setState({
                        comments: data
                    })
                })
            }
        })
    }
    addComment (comment) {
        this.setState({
            comments: [...this.state.comments, comment]
        })
    }
    removeComment (index) {
        let comments = this.state.comments;
        comments.splice(index, 1);
        this.setState({
            comments: comments
        })
    }
    render () {
        const { comments } = this.state;
        return (
            <div className="App">
                <CommentList
                    comments={comments}
                    onRemoveComment={this.removeComment}
                />
                <CommentBox
                    commentsLength={comments.length}
                    onAddComment={this.addComment}
                />
            </div>

        )
    }
}

export default App;