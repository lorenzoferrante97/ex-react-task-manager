import { useParams, useNavigate } from 'react-router-dom';
import { useApiContext } from '../context/ApiContext';
import Modal from '../components/Modal';
import EditTaskModal from '../components/EditTaskModal';
import { useEffect } from 'react';

export default function TaskDetail() {
  const taskId = parseInt(useParams().id);

  const navigate = useNavigate();

  const { tasks, removeTasks, isTaskDeleted, setIsTaskDeleted, isModalOpened, toggleModal, activeModalId, setEditTitle, setEditDesc, setEditStatus, updateTasks, editTitle, editDesc, editStatus, isTaskUpdated, setIsTaskUpdated } = useApiContext();
  const activeTask = tasks.find((task) => task.id == taskId);

  // useEffect(() => {
  //   setEditTitle(activeTask.title);
  //   setEditDesc(activeTask.description);
  //   setEditStatus(activeTask.status);
  // }, []);

  if (!isModalOpened) {
    if (activeTask) {
      const { title, description, status, createdAt } = activeTask;
      const createdDate = new Date(createdAt).toLocaleString();

      const statusTextStyles = {
        todo: 'text-red-700',
        doing: 'text-amber-700',
        done: 'text-green-700',
      };
      const statusDotStyles = {
        todo: 'bg-red-300',
        doing: 'bg-amber-300',
        done: 'bg-green-300',
      };

      return (
        <>
          <span className="border border-neutral-200 text-neutral-500 rounded-sm p-2 w-fit">Task Detail {taskId}</span>
          <div className="w-full bg-neutral-100 p-3 grid grid-cols-12 gap-y-2 rounded-2xl">
            <div className="col-span-full bg-white p-4 rounded-lg flex f gap-3 items-center justify-between">
              <div className="flex gap-4 items-center">
                <h1 className="text-4xl font-bold">{title}</h1>
                <div className={` flex items-center gap-2 ${status == 'To do' ? statusTextStyles.todo : status == 'Doing' ? statusTextStyles.doing : statusTextStyles.done}`}>
                  <span className={`inline-block size-2 rounded-full ${status == 'To do' ? statusDotStyles.todo : status == 'Doing' ? statusDotStyles.doing : statusDotStyles.done} `}></span>
                  <span className="text-lg font-semibold">{status}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => toggleModal('modalTaskDetail')} className="hover:cursor-pointer bg-red-700 text-white rounded-lg px-4 py-2 font-semibold">
                  Elimina Task
                </button>
                <button
                  onClick={() => {
                    setEditTitle(activeTask.title);
                    setEditDesc(activeTask.description);
                    setEditStatus(activeTask.status);
                    toggleModal('editTaskModal');
                  }}
                  className="hover:cursor-pointer bg-black text-white rounded-lg px-4 py-2 font-semibold"
                >
                  Aggiorna Task
                </button>
              </div>
            </div>
            <div className="flex flex-col col-span-full">
              <div className="col-span-full p-4 flex items-center gap-3">
                <span className="text-lg text-neutral-500">Descrizione</span>
                <div className="rounded-full size-1 bg-neutral-500"></div>
                <p className="italic">" {description} "</p>
              </div>
              <div className="col-span-full p-4 flex items-center gap-3">
                <span className="text-lg text-neutral-500">Creato il</span>
                <div className="rounded-full size-1 bg-neutral-500"></div>
                <p className="italic">" {createdDate} "</p>
              </div>
            </div>
          </div>
          <Modal
            id="updatedTaskPortal"
            show={isTaskUpdated.success || isTaskUpdated.message.length > 0}
            title={isTaskUpdated.success ? 'Task aggiornata' : 'Errore aggiornamento'}
            content={isTaskUpdated.message}
            confirmText="Torna alle task"
            onConfirm={() => {
              setIsTaskUpdated({ ...isTaskUpdated, success: false, message: '' });
              navigate('/');
            }}
          />
        </>
      );
    } else {
      return (
        <>
          {/* {isTaskDeleted.success && (
            <Portal domElement="#root">
              <div id="removedTaskPortal" className={`${isTaskDeleted.success ? 'flex' : 'hidden'} fixed top-0 left-0 w-screen h-screen justify-center items-center bg-black/40`}>
                <div className="bg-white border border-neutral-200 rounded-lg shadow-xl shadow-black/20 p-6 flex flex-col gap-2">
                  <p>Task rimosso con successo!</p>

                  <button
                    onClick={() => {
                      setIsTaskDeleted({ ...isTaskDeleted, success: false, message: '' });
                      navigate('/');
                    }}
                    className="bg-red-200 text-red-700 px-4 py-2 rounded-sm hover:cursor-pointer"
                  >
                    Torna alle task
                  </button>
                </div>
              </div>
            </Portal>
          )} */}
          <Modal
            id="removedTaskPortal"
            show={isTaskDeleted.success || isTaskDeleted.message.length > 0}
            title={isTaskDeleted.success ? 'Task eliminata' : 'Errore eliminazione'}
            content={isTaskDeleted.message}
            confirmText="Torna alle task"
            onConfirm={() => {
              setIsTaskDeleted({ ...isTaskDeleted, success: false, message: '' });
              navigate('/');
            }}
          />

          {/* {isTaskDeleted.success == false && isTaskDeleted.message.length > 0 && (
            <Portal domElement="#root">
              <div id="removeTaskPortalError" className={`${isTaskDeleted.success == false && isTaskDeleted.message.length > 0 ? 'flex' : 'hidden'} fixed top-0 left-0 w-screen h-screen justify-center items-center bg-black/40`}>
                <div className="bg-white border border-neutral-200 rounded-lg shadow-xl shadow-black/20 p-6 flex flex-col gap-2">
                  <p>{isTaskDeleted.message}</p>

                  <button
                    onClick={() => {
                      setIsTaskDeleted({ ...isTaskDeleted, success: false, error: '' });
                      navigate('/');
                    }}
                    className="bg-red-200 text-red-700 px-4 py-2 rounded-sm hover:cursor-pointer"
                  >
                    Torna alle task
                  </button>
                </div>
              </div>
            </Portal>
          )} */}
        </>
      );
    }
  } else {
    return (
      <>
        <Modal
          id="modalTaskDetail"
          show={isModalOpened && activeModalId == 'modalTaskDetail'}
          title="Conferma Eliminazione"
          content="Vuoi davvero eliminare il task?"
          onConfirm={() => {
            removeTasks(taskId), toggleModal('modalTaskDetail');
          }}
          onClose={() => toggleModal('modalTaskDetail')}
        />
        <EditTaskModal
          task={activeTask}
          id="editTaskModal"
          show={isModalOpened && activeModalId == 'editTaskModal'}
          onClose={() => toggleModal('editTaskModal')}
          onSave={(e) => {
            e.preventDefault();
            updateTasks(
              {
                editTitle,
                editDesc,
                editStatus,
              },
              taskId
            ),
              toggleModal('editTaskModal');
          }}
        />
      </>
    );
  }
}
