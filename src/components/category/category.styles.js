import styled from 'styled-components';

export const ImageDiv = styled.div`
  display: flex;
  position: relative;
  max-height: 200px;
  max-width: 320px;
  padding: 10px 0;
  img {
    filter: brightness(.70);
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Text = styled.div`
  position: absolute;
  bottom: 15%;
  left: 30%;
  z-index: 2;

  h5 {
    font-size: 2rem;
    text-align: center;
    color: #fff;
    font-weight: 300;
  }
`;
