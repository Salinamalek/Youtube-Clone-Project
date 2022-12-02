import { useState } from "react";
function CommentsForm() {

  const [commenter, setCommenter] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);


  function handleFormSubmit(e) {
    e.preventDefault();
    addComment();
    setComment("");
    setCommenter("");
  }

  function addComment() {
    const arr = [...comments];
    arr.push({ commenter: commenter, comment: comment });
    setComments(arr);
  }


  return (
    <section className="form">
      <hr className="hrForm"></hr>
      <h4 className="commentsForm">Leave a Comment: </h4>
      <form className="commForm">
        <label id="commenter">Name</label>
        <br />
        <input
          className="commInput"
          type="text"
          id="commenter"
          value={commenter}
          onChange={(e) => setCommenter(e.target.value)}
        ></input>
        <br />
        <br />
        <label id="comment">Comment</label>
        <br />

        <input
          className="commInput"
          type="text"
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
        <br />
        <br />
        <button id="formButton" type="submit" onClick={handleFormSubmit}>
          Add Comment
        </button>
      </form>
      <ul className="comm">
        {comments.map((c) => {
          return (
            <li>
              <span className="commenterName">{c.commenter}</span>
              <br />
              <span className="commentText">{c.comment}</span>
            </li>
          );
        })}
        {addComment}
      </ul>
    </section>
  );
}

export default CommentsForm;
