import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions'

const _nullSession = {
  id: null,
};

export default (state = _nullSession, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, {id: action.user.id}); //why Object.assign? and not just directly return obj
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};

