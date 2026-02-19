import { Link } from 'react-router-dom';
import { FormEvent, useEffect, useMemo, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

type TodoStatus = 'pending' | 'inprogress' | 'complete' | 'abort';

interface Todo {
  _id: string;
  title: string;
  description?: string;
  status: TodoStatus;
  isArchived: boolean;
  archivedAt?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

const statusLabels: Record<TodoStatus, string> = {
  pending: 'Pending',
  inprogress: 'In Progress',
  complete: 'Complete',
  abort: 'Aborted',
};

const statusBadge: Record<TodoStatus, string> = {
  pending: 'bg-amber-100 text-amber-700',
  inprogress: 'bg-blue-100 text-blue-700',
  complete: 'bg-emerald-100 text-emerald-700',
  abort: 'bg-rose-100 text-rose-700',
};

const darkStatusBadge: Record<TodoStatus, string> = {
  pending: 'bg-amber-500/15 text-amber-200',
  inprogress: 'bg-sky-500/15 text-sky-200',
  complete: 'bg-emerald-500/15 text-emerald-200',
  abort: 'bg-rose-500/15 text-rose-200',
};

const TodoList = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const apiBase = useMemo(
    () => import.meta.env.VITE_API_BASE_URL || 'https://portfolio-backend-ashy-nine-81.vercel.app',
    // () => 'http://localhost:3000',
    []
  );

  const [todos, setTodos] = useState<Todo[]>([]);
  const [archivedTodos, setArchivedTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showArchived, setShowArchived] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<TodoStatus>('pending');
  const [submitting, setSubmitting] = useState(false);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editStatus, setEditStatus] = useState<TodoStatus>('pending');
  const [savingEdit, setSavingEdit] = useState(false);

  const loadTodos = async () => {
    setLoading(true);
    setError(null);

    try {
      const [activeRes, archivedRes] = await Promise.all([
        fetch(`${apiBase}/todos`),
        fetch(`${apiBase}/todos/archived`),
      ]);

      if (!activeRes.ok) {
        throw new Error(`Failed to load todos (${activeRes.status}).`);
      }
      if (!archivedRes.ok) {
        throw new Error(`Failed to load archived todos (${archivedRes.status}).`);
      }

      const [activeData, archivedData] = await Promise.all([
        activeRes.json(),
        archivedRes.json(),
      ]);

      setTodos(activeData);
      setArchivedTodos(archivedData);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTodos();
  }, [apiBase]);

  const handleCreate = async (event: FormEvent) => {
    event.preventDefault();
    if (!title.trim()) return;

    setSubmitting(true);
    try {
      const res = await fetch(`${apiBase}/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim(),
          status,
        }),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        const message = payload?.message || `Failed to create (${res.status}).`;
        throw new Error(message);
      }

      const created = await res.json();
      setTodos((prev) => [created, ...prev]);
      setTitle('');
      setDescription('');
      setStatus('pending');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong.';
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  const startEdit = (todo: Todo) => {
    setEditingId(todo._id);
    setEditTitle(todo.title);
    setEditDescription(todo.description || '');
    setEditStatus(todo.status);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle('');
    setEditDescription('');
    setEditStatus('pending');
  };

  const handleUpdate = async (id: string) => {
    if (!editTitle.trim()) return;
    setSavingEdit(true);

    try {
      const res = await fetch(`${apiBase}/todos/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: editTitle.trim(),
          description: editDescription.trim(),
          status: editStatus,
        }),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        const message = payload?.message || `Failed to update (${res.status}).`;
        throw new Error(message);
      }

      const updated = await res.json();
      setTodos((prev) => prev.map((todo) => (todo._id === id ? updated : todo)));
      cancelEdit();
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong.';
      setError(message);
    } finally {
      setSavingEdit(false);
    }
  };

  const handleArchive = async (id: string) => {
    try {
      const res = await fetch(`${apiBase}/todos/${id}/archive`, {
        method: 'PATCH',
      });

      if (!res.ok) {
        throw new Error(`Failed to archive (${res.status}).`);
      }

      const archived = await res.json();
      setTodos((prev) => prev.filter((todo) => todo._id !== id));
      setArchivedTodos((prev) => [archived, ...prev]);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong.';
      setError(message);
    }
  };

  const totals = {
    active: todos.length,
    archived: archivedTodos.length,
    complete: todos.filter((todo) => todo.status === 'complete').length,
  };

  return (
    <div
      className={`min-h-screen px-4 sm:px-6 py-8 sm:py-12 ${
        isDark
          ? 'bg-slate-950 text-slate-100'
          : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <p className={`text-sm uppercase tracking-[0.2em] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Personal backlog
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2">Todo Control Center</h1>
          </div>
          <Link
            to="/"
            className={`text-sm font-medium underline ${isDark ? 'text-sky-300' : 'text-sky-600'}`}
          >
            Back to Home
          </Link>
        </div>

        <div
          className={`rounded-3xl p-6 md:p-8 shadow-xl mb-8 ${
            isDark
              ? 'bg-slate-900/70 border border-slate-800'
              : 'bg-white border border-slate-200'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Create a new task</h2>
              <p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Add quick notes, set the status, and keep everything tidy.
              </p>
            </div>
            <button
              type="button"
              onClick={loadTodos}
              className={`w-full sm:w-auto px-4 py-2 rounded-full text-sm font-semibold transition ${
                isDark
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-100'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              Refresh
            </button>
          </div>

          <form onSubmit={handleCreate} className="grid gap-4 mt-6">
            <div className="grid gap-4 md:grid-cols-[1.5fr_1fr]">
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="What needs to get done?"
                className={`w-full rounded-2xl px-4 py-3 text-sm outline-none border ${
                  isDark
                    ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-500'
                    : 'bg-white border-slate-200 text-slate-900 placeholder:text-slate-400'
                }`}
              />
              <select
                value={status}
                onChange={(event) => setStatus(event.target.value as TodoStatus)}
                className={`w-full rounded-2xl px-4 py-3 text-sm outline-none border ${
                  isDark
                    ? 'bg-slate-950 border-slate-800 text-slate-100'
                    : 'bg-white border-slate-200 text-slate-900'
                }`}
              >
                {Object.entries(statusLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Add a note or context (optional)."
              rows={3}
              className={`w-full rounded-2xl px-4 py-3 text-sm outline-none border ${
                isDark
                  ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-500'
                  : 'bg-white border-slate-200 text-slate-900 placeholder:text-slate-400'
              }`}
            />
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <button
                type="submit"
                disabled={submitting}
                className={`w-full sm:w-auto px-6 py-3 rounded-2xl text-sm font-semibold transition ${
                  submitting
                    ? 'cursor-not-allowed opacity-70'
                    : ''
                } ${
                  isDark
                    ? 'bg-sky-500 text-slate-950 hover:bg-sky-400'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {submitting ? 'Saving...' : 'Add Todo'}
              </button>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Stored in MongoDB via the backend API.
              </p>
            </div>
          </form>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {[
            { label: 'Active todos', value: totals.active },
            { label: 'Completed', value: totals.complete },
            { label: 'Archived', value: totals.archived },
          ].map((item) => (
            <div
              key={item.label}
              className={`rounded-3xl px-5 py-4 border ${
                isDark
                  ? 'bg-slate-900/70 border-slate-800'
                  : 'bg-white border-slate-200'
              }`}
            >
              <p className={`text-xs uppercase tracking-[0.2em] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {item.label}
              </p>
              <p className="text-2xl font-semibold mt-2">{item.value}</p>
            </div>
          ))}
        </div>

        <div
          className={`rounded-3xl p-6 md:p-8 border ${
            isDark
              ? 'bg-slate-900/70 border-slate-800'
              : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-semibold">Active todos</h2>
              <p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Keep track of the work in motion.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowArchived((prev) => !prev)}
              className={`w-full sm:w-auto px-4 py-2 rounded-full text-sm font-semibold transition ${
                isDark
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-100'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {showArchived ? 'Hide archived' : 'Show archived'}
            </button>
          </div>

          {error && (
            <div
              className={`mb-4 rounded-2xl px-4 py-3 text-sm ${
                isDark
                  ? 'bg-rose-500/15 text-rose-200'
                  : 'bg-rose-100 text-rose-700'
              }`}
            >
              {error}
            </div>
          )}

          {loading ? (
            <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Loading todos...
            </div>
          ) : todos.length === 0 ? (
            <div
              className={`rounded-2xl px-4 py-6 text-sm text-center ${
                isDark
                  ? 'bg-slate-950/60 text-slate-400'
                  : 'bg-slate-50 text-slate-500'
              }`}
            >
              No active todos yet. Add one above to get started.
            </div>
          ) : (
            <div className="grid gap-4">
              {todos.map((todo) => (
                <div
                  key={todo._id}
                  className={`rounded-2xl border p-4 md:p-5 ${
                    isDark
                      ? 'border-slate-800 bg-slate-950/60'
                      : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold break-words">{todo.title}</h3>
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            isDark ? darkStatusBadge[todo.status] : statusBadge[todo.status]
                          }`}
                        >
                          {statusLabels[todo.status]}
                        </span>
                      </div>
                      {todo.description && (
                        <p className={`mt-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                          {todo.description}
                        </p>
                      )}
                      {todo.updatedAt && (
                        <p className={`mt-3 text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                          Updated {new Date(todo.updatedAt).toLocaleString()}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={() => startEdit(todo)}
                        className={`w-full sm:w-auto px-3 py-2 rounded-full text-xs font-semibold transition ${
                          isDark
                            ? 'bg-slate-800 text-slate-100 hover:bg-slate-700'
                            : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                        }`}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleArchive(todo._id)}
                        className={`w-full sm:w-auto px-3 py-2 rounded-full text-xs font-semibold transition ${
                          isDark
                            ? 'bg-rose-500/20 text-rose-200 hover:bg-rose-500/30'
                            : 'bg-rose-100 text-rose-700 hover:bg-rose-200'
                        }`}
                      >
                        Archive
                      </button>
                    </div>
                  </div>

                  {editingId === todo._id && (
                    <div className={`mt-4 rounded-2xl p-4 border ${isDark ? 'border-slate-800 bg-slate-900/70' : 'border-slate-200 bg-white'}`}>
                      <div className="grid gap-3">
                        <input
                          value={editTitle}
                          onChange={(event) => setEditTitle(event.target.value)}
                          className={`w-full rounded-xl px-4 py-2 text-sm outline-none border ${
                            isDark
                              ? 'bg-slate-950 border-slate-800 text-slate-100'
                              : 'bg-white border-slate-200 text-slate-900'
                          }`}
                        />
                        <textarea
                          value={editDescription}
                          onChange={(event) => setEditDescription(event.target.value)}
                          rows={2}
                          className={`w-full rounded-xl px-4 py-2 text-sm outline-none border ${
                            isDark
                              ? 'bg-slate-950 border-slate-800 text-slate-100'
                              : 'bg-white border-slate-200 text-slate-900'
                          }`}
                        />
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                          <select
                            value={editStatus}
                            onChange={(event) => setEditStatus(event.target.value as TodoStatus)}
                            className={`w-full sm:w-auto rounded-xl px-3 py-2 text-sm outline-none border ${
                              isDark
                                ? 'bg-slate-950 border-slate-800 text-slate-100'
                                : 'bg-white border-slate-200 text-slate-900'
                            }`}
                          >
                            {Object.entries(statusLabels).map(([value, label]) => (
                              <option key={value} value={value}>
                                {label}
                              </option>
                            ))}
                          </select>
                          <button
                            type="button"
                            onClick={() => handleUpdate(todo._id)}
                            disabled={savingEdit}
                            className={`w-full sm:w-auto px-4 py-2 rounded-full text-xs font-semibold transition ${
                              savingEdit ? 'cursor-not-allowed opacity-70' : ''
                            } ${
                              isDark
                                ? 'bg-sky-500 text-slate-950 hover:bg-sky-400'
                                : 'bg-slate-900 text-white hover:bg-slate-800'
                            }`}
                          >
                            {savingEdit ? 'Saving...' : 'Save changes'}
                          </button>
                          <button
                            type="button"
                            onClick={cancelEdit}
                            className={`w-full sm:w-auto px-4 py-2 rounded-full text-xs font-semibold transition ${
                              isDark
                                ? 'bg-slate-800 text-slate-100 hover:bg-slate-700'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {showArchived && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold">Archived</h3>
              <p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                For reference only. Archived items cannot be edited here.
              </p>
              {archivedTodos.length === 0 ? (
                <div
                  className={`mt-4 rounded-2xl px-4 py-6 text-sm text-center ${
                    isDark
                      ? 'bg-slate-950/60 text-slate-400'
                      : 'bg-slate-50 text-slate-500'
                  }`}
                >
                  Nothing archived yet.
                </div>
              ) : (
                <div className="mt-4 grid gap-3">
                  {archivedTodos.map((todo) => (
                    <div
                      key={todo._id}
                      className={`rounded-2xl border px-4 py-3 ${
                        isDark
                          ? 'border-slate-800 bg-slate-950/60'
                          : 'border-slate-200 bg-slate-50'
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-semibold">{todo.title}</p>
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            isDark ? darkStatusBadge[todo.status] : statusBadge[todo.status]
                          }`}
                        >
                          {statusLabels[todo.status]}
                        </span>
                      </div>
                      {todo.archivedAt && (
                        <p className={`text-xs mt-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                          Archived {new Date(todo.archivedAt).toLocaleString()}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
