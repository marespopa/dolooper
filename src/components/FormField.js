import React from "react";

const FormField = ({ type, label, name, value, handleChange }) => {
  const textareaRef = React.createRef();

  const resizeTextarea = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "inherit";
    let computed = window.getComputedStyle(textarea);

    // Calculate the height
    let height = parseInt(computed.getPropertyValue("border-top-width"), 10) +
                 parseInt(computed.getPropertyValue("padding-top"), 10) +
                 textarea.scrollHeight +
                 parseInt(computed.getPropertyValue("padding-bottom"), 10) +
                 parseInt(computed.getPropertyValue("border-bottom-width"), 10);

    textarea.style.height = height + "px";
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
