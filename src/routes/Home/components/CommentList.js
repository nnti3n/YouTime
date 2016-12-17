import React from 'react'


let id = 0;
class CommentList extends React.Component {

  render () {
    return (
      <div className='ViewBox-comments'>
        <ul>
          {
            this.props.commentList
              ? this.props.commentList.map(comment =>
                <li key={id++} >
                  {comment.content}
                </li>
                )
              : ' ' }
        </ul>
      </div>
    )
  }
}

export default CommentList
