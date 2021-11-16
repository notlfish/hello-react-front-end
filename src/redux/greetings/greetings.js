const FETCH_GREETING = 'hello-rails-react/greetings/FETCH_GREETINGS';
const UPDATE_GREETING = 'hello-rails-react/greetings/ADD_GREETINGS';
const API_SUCCESS = 'hello-rails-react/greetings/API_SUCCESS';
const API_FAILURE = 'hello-rails-react/greetings/API_SUCCESS';

const initialGreeting = '';

export const updateGreeting = (greeting) => ({
  type: UPDATE_GREETING,
  greeting,
});

export const fetchGreetings = () => (dispatch) => {
  dispatch({ type: FETCH_GREETING });
  return fetch('http://127.0.0.1:3000/v1/greeting')
    .then((response) => response.json())
    .then(({ message }) => {
      dispatch({ type: API_SUCCESS });
      dispatch(updateGreeting(message));
    })
    .catch((error) => {
      dispatch({ type: API_FAILURE, error });
    });
};

const greetingsReducer = (state = initialGreeting, action) => {
  switch (action.type) {
    case UPDATE_GREETING:
      return action.greeting;
    default:
      return state;
  }
};

export default greetingsReducer;
