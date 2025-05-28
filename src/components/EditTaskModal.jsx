import { useRef, useState } from 'react';
import Modal from './Modal';
import useValidation from '../hooks/useValidation';
import { useApiContext } from '../context/ApiContext';

export default function EditTaskModal({ id, show, onClose, task, onSave, title = 'Modifica task', confirmText = 'Salva' }) {
  const [validateTitle, errorMessages] = useValidation();
  const { editTitle, editDesc, editStatus, setEditTitle, setEditDesc, setEditStatus } = useApiContext();

  const formRef = useRef();

  // const [editTitle, setEditTitle] = useState(task.title);
  // const [editDesc, setEditDesc] = useState(task.description);
  // const [editStatus, setEditStatus] = useState(task.status);

  const editForm = (
    <form ref={formRef} onSubmit={onSave} className="w-[60vw] flex flex-col gap-4">
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="taskTitle">Titolo della Task</label>
        <input
          className="bg-white rounded-lg min-h-12 px-4 py-1 min-w-[100%] border border-neutral-200/50 focus-visible:outline-2 focus-visible:outline-neutral-700 shadow-sm shadow-black/5"
          type="text"
          name="taskTitle"
          placeholder="Fare la spesa"
          value={editTitle}
          onChange={(e) => {
            setEditTitle(e.target.value);
            validateTitle(e.target.value);
          }}
        />
        {errorMessages.titleErr.length != 0 && <div className="px-4 py-2 rounded-sm bg-red-200 text-red-700 w-fit">{errorMessages.titleErr}</div>}
      </div>
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="taskDesc">Descrizione della Task</label>
        <textarea
          className="min-h-28 bg-white rounded-lg px-4 py-2 min-w-[100%] border border-neutral-200/50 focus-visible:outline-2 focus-visible:outline-neutral-700 shadow-sm shadow-black/5"
          name="taskDesc"
          value={editDesc}
          onChange={(e) => setEditDesc(e.target.value)}
          placeholder="Comprare latte, biscotti..."
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="taskDesc">Seleziona stato Task</label>
        <select name="taskStatus" value={editStatus} onChange={(e) => setEditStatus(e.target.value)} className="w-fit min-w-60 bg-white rounded-lg min-h-12 px-4 py-1 border border-neutral-200/50 focus-visible:outline-2 focus-visible:outline-neutral-700 shadow-sm shadow-black/5">
          <option value="To do">To do</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
      </div>
    </form>
  );

  return (
    <>
      <Modal id={id} show={show} title={title} content={editForm} confirmText={confirmText} closeText="Annulla" onClose={onClose} onConfirm={() => formRef.current?.requestSubmit()} />
    </>
  );
}
