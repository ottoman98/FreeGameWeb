import React from 'react';
import {
  CDBFooter,
  CDBFooterLink,
  CDBBtn,
  CDBIcon,
  CDBContainer,
  CDBBox,
} from 'cdbreact';

function Footer() {
  return (
    <CDBFooter className="shadow">
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
                Devwares
              </p>
              <CDBBox
                flex="column"
                display="flex"
                style={{ cursor: 'pointer', padding: '0' }}
              >
                <a href="">osman</a>
                <a href="">osman</a>
                <a href="">osman</a>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Products
              </p>
              <CDBBox
                display="flex"
                flex="column"
                style={{ cursor: 'pointer', padding: '0' }}
              >
                <a href="">osman</a>
                <a href="">osman</a>
                <a href="">osman</a>
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
              <CDBIcon fab icon="github" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-3 p-2">
              <a href="">
                <CDBIcon fab icon="linkedin" />
              </a>
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="instagram" />
            </CDBBtn>
          </CDBBox>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
}
export default Footer;
