// Users
const initialUserState = {
  info: {
    name: '',
    uid: '',
    avatar: ''
  },
  lastUpdated: 0
}

function user(state = initialUserState, action) {
  switch (action.type) {
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        info: action.user,
        lastUpdated: action.timestamp
      }
  }
}

const initialState = {
  isAuthed: false,
  isFetching: false,
  error: '',
  authedId: ''
}

function users(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthed: true,
        uid: action.uid
      }
    case UNAUTH_USER:
      return {
        ...state,
        isAuthed: false,
        uid: ''
      }
    case FETCHING_USER:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case FETCHING_USER_SUCCESS:
      return action.user === null
        ? {
            ...state,
            error: '',
            isFetching: false
          }
        : {
            ...state,
            isFetching: false,
            error: '',
            [action.uid]: user(state[action.uid], action)
          }
    default:
      return state
  }
}

// Ducks
const initialState = {
  isFetching: false,
  error: ''
}

function ducks(state, action) {
  switch (action.type) {
    case FETCHING_DUCK:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_DUCK_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case ADD_DUCK:
    case FETCHING_DUCK_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        [action.duck.duckId]: action.duck
      }
    case REMOVE_FETCHING:
      return {
        ...state,
        isFetching: false,
        error: ''
      }
    case ADD_MULTIPLE_DUCKS:
      return {
        ...state,
        ...action.ducks
      }
    default:
  }
}

//Feed
const initialState = {
  isFetching: false,
  error: '',
  newDucksAvailable: false,
  newDucksToAdd: [],
  duckIds: []
}

function feed(state, action) {
  switch (action.type) {
    case SETTING_FEED_LISTENER:
      return {
        ...state,
        isFetching: true
      }
    case SETTING_FEED_LISTENER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case SETTING_FEED_LISTENER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        duckIds: action.duckIds,
        newDucksAvailable: false
      }
    case ADD_NEW_DUCK_ID_TO_FEED:
      return {
        ...state,
        newDucksToAdd: [action.duckId, ...state.newDucksToAdd]
      }
    case RESET_NEW_DUCKS_AVAILABLE:
      return {
        ...state,
        duckIds: [...state.newDucksToAdd, ...state.duckIds],
        newDucksToAdd: [],
        newDucksAvailable: false
      }
    default:
      return state
  }
}

function listeners(state = {}, action) {
  switch (action.type) {
    case value:
      return {
        ...state,
        [action.listenerId]: true
      }
    default:
      return state
  }
}

// modal
const initialState = {
  duckText: '',
  isOpen: false
}

function modal(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true
      }
    case CLOSE_MODAL:
      return {
        duckText: '',
        isOpen: false
      }
    case UPDATE_DUCK_TEXT:
      return {
        ...state,
        duckText: action.newDuckText
      }
    default:
      return state
  }
}

// usersLikes
const initialState = {
  isFetching: false,
  error: ''
}

function usersLikes(state = initialState, action) {
  switch (action.type) {
    case FETCHING_LIKES:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_LIKES_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case FETCHING_LIKES_SUCCESS:
      return {
        ...state,
        ...action.likes,
        isFetching: false,
        error: ''
      }
    case ADD_LIKE:
      return {
        ...state,
        [action.duckId]: true
      }
    case REMOVE_LIKE:
      return Object.keys(state)
        .filter(duckId => action.duckId !== duckId)
        .reduce((prev, current) => {
          prev[current] = state[current]
        }, {})
    default:
      return { ...state }
  }
}

//like Count

function count(state = 0, action) {
  switch (action.type) {
    case ADD_LIKE:
      return state + 1
    case REMOVE_LIKE:
      return state - 1
    default:
      return state
  }
}
const initialState = {
  isFetching: false,
  error: ''
}

function likeCount(state = initialState, action) {
  switch (action.type) {
    case FETCHING_COUNT:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_COUNT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case FETCHING_COUNT_SUCCESS:
      return {
        ...state,
        ...initialState,
        [action.duckId]: action.count
      }
    case ADD_LIKE:
    case REMOVE_LIKE:
      return typeof state[action.duckId] === 'undefined'
        ? state
        : {
            ...state,
            [action.duckId]: count(state[action.duckId], action)
          }
    default:
      return state
  }
}

// usersDucks
const initialUsersDuckState = {
  lastUpdated: 0,
  ducksIds: []
}

function usersDuck(state = initialUsersDuckState, action) {
  switch (action.type) {
    case ADD_SINGLE_USERS_DUCK:
      return {
        ...state,
        duckIds: state.duckIds.concat([action.duckId])
      }
    default:
      return state
  }
}

const initialState = {
  isFetching: false,
  error: ''
}

function usersDucks(state = initialState, action) {
  switch (action.type) {
    case FETCHING_USERS_DUCKS:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_USERS_DUCKS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case FETCHING_USERS_DUCKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        [action.uid]: {
          lastUpdated: action.lastUpdated,
          duckIds: action.duckIds
        }
      }
    case ADD_SINGLE_USERS_DUCK:
      return typeof state[action.uid] === 'undefined'
        ? state
        : {
            ...state,
            isFetching: false,
            error: '',
            [action.uid]: usersDucks(state[action.uid], action)
          }
    default:
      return state
  }
}

// Replies
const initialReplyState = {
  name: '',
  comment: '',
  uid: '',
  timestamp: 0,
  avatar: ''
}
function duckReplies(state = initialReplyState, action) {
  switch (action.type) {
    case REMOVE_REPLY:
      return {
        ...state,
        [action.reply.replyId]: undefined
      }
    case ADD_REPLY:
      return {
        ...state,
        [action.reply.replyId]: action.reply
      }
    default:
      return state
  }
}

const initialDuckState = {
  lastUpdated: Date.now(),
  replies: {}
}

function repliesAndLastUpdated(state = initialDuckState, action) {
  switch (action.type) {
    case FETCHING_REPLIES_SUCCESS:
      return {
        ...state,
        lastUpdated: action.lastUpdated,
        replies: action.replies
      }
    case REMOVE_REPLY:
    case ADD_REPLY:
      return {
        ...state,
        replies: duckReplies(state.replies, action)
      }
    default:
      return state
  }
}
const initialState = {
  isFetching: true,
  error: ''
}

function Replies(state = initialState, action) {
  switch (action.type) {
    case FETCHING_REPLIES:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_REPLIES_ERROR:
    case ADD_REPLY_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case ADD_REPLY:
    case FETCHING_REPLIES_SUCCESS:
    case REMOVE_REPLY:
      return {
        ...state,
        error: '',
        isFetching: false,
        [action.duckId]: repliesAndLastUpdated(state[action.duckId], action)
      }
    default:
      return state
  }
}
