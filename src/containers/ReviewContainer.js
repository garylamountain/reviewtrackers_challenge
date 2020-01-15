import React from 'react';
import Review from '../components/Review';

const ReviewContainer = (props) => {
	return (
	    <div className="container">
            <div className="row">
	      { props.reviews.map((review) => {
            return <Review review={review}
                    key={review.id}
                    author={review.author}
                    place={review.place}
                    published_at={review.published_at}
                    rating={review.rating}
                    content={review.content}
                    handleSelection={props.handleSelection}
                    returnStars={props.returnStars}/>})}
	        </div>
        </div>
	)
}

export default ReviewContainer