//Essentials
import React, { useEffect, useState } from "react";
import "./topics.scss";
//Components
import Topic from "../../components/Topic";
import Loading from "../../components/Loading";
import MyPagination from "../../components/Pagination";
//Fetching Hook & Fetch Address
import useFetch from "../../hooks/useFetch";
import { GET_TOPICS } from "../../utils/constants";

export default function Topics() {
  //UseFetchs uses the URL to get the JSON and save it into topics.
  const topics = useFetch(GET_TOPICS, null);
  const { result, loading } = topics;
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentList, setCurrentList] = useState([]);

  //useEffect activates when the Fetch result has loaded
  useEffect(() => {
    if (!loading || result) {
      setTotalItems(result.length);
      //Assigning starting page as 1
      setCurrentList(result.slice(0, 2));
    }
  }, [loading, result]);

  //This function is called everytime the page is changed,
  //Slicing the result array in an smaller portion
  const onChangePage = (page, pageSize) => {
    setCurrentPage(page);
    setCurrentList(result.slice((page - 1) * pageSize, page * pageSize));
  };

  return (
    <div className="topics">
      {loading || !currentList ? (
        <Loading />
      ) : (
        currentList.map((topic, index) => <Topic key={index} topic={topic} />)
      )}
      <MyPagination
        totalItems={totalItems}
        currentPage={currentPage}
        onChangePage={onChangePage}
      />
    </div>
  );
}
