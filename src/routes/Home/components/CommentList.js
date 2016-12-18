import React from 'react'
import toStringTime from '../../../Helper/Helper'

class CommentList extends React.Component {

  render () {
    const {commentList, commentClickHandler} = this.props
    return (
      <div className='ViewBox-comments'>
        <ul>
          {
            commentList
              ? commentList.map(comment =>
                <li className='u-margin-bottom--12' key={commentList.indexOf(comment)} onClick={
                  () => commentClickHandler(comment)}>
                  <p><a>{toStringTime(comment.time)}</a> - {comment.content}</p>
                </li>, this
                )
              : ' ' }
        </ul>
        <div className='ViewBox-listFilter' />
      </div>
    )
  }
}

export default CommentList
