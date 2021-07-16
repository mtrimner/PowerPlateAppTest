import axios from 'axios';
import {APP_ID, APP_KEY} from '../constants/credentials';

export default axios.create({
  baseURL: 'https://trackapi.nutritionix.com/v2',
  headers: {
    'x-app-id': '288d43cd',
    'x-app-key': 'a236657fc232c63b76bbafdd96bf5cce',
    'x-remote-user-id': 0,
  },
});
