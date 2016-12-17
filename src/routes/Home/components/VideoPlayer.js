import React from 'react'
import youTubePlayer from 'youtube-player'

function shouldUpdateVideo(prevProps, props) {
  if (prevProps.videoId !== props.videoId){
    return true
  }
  return false
}

class VideoPlayer extends React.Component {

  constructor (props) {
    super(props)

    this.internalPlayer = null
  }

  componentDidMount() {
    this.createPlayer()
  }

  componentDidUpdate(prevProps) {
    if (shouldUpdateVideo(prevProps, this.props)) {
      this.updateVideo()
      return
    }
  }

  updateComment () {
    this.props.updateComment(this.currentTime)
  }

  updateVideo() {
    if (typeof(this.props.videoId) === 'undefined' || !this.props.videoId) {
      this.internalPlayer.stopVideo()
      return
    }
    this.internalPlayer.cueVideoById({
      videoId: this.props.videoId
    })
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
      if(this.props.justSeek && this.props.seekTo != 0 && this.internalPlayer)
      {
        this.internalPlayer.seekTo(this.props.seekTo)
        this.props.changeJustSeek(false)
      }
      return (
      <div className="ViewBox-video">
        <div id={this.props.container}>
        </div>
      </div>
    )
  }
}

export default VideoPlayer
