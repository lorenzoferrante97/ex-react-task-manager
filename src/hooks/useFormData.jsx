import { useState, useRef } from 'react';

export default function useFormData() {
  const [formTitle, setFormTitle] = useState('');
  const formDesc = useRef();
  const formStatus = useRef();

  const handleTitle = (e) => setFormTitle(e.target.value);

  const handleSubmit = (e, data) => {
    e.preventDefault();
    const newTask = {
      title: data.formTitle,
      description: formDesc.current.value,
      status: formStatus.current.value,
    };
    console.log(newTask);
  };

  return [formTitle, formDesc, formStatus, handleTitle, handleSubmit];
}
