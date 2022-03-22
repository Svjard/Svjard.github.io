import React from 'react';
import {
  Section,
  Title,
  Row,
  Col
} from '../../styles';
import {
  Item,
  Degree,
  College,
  Time,
  Desc,
} from './styles';

export default function Education() {
  return (
    <Section>
      <Title>Education</Title>
      <Row>
        <Col>
          <Item>
            <Degree>B.S. in Mathematics / Teaching Credential</Degree>
            <College>California State University, San Marcos</College>
            <Time>Aug 2007 to May 2009</Time>
            <Desc>Completed the course work required for a B.S. in Mathematics and recieved a teaching credential in secondary mathematics.</Desc>
          </Item>
        </Col>
        <Col>
          <Item>
            <Degree>B.S. in Computer Science</Degree>
            <College>California State University, San Marcos</College>
            <Time>Aug 2003 to Aug 2005</Time>
            <Desc>Completion of my undergraduate degree in Computer Science.</Desc>
          </Item>
        </Col>
        <Col>
          <Item>
            <Degree>B.S. in Computer Science</Degree>
            <College>University of New Mexico</College>
            <Time>Aug 2001 to May 2003</Time>
            <Desc>First two years of undergraduate work was completed before transferring.</Desc>
          </Item>
        </Col>
      </Row>
    </Section>
  );
}