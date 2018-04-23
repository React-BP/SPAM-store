import React, { Component } from "react";
import Results from "./Results";
import Filter from "../../UI/Filter/Filter";
import Header from './../../Header/Header';
import wetImg from '../../../assets/Images/wetsuit.jpg';
import API from "../../../utils/API";

class Wetsuits extends Component {
    state = {
        items: [],
        loading: true
    };

    componentDidMount() {
        this.loadWetsuits()
    }

    loadWetsuits(){
        API.searchItems('wetsuits')
            .then(res => {

                const fetched = [];
                for (let key in res.data) {
                    fetched.push({
                        ...res.data[key],
                        id: key
                    });
                }

                this.setState({
                    loading: false,
                    items: fetched
                });

            }).catch(err => {
                this.setState({ loading: false });
            });
    }

    loadSortedWetsuits(){
        API.searchSortedItems({
            type: 'wetsuits',
            sort: 'price'
        })
            .then(res => {

                const fetched = [];
                for (let key in res.data) {
                    fetched.push({
                        ...res.data[key],
                        id: key
                    });
                }

                this.setState({
                    loading: false,
                    items: fetched
                });

            }).catch(err => {
                this.setState({ loading: false });
            });
    }

    loadWetsuitsByGender(gender){
        API.searchSortedItemsByGender({
            type: 'wetsuits',
            gender: gender
        })
            .then(res => {

                const fetched = [];
                for (let key in res.data) {
                    fetched.push({
                        ...res.data[key],
                        id: key
                    });
                }

                this.setState({
                    loading: false,
                    items: fetched
                });

            }).catch(err => {
                this.setState({ loading: false });
            });
    }

    loadSortedWetsuitsByGender(gender){
        API.searchSortedItemsByGender({
            type: 'wetsuits',
            gender: gender,
            sort: 'price'
        })
            .then(res => {

                const fetched = [];
                for (let key in res.data) {
                    fetched.push({
                        ...res.data[key],
                        id: key
                    });
                }

                this.setState({
                    loading: false,
                    items: fetched
                });

            }).catch(err => {
                this.setState({ loading: false });
            });
    }

    loadItem(id) {
        API.searchItem(id)
            .then(res => {
                this.setState({
                    featured: res.data
                });
            }).catch(err => {
                this.setState({ loading: false });
            })
    }

    render() {
        return (
            <div className={classes.mainBox}>
                <Filter />
                <Header
                    image={wetImg}
                    title='Wetsuits' />
            </div>
        );
    }
}

export default Wetsuits;
