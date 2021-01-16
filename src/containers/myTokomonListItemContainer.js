import MyTokomonListItem from "../components/myTokomonListItem";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { releaseTokomon } from "../redux/actions/tokomonAction";

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      releaseTokomon: releaseTokomon,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(MyTokomonListItem);
