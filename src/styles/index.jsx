import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  width: 100%;
  padding-right: 12px;
  padding-left: 12px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;

export const Section = styled.section`
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 14%);
  padding: 45px;
  background: #fff;
  margin-bottom: 45px;
  border-radius: 2px;
  background-clip: padding-box;

  @media (max-width: 767px) {
    padding: 30px;
  }
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 45px;
  font-size: 24px;
  text-align: center;
  font-weight: 500;
  line-height: 1.2;

  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -12px;
  margin-right: -12px;
  margin-top: 0px;
`;

export const Col = styled.div`
  flex: 0 0 auto;
  width: 100%;
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: 12px;
  padding-left: 12px;
  margin-top: 0;
  margin-bottom: 45px;

  @media (min-width: 768px) {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  @media (max-width: 767px) {
    padding: 0;
  }
`;