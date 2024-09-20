import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  margin-top: 4px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const InfoInputBox = ({ type, name, value, onChange }) => {
  return (
    <Input type={type} name={name} value={value} onChange={onChange} required />
  );
};

export default InfoInputBox;
