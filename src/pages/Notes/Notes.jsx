import React, {useEffect, useState} from "react"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Note from "components/Note"
import {retrieveAllNotes} from "services/notesService"

const Notes = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        retrieveAllNotes()
            .then(resp => setNotes(resp.data))
    }, [])


    return <>
        <Typography variant="h6" component="h2" gutterBottom color="textSecondary">
            Notes
        </Typography>
        <Grid container spacing={3}>
            {notes.map(note => <Grid item key={note.id} xs={12} sm={6} md={4}>
                <Note note={note}/>
            </Grid>)}
        </Grid>
    </>
}

export default Notes
