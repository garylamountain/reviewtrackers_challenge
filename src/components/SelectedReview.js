import React from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment';


const Review = (props) => {
  const review = props.review;
  let date = new Date(props.review.published_at);
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var year = date.getFullYear();
  return (
    <div>
        <div style={{cursor: "pointer"}} onClick={props.exitDisplay}>back</div>
        <div className="review">
                <h5 className="card-title">{props.review.place}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.review.rating}</h6>
                <p className="card-text">{props.review.content}</p>
                {props.review.author} - {month}/{day}/{year}
        </div>
        {props.comment === "no comment" ? 
        <CommentForm />
        : 
        <Comment comment={props.comment}/>}
    </div>
  )
}

export default Review;