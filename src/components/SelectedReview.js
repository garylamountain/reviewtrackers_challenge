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
            <span className="back-button" onClick={this.props.exitDisplay}></span>
            <div className="card" style={{margin: "3%", padding: "2%"}}>
                    <h5 className="card-title">{this.props.review.place}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.returnStars(this.props.review.rating)}</h6>
                    <p className="card-text text-muted">{this.props.review.content}</p>
                    <div className="card-text">{this.props.review.author}   <small className="text-muted">{month}/{day}/{year}</small></div>
            </div>
            {/* 
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
            </div> */}
            { this.props.response ? 
            <Comment response={this.props.response} responder={this.props.responder} submitResponse={this.props.submitResponse}/>
            : 
            <CommentForm responder={this.state.defaultResponder} response={this.state.defaultResponse} submitResponse={this.props.submitResponse}/>
            }
        </div>
      )
  }
}

export default SelectedReview;