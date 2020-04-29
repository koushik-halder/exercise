import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadMainCategories } from '../action/mainCategory'

class MainCategory extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            //  mainCategories: [],
            showCategory: false
        };
    }

    componentDidMount() {
        this.props.loadMainCategories();
    }


    renderDropdownCategories = () => {
        if (this.props.mainCategory.isFetching)
            return <option value="loading" > Loading.....</option>

        if (this.props.mainCategory.errors !== null)
            return <option value="loading" >  Error in loading categories </option>

        if (this.props.mainCategory.mainCategories && this.props.mainCategory.mainCategories.length > 0) {
            return this.props.mainCategory.mainCategories.map(category => {
                return category.name && category.name.length > 0 ?
                    <option value={JSON.stringify(category.name)} > {category.name} </option>
                    : null
            })
        }

    }


    render() {
        const { mainCategory } = this.props
        return (

            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="general_conﬁg_box">
                                <div className="main_cat_select_box">
                                    <label className="">Main Category</label>
                                    <br />
                                    <select id="selectbox" data-selected="" style={{ marginTop: '7px' }}>
                                        <option value="" selected="selected" disabled="disabled"  >Select</option>
                                        <option value="add_category" >+ Add Main Category</option>
                                        {this.renderDropdownCategories()}
                                    </select>

                                    {mainCategory.errors !== null &&
                                        mainCategory.errors.length > 0 &&
                                        mainCategory.errors.map(error =>
                                            error
                                    )}
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
   //  subCategory: state.subCategory,
    mainCategory: state.mainCategory
})

export default connect(mapStateToProps, { loadMainCategories })(MainCategory)