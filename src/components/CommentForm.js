import React from 'react';

class CommentForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            response: this.props.comment
        }
      }

    handleChange = event => {
        this.setState({
            response: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Your Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Doe"/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Comment</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.response} onChange={this.handleChange}></textarea>
                </div>
                <button type="button" className="btn btn-primary" onClick={()=>this.props.submitResponse(this.state.response)}>Submit</button>
                </form>
            </div>
        )
    }
}

export default CommentForm;