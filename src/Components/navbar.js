import { MDBCol, MDBFooter, MDBRow } from "mdb-react-ui-kit";
import React from "react";


//Styles
import "./styles.css";


//Images
import Explore from "../Assets/Kesfet.png";
import Portal from "../Assets/PORTAL.png";
import Star from "../Assets/Fill 1-2.png";



export default function NavigationBar () {




    return(
        <>
            <MDBFooter className="footer-container">
                <MDBRow className="footer-nav-row" style={{marginLeft:"-20px"}}>
                    <MDBCol md={4} style={{marginBottom:"13px"}}>
                        <img className="footer-icon-ends" src={Explore} />
                        <p className="footer-icon-text">Keşfet</p>
                    </MDBCol>
                    <MDBCol md={4}>
                        <img className="footer-icon-center" src={Portal}/>
                    </MDBCol>
                    <MDBCol md={4} style={{marginBottom:"13px"}}>
                        <img className="footer-icon-ends" src={Star} />
                        <p className="footer-icon-text">Daha Cüzdan</p>
                    </MDBCol>
                </MDBRow>
            </MDBFooter>
        </>
    )
}