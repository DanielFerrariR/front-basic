import { FeedState, FETCH_FEED, FeedActionTypes } from './types'

const initialState = null

const feedReducer = (
  state: FeedState | null = initialState,
  action: FeedActionTypes
): FeedState | null => {
  switch (action.type) {
    case FETCH_FEED:
      return action.payload
    default:
      return state
  }
}

export default feedReducer
