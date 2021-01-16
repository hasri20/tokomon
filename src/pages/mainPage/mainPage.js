import React, { useEffect, useRef, useCallback } from "react";
import { get } from "../../api/apiUtils";
import TokomonListItem from "../../containers/tokomonListItemContainer";

const MainPage = ({
  tokomonList,
  isFetching,
  page,
  storeTokomonList,
  startFetching,
  endFetching,
  nextPage,
}) => {
  let bottomBoundaryRef = useRef(null);

  const isTokomonInStorage = (name) => {
    if (localStorage.getItem(name) == null) {
      return false;
    } else {
      return true;
    }
  };

  const storeTokomonToStorage = (name) => {
    const INIT_VALUE = 0;
    localStorage.setItem(name, INIT_VALUE);
  };

  const fetchTokomonList = () => {
    startFetching();

    get("pokemon/?offset=" + page)
      .then((response) => {
        storeTokomonList(response.data.results.map((tokomon) => tokomon.name));
        response.data.results.forEach((tokomon) => {
          if (!isTokomonInStorage(tokomon.name)) {
            storeTokomonToStorage(tokomon.name);
          }
        });
        endFetching();
      })
      .catch((error) => endFetching());
  };

  const scrollObserver = useCallback((node) => {
    new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.intersectionRatio > 0) {
          nextPage();
        }
      });
    }).observe(node);
  }, []);

  useEffect(fetchTokomonList, [page]);
  useEffect(() => {
    if (bottomBoundaryRef.current) {
      scrollObserver(bottomBoundaryRef.current);
    }
  }, [scrollObserver, bottomBoundaryRef]);

  return (
    <div>
      {tokomonList.map((tokomon, index) => {
        return <TokomonListItem name={tokomon} key={index} />;
      })}
      <div ref={bottomBoundaryRef}></div>
    </div>
  );
};

export default MainPage;
