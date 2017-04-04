import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CalendarPage from './CalendarPage';
import GenericActions from '../../actions/GenericActions';
import { extend } from 'lodash';

const mapStateToProps = (state) => {
  return extend({}, state.mainReducer);
};

const matchDispatchToProps = (dispatch) => bindActionCreators(GenericActions, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(CalendarPage);
