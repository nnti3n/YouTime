import React from 'react'
import './HomeView.scss'
import SearchBar from './SearchBar'
import CommentList from './CommentList'
import VideoPlayer from './VideoPlayer'
import CommentBar from './CommentBar.js'

const YOUTIME_API = `http://youtime.herokuapp.com`
  
class HomeView extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      videoId : '-2U0Ivkn2Ds',
      container: 'youtube-player',
      currentTime: 0,
      commentList: [
        {
          content: "1st comment",
          time: 5 // at 1.5 sec or 1500 milisec
        },
        {
          content: "2nd comment",
          time: 10 // at 1.5 sec or 1500 milisec
        }
      ],
      currentComment: [],
      videoRemoteId: '',
      videoTime: 0
    }
  }

  updateComment = (currentTime) => {
    currentTime *= 1000;
    this.setState({
      currentTime: currentTime,
      currentComment: this.state.commentList.filter((data) => {
        return (data.time <= currentTime) && data.time + 5000 >= currentTime
      })
    })
  }

  fetchVideoComment(videoId) {
    fetch(YOUTIME_API + `/video/link?site=youtube&id=${videoId}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          videoRemoteId: data.id,
          commentList: data.comment
        })
      })
  }

  SearchVideo = (link) => {
    if (link.indexOf('youtube') !== -1 || link.indexOf('youtu.be') !== -1) {
      var regex = /(.+(\?v=|\/))|((\?|&).+)/g
      var videoId = link.replace(regex, '') 
      this.setState({
        videoId: videoId,
        videoTime: 0
      })
      this.fetchVideoComment(videoId)
    } else {
      return 
    }
  }

  commentClickHandler = (comment) => {
    this.setState({
      videoTime: comment.time
    })
  }

  render () {
    return (
      <div>
        <h4>Welcome to YouTime</h4>
        <SearchBar SearchVideo={this.SearchVideo} />
        <VideoPlayer videoId={this.state.videoId} container={this.state.container} updateComment={this.updateComment} videoTime={this.state.videoTime}/>
        <CommentList commentList={this.state.commentList} commentClickHandler={this.commentClickHandler}/>
        <CommentBar currentComment={this.state.currentComment}/>
      </div>
    )
  }
}

HomeView.propTypes = {
  SearchVideo: React.PropTypes.func
}

export default HomeView
