import React from 'react'
import './HomeView.scss'

import SearchBar from './SearchBar'
import CommentList from './CommentList'
import VideoPlayer from './VideoPlayer'

class HomeView extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      videoId : '-2U0Ivkn2Ds',
      container: 'youtube-player',
      commentList: [
        {
          content: 'hic',
          id: 0
        },
        {
          content: 'hic1',
          id: 1
        },
        {
          content: 'hic2',
          id: 2
        },
        {
          content: 'hic3',
          id: 3
        }
      ]
    }
  }
  updateComment (currentTime) {
    console.log(currentTime)
  }
  render () {
    return (
      <div>
        <h4>Welcome to YouTime</h4>
        <SearchBar />
        <VideoPlayer videoId={this.state.videoId} container={this.state.container} updateComment={this.updateComment} />
        <CommentList commentList={this.state.commentList} />
      </div>
    )
  }
}

HomeView.propTypes = {
  SearchVideo: React.PropTypes.func
}

export default HomeView
