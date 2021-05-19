import styled from 'styled-components';
import { motion } from 'framer-motion';


export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  p {
    margin: 0;
    padding: 10px 10px;
  }

  h2 {
    margin: 0;
  }

  h3 {
    margin: 0;
  }
`;