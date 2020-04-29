import React, { Component } from 'react'
import ReactTable from "react-table"
import "react-table/react-table.css"

export default class RegionTable extends Component {

    state={
        posts: []
    }
    componentDidMount(){
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url, {
            method: "GET"
        }).then(reponse => reponse.json().then(posts=> {
            console.log("posts" , posts);
            this.setState({ posts: posts })
        }))
    }
    deleteRow(id){
        console.log("id", id)
    }

    render() {
        const columns = [
            {
                Header: "User ID",
                accessor: "userId",
                style: {
                    textAlign: 'center'              
                },
                width: 100,
                minWidth: 100,
                maxWidth: 100
            },
            {
                Header: "ID",
                accessor: "id",
                style: {
                    textAlign: 'center'              
                },
                width: 100,
                minWidth: 100,
                maxWidth: 100
            },
            {
                Header: "Title",
                accessor: "title",
                sortable: false,
                filterable: false
            },
            {
                Header: "Content",
                accessor: "body",
                sortable: false,
                filterable: false
            },
            {
                Header: "Action",
                Cell: props => {
                    return(
                        <button
                          onClick={()=>{
                              console.log("props" , props);
                              this.deleteRow(props.original.id)
                          }}
                        >Delete</button>
                    )
                },
                sortable: false,
                filterable: false,
                width: 150,
                minWidth: 150,
                maxWidth: 150
            }

        ]
        return (
            <div>
                <ReactTable
                  columns={columns}
                  data={this.state.posts}
                  filterable
                  defaultPageSize={5}
                  // showPaginationTop
                  // showPageSizeOptions={false}
                  noDataText={"Please wait...."}
                >

                </ReactTable>

                
            </div>
        )
    }
}
