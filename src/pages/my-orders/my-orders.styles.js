import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px 7px;
  align-items: center;

  h4 {
    margin: 0;
    margin-bottom: 5px;
  }

  h6 {
    margin: 0;
    align-self: flex-start;
  }
`;

export const Order = styled.div`
  width: 100%;
  border: 1px solid #e1b12c;
  margin-bottom: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 10px;


`;

export const InfoLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
  h6 {
    flex-grow: 1;
    margin: 0
  }

  span {
    font-size:0.8rem;
  }
`;


