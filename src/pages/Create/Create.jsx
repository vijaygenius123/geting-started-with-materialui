import React from "react";
import {Formik, Form} from "formik";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import {INITIAL_FORM_STATE} from "./formConfig";

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
        <Formik initialValues={INITIAL_FORM_STATE} onSubmit={console.log}>
            <Form>
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
            </Form>
        </Formik>
    </Container>
}

export default Create
