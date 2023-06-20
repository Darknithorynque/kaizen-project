import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";


//Components
import Date from "../../Components/date";

//Images
import BackArrow from "../../Assets/Back_Button.png"

//Styles
import "./styles.css"
import { Grid } from "swiper";

const Campaigns = () => {
  const { seoName, id } = useParams();
  const [promotion, setPromotion] = useState(null);

  useEffect(() => {
    fetchPromotion();
  }, []);

  const fetchPromotion = async () => {
    try {
      const response = await axios.get(
        `https://api.extrazone.com/promotions?Id=${id}`,
        {
          headers: {
            "X-Country-Id": "TR",
            "X-Language-Id": "TR",
          },
        }
      );
      setPromotion(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!promotion) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <MDBRow className="details-container">
          <MDBCol style={{display:"grid"}}>
            <img className="details-promotion-img" src={promotion.ImageUrl} alt="details-img" /> 
            <img
                  src={promotion.BrandIconUrl}
                  alt="details-brand"
                  className="details-brand-img"
            />
            <Link to={"/"}>
              <img className="details-backArrow" src={BackArrow}/>
            </Link>
            
            <Date styleDate= "details-date" />
            
            <div className="details-title details-marg-for-entire-text"  dangerouslySetInnerHTML={{ __html: promotion.Title }} />
            <div className="details-description details-marg-for-entire-text"  dangerouslySetInnerHTML={{ __html: promotion.Description }} />
            <div className="details-button details-marg-for-entire-text">
              <p className="details-button-text">{promotion.DetailButtonText}</p>
            </div>


          </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Campaigns;
