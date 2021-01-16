import MyTokomonPage from "../pages/myTokomonPage";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { listOwnedTokomon: state.myTokomonPage.listNicknameTaken };
};

export default connect(mapStateToProps)(MyTokomonPage);
