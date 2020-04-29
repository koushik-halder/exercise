import React, { Component } from 'react'
import Popup from './Popup'
import axios from 'axios'

export default class Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            showCategory: false,
            id: '',
            name: '',
            errorInLoading: null
        }
    }

    closeAddCategory =()=> {
        this.setState ({
            showCategory: false
        })
    }
    openAddCategory =()=> {
        this.setState ({
            showCategory: true
        })
    }
    openPopup =(e)=> {
        if (e.target.value ===  'add_category' )
            this.openAddCategory()
         else
            this.setState ({ selectedProduct: e.target.value})   
    }

    // !!!!!!!!!!!!!!!!

    addCardDiscount(id, name) {
        if (id.length > 0 && name.length > 0) {
          axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts/1/comments',
            data: {
              "id": id,
              "name": name
            }
          }).then(res => {
            if (res.status === 200) {
              this.setState({
                id: '',
                name: ''
              })
             //  this.props.getEmployeeDiscount()  //
             //  this.props.closeAddCategory()
            }
            else {
              const { errors } = res.data
              this.setState({
                errorInLoading: errors
              })
            }
          })
            .catch(err => {
              this.setState({
                errorInLoading: err
              })
            });
    
          // this.props.getEmployeeDiscount()
        //   this.props.closeAddCategory()
        }
       
      }


    render() {
        return (
            <div>
                <select onChange={(e) => this.openPopup(e)}>
                    <option selected="selected" disabled="disabled">Select</option>
                    <option value="add_category">+ Add Sub Category</option>
                    <option>option 2</option>
                    <option>option 3</option>
                 </select>   

                 <Popup 
                 show = {this.state.showCategory}
                 closeAddCategory = {this.closeAddCategory}
                 
                 />

                 <hr /><br />

                 <div className="col">
              <lable className="discount_popup_lebel">id</lable>
              <input type="text" className="gloabl_input" onChange={(e) => this.setState({ id: e.target.value })} /> <br /><br />

              <lable className="discount_popup_lebel">Card Partner</lable>
              <input type="text" className="gloabl_input" onChange={(e) => this.setState({ id: e.target.value })} /> <br /><br />

             
            </div>

            <button variant="primary" onClick={() => this.addCardDiscount(this.state.id, this.state.name)}>
            SAVE
          </button>
          {
            this.state.errorInLoading !== null &&
            <div>
              Error In loading Data
            </div>
          }



            </div>

        )
    }
}
