import axios from 'axios'
import { FETCH_PROFILES, FETCH_USER, DELETE_PROFILE } from './types'


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    
    dispatch({ type: FETCH_USER, payload: res.data })
}

export const submitProfile = (values, history) => async dispatch => {
    const res = await axios.post('/api/profiles', values)
    history.push('/profiles');
    dispatch({ type: FETCH_USER, payload: res.data})
}


export const fetchProfiles = () => async dispatch => {
    const res = await axios.get('/api/profiles')

    dispatch({ type: FETCH_PROFILES, payload: res.data })
}

export const deleteProfile = (values, history) => async dispatch => {
    const res = await axios.delete(`/api/profiles/${values}`)
    history.push('/profiles');
    dispatch({ type: DELETE_PROFILE, payload: res.data })
}