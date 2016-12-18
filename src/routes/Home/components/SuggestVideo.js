import React from 'react'

class SuggestVideo extends React.Component {

  render () {
    const {videoList, videoClickHandler} = this.props
    return (
      <div className='Grid'>
          {
            videoList
              ? videoList.map(video =>
                <div className='Grid-item' key={videoList.indexOf(video)} onClick={
                  () => videoClickHandler(video)}>
                  <img src={video.thumbnail} width='250' height='180'/>
                </div>
                )
              : ' ' }
      </div>
    )
  }
}

export default SuggestVideo
