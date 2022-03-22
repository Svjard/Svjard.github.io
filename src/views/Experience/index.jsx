import React from 'react';
import {
  Section,
  Title,
} from '../../styles';
import {
  Timeline,
  TimelineItem,
  Workplace,
  WorkplaceName,
  WorkplaceLocation,
  JobMeta,
  JobMetaTitle,
  JobMetaDates,
  JobDescription,
} from './styles';
import { Pin } from '../../components/Icon';

export default function Experience() {
  return (
    <Section>
      <Title>Work Experiences</Title>
      <Timeline>
        <TimelineItem>
          <Workplace>
            <WorkplaceName>Dev Gardener</WorkplaceName>
            <WorkplaceLocation>
              <Pin/> Remote
            </WorkplaceLocation>
          </Workplace>
          <JobMeta>
            <JobMetaTitle>Founder / Lead Instructor</JobMetaTitle>
            <JobMetaDates>2022 - Present</JobMetaDates>
          </JobMeta>
          <JobDescription>
            <p>Teach students from all around the world through an intensive coding bootcamp program that involves a wide range of both technical and soft skills. Provide instruction, cirriculum, and mentorship to the students.</p> 
          </JobDescription>
        </TimelineItem>
        
        <TimelineItem>
          <Workplace>
            <WorkplaceName>John Deere</WorkplaceName>
            <WorkplaceLocation>
              <Pin/> Moline, IL
            </WorkplaceLocation>
          </Workplace>
          <JobMeta>
            <JobMetaTitle>Engineering Lead</JobMetaTitle>
            <JobMetaDates>Sept 2021 - Present</JobMetaDates>
          </JobMeta>
          <JobDescription>
            <p>I lead multiple teams which are responsible for over half a dozen web application offerings of John Deere. I am responsible for managing the teams including handling communication between product/support/ engineering, providing architectural direction, planning, and deliverables. Also involved in helping team leads provide mentorship and documented guidelines for developers. Help do code review for large features and work with QA in deriving feedback.</p>
          </JobDescription>
        </TimelineItem>
  
        <TimelineItem>
          <Workplace>
            <WorkplaceName>John Deere</WorkplaceName>
            <WorkplaceLocation>
              <Pin/> Moline, IL
            </WorkplaceLocation>
          </Workplace>
          <JobMeta>
            <JobMetaTitle>Staff Software Engineer</JobMetaTitle>
            <JobMetaDates>Aug 2020 - Sept 2021</JobMetaDates>
          </JobMeta>
          <JobDescription>
            <p>Worked as a team lead for a suite of digital products that allows users to monitor and report on their connected machines. Have been involved in the planning, architecture, testing and support of the product suite. Mentored junior developers and led the agile development lifecycle among the team. Worked heavily with AWS including Lambda, ECS, and DynamoDB. Applications are built primarily on React and Node.js.</p> 
          </JobDescription>
        </TimelineItem>

        <TimelineItem>
          <Workplace>
            <WorkplaceName>Evolution Virtual</WorkplaceName>
            <WorkplaceLocation>
              <Pin/> Remote
            </WorkplaceLocation>
          </Workplace>
          <JobMeta>
            <JobMetaTitle>Senior Software Engineer</JobMetaTitle>
            <JobMetaDates>Feb 2020 - Aug 2020</JobMetaDates>
          </JobMeta>
          <JobDescription>
            <p>Led a team of 5 developers to help build an immersive real-estate platform using a React-based frontend work, Node.js backend, and WebGL. Work closely with the VP, CEO and designer to provide requirements and drive our agile development. Was responsible for all AWS infrastructure and dev-ops operations including building out the initial deployment pipeline. The application was built with React, Cypress, Node.js, MySQL, Cognito, DynamoDB, Serverless, and Typescript. This was an entirely remote team.</p> 
          </JobDescription>
        </TimelineItem>

        <TimelineItem>
          <Workplace>
            <WorkplaceName>Q2ebanking</WorkplaceName>
            <WorkplaceLocation>
              <Pin/> Austin, TX
            </WorkplaceLocation>
          </Workplace>
          <JobMeta>
            <JobMetaTitle>Senior Software Developer</JobMetaTitle>
            <JobMetaDates>Sept 2019 - Feb 2020</JobMetaDates>
          </JobMeta>
          <JobDescription>
            <p>Contracted as a senior software engineer working on a proprietary digital banking payments and web scraping technology platform. Responsible for helping with scoping and sprint planning. Worked to help improve and optimize Node.js APIs, worked on Vue.js frontends, MongoDB, AWS, and using ML to help improve automated scraping scheduling and error resiliency. Helped with security enhancements of the applications and meeting compliance needs. Was also involved in mentoring of junior developers on a weekly basis.</p> 
          </JobDescription>
        </TimelineItem>

        <TimelineItem>
          <Workplace>
            <WorkplaceName>Liongard</WorkplaceName>
            <WorkplaceLocation>
              <Pin/> Houston, TX
            </WorkplaceLocation>
          </Workplace>
          <JobMeta>
            <JobMetaTitle>Lead Developer</JobMetaTitle>
            <JobMetaDates>Sept 2016 - Sept 2019</JobMetaDates>
          </JobMeta>
          <JobDescription>
            <p>Worked as the lead developer, starting as the first employee, on an automated documentation IT offering. Was responsible for all aspects of the development lifecycle from the Node.js backend API, the React frontend application, and Postgres schema development. Also played the lead role in the development of the AWS infrastructure from docker containers, to application scaling, serverless functions, deployment setup, and security configuration. Helped lead the effort for SOC2 and NIST compliance. Helped build out the initial engineering team and did direct customer support as well.</p> 
          </JobDescription>
        </TimelineItem>

        <TimelineItem>
          <Workplace>
            <WorkplaceName>Schlumberger</WorkplaceName>
            <WorkplaceLocation>
              <Pin/> Houston, TX
            </WorkplaceLocation>
          </Workplace>
          <JobMeta>
            <JobMetaTitle>Lead Frontend Developer</JobMetaTitle>
            <JobMetaDates>Nov 2015 - Nov 2019</JobMetaDates>
          </JobMeta>
          <JobDescription>
            <p>Led the frontend team of 3 developers for the next-generation production asset optimization platform for oil and gas wells. Responsible for design and implementation of a framework which allowed for the development and installation of custom applications to model well production and forecasting. Led daily standups, sprints and code review sessions. Used technologies that included Typescript, Angular2, NgStore, Node.js and Scala.</p> 
          </JobDescription>
        </TimelineItem>

        <TimelineItem>
          <Workplace>
            <WorkplaceName>Teradata</WorkplaceName>
            <WorkplaceLocation>
              <Pin/> San Diego, CA
            </WorkplaceLocation>
          </Workplace>
          <JobMeta>
            <JobMetaTitle>Software Engineer</JobMetaTitle>
            <JobMetaDates>Aug 2009 - Nov 2015</JobMetaDates>
          </JobMeta>
          <JobDescription>
            <p>Responsible for the development and maintenance of web-based tools used by the global sales force and external customers, providing functionality such as modeling Teradata configurations, creating bills of materials, 3D data center layout and planning, and automated data collection, reporting, and visualizations. Worked with technologies like Backbone.js, Spring MVC, Rest Services, three.js, d3.js, jquery, node.js, MongoDB, Elasticsearch, and Teradata. Planned projects, gathered requirements, developed, tested, wrote documentation and provided training.</p> 
          </JobDescription>
        </TimelineItem>

        <TimelineItem>
          <Workplace>
            <WorkplaceName>Hewlett-Packard</WorkplaceName>
            <WorkplaceLocation>
              <Pin/> Fort Collins, CO
            </WorkplaceLocation>
          </Workplace>
          <JobMeta>
            <JobMetaTitle>Software Engineer</JobMetaTitle>
            <JobMetaDates>Apr 2006 - Jul 2007</JobMetaDates>
          </JobMeta>
          <JobDescription>
            <p>Web-based automation system for performance analysis of HP-UX running systems. HP-UX file system test planning and implementation. Led the design and implementation effort to automate the testing of HP's clustered file system.</p> 
          </JobDescription>
        </TimelineItem>

      </Timeline>
    </Section>
  );
}