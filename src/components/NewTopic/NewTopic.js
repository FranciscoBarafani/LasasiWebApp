import React from "react";
import "./NewTopic.scss";
import { Editor } from "@tinymce/tinymce-react";

export default function NewTopic() {
  return (
    <div className="new-topic">
      <Editor
        initialValue="<p>Nuevo Tópico</p>"
        init={{
          height: 500,
          width: 1000,
          menubar: true,
          plugins: [
            "advlist autolink lists link image",
            "charmap print preview anchor help",
            "searchreplace visualblocks code",
            "insertdatetime media table paste wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic | \
         alignleft aligncenter alignright | \
         bullist numlist outdent indent | help",
        }}
      />
    </div>
  );
}
