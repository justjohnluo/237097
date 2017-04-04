import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProjectDetails from './ProjectDetails';
import actions from './ProjectDetailsActions';
import GenericActions from '../../actions/GenericActions';
import { extend } from 'lodash';

const mapStateToProps = (state) => {
  return extend({}, state.mainReducer);
};

const matchDispatchToProps = (dispatch) => bindActionCreators(extend(actions, GenericActions), dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(ProjectDetails);
