//Essentials
import React from "react";
import "./topics.scss";
//Components
import Topic from "../../components/Topic";
import Loading from "../../components/Loading";
//Fetching Hook & Fetch Address
import useFetch from "../../hooks/useFetch";
import { GET_TOPICS } from "../../utils/constants";

export default function Topics() {
  //TODO: Import Topics from a GET and Map them, Paginate it too
  //UseFetchs uses the URL to get the JSON and save it into topics.
  const topics = useFetch(GET_TOPICS, null);
  const { result, loading, error } = topics;

  return (
    <div className="topics">
      {loading || !result ? (
        <Loading />
      ) : (
        result.map((topic, index) => <Topic key={index} topic={topic} />)
      )}
    </div>
  );
}
