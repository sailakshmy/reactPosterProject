import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from '../components/Modal';
import classes from "./NewPost.module.css";

const NewPost = ({ onAddPost }) => {
  const [enteredBody, setEnteredBody] = useState("");
  const changeBodyHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const [authorInput, setAuthorInput] = useState("");
  const changeAuthorHandler = (event) => {
    setAuthorInput(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: authorInput,
    };
    onAddPost(postData);
    onCancel();
  };
  return (
    <Modal>
      <form className={classes.form} onSubmit={submitFormHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={changeBodyHandler} />
        </p>

        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={changeAuthorHandler}
          />
        </p>
        <p className={classes.actions}>
          <Link to='..'>
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
};

export default NewPost;
