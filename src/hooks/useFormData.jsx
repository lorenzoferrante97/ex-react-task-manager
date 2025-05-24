import { useState, useRef } from 'react';

export default function useFormData() {
  const [formTitle, setFormTitle] = useState('');
  const formDesc = useRef();
  const formStatus = useRef();

  const handleTitle = (e) => setFormTitle(e.target.value);

  const handleSubmit = (e, data) => {
    e.preventDefault();
    const dataValues = {
      title: data.formTitle,
      desc: formDesc.current.value,
      status: formStatus.current.value,
    };
    console.log(dataValues);
  };

  return [formTitle, formDesc, formStatus, handleTitle, handleSubmit];
}
