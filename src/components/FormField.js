import React from "react";

const FormField = ({ type, label, name, value, handleChange }) => {
  const textareaRef = React.createRef();

  const addAdditionalPadding = scrollHeight => {
    //If height is large, we need to add additional padding to show more content
    if (scrollHeight > 500) {
      return scrollHeight + 64;
    } else {
      return scrollHeight;
    }
  };
  const resizeTextarea = () => {
    const textarea = textareaRef.current;

    textarea.style.height = "";
    textarea.style.height = addAdditionalPadding(textarea.scrollHeight) + "px";
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
