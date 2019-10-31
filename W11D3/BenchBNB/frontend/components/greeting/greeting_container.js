import { connect } from 'react-redux';
import currentUser from './currentUser';
import { logoutUser } from '../../actions/session_actions';

const mapStateToProps = ({ entities, session }) => ({
  user: entities.users[session.id]
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(currentUser)