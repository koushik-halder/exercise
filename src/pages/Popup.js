import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class Popup extends Component {
    render() {
        return (
            <div>
      <Modal show={this.props.show} onHide={this.props.closeAddCategory}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            New Sub Category Name
            <br></br>
            <input
            type="text"
            className="gloabl_input"
            pattern="[A-Za-z]{1,15}"
            title="Sub Category Name should only contain alphabet"
           
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary"> Create </Button>
        </Modal.Footer>
      </Modal>
            </div>
        )
    }
}
