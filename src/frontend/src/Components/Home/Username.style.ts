import styled from "styled-components";
import theme from "../../theme";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  padding: 13px 28px;
  margin-top: 10px;
  background: ${theme.colors.white};
  border-radius: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  border: none;
  outline-width: 0;
  font-size: 15px;
  font-weight: 300;
  font-family: ${theme.fonts.display};
  margin-right: 25px;
`;

export const Terms = styled.p`
  color: ${theme.colors.white};
  font-size: 14px;
  font-family: ${theme.fonts.display};
  margin-top: 30px;

  a {
    cursor: pointer;
    color: ${theme.colors.white};
    text-decoration: underline;
  }
`;
