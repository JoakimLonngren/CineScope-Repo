import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { MovieHomePage } from "../features/movies/pages/moviehomepage/MovieHomePage";
import { MovieDetailPage } from "../features/movies/pages/moviedetailpage/MovieDetailPage";
import { TVDetailPage } from "../features/tv/pages/tvdetailpage/TVDetailsPage";
import { TVShowsHomePage } from "../features/tv/pages/tvshowshomepage/TVShowsHomePage";
import { DiscoverPage } from "../features/discover/discoverhomepage/DiscoverPage";
import { DiscoverSearchPage } from "../features/discover/discoversearchpage/DiscoverSearchPage";


export const AppRoutes = () => (
    <Layout>
        <Routes>
            <Route path="/movie" element={<MovieHomePage/>}/>
            <Route path="/movie/:id" element={<MovieDetailPage/>}/>
            <Route path="/tv/:id" element={<TVDetailPage/>}/>
            <Route path="/tv" element={<TVShowsHomePage/>}/>
            <Route path="/" element={<DiscoverPage/>}/>
            <Route path="search" element={<DiscoverSearchPage/>} />
        </Routes>
    </Layout>
);