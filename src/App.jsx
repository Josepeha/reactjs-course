import {Route, Routes} from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoriteMeetupsPage from "./pages/FavoriteMeetups";
import Layout from "./components/layout/Layout";

function App() {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path="/" element={<AllMeetupsPage />} />
                    <Route path="/new-meetup" element={<NewMeetupPage />} />
                    <Route path="/favorite-meetups" element={<FavoriteMeetupsPage />} />
                </Routes>
            </Layout>
        </div>
    )
}

export default App;
