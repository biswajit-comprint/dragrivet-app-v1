import React from 'react';
import {Container, Row, Col, Table, Button, Image } from 'react-bootstrap';

const ProfileImage = {
    width: "40px",
    height: "40px"
  }

function ClientMaster() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            Advertisement Master
                        </div>
                        <div className="card-body">
                            <Row>
                                <Col xs={12} md={4} lg={3}>Client</Col>
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
                                <Col xs={12} md={4} lg={3}>Upload Image for Adv</Col>
                                <Col xs={12} md={8} lg={9}>
                                    <div className="form-group">
                                        <input type="file" className="form-control"/>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={4} lg={3}>Image link</Col>
                                <Col xs={12} md={8} lg={9}>
                                    <div className="form-group">
                                        <input type="url" className="form-control"/>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={4} lg={3}>Show Image Duration Slide</Col>
                                <Col xs={12} md={8} lg={9}>
                                    <div className="form-group">
                                        <input type="time" className="form-control"/>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={3} lg={3}>Show Image Duration Date</Col>
                                <Col xs={12} md={4} lg={4}>
                                    <div className="form-group">
                                        <input type="date" className="form-control"/>
                                    </div>
                                </Col>
                                <Col xs={12} md={5} lg={5}>
                                    <div className="form-group">
                                        <input type="date" className="form-control"/>
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
                            View Advertisement Master
                        </div>
                        <div className="card-body">
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>Client Name</th>
                                        <th>Image</th>
                                        <th>Client Link</th>
                                        <th>Duration Time</th>
                                        <th>Duration Date</th>
                                        <th>...</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>..</td>
                                        <td><Image src="https://www.shareicon.net/data/2017/02/09/878597_user_512x512.png" style={ProfileImage} roundedCircle/></td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" className="btn btn-primary">
                                                    Edit
                                                </button>
                                                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#myModal">Delete</button>
                                            </div>
                                            <div className="modal" id="myModal">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h4 className="modal-title">Modal Heading</h4>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                Modal body..
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
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

export default ClientMaster;