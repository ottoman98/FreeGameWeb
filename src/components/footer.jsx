import React from 'react';
import {
  CDBFooter,
  CDBFooterLink,
  CDBBtn,
  CDBIcon,
  CDBContainer,
  CDBBox,
} from 'cdbreact';

import '../styles/footer/footer.css';

function Footer() {
  return (
    <CDBFooter className="shadow footer-external-style">
      <CDBBox
        display="flex"
        flex="column"
        className=" mx-auto py-5"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src="./src/images/gigachad.png" width="30px" />
              <span className="ml-3 h5 font-weight-bold">
                Developed by Osman
              </span>
            </a>
          </CDBBox>
          <CDBBox
            display="flex"
            style={{ width: '50%' }}
            justifyContent="between"
          >
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                About Me
              </p>
              <CDBBox
                flex="column"
                display="flex"
                style={{ cursor: 'pointer', padding: '0' }}
              >
                <a href="">Landing page</a>
              </CDBBox>
            </CDBBox>

            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Legal
              </p>
              <CDBBox
                flex="column"
                display="flex"
                style={{ cursor: 'pointer', padding: '0' }}
              >
                <a href="">Privacy policies</a>
                <a href="">Data treatment</a>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                related pages
              </p>
              <CDBBox
                display="flex"
                flex="column"
                style={{ cursor: 'pointer', padding: '0' }}
              >
                <a href=""></a>
                <a href="">coming soon</a>
                <a href="">coming soon</a>
              </CDBBox>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox display="flex" className="mt-4" justifyContent="between">
          <small className="ml-2">
            &copy; Osman, 2022. All rights reserved.
          </small>
          <CDBBox display="flex">
            <CDBBtn flat color="dark" className="p-2">
              <a
                className="icon-footer"
                href="https://github.com/ottoman98"
                target="_blank"
              >
                <CDBIcon fab icon="github" />
              </a>
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-3 p-2">
              <a
                className="icon-footer"
                href="https://www.linkedin.com/in/osman-barros/"
                target="_blank"
              >
                <CDBIcon fab icon="linkedin" />
              </a>
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2">
              <a
                className="icon-footer"
                href="https://www.instagram.com/osmanzxc02/?hl=es"
                target="_blank"
              >
                <CDBIcon fab icon="instagram" />
              </a>
            </CDBBtn>
          </CDBBox>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
}
export default Footer;
