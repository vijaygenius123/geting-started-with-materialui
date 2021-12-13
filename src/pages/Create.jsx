import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const Create = () => {

    return <Container>
        <Typography
            variant="h6"
            component="h2"
            gutterBottom
            color="textSecondary"
        >
            Create a Note
        </Typography>
        <form noValidate autoComplete="off">
            <TextField
                sx={{
                    mt: 1,
                    mb: 2,
                    display: 'block'
                }}
                label="Note Title"
                variant="outlined"
                color="secondary"
                fullWidth
                required
            />
            <TextField
                sx={{
                    mt: 1,
                    mb: 2,
                    display: 'block'
                }}
                label="Details"
                variant="outlined"
                color="secondary"
                fullWidth
                multiline
                rows={5}
            />
            <Button
                variant="contained"
                color="secondary"
                endIcon={<KeyboardArrowRight/>}
            >Submit</Button>
        </form>
    </Container>
}

export default Create
