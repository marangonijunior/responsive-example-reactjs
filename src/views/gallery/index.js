import { connect } from 'react-redux';
import Gallery from './gallery';

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Gallery);