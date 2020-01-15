import React from 'react';
import NavBar from './components/Navbar';
import ReviewContainer from './containers/ReviewContainer';
import SelectedReview from './containers/SelectedReview';
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
    let resReviews = json.map(obj => ({ ...obj, response: '', responder: '' }));
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

  submitResponse = submission => {
    const response = submission.response.value;
    const responder = submission.responder.value;
    this.setState(prevState => {
      let selectedReview = Object.assign({}, prevState.selectedReview);
      selectedReview.response = response;  
      selectedReview.responder = responder;      
      let reviews = this.state.reviews;
      reviews.find(rev => {
        if(rev.id === selectedReview.id){
          return rev.response = response;
        }
      })
      reviews.find(rev => {
        if(rev.id === selectedReview.id){
          return rev.responder = responder;
        }
      })
      return { selectedReview, reviews };
    })
  }

  returnStars(int){
    let stars = '';
    for(let i = 0; i < int; i++){
      stars += '⭐';
    }
    return stars;
  }

  render() {
    return (
      <div className="app">
        <NavBar exitDisplay={this.exitDisplay} />
        {!this.state.display ? 
        <ReviewContainer 
          reviews={this.state.reviews} 
          handleSelection={this.handleSelection}
          returnStars={this.returnStars}
        /> 
        :
        <SelectedReview 
          review={this.state.selectedReview} 
          response={this.state.selectedReview.response} 
          responder={this.state.selectedReview.responder} 
          exitDisplay={this.exitDisplay} 
          submitResponse={this.submitResponse}
          returnStars={this.returnStars}
        />
        }
      </div>
    );
  }
}

export default App;