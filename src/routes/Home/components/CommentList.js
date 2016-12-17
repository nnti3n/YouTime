import React from 'react'

class CommentList extends React.Component {
  
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div>
        {
          this.props.comment_list
            ? <table>
                <tbody>
                  {
                    this.props.comment_list.map(comment =>
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
