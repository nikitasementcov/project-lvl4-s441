import { connect } from 'react-redux';
import { actions } from './index';

export default () => Component => connect(null, { ...actions })(Component);
