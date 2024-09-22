'use client';
import React from 'react';
import styled from 'styled-components';
import StyledMessage from '@/commons/components/StyledMessage';

const FormBox = styled.form``;

const TestForm = ({ items, form, errors, onChange, onSubmit }) => {
  return <FormBox onSubmit={onSubmit} autoComplete="off"></FormBox>;
};

export default React.memo(TestForm);
