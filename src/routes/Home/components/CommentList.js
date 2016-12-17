import React from 'react'

class CommentList extends React.Component {
  
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div>
        {
          this.props.commentList
            ? <table>
                <tbody>
                  {
                    this.props.commentList.map(comment =>
                      <tr key = {comment.id} >
                        <td>{comment.content}</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            : ' ' }
      </div>
    )
  }
}

export default CommentList
