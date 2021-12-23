import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL
const NOTES_URL =  BASE_URL + '/notes'


const createNewNote = (data) => axios.post(NOTES_URL, data)
const retrieveAllNotes = () => axios.get(NOTES_URL)

export {createNewNote, retrieveAllNotes}
