import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => 
    async dispatch => {
        const result = await axios.get('/api/currentUser')
        
        dispatch({
            type    : FETCH_USER,
            payload : result.data,
        });
        
};

export const handleToken = token => 
    async dispatch => {
        const result = await axios.post('/api/stripe',token);

        dispatch({
            type : FETCH_USER,
            payload : result.data,
        });
    };