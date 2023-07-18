// import HomeTemplate from "../page/HomeTemplate";
// import HomePage from "../page/HomeTemplate/Homepage";
// import AboutPage from "../page/HomeTemplate/AboutPage";
// import ListMoviePage from "../page/HomeTemplate/ListMoviePage";
// import AdminTemplate from "../page/AdminTemplate";
// import DashBoard from "../page/AdminTemplate/DashBoard";
// import AddUser from "../page/AdminTemplate/AddUser";
import {Route} from "react-router-dom";
import {lazy} from "react";

const routes =[
    {
        path: "",
        element: lazy(()=> import("../page/HomeTemplate")),
        nested: [
            {path:"", element:lazy(()=> import("../page/HomeTemplate/Homepage"))},
            {path:"about", element:lazy(()=> import("../page/HomeTemplate/AboutPage"))},
            {path:"list-movie", element:lazy(()=> import("../page/HomeTemplate/ListMoviePage"))},
        ]
    },

    {
        path: "admin",
        element: lazy(()=> import("../page/AdminTemplate")),
        nested: [
            {path:"dashboard", element:lazy(()=> import("../page/AdminTemplate/DashBoard"))},
            {path:"add-user", element:lazy(()=> import("../page/AdminTemplate/AddUser") )},
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
            element={<route.element/>}
            >
            {route.nested.map((item)=>{
                return(
                    <Route 
                key={item.path}
                path={item.path}
                element={<item.element/>}
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
                element={<route.element/>}
                />
            )
        }
    })  
};

export default renderRoutes;