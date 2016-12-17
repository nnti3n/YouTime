// Constants
// ------------------------------------
export const SEARCH_VIDEO = 'SEARCH VIDEO'

// ------------------------------------
// Actions
// ------------------------------------

export function SearchVideo (value) {
  console.log('received value: ', value)
  return {
    type: SEARCH_VIDEO,
    payload: value
  }
}

export const actions = {
  SearchVideo
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const LIST_ACTION_HANDLERS = {
  [SEARCH_VIDEO]: (state, action) => {
    return ({ ...state, video_url: action.payload })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  video_url: ''
}

export default function homeReducer (state = initialState, action) {
  const handler = LIST_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
