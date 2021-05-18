import styled from 'styled-components';
import { motion } from "framer-motion"

export const Container = styled(motion.div)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 10px;
`;