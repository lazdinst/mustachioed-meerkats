/** ============================================================
 * Define Actions
 * =============================================================
 */
export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED';
export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED';
export const DECREMENT = 'counter/DECREMENT';
export const SET_SELECTED_OPTION = 'counter/SET_SELECTED_OPTION';
export const SET_MESSAGE_INPUT = 'counter/SET_MESSAGE_INPUT';

/** ============================================================
 * Define Initial State
 * =============================================================
 */
const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
  selectedOption: null,
  messageInput: null,
};

/** ============================================================
 * Define Reducer
 * =============================================================
 */
export default (state = initialState, action) => {
  switch (action.type) {
  case INCREMENT_REQUESTED:
    return {
      ...state,
      isIncrementing: true
    };

  case INCREMENT:
    return {
      ...state,
      count: state.count + 1,
      isIncrementing: !state.isIncrementing
    };

  case DECREMENT_REQUESTED:
    return {
      ...state,
      isDecrementing: true
    };

  case DECREMENT:
    return {
      ...state,
      count: state.count - 1,
      isDecrementing: !state.isDecrementing
    };
  case SET_SELECTED_OPTION : 
    return {
      ...state,
      selectedOption: action.selectedOption
    };
  case SET_MESSAGE_INPUT : 
    return {
      ...state,
      messageInput: action.messageInput
    };
  default:
    return state;
  }
};

/** ============================================================
 * Define Dispatches
 * =============================================================
 */
export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    });

    dispatch({
      type: INCREMENT
    });
  };
};

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      });
    }, 3000);
  };
};

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    });

    dispatch({
      type: DECREMENT
    });
  };
};

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      });
    }, 3000);
  };
};

export const selectHandler = (selectedOption) => {
  return {
    type: SET_SELECTED_OPTION,
    selectedOption
  };
};

export const inputHandler = (messageInput) => {
  return {
    type: SET_MESSAGE_INPUT,
    messageInput
  };
};