import axios from 'axios';
import {APP_ID, APP_KEY} from '../constants/credentials';

export default axios.create({
  baseURL: 'https://trackapi.nutritionix.com/v2',
  headers: {
    'x-app-id': APP_ID,
    'x-app-key': '0e09c87baeb2ece82aef933ebf236113',
    'x-remote-user-id': 0,
  },
});
