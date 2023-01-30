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
                            Client Master
                        </div>
                        <div className="card-body">
                            <Row>
                                <Col xs={12} md={4} lg={3}>Client Name</Col>
                                <Col xs={12} md={8} lg={9}>
                                    <div className="form-group">
                                        <input type="text" className="form-control"/>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={4} lg={3}>Client Details</Col>
                                <Col xs={12} md={8} lg={9}>
                                    <div className="form-group">
                                        <textarea className="form-control" rows="3">

                                        </textarea>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={4} lg={3}>Client Image</Col>
                                <Col xs={12} md={8} lg={9}>
                                    <div className="form-group">
                                        <input type="file" className="form-control"/>
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
                            View Client Master
                        </div>
                        <div className="card-body">
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>Client Name</th>
                                        <th>Client Details</th>
                                        <th>Client Image</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>..</td>
                                        <td>..</td>
                                        <td><Image src="https://www.shareicon.net/data/2017/02/09/878597_user_512x512.png" style={ProfileImage} roundedCircle/></td>
                                        <td>
                                            <div className="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" className="btn btn-primary">
                                                    Edit
                                                </button>
                                                <button type="button" className="btn btn-danger">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>..</td>
                                        <td>..</td>
                                        <td><Image src="https://www.shareicon.net/data/2017/02/09/878597_user_512x512.png" style={ProfileImage} roundedCircle/></td>
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

export default ClientMaster;