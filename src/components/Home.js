import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchiness Delivery"
        backgroundImg="model-s.jpg"
        leftBtnTxt="Custom order"
        rightBtnTxt="Existing inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchiness Delivery"
        backgroundImg="model-y.jpg"
        leftBtnTxt="Custom order"
        rightBtnTxt="Existing inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchiness Delivery"
        backgroundImg="model-3.jpg"
        leftBtnTxt="Custom order"
        rightBtnTxt="Existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchiness Delivery"
        backgroundImg="model-x.jpg"
        leftBtnTxt="Custom order"
        rightBtnTxt="Existing inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnTxt="Order now"
        rightBtnTxt="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftBtnTxt="Order now"
        rightBtnTxt="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnTxt="Shop now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
