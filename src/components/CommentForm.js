import React from 'react';


const CommentForm = (props) => {
  return (
    <div>
        <textarea className="form-control" rows="5" id="comment"></textarea>
        <button type="button" class="btn btn-primary" onClick={props.submitComment}>Submit</button>
    </div>
  )
}

export default CommentForm;