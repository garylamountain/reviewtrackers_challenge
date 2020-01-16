import React from 'react';
import Review from '../components/Review';

const ReviewContainer = (props) => {
	return (
	    <div className="container">
            <div className="row">
	      { props.reviews.map((review) => {
            return <Review 
                    review={review}
                    key={review.id}
                    handleSelection={props.handleSelection}
                    returnStars={props.returnStars}
                    />})}
	        </div>
        </div>
	)
}

export default ReviewContainer