import { useState } from "react";
function CommentsForm() {
  const [commenter, setCommenter] = useState("");
  const [comment, setComment] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    addComment();
    setComment("");
    setCommenter("");
  }

  function addComment() {
    return { commenter: commenter, comment: comment };
  }

  return (
    <section className="form">
      <hr className="hrForm"></hr>
      <h4>Leave a Comment: </h4>
      <form>
        <label id="commenter">Commenter Name: </label>
        <input
          type="text"
          id="commenter"
          value={commenter}
          onChange={(e) => setCommenter(e.target.value)}
        ></input>
        <br />
        <br />
        <label id="comment">Comment: </label>
        <input
          type="text"
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
        <br />
        <br />
        <button type="submit" onClick={handleFormSubmit} className="formButton">
          Add Comment
        </button>
      </form>
      {addComment}
    </section>
  );
}

export default CommentsForm;
