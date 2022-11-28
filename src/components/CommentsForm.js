import { useEffect, useState } from "react";
function CommentsForm() {
  const [commenter, setCommenter] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  // const [comments, setComments] = useState(
  //   localStorage.getItem("comments") || []
  // );

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

  //LOCAL STORAGE TO PERSIST COMMENTS
  // useEffect(() => {
  //   localStorage.setItem("comments", comments);
  //   document.body.className = comments;
  // }, [comments]);

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
