import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTE_CONSTANTS } from '@/shared/config';

const TodoListPage = lazy(() => import('./todo-list'));

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTE_CONSTANTS.HOME} element={<TodoListPage />} />
    </Routes>
  );
};

export { Routing };
