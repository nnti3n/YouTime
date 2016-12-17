import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import SearchBar from './SearchBar'

export const HomeView = (props) => (
  <div>
    <h4>Welcome to YouTime</h4>
    <img
      alt='This is a duck, because Redux!'
      className='duck'
      src={DuckImage} />
    <SearchBar SearchVideo={props.SearchVideo} />
  </div>
)

HomeView.propTypes = {
  SearchVideo: React.PropTypes.func
}

export default HomeView
