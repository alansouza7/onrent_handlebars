import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './HomeLayout';
import HandleBars from './HandleBars';


const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout />, 
  },
  {
    path: '/handlebars',
    element: <HandleBars />
  }
])

export default function App() {
return <RouterProvider router={router}></RouterProvider>;
}