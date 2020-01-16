import React from 'react';

class Comment extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        editing: false,
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

  handleClick = () => {
    this.setState({editing: true});
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

  handleSave = () => {
    this.props.submitResponse(this.state.responseObj);
    this.setState({editing: false});
  }

  render(){
    return (
      <div className="card" style={{margin: "3%", padding: "2%", backgroundColor: "white", width: "50%"}}>
        {this.state.editing ? 
        <div className="comment-form">
            <div className="comment-body">
            <form>
                    <div class="form-group">
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="responder" 
                            class="form-control" 
                            value={this.state.responseObj.responder.value} 
                            onChange={this.handleChange}
                        />
                    </div>
                    <div class="form-group">
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
                        onClick={this.handleSave}>
                        Save
                    </button>
                </form>
            </div>
        </div>
        : 
        <div className="comment">
          <span className="edit-button" style={{cursor: "pointer"}} onClick={this.handleClick}></span>
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