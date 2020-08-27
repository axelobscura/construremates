import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

const name = 'Your Name'
export const siteTitle = 'CONSTRUREMATES La tienda del constructor'

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="header">
        <Container>
            <Navbar bg="black" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
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