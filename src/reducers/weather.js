const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WEATHER_CITIES':
      return { ...state, ...action.payload.infoCities }
    default:
      return state
  }
}

export default reducer
