import CustomButton from '../../components/Button';
import { Home, Email, Youtube, Github, Mail, LinkedIn, Download } from '../../components/Icon';

import styled from 'styled-components';

const HeaderTop = styled.div`
  background: #607D8B;
  color: #fff;
  display: block;
`;

const SocialContainer = styled.div`
  width: 100%;
  padding-right: 12px;
  padding-left: 12px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  padding-top: 15px;
  padding-bottom: 120px;
`;

const BtnContainer = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  display: flex;
  flex-direction: row;
  
  @media (max-width: 767px) {
    position: static;
    margin: 0 auto;
    margin-bottom: 30px;
    text-align: center;
  }
`;

const SocialList = styled.ul`
  padding-left: 0;
  list-style: none;
  margin-top: 0;
  
  @media (max-width: 767px) {
    margin: 0 auto;
    text-align: center;
  }
`;

const SocialListItem = styled.li`
  display: inline-block;
  margin-right: 0.5rem;
`;

const SocialIcon = styled.a`
  color: rgba(255,255,255,0.8);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-clip: padding-box;
  font-size: 16px;
  border: 2px solid rgba(255,255,255,0.8);
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const Intro = styled.div`
  background: #566f7c;
  padding-top: 90px;
  padding-bottom: 60px;
  position: relative;
  font-size: 16px;
`;

const CenteredContainer = styled.div`
  text-align: center!important;
  width: 100%;
  padding-right: 12px;
  padding-left: 12px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    max-width: 720px;
  }
  
  @media (min-width: 576px) {
    max-width: 540px;
  }
`;

const ProfileImage = styled.img`
  position: absolute;
  width: 160px;
  height: 160px;
  top: -80px;
  margin-left: -80px;
  left: 50%;
  vertical-align: middle;
`;

const ProfileName = styled.h1`
  font-size: 48px;
  margin-bottom: 15px;
  letter-spacing: 0.5px;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 0;

  @media (max-width: 767px) {
    font-size: 36px;
  }
`;

const ProfileTitle = styled.div`
  font-size: 28px;
  font-weight: 300;
  color: rgba(255,255,255,0.8);
  margin-bottom: 30px;

  @media (max-width: 767px) {
    font-size: 22px;
  }
`;

const ProfileDescription = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ProfileDescriptionText = styled.p` 
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 1rem;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const ContactInfo = styled.div`
  background: #4b626d;
  padding-top: 30px;
  padding-bottom: 30px;
  font-size: 16px;
`;

const ContactInfoList = styled.ul`
  margin-top: 0;
  padding-left: 0;
  list-style: none;
  margin-bottom: 0;
`;

const ContactInfoListItem = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
  color: rgba(255,255,255,0.8);

  @media (max-width: 767px) {
    margin-right: 0;
    margin-bottom: 15px;
    font-size: 14px;
    width: 100%;
    display: inline-block;
  }

  @media (max-width: 767px) {
    :last-child {
      margin-bottom: 0;
    }
  }

  :last-child {
    margin-right: 0;
  }
`;

const NavHolder = styled.div`
  height: 60px;
  position: relative;
  display: none!important;

  @media (min-width: 768px) {
    display: block!important;
  }
`;

const PageWrapper = styled.div`
  text-align: center;
  box-shadow: 0 4px 12px rgb(0 0 0 / 20%);
  padding-top: 20px;
  padding-bottom: 20px;
  left: 0;
  width: 100%;
  z-index: 100;
  background: #41545e
  position: absolute;
`;

const NavList = styled.ul`
  list-style: none;
  flex-wrap: wrap;
  padding-left: 0;
  margin: 0 auto;
  display: inline-block;
`;

const NavListItem = styled.li`
  margin-right: 30px;
  display: inline-block;
  background: none;

  :active, :hover {
    background: none;
  }
`;

const NavListItemText = styled.a`
  text-decoration: none;
  font-weight: 500;
  color: rgba(255,255,255,0.7);
  padding: inherit;
  font-size: 16px;

  :active {
    background: none;
  }

  :hover {
    background: none;
    color: #fff;
  }
`;

export default function Header() {
  return (
    <HeaderTop>
      <SocialContainer>
        <BtnContainer>
          <CustomButton>
            <Mail /> <div style={{ display: 'inline-block', marginLeft: '5px' }}>Hire Me</div>
          </CustomButton>
          <CustomButton>
            <Download /> <div style={{ display: 'inline-block', marginLeft: '5px' }}>Download My Resume</div>
          </CustomButton>
        </BtnContainer>
        <SocialList>
          <SocialListItem>
            <SocialIcon><Github /></SocialIcon>
          </SocialListItem>
          <SocialListItem>
            <SocialIcon><LinkedIn /></SocialIcon>
          </SocialListItem>
          <SocialListItem>
            <SocialIcon><Youtube /></SocialIcon>
          </SocialListItem>
        </SocialList>
      </SocialContainer>
      <Intro>
        <CenteredContainer>
          <ProfileImage src="assets/images/profile-image.png" alt="" />
          <ProfileName>Marc Fisher</ProfileName>
          <ProfileTitle>Full Stack Developer / Engineering Lead</ProfileTitle>
          <ProfileDescription>
            <ProfileDescriptionText>TODO</ProfileDescriptionText>
          </ProfileDescription>
        </CenteredContainer>
      </Intro>
      <ContactInfo>
        <CenteredContainer>
          <ContactInfoList>
            <ContactInfoListItem>
              <Email /><a href="mailto:mcfisher83@gmail.com" style={{marginLeft: '5px'}}>mcfisher83@gmail.com</a>
            </ContactInfoListItem>
            <ContactInfoListItem>
              <Home /><a href="#" target="_blank" style={{marginLeft: '5px'}}>Svjard.github.io</a>
            </ContactInfoListItem>
          </ContactInfoList>
        </CenteredContainer>
      </ContactInfo>
      <NavHolder>
        <PageWrapper>
          <CenteredContainer>
            <NavList>
              <NavListItem>
                <NavListItemText href="#experience">Experience</NavListItemText>
              </NavListItem>
              <NavListItem>
                <NavListItemText href="#education">Education</NavListItemText>
              </NavListItem>
              <NavListItem>
                <NavListItemText href="#skills">Skills</NavListItemText>
              </NavListItem>
              <NavListItem>
                <NavListItemText href="#blog">Blog</NavListItemText>
              </NavListItem>
              <NavListItem>
                <NavListItemText href="#portfolio">Portfolio</NavListItemText>
              </NavListItem>
              <NavListItem>
                <NavListItemText href="#contact">Contact</NavListItemText>
              </NavListItem>
            </NavList>
          </CenteredContainer>
        </PageWrapper>
      </NavHolder>
    </HeaderTop>
  );
}