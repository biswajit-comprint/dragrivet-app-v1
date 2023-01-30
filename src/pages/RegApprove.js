import React from 'react';
import { Container, Row, Col, Table, Button, Dropdown } from 'react-bootstrap';

const headerColor = {
  backgroundColor: "#233d7ee6",
  color: "white"
}

function RegApprove() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="card shadow h-100">
            <div className="card-header bg-primary text-white">
              Registration Approve
            </div>
            <div className="card-body p-0">
              <Table striped bordered hover responsive>
                <thead style={headerColor}>
                  <tr>
                    <th>Id</th>
                    <th>F.Name</th>
                    <th>L.Name</th>
                    <th>Farm Name</th>
                    <th>Farm Plot No</th>
                    <th>Farm Steet No</th>
                    <th>Farm Village</th>
                    <th>Farm Post Office</th>
                    <th>Farm Police station</th>
                    <th>Farm District</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zipcode</th>
                    <th>Phone No</th>
                    <th>Secondary Ph No</th>
                    <th>Adhar No</th>
                    <th>Photo</th>
                    <th>Farm Doc Type</th>
                    <th>Farm Doc</th>
                    <th>Farm Doc Picture</th>
                    <th>Designation</th>
                    <th>Business Type</th>
                    <th>Prefeared Language</th>
                    <th>Password</th>
                    <th>OTP</th>
                    <th>Approve</th>
                    <th>Delete</th>
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
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
                          Action
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/Approve">Approve</Dropdown.Item>
                          <Dropdown.Item href="#/Block">Block</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td>
                      <Button variant="primary" size="sm">Delete</Button>
                    </td>
                  </tr>
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
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
                          Action
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/Approve">Approve</Dropdown.Item>
                          <Dropdown.Item href="#/Block">Block</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td>
                      <Button variant="primary" size="sm">Delete</Button>
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

export default RegApprove;
