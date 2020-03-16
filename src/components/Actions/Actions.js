//Essentials
import React from "react";
import "./Actions.scss";
//Components
import { Button } from "antd";
//Assets
import { EditOutlined, CloseOutlined } from "@ant-design/icons";

//This Component renders the possible actions on a table item, modify and eliminate

export default function Actions() {
  return (
    <div className="actions">
      <Button>
        <EditOutlined />
      </Button>
      <Button>
        <CloseOutlined />
      </Button>
    </div>
  );
}
