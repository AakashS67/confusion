import React, { useState, Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
import { Jumbotron, Row, Col, Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button, Label, Modal, ModalHeader, ModalBody, FormGroup, Form, Input } from 'reactstrap';
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);  //Length of value entered in input is less than maximum value
const minLength = (len) => (val) => (val) && (val.length >= len); //Value above minimum value

class CommentForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

    render() {
        return(
            <div className="container">
                <Button type='Button' outline color="secondary" onClick={this.toggleModal}><i className="fa fa-pencil"></i> Submit comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="rating" md={12}><strong>Rating</strong></Label>
                                    <Col md={9}>
                                        <Control.select model=".rating" name="rating" className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="author" md={12}><strong>Your name</strong></Label>
                                    <Col md={9}>
                                        <Control.text model=".author" id="author" name="author"
                                            placeholder="Your name"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15)
                                            }}
                                        />
                                    <Errors
                                        className='text-danger'
                                        model='.author'
                                        show='touched'
                                        messages={{
                                            required: 'Required. ',
                                            minLength: 'Must be atleast 2 characters ',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="comment" md={12}><strong>Comment</strong></Label>
                                    <Col md={9}>
                                        <Control.textarea model=".message" id="message" name="message"
                                            rows="6" placeholder="Enter your comments here"
                                            className="form-control" />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={9}>
                                        <Button type="submit" color="success">Submit Response</Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
    
}    

    function RenderDish({dish}) {
        if (dish != null) {
            return(
                <div>
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    function RenderComments({comments}){

            return (
                <div className="container">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map(opinion => {
                            return (
                                <div key={opinion.id}>
                                    <li>{opinion.comment}</li>
                                    <br></br>
                                    <li>--{opinion.author}___{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(opinion.date)))}</li>
                                    <br />
                                </div>
                            );
                        }
                        )}
                    </ul>
                    {<CommentForm />}
                </div>
            );
    }

    
    const Dishdetail = (props) => {

        return (
            <div className='container'>  
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                    <div className='col-12 col-md-5 m-3'>
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1"> 
                        <RenderComments comments={props.comments} />                          
                    </div>
                    
                </div>
            </div>
        );
    }
    
export default Dishdetail;