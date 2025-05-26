import { useState, useRef } from 'react';
import { useApiContext } from '../context/ApiContext';

export default function useFormData() {
  const [formTitle, setFormTitle] = useState('');
  const formDesc = useRef();
  const formStatus = useRef();

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
        console.log('task aggiunta: ', taskRes);
        // setTasks([...tasks, taskRes.task]);
      } catch (err) {
        console.error(err);
      }
    })();
  };

  return [formTitle, formDesc, formStatus, handleTitle, handleSubmit];
}
