import React from 'react'

class CommentList extends React.Component {

  render () {
    const {commentList, commentClickHandler} = this.props
    return (
      <div className='ViewBox-comments'>
        <ul>
          {
            commentList
              ? commentList.map(comment =>
                <li key={commentList.indexOf(comment)} onClick={() => commentClickHandler(comment)}>
                  {comment.content}
                </li>, this
                )
              : ' ' }
        </ul>
      </div>
    )
  }
}

export default CommentList
