import React from 'react'

class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this._onChange = this._onChange.bind(this)
    this._onClick = this._onClick.bind(this)
    this._onEnter = this._onEnter.bind(this)
    this.state = {typed: ''}
  }

  _onClick () {
    this.props.Search(this.state.typed)
  }

  _onChange (event) {
    this.setState({typed: event.target.value})
  }

  _onEnter (event) {
    if (event.charCode === 13) {
      console.log('entered')
      this.props.Search(this.state.typed)
    }
  }

  render () {
    return (
      <div className="input-group stylish-input-group">
        <input
          type="text"
          className="form-control"
          placeholder="YouTube Video Url"
          onChange={this._onChange} onKeyPress={this._onEnter}>
        </input>
        <span className="input-group-addon">
          <button type="submit" onClick={this._onClick}>
              <span className="glyphicon glyphicon-search">
              </span>
          </button>
        </span>
      </div>
    )
  }

}

SearchBar.propTypes = {
  Search: React.PropTypes.func
}

export default SearchBar
