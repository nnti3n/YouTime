import React from 'react'
import toStringTime from '../../../Helper/Helper'

var sampleCurrentTime = 1500;


let id = 0;
class CommentBar extends React.Component {
    constructor(props) {
        super(props);
        this._onEnter = this._onEnter.bind(this)
        this.state = {
            currentComment: this.props.currentComment
        };
    }
    _onEnter(event) {
        if (event.charCode === 13) {
            event.preventDefault()
            var commentToBePost = {
                content: event.target.value,
                time: Math.floor(this.props.currentTime)
            }
            this.props.postComment(commentToBePost, (err, comment) => {
                if(err){
                    console.log(err);
                }
            });
        }
    }
    _onClick(event) {
      event.preventDefault();
      var commentToBePost = {
        content: event.target.value,
        time: Math.floor(this.props.currentTime)
      }
      this.props.postComment(commentToBePost, (err, comment) => {
        if(err){
          console.log(err);
        }
      });
    }
    render = () => {
      const {currentComment, currentTime} = this.props
      return (
        <div className='ViewBox-group'>
          <span>{toStringTime(currentTime)}</span> -
          <div className='ViewBox-group-comment'>
            <textarea onKeyPress={this._onEnter} placeholder='Enter Comment' className='ViewBox-input' />
            <button onClick={this._onClick} className='ViewBox-input-submit'>Submit</button>
          </div>
        </div>
      )
    }
}


export default CommentBar
