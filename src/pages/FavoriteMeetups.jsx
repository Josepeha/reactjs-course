import { useContext } from 'react';
import FavoritesContext  from "../stateStore/favoritesContext";
import MeetupList from "../components/meetups/MeetupList";

function FavoriteMeetupsPage() {
    const favoritesCtx = useContext(FavoritesContext)

    let content

    if (favoritesCtx.totalFavorites === 0) {
        content = <p>No favorites? Try adding some!</p>
    } else {
        content = <MeetupList meetups={favoritesCtx.favorites} />
    }

    return (
        <section>
            <h1>Favorite Meetups Page</h1>
            {content}
        </section>
    )
}

export default FavoriteMeetupsPage
