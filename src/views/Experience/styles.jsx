import styled from 'styled-components';

export const Timeline = styled.div`
  border-left: 3px solid #607D8B;
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
  position: relative;
  padding: 0 30px;
  margin-left: 280px;

  @media (max-width: 767px) {
    margin-left: 0;
    padding-right: 0;
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 45px;

  :before {
    content: "";
    position: absolute;
    left: -43px;
    top: 0;
    display: inline-block;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-clip: padding-box;
    background: #fff;
    border: 3px solid #607D8B;
  }

  :after {
    content: "";
    position: absolute;
    left: -37px;
    top: 6px;
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-clip: padding-box;
    background: #607D8B;
    z-index: 10;
  }
`;

export const Workplace = styled.div`
  position: relative;
`;

export const WorkplaceName = styled.h3`
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 300;

  @media (max-width: 767px) {
    margin-bottom: 5px;
  }
`;

export const WorkplaceLocation = styled.div`
  position: absolute;
  right: 0;
  top: 2px;
  color: #8a8a8a;
`;

export const JobMeta = styled.div`
  position: absolute;
  left: -280px;
  top: 0;

  @media (max-width: 767px) {
    position: static;
    margin-bottom: 15px;
  }
`;

export const JobMetaTitle = styled.div`
  font-size: 18px;
  color: #607D8B;
  max-width: 220px;

  @media (max-width: 767px) {
    max-width: none;
  }
`;

export const JobMetaDates = styled.div`
  color: #8a8a8a;
`;

export const JobDescription = styled.div`
  color: #666;
`;
