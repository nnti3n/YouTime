import React from 'react'
import './HomeView.scss'
import SearchBar from './SearchBar'
import CommentList from './CommentList'
import VideoPlayer from './VideoPlayer'
import CommentBar from './CommentBar.js'

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
          time: 1500 // at 1.5 sec or 1500 milisec
        },
        {
          content: "2nd comment",
          time: 3000 // at 1.5 sec or 1500 milisec
        }
      ],
      currentComment: []
    }
  }

  updateComment = (currentTime) => {
    currentTime *= 1000;
    this.setState({
      currentTime: currentTime,
      currentComment: this.state.commentList.filter((data) => {
        return (data.time <= currentTime) && data.time + 5000 >= currentTime
      })
    });
  }
  render () {
    return (
      <div>
        <div className='Menu u-margin-bottom--24'>
          <h4 className='Menu-title'>YouTime</h4>
          <SearchBar SearchVideo={this.props.SearchVideo} />
        </div>
        <div className='ViewBox u-margin-bottom--24'>
          <VideoPlayer
            videoId={this.state.videoId}
            container={this.state.container}
            updateComment={this.updateComment}
          />
          <CommentList commentList={this.state.commentList} />
        </div>
        <CommentBar currentComment={this.state.currentComment}/>
      </div>
    )
  }
}

HomeView.propTypes = {
  SearchVideo: React.PropTypes.func
}

export default HomeView
