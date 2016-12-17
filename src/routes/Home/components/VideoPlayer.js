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
    console.log(event)
    if(event.target.getPlayerState() === 1) {
      this.interval = setInterval(() => {
        this.currentTime = event.target.getCurrentTime()
        console.log(this)
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
      <span>
        <div id={this.props.container}>
        </div>  
      </span>
    )
  }
}

export default VideoPlayer
