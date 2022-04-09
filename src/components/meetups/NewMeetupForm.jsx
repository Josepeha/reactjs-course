import { useRef } from 'react';
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css"

function NewMeetupForm(props) {
    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descriptionInputRef = useRef()

    function submitHandler(event) {
        event.preventDefault() // vanilla JS that allows us to fully handle the event in react/JS

        const meetupData = {
            title: titleInputRef.current.value,
            image: imageInputRef.current.value,
            address: addressInputRef.current.value,
            description: descriptionInputRef.current.value,
        }

        props.onAddMeetup(meetupData)
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label forHtml="title">Meetup Title</label>
                    <input type="text" id="title" ref={titleInputRef} required />
                </div>
                <div className={classes.control}>
                    <label forHtml="image">Meetup Image</label>
                    <input type="url" id="image" ref={imageInputRef} required />
                </div>
                <div className={classes.control}>
                    <label forHtml="address">Meetup Address</label>
                    <input type="text" id="address" ref={addressInputRef} required />
                </div>
                <div className={classes.control}>
                    <label forHtml="description">Meetup Description</label>
                    <textarea id="description" ref={descriptionInputRef} required />
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm
