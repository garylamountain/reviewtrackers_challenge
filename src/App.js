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
    //when user chooses a particular review,
    //update the state to that review
    this.setState({
      selectedReview: review,
      display: true
    });
  }

  exitDisplay = () => {
    //close the single review view, return to the 'index' view
    this.setState({display: false});
  }

  submitResponse = submission => {
    //submission is the object received from a newly submitted reply
    //it will contain the reponse of the reply and the user who responded
    const response = submission.response.value;
    const responder = submission.responder.value;
    //update the particular review in the state that
    //the user replied to
    this.setState(prevState => {
      let selectedReview = Object.assign({}, prevState.selectedReview);
      selectedReview.response = response;  
      selectedReview.responder = responder;      
      let reviews = this.state.reviews;
      reviews.find(rev => {
        if(rev.id === selectedReview.id){
          rev.response = response;
          rev.responder = responder;
        }
      })
      return { selectedReview, reviews };
    })
  }

  //function for displaying 1-5 stars in place of
  //the numerical rating provided to that restaurant
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
        {/* render the plain navbar */}
        <NavBar exitDisplay={this.exitDisplay} />
        {/* if 'display' is false, show the view with all reviews
        if 'display' is true, show the user's selected review */}
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