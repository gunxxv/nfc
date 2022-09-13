import axios from 'axios'
import { FETCH_PROFILES, FETCH_USER, DELETE_PROFILE, EDIT_PROFILE } from './types'


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
    history.push('/');
    dispatch({ type: DELETE_PROFILE, payload: res.data })
}

export const editProfile = () => async dispatch => {
    console.log('edit profile')
    // const res = await axios.get('/api/profiles/6320a58f36edbcd40852a255/1')
    // dispatch({ type: EDIT_PROFILE, payload: res.data })
}