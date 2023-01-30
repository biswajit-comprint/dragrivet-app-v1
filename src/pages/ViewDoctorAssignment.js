import React from 'react';
import {Container, Row, Col, Table, Button} from 'react-bootstrap';

function ViewDoctorAssignment() {
  return (
    <>
        <Container>
            <Row>
                <Col>
                    <div className="card shadow h-100">
                        <div className="card-header bg-primary text-white">
                            View Doctors Assignment
                        </div>
                        <div className="card-body p-0">
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>Ticket Id</th>
                                        <th>Case Create Date</th>
                                        <th>Doctor name</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Save</th>
                                        <th>Change Doctor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <input type="date" className="form-control"/>
                                        </td>
                                        <td>
                                            <select className="form-control">
                                                <option value="Doctor-1">Doctor 1</option>
                                                <option value="Doctor-2">Doctor 2</option>
                                                <option selected value="Doctor-3">Doctor 4</option>
                                                <option value="Doctor-4">Doctor 4</option>
                                            </select>
                                        </td>
                                        <td>
                                            <input type="date" className="form-control"/>
                                        </td>
                                        <td>
                                            <input type="time" className="form-control"/>
                                        </td>
                                        <td><Button className='btn btn-sm btn-primary'>Save</Button></td>
                                        <td>
                                            <select className="form-control">
                                                <option value="Doctor-1">Doctor 1</option>
                                                <option value="Doctor-2">Doctor 2</option>
                                                <option selected value="Doctor-3">Doctor 4</option>
                                                <option value="Doctor-4">Doctor 4</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>
                                            
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default ViewDoctorAssignment;