import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../App';
import NavBar from '../components/Navbar';
import ReviewContainer from '../containers/ReviewContainer';
import SelectedReview from '../containers/SelectedReview';
import json from '../reviews.json';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('<App />', () => {

  const wrapper = shallow(<App />);
  // const display = wrapper.state('display');
  it('should not show SelectedReview if display is false', () => {
    //if display is 'false', the SelectedReview component shouldn't be rendered
    //i.e. .find should yield {} when searching for SelectedReview components
    expect(wrapper.state('display')).to.equal(wrapper.find('SelectedReview') === {});
  })

  it('should show a SelectedReview component if display is true', () => {
    wrapper.setState({display: true});
    expect(wrapper.state('display')).to.equal(wrapper.find('SelectedReview') !== {});
  })

});

describe('<NavBar />', () => {

    const wrapper = shallow(<NavBar />);
  
    it('should render the correct text', () => {
      expect(wrapper.text()).to.equal('Reviews');
    });

});

describe('<ReviewContainer />', () => {

  const wrapper = shallow(<ReviewContainer reviews={json}/>);  
  it('should render a Revew for each object in reviews.json', () => {
    expect(wrapper.find('Review')).to.have.lengthOf(json.length);
  });

});

describe('<SelectedReview />', () => {

  function returnStars(int){
    let stars = '';
    for(let i = 0; i < int; i++){
      stars += '⭐';
    }
    return stars;
  }

  let wrapper = shallow(<SelectedReview review={json[0]} returnStars={returnStars}/>);

  it('should render CommentForm if no response is passed in', () => {
    expect(wrapper.text()).to.contain('CommentForm');
  });

  let wrapperWithResp = shallow(<SelectedReview review={json[0]} response={'test response'} responder={'Anonymous'} returnStars={returnStars}/>);

  it('should render Comment if a response is passed in', () => {
    expect(wrapperWithResp.text()).to.contain('Comment ');
  });

});

