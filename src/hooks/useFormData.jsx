import { useState, useRef } from 'react';
import { useApiContext } from '../context/ApiContext';

export default function useFormData() {
  const [formTitle, setFormTitle] = useState('');
  const formDesc = useRef();
  const formStatus = useRef();

  const [isNewTaskAdded, setIsNewTaskAdded] = useState({
    success: false,
    error: '',
  });

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
        taskRes ? setIsNewTaskAdded({ ...isNewTaskAdded, success: true }) : setIsNewTaskAdded({ ...isNewTaskAdded, success: false });
      } catch (err) {
        console.error(err);
        let errorString = '';
        err.message.includes('title') && (errorString = 'errore nel titolo, assicurati che sia compilato correttamente');
        err.message.includes('description') && (errorString = 'errore nella descrizione, assicurati che sia compilata correttamente');
        err.message.includes('status') && (errorString = "errore nello status, assicurati che sia un valore tra 'To do', 'Doing' o 'Done'");
        setIsNewTaskAdded({ ...isNewTaskAdded, success: false, error: errorString });
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
