import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Main from './component/Main';
import Footer from './component/Footer';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import Error from './Pages/Error';
import Blog from './Pages/Blog';
import Statistics from './Pages/Statistics';


function App() {
  const router = createBrowserRouter([
      {path:'/', element: <Main/>, children:[
        {path:'/home', element:<Home/>},
        {path:'/statistics', element:<Statistics/>},
        {path:'/blogs', element:<Blogs/>},
        {path:'/blogs/:title', element:<Blog/>},
      ]},
      {path:'*', element:<Error/>},
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Footer/>
    </div>
  );
}

export default App;
