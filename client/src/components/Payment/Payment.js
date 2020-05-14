import React, { Component } from 'react'

import ReactStripeCheckout from 'react-stripe-checkout'
import { handleToken } from '../../store/action/actionAuth'
import { connect } from 'react-redux'

class Payment extends Component {
    render() {
        return (
           <ReactStripeCheckout
                amount = {500}
                token = {token => this.props.handleToken(token)}
                stripeKey = {process.env.REACT_APP_STRIPE_KEY}
           />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleToken: (token) => dispatch(handleToken(token))
    }
}
export default connect(null, mapDispatchToProps)(Payment);