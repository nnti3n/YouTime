import React from 'react'


let id = 0;
class CommentList extends React.Component {
  _onClick = (event) => {
    console.log(event)
  }

  render () {
    const {commentList, commentClickHandler} = this.props
    return (
      <div className='ViewBox-comments'>
        <ul>
          {
            commentList
              ? commentList.map(comment =>
                <li key={id++} onClick={this._onClick}>
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
