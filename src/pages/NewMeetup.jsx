import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const navigate = useNavigate();

    async function addMeetupHandler(meetupData) {
        try {
            await fetch(
                'https://reactjs-course-31123-default-rtdb.firebaseio.com/meetups.json',
                {
                    method: 'POST',
                    body: JSON.stringify(meetupData),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            )
            navigate("/", {replace: true})
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <section>
            <h1>New Meetup Page</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetupPage
