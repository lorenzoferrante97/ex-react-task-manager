import Nav from '../components/Nav';

export default function TaskList() {
  return (
    <main className="bg-neutral-50 font-custom flex w-full min-h-screen flex-col items-center gap-5 p-10">
      <h1 className="text-4xl font-bold">Task List</h1>
      <Nav />
    </main>
  );
}
