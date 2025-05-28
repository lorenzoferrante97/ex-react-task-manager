import { useRef } from 'react';
import Modal from './Modal';

export default function EditTaskModal({ id, show, onClose, task, onSave, title = 'Modifica task', confirmText = 'Salva' }) {
  const formRef = useRef();

  const editForm = (
    <form ref={formRef} className="w-[60%] min-w-[480px] flex flex-col gap-4" onSubmit={(e) => {}}>
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="taskTitle">Titolo della Task</label>
        <input className="bg-white rounded-lg min-h-12 px-4 py-1 min-w-[100%] border border-neutral-200/50 focus-visible:outline-2 focus-visible:outline-neutral-700 shadow-sm shadow-black/5" type="text" name="taskTitle" placeholder="Fare la spesa" value="" onChange={(e) => {}} />
        {/* {errorMessages.titleErr.length != 0 && <div className="px-4 py-2 rounded-sm bg-red-200 text-red-700">{errorMessages.titleErr}</div>} */}
      </div>
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="taskDesc">Descrizione della Task</label>
        <textarea className="min-h-28 bg-white rounded-lg px-4 py-2 min-w-[100%] border border-neutral-200/50 focus-visible:outline-2 focus-visible:outline-neutral-700 shadow-sm shadow-black/5" name="taskDesc" placeholder="Comprare latte, biscotti..." />
      </div>
      <div className="w-full flex items-end justify-between">
        <div className="flex flex-col gap-2">
          <label htmlFor="taskDesc">Seleziona stato Task</label>
          <select defaultValue="To do" name="taskStatus" className="w-fit min-w-60 bg-white rounded-lg min-h-12 px-4 py-1 border border-neutral-200/50 focus-visible:outline-2 focus-visible:outline-neutral-700 shadow-sm shadow-black/5">
            <option value="To do">To do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <button className="bg-black text-white rounded-full px-6 py-4 font-semibold hover:scale-110 transition duration-300 ease-in-out cursor-pointer hover:shadow-xl" type="submit">
          Modifica Task
        </button>
      </div>
    </form>
  );

  return (
    <>
      <Modal id={id} show={show} title={title} content={editForm} confirmText={confirmText} closeText="Annulla" onClose={onClose} />
    </>
  );
}
