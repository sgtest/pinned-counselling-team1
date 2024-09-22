'use client';
import React, {
  useLayoutEffect,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import ProfileForm from '../components/ProfileForm';

const InfoContainer = ({params}) => {

  
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return <ProfileForm 
  form={form}
  errors={errors}
  onChange={onChange}
  onSubmit={onSubmit}
  />;
};

export default React.memo(InfoContainer);
