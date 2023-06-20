import { MDBCardImage, MDBCol, MDBInput, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import React from "react";



import SearchIcon from "../Assets/Small_Brand_Logo_1.png";

export default function Tags(props) {
  const { tags, tagText, tagImg, tagKey } = props;




  return (
    <>
      <MDBRow className="tags-container">
            <MDBCol className="tags-item">
              <MDBCardImage className="tags-img" src={SearchIcon} />
              <MDBInput className="tags-name tag-input" placeholder="Fırsat Bul" />
            </MDBCol>
        {tags.map((tag) => {
          return (
            <MDBCol key={tag.Id} className="tags-item">
              <MDBCardImage className="tags-img" src={tag.IconUrl} />
              <MDBTypography className="tags-name">{tag.Name}</MDBTypography>
            </MDBCol>
          );
        })}
      </MDBRow>
    </>
  );
}
