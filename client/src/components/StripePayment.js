import React, { Component } from "react";
import StripeCheckout from 'react-stripe-checkout';
import { connect } from "react-redux";
import * as actions from '../actions'

class StripePayment extends Component {
    render () {
        return (
            <StripeCheckout
                name="Email-boi"
                description="$5 for 5 emails"
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}>
                <button className="btn">
                    Add Credits
                </button>
            </StripeCheckout>
        )
    }
}

export default connect(null, actions)(StripePayment);