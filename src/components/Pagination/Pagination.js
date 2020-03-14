//Essentials
import React from "react";
import "./Pagination.scss";
//Components
import { Pagination } from "antd";

export default function MyPagination(props) {
  const { currentPage, totalItems, onChangePage } = props;

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
