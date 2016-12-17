import { connect } from 'react-redux'
import { SearchVideo } from '../modules/home'

import HomeView from '../components/HomeView'

const mapActionCreators = {
  SearchVideo
}

const mapStateToProps = (state, ownProps) => {
  return {
    video_url: state.video_url
  }
}

export default connect(mapStateToProps, mapActionCreators)(HomeView)
