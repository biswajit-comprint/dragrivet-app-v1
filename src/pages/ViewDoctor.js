import React from 'react';
import {Container, Row, Col, Table, Image} from 'react-bootstrap';


const ProfileImage = {
  width: "40px",
  height: "40px"
}

function ViewDoctor() {
  return (
    <>
        <Container>
            <Row>
                <Col>
                    <div className="card shadow h-100">
                        <div className="card-header bg-primary text-white">
                            View Doctors
                        </div>
                        <div className="card-body p-0">
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>F.Name</th>
                                        <th>L.Name</th>
                                        <th>Gender</th>
                                        <th>Date of Birth</th>
                                        <th>Pan No</th>
                                        <th>Council Reg No</th>
                                        <th>Council Reg Certifecate</th>
                                        <th>Photo</th>
                                        <th>Year of Practics</th>
                                        <th>Specilazition</th>
                                        <th>Bulding No</th>
                                        <th>Street No</th>
                                        <th>Street Name</th>
                                        <th>Area</th>
                                        <th>Post Office</th>
                                        <th>Pilice St.</th>
                                        <th>Panchyet</th>
                                        <th>Block</th>
                                        <th>Landmark</th>
                                        <th>District</th>
                                        <th>State</th>
                                        <th>Zip code</th>
                                        <th>Bulding No</th>
                                        <th>Street No</th>
                                        <th>Street Name</th>
                                        <th>Area</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>
                                            <Image src="https://www.shareicon.net/data/2017/02/09/878597_user_512x512.png" style={ProfileImage} roundedCircle/>
                                        </td>
                                        <td>
                                            <Image src="https://www.shareicon.net/data/2017/02/09/878597_user_512x512.png" style={ProfileImage} roundedCircle/>
                                        </td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                    </tr>
                                    <tr>
                                    <td>1</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>
                                            <Image src="https://www.shareicon.net/data/2017/02/09/878597_user_512x512.png" style={ProfileImage} roundedCircle/>
                                        </td>
                                        <td>
                                            <Image src="https://www.shareicon.net/data/2017/02/09/878597_user_512x512.png" style={ProfileImage} roundedCircle/>
                                        </td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
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

export default ViewDoctor;