import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AboutLazy } from '@/pages/about/About.lazy';
import { Shop } from '@/pages/shop';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const rootElem = createRoot(root);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <App />
      </div>
    ),
    children: [
      {
        path: '/about',
        element: (
          <Suspense>
            <AboutLazy />
          </Suspense>
          // <About />
        ),
      },
      {
        path: '/shop',
        element: (
          <Suspense>
            <Shop />
          </Suspense>
          // <Shop />
        ),
      },
    ],
  },
]);

rootElem.render(<RouterProvider router={router} />);
