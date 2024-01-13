
import Helpers  from "@/utils/helpers";

const helper = new Helpers();

const generateRoute=(name:string,page:any,title:string,permission?: string)=>{
    return {path:helper.prefix_url +name,exact:true,page:
        {
                        component: page,
                        title: title,
        }
        ,meta:{permission:permission}};
}

const routes= [
//   {
//     path: "app",
//     // element: isLoggedIn ? <HomeComponent /> : <Navigate to="/login" />,
//     children: [
//         // to="dashboard"
//       { index: true, element: <Home  /> },
//       { path: "dashboard", element: <Home /> },
//       { path: "other", element: <Home /> }
//     ]
//   },
// { path: "/", element: <Home /> },
generateRoute('/home',null,'Home'),

//   { path: "*", element: <Home /> }
];

export {routes};

