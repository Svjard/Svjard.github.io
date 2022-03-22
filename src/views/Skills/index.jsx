import React from 'react';
import {
  Section,
  Title,
  Row,
  Col,
} from '../../styles';
import {
  TopSkillsContainer,
  TopSkills,
  Skill,
  Level,
  Desc,
  Subtitle,
  Tag,
} from './styles';

export default function Skills() {
  return (
    <Section style={{ textAlign: 'center' }}>
      <Title>Skills</Title>
      <TopSkillsContainer>
        <TopSkills>Top Skills</TopSkills>
        <Row>
          <Col>
            <div>             
              <Skill>Javascript</Skill>
              <Level>Expert, 10+ years</Level>
              <Desc>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
              </Desc>
            </div>
          </Col>
          <Col>
            <div>             
              <Skill>Security</Skill>
              <Level>Expert, 10+ years</Level>
              <Desc>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
              </Desc>
            </div>
          </Col>
          <Col>
            <div>             
              <Skill>Team Lead</Skill>
              <Level>Expert, 10+ years</Level>
              <Desc>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
              </Desc>
            </div>
          </Col>
          <Col>
            <div>             
              <Skill>AWS</Skill>
              <Level>Expert, 10+ years</Level>
              <Desc>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
              </Desc>
            </div>
          </Col>
        </Row>
      </TopSkillsContainer>
      <div>
        <Subtitle>Other Skills</Subtitle>
        <div>
          <Tag>React</Tag>
          <Tag>Node.js</Tag>
          <Tag>Powershell</Tag>
          <Tag>Linux</Tag>
          <Tag>Go</Tag>
          <Tag>Rust</Tag>
          <Tag>Agile Development</Tag>
          <Tag>HTML5</Tag>
          <Tag>Git</Tag>
          <Tag>CSS3</Tag>
          <Tag>Terraform</Tag>
          <Tag>CI/CD</Tag>
        </div>
      </div>
    </Section>
  );
}