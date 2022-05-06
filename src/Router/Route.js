import { BrowserRouter, Routes, Route } from "react-router-dom";
import RepositoriesLiked from "../Pages/RepositoriesLiked";
import FeedRepositories from "../Pages/FeedRepositories";

function RoutePage(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<FeedRepositories/>}></Route>
                <Route path='liked' element={<RepositoriesLiked/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutePage;