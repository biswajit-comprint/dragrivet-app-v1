import React from 'react';
import { Container, Row, Col, Table, Image } from 'react-bootstrap';

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
              Delete User Data
            </div>
            <div className="card-body p-0">
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>F.Name</th>
                    <th>L.Name</th>
                    <th>Farm Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                    <th>Phone No</th>
                    <th>Adhar No</th>
                    <th>Photo</th>
                    <th>Form Drescription</th>
                    <th>Form Doc Picture</th>
                    <th>Designation</th>
                    <th>Business Type</th>
                    <th>Prefered Language</th>
                    <th>Password</th>
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
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>
                      <Image src="https://www.shareicon.net/data/2017/02/09/878597_user_512x512.png" style={ProfileImage} roundedCircle/>
                    </td>
                    <td>...</td>
                    <td>
                      <Image src="https://www.shareicon.net/data/2017/02/09/878597_user_512x512.png" style={ProfileImage} roundedCircle/>
                    </td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>
                      <Image src="https://www.shareicon.net/data/2017/02/09/878597_user_512x512.png" style={ProfileImage} roundedCircle/>
                    </td>
                    <td>...</td>
                    <td>
                      <Image src="https://www.shareicon.net/data/2017/02/09/878597_user_512x512.png" style={ProfileImage} roundedCircle/>
                    </td>
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
  );
}

export default DeleteUserData;
