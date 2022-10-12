import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Main from './component/Main';
import Footer from './component/Footer';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import Error from './Pages/Error';
import Blog from './Pages/Blog';
import Statistics from './Pages/Statistics';
import Quizs from './Pages/Quizs';
import Topics from './Pages/Topics';



function App() {
  const router = createBrowserRouter([
      
      {path:'/', element: <Main/>, children:[
        {
          path:'/',
          loader: async ()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Home/>
        },
        {
        path:'/topics/:id', 
        loader: async ({params})=>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        },
        element:<Topics/>
        },
        {
          path:'/quiz/:id', 
          loader: async ({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element:<Quizs/>
        },

        {path:'/statistics', element:<Statistics/>},
        {path:'/blogs', element:<Blogs/>},
        {path:'/blogs/:title', element:<Blog/>},
        {path:'*', element:<Error/>},
        
      ]},
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Footer/>      
    </div>
  );
}

export default App;
