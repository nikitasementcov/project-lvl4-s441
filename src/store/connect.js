import { connect } from 'react-redux';
import { actions, asyncActions } from './index';

export default () => Component =>
  connect(null, { ...actions, ...asyncActions })(Component);
