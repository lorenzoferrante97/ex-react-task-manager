import { useState, useRef } from 'react';

export default function useFormData() {
  const [formTitle, setFormTitle] = useState('');
  const formDesc = useRef();
  const formStatus = useRef();

  const handleTitle = (e) => setFormTitle(e.target.value);

  return [formTitle, formDesc, formStatus, handleTitle];
}
