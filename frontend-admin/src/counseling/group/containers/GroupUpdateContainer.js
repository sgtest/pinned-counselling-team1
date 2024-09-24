'use client';
import React, {
  useLayoutEffect,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import { useTranslation } from 'react-i18next';
import GroupRegisterForm from '../components/GroupRegisterForm';

const GroupUpdateContainer = ({ params }) => {
  const { setMenuCode, setSubMenuCode } = getCommonActions();
  const { cNo } = params;
  const { t } = useTranslation();

  useLayoutEffect(() => {
    setMenuCode('counseling');
    setSubMenuCode(cNo ? 'update' : 'register');
  }, [setMenuCode, setSubMenuCode, cNo]);

  const [form, setForm] = useState({
    gid: '' + Date.now(),
  });
  const [errors, setErrors] = useState({});

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <GroupRegisterForm
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default React.memo(GroupUpdateContainer);
