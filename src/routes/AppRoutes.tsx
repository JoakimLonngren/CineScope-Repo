import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { MovieHomePage } from "../features/movies/pages/moviehomepage/MovieHomePage";
import { SearchPage } from "../features/movies/pages/searchpage/SearchPage";
import { MovieDetailPage } from "../features/movies/pages/moviedetailpage/MovieDetailPage";
import { TVDetailPage } from "../features/tv/pages/tvdetailpage/TVDetailsPage";
import { TVShowsHomePage } from "../features/tv/pages/tvshowshomepage/TVShowsHomePage";
import { DiscoverPage } from "../features/discover/DiscoverPage";


export const AppRoutes = () => (
    <Layout>
        <Routes>
            <Route path="/movie" element={<MovieHomePage/>}/>
            <Route path="search" element={<SearchPage/>}/>
            <Route path="/movie/:id" element={<MovieDetailPage/>}/>
            <Route path="/tv/:id" element={<TVDetailPage/>}/>
            <Route path="/tv" element={<TVShowsHomePage/>}/>
            <Route path="/" element={<DiscoverPage/>}/>
        </Routes>
    </Layout>
);