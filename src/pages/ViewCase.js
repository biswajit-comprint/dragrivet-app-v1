import React from 'react';
import {Container, Row, Col, Table, Image, Accordion, Button } from 'react-bootstrap';

const ProfileImage = {
  width: "40px",
  height: "40px"
}

function DeleteUserData() {
  return (
    <Container>
      <Row>
        <Col>
            <div className="card shadow h-100">
                <div className="card-header bg-primary text-white">
                    View Case
                </div>
                <div className="card-body p-0">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Ticket Id #1</Accordion.Header>
                            <Accordion.Body>
                                <Table striped bordered hover responsive>
                                    <tbody>
                                        <tr>
                                            <td>Ticket Id</td>
                                            <td>4256255</td>
                                        </tr>
                                        <tr>
                                            <td>Sub Id</td>
                                            <td>5265</td>
                                        </tr>
                                        <tr>
                                            <td>Case Problem</td>
                                            <td>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Shade Inside Image</td>
                                            <td>
                                                <Image src="https://www.shareicon.net/data/2017/02/09/878597_user_512x512.png" style={ProfileImage} roundedCircle/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ambiance Image</td>
                                            <td>
                                                <Image src="https://www.shareicon.net/data/2017/02/09/878597_user_512x512.png" style={ProfileImage} roundedCircle/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Postmortom Image</td>
                                            <td>
                                                <Image src="https://www.shareicon.net/data/2017/02/09/878597_user_512x512.png" style={ProfileImage} roundedCircle/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>OTP</td>
                                            <td>525</td>
                                        </tr>
                                        <tr>
                                            <td>User Rating</td>
                                            <td>4</td>
                                        </tr>
                                        <tr>
                                            <td>Doctor Remark</td>
                                            <td>...</td>
                                        </tr>
                                        <tr>
                                            <td>User Feedback</td>
                                            <td>...</td>
                                        </tr>
                                        <tr>
                                            <td>Case Type</td>
                                            <td>...</td>
                                        </tr>
                                        <tr>
                                            <td>Case Date</td>
                                            <td>...</td>
                                        </tr>
                                        <tr>
                                            <td>Chat</td>
                                            <td>
                                                <Button variant="primary">Chat</Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Details</td>
                                            <td>...</td>
                                        </tr>
                                        <tr>
                                            <td>Action</td>
                                            <td>
                                                <Button variant="primary">Block</Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Ticket Id #2</Accordion.Header>
                            <Accordion.Body>
                                sda
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DeleteUserData;
