import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

export const Name = styled.strong`
  flex-grow: 2;
`;


export const Total = styled.strong`
  flex-grow: 1;
`;

export const MotionButton = styled(motion.button)`
  border: 0;
  outline: none;
  background-color: #dfe4ea;
`;