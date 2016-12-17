import React from 'react'
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
    render = () => {
      const {currentComment, currentTime} = this.props
      return (<div>
        { this.props.currentComment
            ? currentComment.map((comment) => (<li key={currentComment.indexOf(comment)}>{comment.content}</li>)) : ''
        }
        <span>{toStringTime(currentTime)}</span><input type="text" onKeyPress={this._onEnter}/>
    </div>)
    }
}

function toStringTime(currentTime) {
    var currentTimeInSec = Math.floor(currentTime / 1000);
    var currentTimeInHour = (Math.floor(currentTimeInSec / 3600) + ":") || "";
    if (currentTimeInHour.length == 2) {
        currentTimeInHour = "0" + currentTimeInHour;
    }
    var currentTimeInMinute = Math.floor((currentTimeInSec % 3600) / 60).toString() || "00";
    if (currentTimeInMinute.length == 1) {
        currentTimeInMinute = "0" + currentTimeInMinute;
    }
    currentTimeInSec = (currentTimeInSec % 60).toString();
    if (currentTimeInSec.length == 1) {
        currentTimeInSec = "0" + currentTimeInSec;
    }
    return (currentTimeInHour == "00:" ? "" : currentTimeInHour) + currentTimeInMinute + ":" + currentTimeInSec;
}
export default CommentBar
