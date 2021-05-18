import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 60px;
`;

export const GoogleButton = styled.button`
  padding: 10px;
  background-color: #e55039;
  color: #fff;
  font-size: 1rem;
  border:none;
  margin-bottom: 40px;
`;

export const FacebookButton = styled.button`
  padding: 10px;
  background-color: #4285f4;
  color: #fff;
  font-size: 1rem;
  border:none;
`;