import { useState, useEffect } from "react";
const SingleComment = ({ data }) => {
  const [commentText, setCommentText] = useState("");
  const { text, id } = data;

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Subit >>", commentText);
  };

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const handleInput = (e) => {
    setCommentText(e.target.value);
  };
  return (
    <div>
      <form
        onSubmit={handleUpdate}
        className="control-group"
      >
        <input
          type="text"
          value={commentText}
          onChange={handleInput}
          className="form-control"
          id="subject"
          placeholder="comments:"
          required="required"
          data-validation-required-message="Please enter a subject"
        />
      </form>
      <p className="help-block text-danger"></p>
    </div>
  );
};

export default SingleComment;
