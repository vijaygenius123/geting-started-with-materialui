import React from "react";
import {Formik, Form} from "formik";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import {INITIAL_FORM_STATE, FORM_VALIDATION} from "./formConfig";
import TextFieldWrapper from "../../components/TextFieldWrapper";
import RadioGroupWrapper from "../../components/RadioGroupWrapper";

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
        <Formik
            initialValues={INITIAL_FORM_STATE}
            validationSchema={FORM_VALIDATION}
            onSubmit={values => console.log(values)}
        >
            <Form>
                <TextFieldWrapper
                    name="title"
                    label="Note Title"
                    sx={{
                        mt: 1,
                        mb: 2,
                        display: 'block'
                    }}
                    color="secondary"
                />
                <TextFieldWrapper
                    name="details"
                    label="Details"
                    sx={{
                        mt: 1,
                        mb: 2,
                        display: 'block'
                    }}
                    multiline
                    rows={5}
                    color="secondary"
                />
                <RadioGroupWrapper
                    name="category"
                    label="Note Category"
                    options={[
                        {label: "Money", value: "money"},
                        {label: "Todos", value: "todos"},
                        {label: "Work", value: "work"},
                        {label: "Reminders", value: "reminders"},
                    ]}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    endIcon={<KeyboardArrowRight/>}
                >
                    Submit
                </Button>
            </Form>
        </Formik>
    </Container>
}

export default Create
