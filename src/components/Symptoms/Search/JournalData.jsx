import React from "react";
import styled from "styled-components";

const JournalData = ({ journaldata }) => (
  <FullCardContent>
    <CardTitle>{journaldata.stimmung}</CardTitle>
    <CardTitle>{journaldata.datum}</CardTitle>
    <p>{journaldata.notizen}</p>
  </FullCardContent>
);

export default JournalData;

const FullCardContent = styled.div`
  border-radius: 15px;
  box-shadow: 0px 0px 8px #ccc;
  background: #f6f5fb;
  color: #4b417a;
  margin: 1rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
`;

const CardTitle = styled.p`
  color: #4b417a;
  font-size: 14;
  margin: 8px 0 0 0;
  font-weight: 600;
`;
