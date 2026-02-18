import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const todos = [
  'Set up backend for updating todos from the website',
  'Add authentication for secure updates',
  'Build UI for create/edit/delete',
  'Hook up notifications',
  'let user to enter email to get resume on email Id or somehting like that',
];

const TodoList = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen px-6 py-12 ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold">Todo List</h1>
          <Link
            to="/"
            className={`text-sm font-medium underline ${isDark ? 'text-blue-300' : 'text-blue-600'}`}
          >
            Back to Home
          </Link>
        </div>
        <p className={`mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          Temporary list. I will update this via code for now.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          {todos.map((todo) => (
            <li key={todo} className={isDark ? 'text-slate-200' : 'text-slate-800'}>
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
