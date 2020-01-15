import React from 'react';


const Comment = (props) => {
  return (
    <div className="comment">
      <div style={{cursor: "pointer"}} onClick={props.exitDisplay}>...</div>
        <div className="comment-body">
                <h5 className="card-title">{props.response}</h5>
                {props.responder ? <h6 className="card-subtitle mb-2 text-muted">-{props.responder}</h6> : 
                <h6 className="card-subtitle mb-2 text-muted">-Anonymous</h6>}
                
        </div>
    </div>
  )
}

export default Comment;