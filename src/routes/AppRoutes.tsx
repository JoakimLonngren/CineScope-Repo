import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { HomePage } from "../features/movies/pages/homepage/HomePage";
import { SearchPage } from "../features/movies/pages/searchpage/SearchPage";
import MovieDetailPage from "../features/movies/pages/moviedetailpage/MovieDetailPage";


export const AppRoutes = () => (
    <Layout>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="search" element={<SearchPage/>}/>
            <Route path="/movie:id" element={<MovieDetailPage/>}/>
        </Routes>
    </Layout>
);