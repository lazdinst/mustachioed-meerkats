import axios from 'axios';

/** ============================================================
 * Define Actions
 * =============================================================
 */
export const SET_MAP_CENTER = 'map/SET_MAP_CENTER';

/** ============================================================
 * Define Initial State
 * =============================================================
 */
const initialState = {
  mapCenter: {lat: 37.783607, lng: -122.408967}
};

/** ============================================================
 * Define Reducer
 * =============================================================
 */
export default (state = initialState, action) => {
  switch (action.type) {
  case SET_MAP_CENTER:
    return {
      ...state,
      mapCenter: action.mapCenter
    };

  default:
    return state;
  }
};

/** ============================================================
 * Define Dispatches
 * =============================================================
 */