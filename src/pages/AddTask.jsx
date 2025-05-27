import useFormData from '../hooks/useFormData';
import useValidation from '../hooks/useValidation';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';

export default function AddTask() {
  const [formTitle, formDesc, formStatus, isNewTaskAdded, handleTitle, handleSubmit, resetForm, setIsNewTaskAdded] = useFormData();
  const [validateTitle, errorMessages] = useValidation();
  const formData = { formTitle, formDesc, formStatus };

  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-4xl font-bold text-center">Add Task</h1>
      <div className="w-full bg-neutral-100 px-3 py-8 flex justify-center items-center rounded-2xl">
        <form
          className="w-[60%] min-w-[480px] flex flex-col gap-4"
          onSubmit={(e) => {
            handleSubmit(e, formData), resetForm();
          }}
        >
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="taskTitle">Titolo della Task</label>
            <input
              className="bg-white rounded-lg min-h-12 px-4 py-1 min-w-[100%] border border-neutral-200/50 focus-visible:outline-2 focus-visible:outline-neutral-700 shadow-sm shadow-black/5"
              type="text"
              name="taskTitle"
              placeholder="Fare la spesa"
              value={formTitle}
              onChange={(e) => {
                handleTitle(e), validateTitle(e.target.value);
              }}
            />
            {errorMessages.titleErr.length != 0 && <div className="px-4 py-2 rounded-sm bg-red-200 text-red-700">{errorMessages.titleErr}</div>}
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="taskDesc">Descrizione della Task</label>
            <textarea className="min-h-28 bg-white rounded-lg px-4 py-2 min-w-[100%] border border-neutral-200/50 focus-visible:outline-2 focus-visible:outline-neutral-700 shadow-sm shadow-black/5" name="taskDesc" ref={formDesc} placeholder="Comprare latte, biscotti..." />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="taskDesc">Seleziona stato Task</label>
            <div className="flex flex-wrap justify-between">
              <select ref={formStatus} defaultValue="To do" name="taskStatus" className="w-fit min-w-60 bg-white rounded-lg min-h-12 px-4 py-1 border border-neutral-200/50 focus-visible:outline-2 focus-visible:outline-neutral-700 shadow-sm shadow-black/5">
                <option value="To do">To do</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
              </select>
              <button className="bg-black text-white rounded-full px-6 py-4 font-semibold hover:scale-110 transition duration-300 ease-in-out cursor-pointer hover:shadow-xl" type="submit">
                Aggiungi Task
              </button>
            </div>
          </div>
        </form>

        {/* {isNewTaskAdded.success && (
          <Portal domElement="#root">
            <div id="addTaskPortal" className={`${isNewTaskAdded.success ? 'flex' : 'hidden'} fixed top-0 left-0 w-screen h-screen justify-center items-center bg-black/40`}>
              <div className="bg-white border border-neutral-200 rounded-lg shadow-xl shadow-black/20 p-6 flex flex-col gap-2">
                <p>Task aggiunto con successo!</p>

                <button
                  onClick={() => {
                    setIsNewTaskAdded({ ...isNewTaskAdded, success: false });
                  }}
                  className="bg-red-200 text-red-700 px-4 py-2 rounded-sm hover:cursor-pointer"
                >
                  Chiudi Task
                </button>
              </div>
            </div>
          </Portal>
        )} */}
        {/* {isNewTaskAdded.success == false && (
          <Portal domElement="#root">
            <div id="addTaskPortalError" className={`${isNewTaskAdded.success == false && isNewTaskAdded.error.length > 0 ? 'flex' : 'hidden'} fixed top-0 left-0 w-screen h-screen justify-center items-center bg-black/40`}>
              <div className="bg-white border border-neutral-200 rounded-lg shadow-xl shadow-black/20 p-6 flex flex-col gap-2">
                <p>{isNewTaskAdded.error}</p>

                <button
                  onClick={() => {
                    setIsNewTaskAdded({ ...isNewTaskAdded, success: false, error: '' });
                  }}
                  className="bg-red-200 text-red-700 px-4 py-2 rounded-sm hover:cursor-pointer"
                >
                  Chiudi Task
                </button>
              </div>
            </div>
          </Portal>
        )} */}
        <Modal
          id="removedTaskPortal"
          show={isNewTaskAdded.success || isNewTaskAdded.error.length > 0}
          title={isNewTaskAdded.success ? 'Task aggiunta' : 'Errore di aggiunta task'}
          content={isNewTaskAdded.error}
          confirmText="Torna alle task"
          closeText="Torna alla pagina"
          onConfirm={() => navigate('/')}
          onClose={() => setIsNewTaskAdded({ ...isNewTaskAdded, success: false, error: '' })}
        />
      </div>
    </>
  );
}
