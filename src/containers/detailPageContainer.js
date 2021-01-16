import DetailPage from "../pages/detailPage";
import { connect } from "react-redux";
import { fetchTokomonData } from "../redux/actions/detailPageAction";
import { bindActionCreators } from "redux";

const mapStateToProps = (state) => {
  const route = state.router.location.pathname;
  const tokomonType = route.split("/")[2];
  const { imageUrl, types, moves } = state.detailPage;
  return {
    name: tokomonType,
    imageUrl,
    types,
    moves,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      storeTokomonData: fetchTokomonData,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
