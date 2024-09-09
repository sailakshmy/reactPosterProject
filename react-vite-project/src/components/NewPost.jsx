import { useState } from 'react';
import classes from './NewPost.module.css';

const NewPost = ({onCancel,onAddPost}) => {
  const [enteredBody, setEnteredBody] = useState("");
  const changeBodyHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const [authorInput, setAuthorInput] = useState("");
  const changeAuthorHandler = (event) => {
    setAuthorInput(event.target.value);
  };

  const submitFormHandler = (event) =>{
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: authorInput
    };
    onAddPost(postData)
    onCancel();
  }
  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>

      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id='name' required onChange={changeAuthorHandler}/>
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onCancel} >
Cancel
        </button>
        <button>
Submit
        </button>
      </p>
    </form>
  )
}

export default NewPost
