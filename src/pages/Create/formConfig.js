import * as Yup from 'yup'

const INITIAL_FORM_STATE = {
    title: '',
    details: ''
}, FORM_VALIDATION = Yup.object().shape({})

export {INITIAL_FORM_STATE, FORM_VALIDATION}
