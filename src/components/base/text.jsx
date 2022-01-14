import styled from 'styled-components';

const defaultTitleStyles = `
  font-family: 'Bellefair', serif;
  font-weight: 400;
  margin: 0 0 20px;
  text-transform: uppercase;
  color: #FFFFFF;
`;

export const Heading1 = styled.h1`
  ${(defaultTitleStyles)}
  font-size: 150px;
  line-height: 172px;
`;

export const Heading2 = styled.h2`
  ${(defaultTitleStyles)}
  font-size: 100px;
  line-height: 115px;
`;

export const Heading3 = styled.h3`
  ${(defaultTitleStyles)}
  font-size: 56px;
  line-height: 65px;
`;

export const Heading4 = styled.h4`
  ${(defaultTitleStyles)}
  font-size: 32px;
  line-height: 37px;
`;

export const Heading5 = styled.h5`
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 400;
  font-size: 28px;
  letter-spacing: 4.75;
  line-height: 34px;
  margin: 0 0 20px;
  color: #D0D6F9;
`;

export const SubHeading1 = styled.h3`
  ${(defaultTitleStyles)}
  font-size: 28px;
  line-height: 32px;
`;

export const SubHeading2 = styled.h4`
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 2.35;
  line-height: 17px;
  text-transform: uppercase;
  margin: 0 0 20px;
  color: #FFFFFF;
`;

export const NavText = styled.h6`
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 2.7;
  line-height: 19px;
  text-transform: uppercase;
  margin: 0;
  color: #FFFFFF;
`;

export const BodyText = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  margin: 0 0 20px;
  color: #FFFFFF;
`;
