import { useState, useRef } from 'react';
import { useApiContext } from '../context/ApiContext';

export default function useFormData() {
  const [formTitle, setFormTitle] = useState('');
  const formDesc = useRef();
  const formStatus = useRef();

  const [isNewTaskAdded, setIsNewTaskAdded] = useState(false);

  const { addTasks } = useApiContext();

  const handleTitle = (e) => setFormTitle(e.target.value);

  const handleSubmit = (e, data) => {
    e.preventDefault();
    const newTask = {
      title: data.formTitle,
      description: formDesc.current.value,
      status: formStatus.current.value,
    };
    // console.log(newTask);

    (async () => {
      try {
        const taskRes = await addTasks(newTask);
        taskRes ? setIsNewTaskAdded(true) : setIsNewTaskAdded(false);
      } catch (err) {
        console.error(err);
      }
    })();
  };

  const resetForm = () => {
    setFormTitle('');
    formDesc.current.value = '';
    formStatus.current.value = 'To do';
  };

  return [formTitle, formDesc, formStatus, isNewTaskAdded, handleTitle, handleSubmit, resetForm, setIsNewTaskAdded];
}
