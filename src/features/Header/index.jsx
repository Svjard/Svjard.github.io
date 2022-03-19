import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import {
  Box,
  Container,
  List,
  ListItem,
} from '@chakra-ui/react';
import { jsx } from '@emotion/react'

export default function Header() {
  return (
    <Box css={{
      background: '#607D8B',
      color: '#fff',
      display: 'block',
    }}>
      <Container css={{
        width: '100%',
        paddingRight: '12px',
        paddingLeft: '12px',
        marginRight: 'auto',
        marginLeft: 'auto',
        position: 'relative',
        paddingTop: '15px',
        paddingBottom: '120px',
      }}>
        <Box css={{
          position: 'absolute',
          right: '15px',
          top: '15px',
          '@media (max-width: 767px)': {
            position: 'static',
            margin: '0 auto',
            marginBottom: '30px',
            textAlign: 'center',
          }
        }}>
          <Button>
            Hire Me
          </Button>
          <Button>
            Download My Resume
          </Button>
        </Box>
        <List css={{
          paddingLeft: 0,
          listStyle: 'none',
          marginTop: 0,
          '@media (max-width: 767px)': {
            margin: '0 auto',
            textAlign: 'center',
          }
        }}>
          <ListItem css={{
            display: 'inline-block',
            marginRight: '0.5rem',
          }}>
            <Button>LinkedIn</Button>
          </ListItem>
          <ListItem class="list-inline-item"><a href="#"></a></ListItem>
        </List>
      </Container>
      <div class="intro">
        <div class="container text-center">
          <img class="profile-image" src="assets/images/profile-image.png" alt="" />
          <h1 class="name">Marc Fisher</h1>
          <div class="title">Full Stack Developer</div>
          <div class="profile">
            <p></p>
          </div>
        </div>
      </div>
      <div class="contact-info">
        <div class="container text-center">
          <ul class="list-inline">
            <li class="email list-inline-item"><a href="mailto:someone@example.com">james.doe@website.com</a></li>
            <li class="list-inline-item"><a href="#">0123 456 7890</a></li>
            <li class="website list-inline-item"><a href="#" target="_blank">portfoliosite.com</a></li>
          </ul>
        </div>
      </div>
      <div id="page-nav-space-holder" class="page-nav-space-holder d-none d-md-block">
        <div id="page-nav-wrapper" class="page-nav-wrapper text-center">
          <div class="container">
            <ul id="page-nav" class="nav page-nav list-inline">
              <li class="nav-item"><a class="scrollto nav-link" href="#experiences-section">Experiences</a></li>
              <li class="nav-item"><a class="scrollto nav-link" href="#education-section">Education</a></li>
              <li class="nav-item"><a class="scrollto nav-link" href="#skills-section">Skills</a></li>
              <li class="nav-item"><a class="scrollto nav-link" href="#testimonials-section">Testimonials</a></li>
              <li class="nav-item"><a class="scrollto nav-link" href="#portfolio-section">Portfolio</a></li>
              <li class="nav-item"><a class="scrollto nav-link" href="#contact-section">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </Box>
  );
}