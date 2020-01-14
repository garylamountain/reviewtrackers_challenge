import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReviewContainer from './containers/ReviewContainer';
import SelectedReview from './components/SelectedReview';
import json from './reviews.json';

class App extends React.Component {

  state = {
    reviews: [],
    selectedReview: {},
    display: false
  }

  componentDidMount(){
    this.setState({reviews: json})
  }

  handleSelection = review => {
    this.setState({
      selectedReview: review,
      display: true
    })
  }

  componentDidUpdate(){
    console.log(this.state)
  }

  render() {
    return (
      <div className="app">
        {!this.state.display ? 
        <ReviewContainer reviews={this.state.reviews} handleSelection={this.handleSelection}/> :
        <SelectedReview review={this.state.selectedReview}/>
        }
      </div>
    );
  }
}

export default App;