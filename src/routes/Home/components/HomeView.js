import React from 'react'
import SearchBar from './SearchBar'
import CommentList from './CommentList'
import VideoPlayer from './VideoPlayer'
import CommentBar from './CommentBar'
import SuggestVideo from './SuggestVideo'

const YOUTIME_API = `http://youtime.herokuapp.com`

class HomeView extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      videoId : '',
      container: 'youtube-player',
      currentTime: 0,
      commentList: [],
      currentComment: [],
      videoRemoteId: '',
      seekTo: 0,
      suggestVideo: []
    }
    this.commentClickHandler = this.commentClickHandler.bind(this)
    this.updateComment = this.updateComment.bind(this)
    this.postComment = this.postComment.bind(this)
    this.fetchVideoComment = this.fetchVideoComment.bind(this)
    this.SearchVideo = this.SearchVideo.bind(this)
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

  postComment = (commentObject, callback) => {
    var option = {
      method: 'POST',
      body: JSON.stringify(commentObject),
      mode: 'cors',
      headers: new Headers({"Content-Type": "application/json"})
    }
    fetch(YOUTIME_API + "/video/" + this.state.videoRemoteId, option)
      .then(res => {
        if (res.ok) {
          res.json().then((data) => {
            this.setState({
              commentList: data.comment
            })
            callback(null, commentObject);
          })
        }else{
          callback("CONNECT_ERROR")
        }
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
  
  fetchSuggestedVideo = (limit) => {
     fetch(YOUTIME_API + `/video/random?limit=${limit}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          suggestVideo: data
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
      this.fetchSuggestedVideo(4)
    } else {
      console.log('invalid url')
      return
    }
  }

  commentClickHandler = (comment) => {
    this.setState({
      seekTo: comment.time == 0 ? 1: comment.time/1000,
      justSeek: true
    })
  }

  videoClickHandler = (video) => {
    console.log(video)
    this.setState({
      videoId: video.url.id
    })
    this.fetchVideoComment(video.url.id)
  }

  changeJustSeek = (justSeek) => {
    this.setState({ justSeek: justSeek })
  }

  render() {
    return (
      <div>
        <div className='Menu u-margin-bottom--40'>
          <h2 className='Menu-title'>YouTime</h2>
          <SearchBar SearchVideo={this.SearchVideo} />
        </div>
        <div className='ViewBox u-margin-bottom--24'>
          <div>
            <VideoPlayer
              videoId={this.state.videoId}
              container={this.state.container}
              updateComment={this.updateComment}
              seekTo={this.state.seekTo}
              justSeek={this.state.justSeek}
              changeJustSeek={this.changeJustSeek}
            />
            <CommentBar
              currentComment={this.state.currentComment}
              currentTime={this.state.currentTime}
              postComment={this.postComment}
            />
          </div>
          <CommentList commentList={this.state.commentList} commentClickHandler={this.commentClickHandler} />
        </div>
        <h4 className='u-margin-bottom--12'>Suggested Videos</h4>
          <SuggestVideo videoList={this.state.suggestVideo} videoClickHandler={this.videoClickHandler}/>
      </div>
    )
  }
}

HomeView.propTypes = {
  SearchVideo: React.PropTypes.func
}

export default HomeView
