import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactInfo.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactInfo extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = { 
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: '',
            address: {
                street: '',
                zipCode: '',
                country: '',
            },
            email: '',
            deliveryMethod: 'fast'
        }
        axios.post('/orders.json',order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false});
            });
        console.log(this.props.ingredients);
    }

    render () {
        let form = (
            <form>
                <input type = "text" name = "name" placeholder= "Your Name" />
                <input type = "email" name = "email" placeholder= "Your email" />
                <input type = "text" name = "street" placeholder= "Street" />
                <input type = "text" name = "postal" placeholder= "Postal Code" />
                <br>
                <Button btnType="Success" clicked = {this.orderHandler}>ORDER</Button>
            </form>
        );
        if(this.state.loading) {
            form =<Spinner />
        }
        return (
            <div className={classes.ContactInfo}>
                <h4>Enter your Contact Information</h4>
                {form}
            </div>
        );
    }
}

export default ContactInfo;