import React, { Component } from 'react';
import FilmPoster from './FilmPoster.jsx';
import Fave from './Fave.jsx';

class FilmRow extends Component {

  render() {
    return (
      <div className="film-row" onClick={this.props.onDetailsClick}>
        <FilmPoster film={this.props.film} />
        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{new Date(this.props.film.release_date).getFullYear()}</p>
        </div>

        <Fave onFaveToggle={this.props.onFaveToggle} isFave={this.props.isFave} />
      </div>
    )
  }
}

export default FilmRow
