import React from 'react';
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
    //resReviews is an array of the initial reviews with
    //an added attribute to store a reply to the review
    let resReviews = json.map(obj => ({ ...obj, response: '' }));
    this.setState({reviews: resReviews});
  }

  handleSelection = review => {
    this.setState({
      selectedReview: review,
      display: true
    });
  }

  exitDisplay = () => {
    this.setState({display: false});
  }

  submitResponse = response => {
    this.setState(prevState => {
      let selectedReview = Object.assign({}, prevState.selectedReview);
      selectedReview.response = response;        
      let reviews = this.state.reviews;
      reviews.find(rev => {
        if(rev.id === selectedReview.id){
          return rev.response = response;
        }
      })
      return { selectedReview, reviews };
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
        <SelectedReview review={this.state.selectedReview} response={this.state.selectedReview.response} exitDisplay={this.exitDisplay} submitResponse={this.submitResponse}/>
        }
      </div>
    );
  }
}

export default App;