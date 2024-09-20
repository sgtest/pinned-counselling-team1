import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  background-color: ${({ color }) =>
    color === 'danger' ? '#f8d7da' : '#d1e7dd'};
  color: ${({ color }) => (color === 'danger' ? '#842029' : '#0f5132')};
  padding: 10px;
  border: 1px solid
    ${({ color }) => (color === 'danger' ? '#f5c2c7' : '#badbcc')};
  border-radius: 4px;
  margin-bottom: 10px;
`;

const MessageBox = ({ color, messages }) => {
  return (
    <Box color={color}>
      {Array.isArray(messages) ? (
        messages.map((msg, idx) => <p key={idx}>{msg}</p>)
      ) : (
        <p>{messages}</p>
      )}
    </Box>
  );
};

export default MessageBox;
