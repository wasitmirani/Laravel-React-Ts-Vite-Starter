import React, { useEffect, useState } from 'react';
import SideBarMenu from './components/sidebar';
import {HeaderMenu} from './components/header';
import {Routes as ReactRoutes, Route} from 'react-router-dom';
import {routes}  from "../routes/router";
import Sidebar from '@/utils/sidebar';
import { MenuItem } from '@/interfaces/sidebar_interface';
import { BrowserRouter } from "react-router-dom";


const Master : React.FC=()=>{
// const app_routes = useRoutes(routes);

const [menu, setMenu] = useState<MenuItem[]>([]);
const sidebar = new Sidebar();
useEffect(() => {
// Assuming getMenuList is a synchronous function

const menuList = sidebar.getMenuList();
setMenu(menuList);
}, []); 
return (
    <>
     {/* <Routes> */}
     <BrowserRouter>
   


                    {/* routes */}
             
                    <ReactRoutes>

                    {routes.map((route,i) => {
                        return (
                            <Route   path={route.path} key={i} element={<route.page.component />}></Route>
                        )})}
                     </ReactRoutes>
              
    </BrowserRouter>
    </>
);
}

export default Master;
