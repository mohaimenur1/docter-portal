/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'react-day-picker/dist/style.css';
import UserContext from './context/UserContext';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserContext>
        <App />
      </UserContext>
    </QueryClientProvider>
  </React.StrictMode>
);
