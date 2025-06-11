import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../utils/api';

export const login = (email, password) => async dispatch => {
  dispatch({ type: 'LOGIN_REQUEST' });
  try {
    const { data } = await axios.post('/auth/login', { email, password });
    await AsyncStorage.setItem('token', data.token);
    dispatch({ type: 'LOGIN_SUCCESS', payload: { user: data.user, token: data.token } });
  } catch (err) {
    dispatch({ type: 'LOGIN_FAILURE', payload: err.response?.data?.message || 'Login failed' });
  }
};

export const logout = () => async dispatch => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'LOGOUT' });
};

export const loadUser = () => async dispatch => {
  const token = await AsyncStorage.getItem('token');
  if (!token) return;
  try {
    const { data } = await axios.get('/auth/profile', {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: 'LOGIN_SUCCESS', payload: { user: data.user, token } });
  } catch {
    dispatch({ type: 'LOGOUT' });
  }
};