import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MDBContainer } from "mdb-react-ui-kit";

//Components
import Header from "../../Components/header";
import Tags from "../../Components/tag";
import CarouselHome from "../../Components/carousel";
import NavigationBar from "../../Components/navbar";

//Styles
import "./style.css";

const API_URL = "https://api.extrazone.com";
const headers = {
  "X-Country-Id": "TR",
  "X-Language-Id": "TR",
};

const Home = () => {
  const [promotions, setPromotions] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchTags();
    fetchPromotions();
  }, []);

  const fetchTags = async () => {
    try {
      const response = await axios.get(`${API_URL}/tags/list`, { headers });
      setTags(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPromotions = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/promotions/list?Channel=PWA`,
        { headers }
      );
      setPromotions(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <MDBContainer className="home-container">
        <Header />
        <Tags tags={tags} />
        <CarouselHome promotions={promotions} />

        <NavigationBar />
        
      </MDBContainer>
    </div>
  );
};

export default Home;
