import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2, text: 'Exellence Award at Hashedin by Deloitte'},
  { number: "5 Star", text: 'HackerRank', },
  { number: "Rating", text: 'CodeChef', },
  { number: "star", text: 'LeetCode', },
  { number: "", text: 'Google Cloud Certified Associate Cloud Engineer', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
