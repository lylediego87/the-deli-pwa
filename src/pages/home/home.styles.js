import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ImageDiv = styled.div`
  width: 250px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;