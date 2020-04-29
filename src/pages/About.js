import React, { Component } from 'react'
import { Container, Row, Col   } from 'react-bootstrap';
import axios from 'axios';

export default class About extends Component {

    constructor(props, context) {
        super (props, context);
            this.state = {
                employeeDiscountInfo: [],
                errorInLoading: null,
                allCurrencies: [],
                errorIngettingCurrency: null
            }
    }

    getEmployeeDiscount = () => {
        axios ({
            method: 'get',
            url: 'http://mat-api-dev.mybluemix.net/admin/discount',
        }).then (res => {
            if(res.data.status === 'SUCCESS') {
                const getEmployeeDiscount = res.data.discount.filter ((discount) =>  discount.discountType === 'Employee Discount') || []
                this.setState ({
                    employeeDiscountInfo: getEmployeeDiscount
                })
            }
            else {
                const {errors} = res.data.errors
                this.setState ({
                    errorInLoading: errors
                })
            }
        }).catch ( err => {
            this.setState ({
                errorInLoading: err
            })
        })
    }

    getAllCurrency=()=>{
        axios({
            method: 'get',
            url: 'http://mat-api-dev.mybluemix.net/admin/currency',
        }).then(res=>{
            if(res.data.status === 'SUCCESS') {
                const currencies = res.data.currency || []
                this.setState ({
                    allCurrencies: currencies
                })
            }else{
                const {errors} = res.data.errors
                this.setState({
                    errorIngettingCurrency: errors
                })
            }
        }).catch(err => {
            this.setState({
                errorIngettingCurrency: err
            })
        })
    }

    renderDropdownCategories =()=> {
        return this.state.allCurrencies.filter(curren => {
            return curren.selected === true
        }).map(currency => {
            return <option value={JSON.stringify(currency)}>{currency.name}</option>
        }
        
        )
    }

    componentDidMount () {
        this.getEmployeeDiscount();
        this.getAllCurrency();
    }


    render() {
        console.log(this.state)
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Discount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employeeDiscountInfo && this.state.errorInLoading === null && this.state.employeeDiscountInfo.length > 0
                        && this.state.employeeDiscountInfo.map (discount => {
                            return (
                                <tr>
                                    <td>{discount.discountType}</td>
                                    <td>{discount.discountName}</td>
                                </tr>    
                            )
                        })}
                        {
                            this.state.errorInLoading !== null && <tr>
                                Error in loading data!!
                                </tr>
                        }
                    </tbody>    
                </table>
                <hr />
                Currency <br />
                <lable>Add Currency</lable><br />
                <select>
                        <option>Select</option>
                        {this.renderDropdownCategories()}
                </select>    
                <hr />
            
            </div>
        )
    }
}
