import React, { Component } from 'react';
import { connect } from 'react-redux';
import {loadSubcategory} from '../action/subcategory';
import { loadFlights } from '../action/flight';


class Subcategory extends Component {
    state = {
        subCategories: [],
        // isFetching: null
        // flights: []
    }
    componentDidMount(){
        this.props.loadSubcategory();
        this.props.loadFlights();
    }
    renderDropdownCategories =()=> {
        if(this.props.subCategory.isFetching)
            return <option value="loading">Loading...</option>
        if(this.props.subCategory.errors !== null)
            return <option value="loading">Loading in loading categories...</option> 
        if (this.props.subCategory.subCategories && this.props.subCategory.subCategories.length > 0) {
            return this.props.subCategory.subCategories.map(subCategory => {
                return subCategory.name && subCategory.name.length > 0 ?
                    <option value={JSON.stringify(subCategory.name)} > {subCategory.name} </option>
                    : null
            })
        }              
    }

    renderDropdownFlights = () => {
        console.log("data++", this.props.flight);
        if (this.props.flight.isFetching)
            return <option value="loading" > Loading.....</option>

        if (this.props.flight.errors !== null)
            return <option value="loading" >  Error in loading categories </option>

        if (this.props.flight.flights && this.props.flight.flights.length > 0) {
            return this.props.flight.flights.map(flightData => {
                return flightData.flightNumber && flightData.flightNumber.length > 0 ?
                    <option value={JSON.stringify(flightData.flightNumber)} > {flightData.flightNumber} </option>
                    : null
            })
        }
    }

    render() {
        // const {subCategory} = this.props
       //  console.log("data" , subCategory )
        return (
            <div>
                <select>
                    <option>select</option>
                    {this.renderDropdownCategories()}
                    
                </select>

                <br /><hr />
                <select>
                    <option>Select</option>
                    {this.renderDropdownFlights()}
                </select>    

                <br />
                
            </div>
           
        )
    }
}


const mapStateToProps = (state) => ({
    subCategory: state.subCategory,
    flight: state.flight
})

export default connect(mapStateToProps, { loadSubcategory, loadFlights })(Subcategory)
