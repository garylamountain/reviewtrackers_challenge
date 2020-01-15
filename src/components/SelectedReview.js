import React from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment';
import { render } from '@testing-library/react';

// const SelectedReview = (props) => {
class SelectedReview extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            defaultResponder: '',
            defaultResponse: ''
        }
    }

    handleClick = event => {
      this.setState({
        defaultResponder: this.props.responder,
        defaultResponse: this.props.response
      })
      this.props.submitResponse({responder: {value: ''}, response: {value: ''}})
    }

  render(){
    let date = new Date(this.props.review.published_at);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
  
    return (
        <div>
            <span style={{cursor: "pointer"}} onClick={this.props.exitDisplay}>back</span>
            <div className="card" style={{margin: "3%", padding: "2%"}}>
                    <h5 className="card-title">{this.props.review.place}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.returnStars(this.props.review.rating)}</h6>
                    <p className="card-text">{this.props.review.content}</p>
                    {this.props.review.author} - {month}/{day}/{year}
            </div>
            {this.props.response ? 
            <div className="card" style={{margin: "3%", padding: "2%", backgroundColor: "white", width: "33%"}}>
                <span 
                    style={{cursor: "pointer"}} 
                    // onClick={()=>props.submitResponse({responder: {value: ''}, response: {value: ''}})}
                    onClick={this.handleClick}
                >
                ...
                </span>
                <div className="comment-body">
                        <h5 className="card-title">{this.props.response}</h5>
                        {this.props.responder ? <h6 className="card-subtitle mb-2 text-muted">-{this.props.responder}</h6> 
                        : 
                        <h6 className="card-subtitle mb-2 text-muted">-Anonymous</h6>}
                </div>
            </div>
            // <Comment response={props.response} responder={props.responder} submitResponse={props.submitResponse}/>
            : 
            <CommentForm responder={this.state.defaultResponder} response={this.state.defaultResponse} submitResponse={this.props.submitResponse}/>
            }
        </div>
      )
  }
}

export default SelectedReview;