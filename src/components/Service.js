import React from "react";
import styled from "styled-components";
import ServiceLayout from "./ServiceLayout/Layout";
const Service = () => {
  return (
    <>
      <Container className="container">
        <ServiceHeader className="row mb-lg-auto mb-sm-3 mb-1">
          <div className="col-lg-6 col-12">
            <ServiceHeading className="text-left mb-lg-auto mb-sm-4 mb-3">
              We're a fill-service digital agency.
            </ServiceHeading>
          </div>
          <div className="col-lg-6 col-12">
            <Services>services</Services>
            <ServiceSubHeading className="text-right mt-lg-1">
              At Design Curved, we specialize in bringing even the wildest ideas
              to life by transforming them into elegant designs, exceptional
              experiences and memorable brands.
            </ServiceSubHeading>
          </div>
        </ServiceHeader>
        <ServiceBody>
          <ServiceLayout
            imgTitle="/asset/images/serviceLogo.png"
            title="Design"
            title2="Brand Identity"
            title3="user research"
            title4="UI/UX Design"
            title5="Mobile Apps Design"
          />
          <ServiceLayout
            imgTitle="/asset/images/development-logo.png"
            title="development"
            title2="web development"
            title3="mobile development"
            title4="webflow development"
            title5="font-end development"
          />
          <ServiceLayout
            imgTitle="/asset/images/serviceLogo.png"
            title="modern products"
            title2="web 3.0"
            title3="education tech"
            title4="financial tech"
            title5="sass"
          />
        </ServiceBody>
      </Container>
    </>
  );
};

export default Service;

const Container = styled.div`
  padding-bottom: 50px;
`;

const ServiceHeader = styled.div`
  margin-bottom: 50px;
`;

const ServiceHeading = styled.h2`
  font-size: 48px;
  font-weight: 600;
  color: #fff;
  // Extra small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    font-size: 15px;
  }
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) and (max-width: 767.98px) {
    font-size: 27px;
  }
  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 32px;
  }
`;

const Services = styled.span`
  position: relative;
  margin-left: 41px;
  text-transform: capitalize;
  color: rgb(253,94,14);
  &:before {
    position: absolute;
    top: 50%;
    left: -41px;
    transform: translateY(-50%);
    width: 31px;
    height: 2px;
    background-color: rgb(253,94,14);
    content: '';
    z-index: 2;
  }
  // Extra small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    font-size: 13px;
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) and (max-width: 767.98px) {

  }
  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) and (max-width: 991.98px) {

  }
`
const ServiceSubHeading = styled.p`
  color: #fff;
  // Extra small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    font-size: 11px;
  }
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) and (max-width: 767.98px) {
  }
  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) and (max-width: 991.98px) {
  }
`;
const ServiceBody = styled.div`
  display: grid;
  margin-top: 50px;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  // Extra small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    margin-top: 10px;
    grid-template-columns: repeat(2, 2fr);
    gap: 15px;
  }
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) and (max-width: 767.98px) {
    margin-top: 10px;
    grid-template-columns: repeat(2, 2fr);
    gap: 15px;
  }
  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) and (max-width: 991.98px) {
    margin-top: 10px;
    grid-template-columns: repeat(2, 2fr);
    gap: 30px;
  }
`;
