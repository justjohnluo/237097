import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CategoryDetails from './CategoryDetails';
import actions from './CategoryDetailsActions';
import GenericActions from '../../actions/GenericActions';
import { extend } from 'lodash';

const mapStateToProps = (state) => {
  return extend({}, state.mainReducer);
};

const matchDispatchToProps = (dispatch) => bindActionCreators(extend(actions, GenericActions), dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(CategoryDetails);
