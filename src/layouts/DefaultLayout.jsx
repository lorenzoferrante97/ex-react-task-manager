import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

export default function DefaultLayout() {
  return (
    <div className="bg-neutral-50 font-custom flex w-full min-h-screen flex-col items-center gap-12 p-10">
      <Nav />
      <main className="size-full flex flex-col gap-10">
        <Outlet />
      </main>
    </div>
  );
}
