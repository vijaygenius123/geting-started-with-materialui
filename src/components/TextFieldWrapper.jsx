import React from "react"
import TextField from "@mui/material/TextField"
import {useField} from "formik"

const TextFieldWrapper = ({
    name,
    ...otherProps
}) => {
    const [field, meta]  = useField(name)

    const textFieldConfig = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: 'outlined'
    }

    if (meta && meta.touched && meta.error){
        textFieldConfig.error = true
        textFieldConfig.helperText = meta.error
    }

    return <TextField {...textFieldConfig} />

}

export default TextFieldWrapper
