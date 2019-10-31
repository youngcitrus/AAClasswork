import { connect } from 'react-redux';
import { login } from '../../actions/session';
import Login from './login';

//where does the function below get the dispatch callback from?
const mapDispatchToProps = dispatch => ({
    login: formUser => dispatch(login(formUser))
});

export default connect(null, mapDispatchToProps)(Login);