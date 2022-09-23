import React from "react";
import styled from "styled-components";

export const InfoChallenge = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  ul {
    padding: 0;
    list-style: none;
    text-align: start;
  }
`;

export const ImgBox = styled.div`
  width: 100%;
  grid-area: mobileimg;
`;
export const ChallengeBox = styled.div`
  margin-top: 48px;
  display: flex;
  border: 0.3px solid #0d4d9c;
  border-radius: 5px;
  padding-left: 20px;
  background: #051d3b;
  flex-direction: column;
  width: 300px;
`;
export const TechBox = styled.div`
  width: 100%;
  grid-area: tech;
`;
