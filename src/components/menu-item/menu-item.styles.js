import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #00280b;
  width: 100%;
  margin-bottom: 20px;
`;

export const TopDiv  = styled.div`
  display: flex;
  background-color: #00280b;
  align-items: center;
`;

export const BottomDiv = styled.div`
  padding: 5px 5px;
  font-size: 0.8rem;
`;

export const TopDivText = styled.div`
  padding: 3px 10px;
  flex-grow: 2;
  color: #fff;
  font-size: 1.1rem;
`;

export const MotionButton = styled(motion.button)`
  color: #fff;
  background-color: #00280b;
  border: 0;
  outline: none;
`;