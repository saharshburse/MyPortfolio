import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  height:80vh;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const TxtRotateWrap = styled.span`
  border-right: 0.08em solid #666;
  color: linear-gradient(to right, green, blue);
`;


