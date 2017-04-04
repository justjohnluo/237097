import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './Header';
import GenericActions from '../../actions/GenericActions';
import actions from './HeaderActions';
import { extend } from 'lodash';

const mapStateToProps = (state) => {
  return extend({}, state.mainReducer);
};

const matchDispatchToProps = (dispatch) => bindActionCreators(extend(actions, GenericActions), dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Header);
