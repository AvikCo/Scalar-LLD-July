import Spinner from 'react-bootstrap/Spinner';
import { Component } from 'react';


class SpinnerComp extends Component {

  render(){
      return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
  }

}


export default SpinnerComp;