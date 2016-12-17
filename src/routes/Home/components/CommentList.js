import React from 'react'


let id = 0;
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
                      <tr key = {id++} >
                        <td onClick={() => (this.props.commentClickHandler(comment))}>{comment.content}</td>
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
