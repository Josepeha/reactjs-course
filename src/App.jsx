import {Route, Routes} from 'react-router-dom';
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoriteMeetupsPage from "./pages/FavoriteMeetups";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
    return (
        <div>
            <MainNavigation />
            <Routes>
                <Route path="/" element={<AllMeetupsPage />} />
                <Route path="/new-meetup" element={<NewMeetupPage />} />
                <Route path="/favorite-meetups" element={<FavoriteMeetupsPage />} />
            </Routes>
        </div>
    )
}

export default App;
