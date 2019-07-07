import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactInfo from './ContactInfo/ContactInfo';

class Checkout extends Component {
    state = {
        ingredients: null,
        price:0
    }

    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price;
        for (let param of query.entries()){
            // ['salad', '1']
            if(param[0] === 'price'){
                price - param[1];
            }
            else{
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients: ingredients, totalPrice: price});
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-info');
    }
    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients} 
                    checkoutCancelled= {this.checkoutCancelledHandler}
                    checkoutContinued= {this.checkoutContinuedHandler} />
                <Route 
                    path={this.props.match.path + '/contact-info'}
                    render={(props) => (<ContactInfo ingredients={this.state.ingredients} price={this.state.totalPrice} {...props}/>) } />
            </div>
        )
    }
}

export default Checkout;