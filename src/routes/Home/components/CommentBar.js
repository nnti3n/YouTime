import React from 'react'
var sampleCurrentTime = 1500;
class CommentBar extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        currentComment: this.props.currentComment
      };
    }
    render = () => (<div>
        This is comment bar
        { this.props.currentComment
            ? this.props.currentComment.map((comment) => (<li>{comment.content}</li>)) : ''
        }
    </div>)
}

export default CommentBar
