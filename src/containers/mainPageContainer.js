import MainPage from "../pages/mainPage";
import { connect } from "react-redux";
import { fetchTokomonList, nextPage } from "../redux/actions/mainPageAction";
import {
  startFetchingAction,
  endFetchingAction,
} from "../redux/actions/fetchAction";
import { bindActionCreators } from "redux";

const mapStateToProps = (state) => {
  return {
    tokomonList: state.mainPage.tokomonList,
    isFetching: state.mainPage.isFetching,
    page: state.mainPage.page * 20,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      storeTokomonList: fetchTokomonList,
      startFetching: startFetchingAction,
      endFetching: endFetchingAction,
      nextPage: nextPage,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
