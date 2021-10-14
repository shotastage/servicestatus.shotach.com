import React from "react";
import styled from "styled-components";
import { Navbar, Nav, Container, Row, Col, Card } from "react-bootstrap";

class App extends React.Component {
  fetchStatus(uri) {
    fetch(uri)
      .then(response => {
        if (String(response.status).slice(0, 1) === "2") {
          return true;
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  fetchHealth(uri) {
    fetch(uri)
      .then(response => {
        response.json();
      })
      .then(responseJson => {
        this.setState({
          loading: true,
          data: responseJson
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">servicestatus.xyz</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container>
          <Row style={{ margin: 10 }}>
            <Col>
              <Card>
                <Body>
                  <h1>tipstock.net</h1>
                  {
                    (this.fetchStatus("https://tipstock.net/")) ?
                    <DownMark/>
                    :
                    <ActiveMark />
                  }
                  
                </Body>
              </Card>
            </Col>
          </Row>

          <Row style={{ margin: 10 }}>
            <Col>
              <Card>
                <Body>
                  <h1>shotach.com</h1>
                  <DownMark />
                </Body>
              </Card>
            </Col>
          </Row>

          <Row style={{ margin: 10 }}>
            <Col>
              <Card>
                <Body>
                  <h1>l.pnstr.com</h1>
                  <DownMark />
                </Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;

const Body = styled(Card.Body)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 4em;
  padding-left: 4em;
`;

const ActiveMark = styled.div`
  background: #0ceb47;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const DownMark = styled.div`
  background: #eb0c31;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
