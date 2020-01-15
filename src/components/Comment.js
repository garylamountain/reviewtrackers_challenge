import React from 'react';
import CommentForm from './CommentForm';

class Comment extends React.Component {

  state = {
    editing: false
  }

  handleClick = () => {
    this.setState({editing: true});
  }

  render(){
    return (
      <div>
        {this.state.editing ? 
        <CommentForm response={this.props.response} responder={this.props.responder} submitResponse={this.props.submitResponse}/>
        : 
        <div className="comment">
          <span style={{cursor: "pointer"}} onClick={this.handleClick}>...</span>
            <div className="comment-body">
                    <h5 className="card-title">{this.props.response}</h5>
                    {this.props.responder ? <h6 className="card-subtitle mb-2 text-muted">-{this.props.responder}</h6> 
                    : 
                    <h6 className="card-subtitle mb-2 text-muted">-Anonymous</h6>}
            </div>
        </div>
        }
      </div>
    )
  }  
}

export default Comment;