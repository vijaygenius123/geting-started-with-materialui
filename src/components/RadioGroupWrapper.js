import React from "react"
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import {useField} from "formik";

const RadioGroupWrapper = ({name, options = [], label = '', ...otherProps}) => {
    let helperText
    const [field, meta] = useField(name)
    const radioFieldConfig = {
        ...field,
        ...otherProps,
        fullWidth:true,
        variant: 'outlined'
    }
    if (meta && meta.touched && meta.error) {
        radioFieldConfig.error = true
        helperText = meta.error
    }

    return <FormControl {...radioFieldConfig}>
        <FormLabel>{label}</FormLabel>
        <FormHelperText>{helperText}</FormHelperText>
        <RadioGroup {...field}>
            {options.map(option => (
                <FormControlLabel key={option.value} control={<Radio />} label={option.label} value={option.value}/>
            ))
            }
        </RadioGroup>
    </FormControl>
}

export default RadioGroupWrapper
