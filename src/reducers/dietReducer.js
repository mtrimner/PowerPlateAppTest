import {GET_DIET} from '../constants/actions';
const INITIAL_STATE = {
  goal: null,
  startDate: null,
  endDate: null,
  bodyType: null,
  setMealsPerDay: null,
  currentWeight: null,
  numberOfMeals: null,
  targetWeight: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DIET:
      return {
        ...state,
        goal: action.payload.goal,
        startDate: action.payload.start_date,
        endDate: action.payload.end_date,
        currentWeight: action.payload.current_weight,
        mealsPerDay: action.payload.meals_per_day,
        targetWeight: action.payload.target_weight,
      };
    default:
      return state;
  }
};
