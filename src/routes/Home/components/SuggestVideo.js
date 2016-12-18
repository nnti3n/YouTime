import React from 'react'

class SuggestVideo extends React.Component {

  render () {
    const {videoList, videoClickHandler} = this.props
    return (
      <div>
        <ul>
          {
            videoList
              ? videoList.map(video =>
                <li key={videoList.indexOf(video)} onClick={
                  () => videoClickHandler(video)}>
                  <img src={video.thumbnail}></img>
                </li> 
                )
              : ' ' }
        </ul>
      </div>
    )
  }
}

export default SuggestVideo
