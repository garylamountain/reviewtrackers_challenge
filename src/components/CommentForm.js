import React from 'react';

class CommentForm extends React.Component {

    //state holds the response to the review and 
    //the user who wrote the response
    constructor(props){
        super(props)
        this.state = {
            responseObj: {
                responder: {
                  value: props.responder
                },
                response: {
                  value: props.response
                }
            }
        }
    }

    //when changes are made to the response to a review
    //or the user's name who's making those changes,
    //update that in the state
    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
      
        this.setState({
          responseObj: {
              ...this.state.responseObj,
              [name]: {
              ...this.state.responseObj[name],
              value
            }
          }
        });
    }

    //render form for user to submit a response to a review
    render() {
        return (
            <div className="comment-form">
                <form>
                    <div className="form-group">
                        <label>Your Name</label>
                        <input 
                            type="text" 
                            name="responder" 
                            class="form-control" 
                            value={this.state.responseObj.responder.value} 
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Comment</label>
                        <textarea
                            name="response" 
                            class="form-control" 
                            rows="3" 
                            value={this.state.responseObj.response.value} 
                            onChange={this.handleChange}
                        />
                    </div>
                    <button 
                        type="button" 
                        className="btn btn-primary" 
                        onClick={()=>this.props.submitResponse(this.state.responseObj)}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default CommentForm;