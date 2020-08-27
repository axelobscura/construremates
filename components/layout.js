import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import {FormControl} from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

const name = 'Your Name'
export const siteTitle = 'CONSTRUREMATES La tienda del constructor'

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css" />
      </Head>
      <header className="header">
        <Container>
            <Navbar bg="black" expand="lg">
                <Navbar.Brand href="#home">
                    <img src="logo.png" alt="" title="" style={{ maxWidth: '190px', marginLeft: '-15px' }} />
                </Navbar.Brand>
                <Form.Group style={{width: '100%', marginTop: '20px'}}>
                    <InputGroup className="mb-3" style={{ marginTop: '10px' }}>
                        <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="Categoría"
                        id="input-group-dropdown-1"
                        >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                        </DropdownButton>
                        <FormControl aria-describedby="basic-addon1" style={{borderRadius: '0 50px 50px 0', marginRight: '20px'}} />
                    </InputGroup>
                </Form.Group>
                <div className="micuentaHeader">
                    <p>Mis compras</p>
                    <p>(2) = $50,000.00</p>
                </div>
            </Navbar>
        </Container>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div className="legales">
            <Container>
                <p>© 2020 CONTRUREMATES La tienda del constructor.</p>
            </Container>
        </div>
      </footer>
      <style global jsx>{`
        body {
          background: #f2f2f2;
        }
        p {
            margin: 0;
            padding:0;
        }
        .header {
            background: #000000;
            padding: 20px;
        }
        .micuentaHeader {
            
        }
        .micuentaHeader p {
            color: #ffffff;
            font-size: 0.7rem;
            font-weight: bold;
        }
        .footer {
            background: #000000;
        }
        .legales {
            background: rgb(177,152,9);
            background: linear-gradient(355deg, rgba(177,152,9,1) 0%, rgba(255,216,0,1) 100%);
            padding: 10px;
            margin-top: 10px;
        }
      `}</style>
    </div>
  )
}