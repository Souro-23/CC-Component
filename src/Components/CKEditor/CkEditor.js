import React, { useContext } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import IconClasses from "../MoreIcons.module.css";
import { subtopicContext } from "../Root/Root";
import { Popover } from "antd";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  CloseCircleOutlined,
  MoreOutlined,
} from "@ant-design/icons";

const UP = -1;
const DOWN = 1;
export default function CkEditor({ component, index }) {
  const { changeSubtopic, handleMove, RemoveComponent } =
    useContext(subtopicContext);
  const content = (
    <div className={IconClasses.moreIcons}>
      <ArrowUpOutlined
        onClick={() => handleMove(index, UP)}
        className={IconClasses.moreIcon}
      />
      <CloseCircleOutlined
        onClick={() => RemoveComponent(index)}
        className={IconClasses.moreIcon}
      />
      <ArrowDownOutlined
        onClick={() => handleMove(index, DOWN)}
        className={IconClasses.moreIcon}
      />
    </div>
  );

  const changeData = (editor) => {
    const data = editor.getData();
    changeSubtopic(index, data, "ed");
  };
  const data = component.content;
  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "#fafafa",
        borderRadius: "10px",
      }}>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Popover placement='bottomRight' content={content} trigger='hover'>
          <MoreOutlined className={IconClasses.more} />
        </Popover>
      </div>
      <CKEditor
        editor={ClassicEditor}
        data={data}
        onChange={(event, editor) => changeData(editor)}
      />
    </div>
  );
}
