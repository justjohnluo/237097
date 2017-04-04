import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ContactUs from './ContactUs';
import GenericActions from '../../actions/GenericActions';
import { extend } from 'lodash';

const mapStateToProps = (state) => {
  return extend({}, state.mainReducer);
};

const matchDispatchToProps = (dispatch) => bindActionCreators(GenericActions, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(ContactUs);
