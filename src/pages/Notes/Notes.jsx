import React, { useEffect, useState } from "react";
import axios from 'axios';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Notes = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/notes`)
            .then(resp => setNotes(resp.data))
    }, [])


    return <Container>
        <Typography variant="h6" component="h2" gutterBottom color="textSecondary">
            Notes
        </Typography>
        {notes.map(note => <Typography>{note.title}</Typography>)}

    </Container>
}

export default Notes
