import React from 'react';
import FilmRow from './FilmRow';

function FilmListing (props) {

  let allFilms = props.films.map((ele, index, arr)=> {
    return (
      <FilmRow film={ele} key={ele.id}/>
      );
  });

function handleFilterClick(filter) {
    console.log('setting filter to: ' + filter);
}

  return (
    <div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <div className="film-list-filters">
        <div className="film-list-filter">
            ALL
            <span className="section-count"> </span>
            {/* <span className="section-count">{this.props.films.length}</span> */}
        </div>
        <div className="film-list-filter">
            FAVES
            <span className="section-count">0</span>
        </div>
    </div>

    {allFilms}
</div>
  )


  // return (
  //   <div className="film-list">
  //     <h1 className="section-title">FILMS</h1>
  //       {allFilms}
  //
  //
  //
  //   </div>
  // );

}
export default FilmListing;
