
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DisplayRooms from './MainComponent/Rooms/DisplayRooms.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ViewRoomList from './MainComponent/ViewRoom/ViewRoomList.jsx'
const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>
    },
    {
      path:"/rooms",
      element:<DisplayRooms/>
    },
    {
       path:"/FeaturedProduct/:id",
        element:<ViewRoomList />
        }
  ]
)
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}></RouterProvider>
)
