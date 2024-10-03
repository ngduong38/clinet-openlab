import { Outlet } from "react-router-dom";
import Header from "../componets/.common/header/header";

export default function Layout(){
    return (
        <>
           <Header/>
           <Outlet/> 
        </>
    )
}