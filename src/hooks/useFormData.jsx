import { useState, useRef } from 'react';

export default function useFormData() {
  const [formTitle, setFormTitle] = useState('');
  const formDesc = useRef('');
  const formStatus = useRef('');

  return [];
}
