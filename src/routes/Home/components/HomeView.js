import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import SearchBar from './SearchBar.js'

export const HomeView = () => (
  <div>
    <h4>Welcome to YouTime</h4>
    <img
      alt='This is a duck, because Redux!'
      className='duck'
      src={DuckImage} />
    <SearchBar />
  </div>
)

export default HomeView
