import React from 'react';
import styled from 'styled-components/native';

interface IProps {
  error: boolean;
}

export const ErrorToast = ({error}: IProps) => {
  if (error) {
    return (
      <ToastContainer>
        <Toast>
          <ToastText>Erro na requisição!</ToastText>
        </Toast>
      </ToastContainer>
    );
  }
  return null;
};

export const ToastContainer = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  align-items: center;
  padding: 20px;
`;

export const Toast = styled.View`
  background-color: red;
  width: 50%;
  padding: 10px 20px;
  border-radius: 15px;
  text-align: center;
  align-items: center;
  transition: 0.5s;
`;

export const ToastText = styled.Text`
  color: white;
`;
