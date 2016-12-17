import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1>YouTime from SNVD</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
  </div>
)

export default Header
