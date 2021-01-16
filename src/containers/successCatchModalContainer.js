import SuccessCatchModal from "../components/successCatchModal";
import { connect } from "react-redux";
import { catchTokomon } from "../redux/actions/tokomonAction";
import { bindActionCreators } from "redux";

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      catchTokomon: catchTokomon,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(SuccessCatchModal);
