'use client';
import React, {
  useLayoutEffect,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import GroupRegisterForm from '../components/GroupRegisterForm';
import apiGroup from '../apis/apiGroup';
import { useTranslation } from 'react-i18next';

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

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      // 유효성 검사

      const requiredFields = {
        gno: t('프로그램_번호를_입력하세요'),
        gname: t('프로그램명을_입력해주세요'),
        gdes: t('설명을_입력하세요'),
      };
      const _errors = {};
      let hasErrors = false;
      for (const [field, message] of Object.entries(requiredFields)) {
        if (!form[field]?.trim()) {
          _errors[field] = _errors[field] ?? [];
          _errors[field].push(message);
          hasErrors = true;
        }
      }

      if (hasErrors) {
        setErrors(_errors);
        return;
      }

      (async () => {
        try {
          const res = await apiGroup(form);

          console.log('성공:', res);
        } catch (err) {
          setErrors({ api: [err.message] });
        }
      })();
    },
    [form, t],
  );

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
