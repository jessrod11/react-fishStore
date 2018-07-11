import React from 'react';
// import moment from 'moment';

import orderRequests from '../../FirebaseRequests/orders';
// import fishRequests from '../../firebaseRequests/fishes';

// import formatPrice from '../../helpers';

import './SingleOrder.css';

class SingleOrder extends React.Component {

  deleteOrderClick = () => {
    const firebaseId = this.props.match.params.id;
    orderRequests
      .deleteRequest(firebaseId)
      .then(() => {
        this.props.history.push('/orders');
      })
      .catch(((err) => {
        console.error('error with get delete request', err);
      }));
  }

  render () {
    return (
      <div className="SingleOrder col-xs-12 text-center">
        <h2>Order Number: </h2>
        <h4>Order Date:</h4>
        <div className="row fishes">
          <div className="col-xs-8 col-xs-offset-2">
            {/* <ul>{fishComponents}</ul> */}
          </div>
        </div>
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2 totals">
            <h3>
              Total Cost: <strong></strong>
            </h3>
          </div>
        </div>
        <div>
          <div className="col-xs-6">
            <button className="col-xs-12 btn btn-default">
              Update Order
            </button>
          </div>
          <div className="col-xs-6">
            <button className="col-xs-12 btn btn-danger" onClick={this.deleteOrderClick}>
              Delete Order
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleOrder;
