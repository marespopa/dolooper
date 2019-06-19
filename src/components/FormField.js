import React from "react";

const FormField = ({ type, label, name, value, handleChange }) => {
  const textareaRef = React.createRef();

  const resizeTextarea = () => {
    const textarea = textareaRef.current;

    textarea.style.height = textarea.scrollHeight + 2 + "px";

    let textareaHeight = textarea.style.height.substring(
      0,
      textarea.style.height.length - 2
    );
    console.log(textareaHeight);
    if (textareaHeight >= 300) {
      textarea.style.overflow = "auto";
    } else {
      textarea.style.overflow = "hidden";
    }
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
          required
        />
      )}
      {type === "input" && (
        <input
          type="text"
          name={name}
          value={value}
          onChange={handleChange}
          required
        />
      )}
    </div>
  );
};

export default FormField;
