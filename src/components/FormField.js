import React from "react";

const FormField = ({ type, label, name, value, handleChange }) => {
  const textareaRef = React.createRef();

  const resizeTextarea = () => {
    const textarea = textareaRef.current;
    const minHeightInPx = 200;
    console.dir(textarea.scrollHeight);
    textarea.style.height = "";
    textarea.style.height =
      Math.min(textarea.scrollHeight, minHeightInPx) + "px";
  };
  const handleTextareaChange = event => {
    handleChange(event);
    resizeTextarea();
  };

  return (
    <div className="form-row">
      <label>{label}</label>
      {type === "textarea" && (
        <textarea
          ref={textareaRef}
          type="text"
          name={name}
          value={value}
          onChange={handleTextareaChange.bind(this)}
          onFocus={resizeTextarea}
        />
      )}
      {type === "input" && (
        <input type="text" name={name} value={value} onChange={handleChange} />
      )}
    </div>
  );
};

export default FormField;
