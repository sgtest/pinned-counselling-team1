'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { getTest } from '../apis/apiInfo';
import TestForm from '../components/TestForm';

const TestContainer = ({ params }) => {
  const { testType } = params;
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    answers: [],
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const items = await getTest(testType);
        console.log(items);
        setItems(items);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [testType]);

  const onChange = useCallback((e) => {}, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <TestForm
      items={items}
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default React.memo(TestContainer);
