//Essentials
import React from "react";
import "./Pagination.scss";
//Components
import { Pagination } from "antd";

//This components renders a Paginator based on Antd paginator

export default function MyPagination(props) {
  const { currentPage, totalItems, onChangePage } = props;
  //Page size for default will be 2
  return (
    <Pagination
      className="pagination"
      current={currentPage}
      total={totalItems}
      pageSize={2}
      onChange={onChangePage}
    />
  );
}
