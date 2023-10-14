import { useCallback, useEffect, useState } from 'react';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SearchIcon from '@mui/icons-material/Search';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import SimpleDialogDemo from './Dropdown';
import SearchBox from './SearchBox';

export default function Header() {
  const [searchbar, setSearchBar] = useState(false);

  const handleSearchClick = useCallback(() => {
    setSearchBar(!searchbar);
  }, [searchbar]);

  const closeSearchBar = useCallback(() => {
    setSearchBar(false);
  }, []);

  useEffect(() => {
    if (searchbar) {
      // Add an event listener to the window to listen for clicks
      window.addEventListener('click', closeSearchBar);
    } else {
      // Remove the event listener when the search bar is closed
      window.removeEventListener('click', closeSearchBar);
    }
    return () => window.removeEventListener('click', closeSearchBar);
  }, [searchbar, closeSearchBar]);

  const handleSearchButtonClick = (event: any) => {
    // Prevent the click event from propagating to the window click listener
    event.stopPropagation();
    handleSearchClick();
  };

  return (
    <>
      <SearchBox searchbar={searchbar} />
      <header id="header">
        <div id="header-wrap">
          <nav className="secondary-nav border-bottom">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-md-4 header-contact">
                  <p>Let talk! <strong>+57 444 11 00 35</strong></p>
                </div>
                <div className="col-md-4 shipping-purchase text-center">
                  <p>Free shipping on a purchase value of $200</p>
                </div>
                <div className="col-md-4 col-sm-12 user-items">
                  <ul className="d-flex justify-content-end list-unstyled">
                    <li>
                      <a href="Register">
                        <PersonIcon />
                      </a>
                    </li>
                    <li>
                      <a href="cart.html">
                        <ProductionQuantityLimitsIcon />
                      </a>
                    </li>
                    <li>
                      <a href="wishlist.html">
                        <i className="icon icon-heart"></i>
                      </a>
                    </li>
                    <li className="user-items search-item pe-3">
                      <a href="#" className="search-button" onClick={handleSearchButtonClick}>
                        <SearchIcon />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          <Navbar bg="light" data-bs-theme="light">
            <Container>
              <Row className="d-flex align-items-center">
                <Col xs={12} sm={6}>
                  <div className="main-logo text-center text-sm-start">
                    <Navbar.Brand href="/">
                      <img src="/main-logo.png" alt="logo" />
                    </Navbar.Brand>
                  </div>
                </Col>
                <Col xs={12} sm={6}>
                  <Nav className="row d-flex justify-content-center justify-content-sm-end">
                    <SimpleDialogDemo item="Home" />
                    <SimpleDialogDemo item="About" />
                    <SimpleDialogDemo item="Shop" />
                    <SimpleDialogDemo item="Pages" />
                    <SimpleDialogDemo item="Contact" />
                  </Nav>
                </Col>
              </Row>
            </Container>
          </Navbar>
        </div>
      </header>
    </>
  );
}
