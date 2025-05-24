import { NavLink } from 'react-router-dom';

export default function Nav() {
  const navStyles = {
    active: 'bg-white shadow-md border border-neutral-200/60 shadow-black/5 text-neutral-900',
    default: 'py-2 px-4 rounded-full hover:bg-white hover:cursor-pointer font-semibold text-neutral-500',
  };

  return (
    <nav className="bg-neutral-100 py-3 px-2 rounded-full border border-neutral-200/50">
      <ul className="flex justify-center items-center gap-2">
        <li>
          <NavLink className={({ isActive }) => (isActive ? `${navStyles.default} ${navStyles.active}` : `${navStyles.default}`)} to={'/'}>
            Task List
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? `${navStyles.default} ${navStyles.active}` : `${navStyles.default}`)} to={'/add-task'}>
            Add Task
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
