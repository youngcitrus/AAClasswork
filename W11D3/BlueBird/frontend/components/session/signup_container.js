import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';

//where does the function below get the dispatch callback from?
const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser))
});

export default connect(null, mapDispatchToProps)(Signup);