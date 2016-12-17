import React from 'react'

class CommentList extends React.Component {

  render () {
    return (
      <div className='ViewBox-comments'>
        <ul>
          {
            this.props.commentList
              ? this.props.commentList.map(comment =>
                <li key={comment.id} >
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
