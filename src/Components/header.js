import { MDBCardImage, MDBCol, MDBRow } from "mdb-react-ui-kit";
import React from "react";

//Images
import Daha from "../Assets/Daha_Daha.png";
import Profile from "../Assets/Group 4.png";
import GreenPoint from "../Assets/Oval-2.png";

//Styles
import "./styles.css";

export default function Header() {
  return (
    <>
      <MDBRow className="header-container">
        <MDBCol style={{ width: "66.6%", marginLeft: "8px" }} md="8">
          <MDBCardImage className="header-scratch" src={Daha} />
        </MDBCol>
        <MDBCol
          style={{ width: "33.3%", display: "flex", justifyContent: "end" }}
          md="4"
        >
          <div className="header-profile-container">
            <MDBCardImage className="header-profile" src={Profile} />
            <MDBCardImage className="header-greenPoint" src={GreenPoint} />
          </div>
        </MDBCol>
      </MDBRow>
    </>
  );
}
