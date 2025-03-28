import './App.css';
import AddUser from './adduser/AddUser.jsx';
import User from './getuser/User';
import  {createBrowserRouter, RouterProvider} from "react-router-dom"
import Update from './updateuser/Update.jsx';

function App() {
  const route = createBrowserRouter([{
    path:"/",
    element:<User/>,
  },
  {
    path:"/add",
    element:<AddUser/>,
  },
  {
    path:"/update/:id",
    element:<Update />,
  }
]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
      
    </div>
  );
}

export default App;
