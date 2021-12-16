import * as Yup from 'yup'

const INITIAL_FORM_STATE = {
    title: '',
    details: '',
    category: ''
}, FORM_VALIDATION = Yup.object().shape({
    title: Yup.string().required('Required'),
    details: Yup.string(),
    category: Yup.string().required('Required')
})

export {INITIAL_FORM_STATE, FORM_VALIDATION}
