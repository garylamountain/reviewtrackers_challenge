import React from 'react';

class CommentForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            responseObj: {
                responder: {
                  value: ''
                },
                response: {
                  value: ''
                }
            }
        }
      }

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

    render() {
        return (
            <div className="comment-form">
                <form>
                    <div class="form-group">
                        <label>Your Name</label>
                        <input type="text" name="responder" class="form-control" placeholder="John Doe" value={this.state.responseObj.responder.value} onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                        <label>Comment</label>
                        <textarea class="form-control" name="response" rows="3" value={this.state.responseObj.response.value} onChange={this.handleChange}></textarea>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={()=>this.props.submitResponse(this.state.responseObj)}>Submit</button>
                </form>
            </div>
        )
    }
}

export default CommentForm;