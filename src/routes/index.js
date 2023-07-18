import HomeTemplate from "../page/HomeTemplate";
import HomePage from "../page/HomeTemplate/Homepage";
import AboutPage from "../page/HomeTemplate/AboutPage";
import ListMoviePage from "../page/HomeTemplate/ListMoviePage";
import AdminTemplate from "../page/AdminTemplate";
import DashBoard from "../page/AdminTemplate/DashBoard";
import AddUser from "../page/AdminTemplate/AddUser";
import {Route} from "react-router-dom";

const routes =[
    {
        path: "",
        element: <HomeTemplate/>,
        nested: [
            {path:"", element:<HomePage/>},
            {path:"about", element:<AboutPage/>},
            {path:"list-movie", element:<ListMoviePage/>},
        ]
    },

    {
        path: "admin",
        element: <AdminTemplate/>,
        nested: [
            {path:"dashboard", element:<DashBoard/>},
            {path:"add-user", element:<AddUser/>},
        ],
    },
];

 const renderRoutes = ()=>{
    //sau khi duyet mang xong thi se tra ve mot array moi , nen phai them return
    return routes.map((route)=>{
        if(route.nested){
           return(
            <Route 
            key={route.path}
            path={route.path}
            element={route.element}
            >
            {route.nested.map((item)=>{
                return(
                    <Route 
                key={item.path}
                path={item.path}
                element={item.element}
                />
                )
            })}
            </Route>
           ) 
        }else{
            return(
                <Route 
                key={route.path}
                path={route.path}
                element={route.element}
                />
            )
        }
    })  
};

export default renderRoutes;