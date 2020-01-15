import React from 'react';


const Review = (props) => {
  const review = props.review;
  let date = new Date(props.review.published_at);
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var year = date.getFullYear();
  return (
    <div className="card" style={{width: "18rem", textAlign: "center", margin: "3%"}}  id={props.review.id}>
        <div className="card-body" onClick={()=>props.handleSelection(review)}>
            <h5 className="card-title">{props.review.place}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.review.rating} ⭐</h6>
            <p className="card-text">{props.review.content.substring(0, 59)}...</p>
            {props.review.author} - {month}/{day}/{year}
        </div>
    </div>
  )
}

export default Review;