import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LearningCenter from './LearningCenter';
import GenericActions from '../../actions/GenericActions';
import { extend } from 'lodash';

const mapStateToProps = (state) => {
  return extend({}, state.mainReducer);
};

const matchDispatchToProps = (dispatch) => bindActionCreators(GenericActions, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(LearningCenter);
