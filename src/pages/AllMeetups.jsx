import { useState, useEffect } from 'react';
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState(true);

    useEffect(() => {
        async function fetchMeetupsData() {
            try {
                setIsLoading(true)

                const meetupsJSON = await fetch('https://reactjs-course-31123-default-rtdb.firebaseio.com/meetups.json')
                const meetupsKeyValuePairs = await meetupsJSON.json()

                const meetups = []
                for (const key in  meetupsKeyValuePairs) {
                    const meetup = {
                        id: key,
                        ...meetupsKeyValuePairs[key]
                    }
                    meetups.push(meetup)
                }
                setIsLoading(false)
                setLoadedMeetups(meetups)
            } catch (err) {
                console.error(err)
            }
        }
        fetchMeetupsData()
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
