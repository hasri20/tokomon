import React from "react";
import MyTokomonListItem from "../../containers/myTokomonListItemContainer";

const MyTokomonPage = ({ listOwnedTokomon }) => {
  return (
    <div>
      {listOwnedTokomon.map((nickName) => {
        return <MyTokomonListItem key={nickName} name={nickName} />;
      })}
    </div>
  );
};

export default MyTokomonPage;
