import React from 'react'
import youTubePlayer from 'youtube-player'

class VideoPlayer extends React.Component {

  constructor (props) {
    super(props)

    this.internalPlayer = null
  }

  componentDidMount() {
    this.createPlayer()
  }

  updateComment () {
    this.props.updateComment(this.currentTime)
  }

  onPlayerStateChange = (event) => {
    if(event.target.getPlayerState() === 1) {
      this.interval = setInterval(() => {
        this.currentTime = event.target.getCurrentTime()
        this.updateComment()
      }, 100)
    }
    else if (event.target.getPlayerState() === 2) {
      clearInterval(this.interval)
    }
  }

  createPlayer() {
    this.internalPlayer = youTubePlayer(this.props.container, {
      videoId: this.props.videoId,
    })
    this.internalPlayer.on('stateChange', this.onPlayerStateChange)
  }



  render () {
    return (
      <div className="ViewBox-video">
        <div id={this.props.container}>
        </div>
      </div>
    )
  }
}

export default VideoPlayer
