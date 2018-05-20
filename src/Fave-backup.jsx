import React, {Component} from 'react';

class Fave extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isFave: false
    }

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e) {
    console.log('handling the Fave click');

    e.stopPropagation();

    this.setState({
      isFave: !this.state.isFave
    })
    // console.log(this.state.isFave);
  }



render() {
  return (
    <div className="film-row-fave" onClick={this.handleClick}>

    <p className="material-icons"> { (this.state.isFave === false ? 'add_to_queue' : 'remove_from_queue') } </p>

    </div>

    );
  }
}

export default Fave;
