import TokomonListItem from "../components/tokomonListItem";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "connected-react-router";

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      navigate: push,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(TokomonListItem);
