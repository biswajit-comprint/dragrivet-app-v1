import React from 'react';
import {Container, Row, Col, Table, Button, Image, Form } from 'react-bootstrap';

const ProfileImage = {
    width: "40px",
    height: "40px"
  }

function WallPost() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            Wall Post 123
                        </div>
                        <div className="card-body">
                            <Row>
                                <Col xs={12} md={4} lg={3}>
                                    <Form.Label>Upload Image</Form.Label>
                                </Col>
                                <Col xs={12} md={8} lg={9}>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Control type="file" className="form-control"/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={4} lg={3}>Language Type</Col>
                                <Col xs={12} md={8} lg={9}>
                                    <div className="form-group">
                                        <select className="form-control">
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col xs={12} md={4} lg={3}>Post Title</Col>
                                <Col xs={12} md={8} lg={9}>
                                    <div className="form-group">
                                        <input type="text" className="form-control"/>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={4} lg={3}>Details</Col>
                                <Col xs={12} md={8} lg={9}>
                                    <div className="form-group">
                                        <textarea className="form-control" rows="3"></textarea>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={12} lg={12}>
                                    <Button type="button" className='btn btn-primary float-end'>Save</Button>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className="card shadow mt-2">
                        <div className="card-header bg-primary text-white">
                            View Wall Post
                        </div>
                        <div className="card-body">
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Post Title</th>
                                        <th>Details in Bengali</th>
                                        <th>Details in English</th>
                                        <th>Details in Hindi</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        
                                        <td><Image src="https://www.shareicon.net/data/2017/02/09/878597_user_512x512.png" style={ProfileImage} roundedCircle/></td>
                                        <td>..</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>
                                            <div className="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" className="btn btn-primary">
                                                    Edit
                                                </button>
                                                <button type="button" className="btn btn-danger">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default WallPost;