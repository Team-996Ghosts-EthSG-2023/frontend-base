import React from 'react'
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import './index.css'
import { RootLayout } from './pages/RootLayout';
import { HomeFeed } from './pages/App/HomeFeed';
import { Campaigns } from './pages/App/Campaigns';
import { Calendar } from 'antd';
import "./index.css"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index path="feed" element={<HomeFeed />}/> 
      <Route path="campaign" element={<Campaigns/>} />
      <Route path="calendar" element={<Calendar />} />
      <Route path='*' element={<HomeFeed/>}/>
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <GlobalStyle> */}
      <RouterProvider router={router} />
    {/* </GlobalStyle> */}
  </React.StrictMode>
);
