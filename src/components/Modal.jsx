import Portal from './Portal';
import { memo } from 'react';

export default memo(function Modal({ domElement = '#root', id, title, content, show, onClose, onConfirm, confirmText = 'Conferma', closeText = 'Annulla' }) {
  return (
    <>
      <Portal domElement={domElement}>
        <div id={id} data-visible={show} className={'data-[visible=true]:flex data-[visible=false]:hidden top-0 left-0 fixed w-screen h-screen justify-center items-center bg-black/40'}>
          <div className="bg-white border border-neutral-200 rounded-lg shadow-xl shadow-black/20 p-6 flex flex-col gap-5 min-w-[40%]">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-xl">{title}</span>
              <div>{content}</div>
            </div>

            <div className={`${!onClose && !onConfirm ? 'hidden' : 'flex'} items-center gap-2 justify-end`}>
              <button onClick={onClose} className={`${!onClose && 'hidden'} px-4 py-2 rounded-lg bg-red-200 text-red-700`}>
                {closeText}
              </button>
              <button onClick={onConfirm} className={`${!onConfirm && 'hidden'} px-4 py-2 rounded-lg bg-black text-white`}>
                {confirmText}
              </button>
            </div>
          </div>
        </div>
      </Portal>
    </>
  );
});
