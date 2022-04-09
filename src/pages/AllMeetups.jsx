import { useState, useEffect } from 'react';
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState(true);

    // async function getAllMeetupsCatalog() {
    //     try {
    //         const meetupsJSON = await fetch('https://reactjs-course-31123-default-rtdb.firebaseio.com/meetups.json')
    //         const meetupsList = await meetupsJSON.json()
    //         setIsLoading(false)
    //         setLoadedMeetups(meetupsList)
    //         return meetupsList
    //     } catch (err) {
    //         console.error(err)
    //     }
    // }

    useEffect(() => {
        setIsLoading(true)

        fetch(
            'https://reactjs-course-31123-default-rtdb.firebaseio.com/meetups.json'
        )
            .then((resp) => {
                return resp.json()
            })
            .then((data) => {
                const meetups = []
                for (const key in  data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    }
                    meetups.push(meetup)
                }

                setIsLoading(false)
                setLoadedMeetups(meetups)
            })
    }, [])

    if(isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }


    return (
        <section>
            <h1>All Meetups Page</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    )
}

export default AllMeetupsPage
