import useFormData from '../hooks/useFormData';

export default function AddTask() {
  const [formTitle, formDesc, formStatus, handleTitle] = useFormData();

  return (
    <>
      <h1 className="text-4xl font-bold text-center">Add Task</h1>
      <div className="w-full bg-neutral-100 px-3 py-8 flex justify-center items-center rounded-2xl">
        <form className="w-[60%] min-w-[480px] flex flex-col gap-4">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="taskTitle">Titolo della Task</label>
            <input
              className="bg-white rounded-lg min-h-12 px-4 py-1 min-w-[100%] border border-neutral-200/50 focus-visible:outline-2 focus-visible:outline-neutral-700 shadow-sm shadow-black/5"
              type="text"
              name="taskTitle"
              placeholder="Fare la spesa"
              value={formTitle}
              onChange={(e) => handleTitle(e)}
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="taskDesc">Descrizione della Task</label>
            <textarea className="min-h-28 bg-white rounded-lg px-4 py-2 min-w-[100%] border border-neutral-200/50 focus-visible:outline-2 focus-visible:outline-neutral-700 shadow-sm shadow-black/5" name="taskDesc" ref={formDesc} placeholder="Comprare latte, biscotti..." />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="taskDesc">Seleziona stato Task</label>
            <div className="flex flex-wrap justify-between">
              <select ref={formStatus} defaultValue="todo" name="taskStatus" className="w-fit min-w-60 bg-white rounded-lg min-h-12 px-4 py-1 border border-neutral-200/50 focus-visible:outline-2 focus-visible:outline-neutral-700 shadow-sm shadow-black/5">
                <option value="todo">To do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>
              <button className="bg-black text-white rounded-full px-6 py-4 font-semibold hover:scale-110 transition duration-300 ease-in-out cursor-pointer hover:shadow-xl" type="submit">
                Aggiungi Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
