//Essentials
import React from "react";
import "./NewTopic.scss";
//Config
import { TINY_API_KEY } from "../../utils/TinyMce";
//Components
import { Editor } from "@tinymce/tinymce-react";

export default function NewTopic() {
  return (
    <div className="new-topic">
      <Editor
        apiKey={TINY_API_KEY}
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
