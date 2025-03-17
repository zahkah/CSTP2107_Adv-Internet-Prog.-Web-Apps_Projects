import NewTodoForm from "./components/NewTodoForm";
import { getTodo } from "@/lib/todo";

// To create a TODO APP
// Add a task feature
// Marking the task as complete Feature
// Implement APIS using functions in Next.js
// We will make use of server actions

export default async  function Home() {

  const { todos } = await getTodo();

  console.log(todos, 'backend data');

  return (
    <section>
      <div className="container">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Todos</h1>

          {/* An input box which adds a todo for us */}
          <NewTodoForm />

          {/* Created Todos */}

          {/* List of todos are shown here */}
      </div>
     
    </section>
  );
}
