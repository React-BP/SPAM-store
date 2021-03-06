import React, { Component } from 'react';
import classes from "./SingleItem.css";
import Button from '../Button/button';
import { Query } from 'mongoose';
import API from '../../../utils/API';

class SingleItem extends Component {
    constructor(props) {
        super(props);
            this.state = {
                quantity: '',
                size:'',
                item: {},
                cart: {}
            }

        this.handleChange = this.handleChange.bind(this);
        this.handleRadio = this.handleRadio.bind(this);
        this.orderHandler = this.orderHandler.bind(this);
    }

    componentDidMount(){

        this.setState({
            item: this.props.item,
            cart: this.props.cart
        });

    }
    
    handleChange(event){
        this.setState({
            quantity: event.target.value
        });
    }

    handleRadio(event){

        this.setState({
            size: event.target.value
        });
    }

    orderHandler(event){
        event.preventDefault();
        if(localStorage.getItem('user') == null){
            return;
        }
        
        const price = document.querySelector(".PriceVal").textContent;
        console.log(price);
        alert(`Quantity Value: ${this.state.quantity}  Size Value: ${this.state.size} `);
        const id = localStorage.getItem('user');
        console.log(id);
        if (Object.keys(this.state.cart).length === 0) {

            const toAdd = [];
            toAdd.push(this.state.item);
            const order = {
                user: id,
                items: toAdd,
                totalPrice: this.state.item.price,
                paid: false
            }
            
            console.log('order is:', order);

            API.createOrder(id, order)
                .then((res) => {
                    this.setState({
                        cart: res.data,
                        itemModal: false
                    });
                });
        }
        else {

           const cart = this.state.cart.items;
            cart.push(this.state.item);                
            API.updateOrder(this.state.cart._id, this.state.cart)
                .then((res) => {
                    this.setState({
                        cart: res.data,
                        itemModal: false
                    });
                });
        }

    }
    
    
    render() {
        const style = {
            image: {
                height: 250,
                width: 250
            },
            brand: {
                textAlign: 'center'
            }
        }
        console.log('props is: ', this.props);

        return (
            <div className={classes.modalContent}>
                <div>
                    <img style={style.image} src={this.props.singleItemPic} alt={this.props.singlePicInfo} />
                    <h3 style={style.brand}>{this.props.singleItemBrand}</h3>
                    <h4 style={style.brand}>{this.props.singleItemName}</h4>
                </div>
                <div className={classes.orderBox}>
                    <form>
                        <h1>Quantity</h1>
                        <select value={this.state.quantity} onChange={this.handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <h1>Sizes</h1>           
                            <div className={classes.radioBtn}>
                                <label for="XS">XS</label>
                                    <input type="radio" name="XS" value="XS" 
                                    checked={this.state.size === "XS"}
                                    onChange={this.handleRadio}/>                                                      
                                <label for="S">S</label>
                                     <input type="radio" name="S" value="S"
                                        checked={this.state.size === "S"}
                                        onChange={this.handleRadio} />                                  
                                <label for="M">M</label>
                                    <input type="radio" name="M" value="M"
                                        checked={this.state.size === "M"}
                                        onChange={this.handleRadio} />                                    
                                <label for="L">L</label>
                                    <input type="radio" name="L" value="L"
                                        checked={this.state.size === "L"}
                                        onChange={this.handleRadio} />                                   
                                <label for="XL">XL</label>
                                    <input type="radio" name="XL" value="XL"
                                        checked={this.state.size === "XL"}
                                        onChange={this.handleRadio} />                              
                            </div>                      
                    </form>
                    <h1>Price: <span className="PriceVal">${this.props.singleItemPrice}</span></h1>
                    <Button btnType='Order' clicked={this.orderHandler}>Order</Button>
                </div>
            </div>
        );
    }
}

export default SingleItem;

