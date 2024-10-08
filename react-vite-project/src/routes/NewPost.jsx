import { Form, Link, redirect } from "react-router-dom";
import Modal from '../components/Modal';
import classes from "./NewPost.module.css";

const NewPost = () => {
  // const [enteredBody, setEnteredBody] = useState("");
  // const changeBodyHandler = (event) => {
  //   setEnteredBody(event.target.value);
  // };

  // const [authorInput, setAuthorInput] = useState("");
  // const changeAuthorHandler = (event) => {
  //   setAuthorInput(event.target.value);
  // };

  // const submitFormHandler = (event) => {
  //   event.preventDefault();
  //   const postData = {
  //     body: enteredBody,
  //     author: authorInput,
  //   };
  //   onAddPost(postData);
  //   onCancel();
  // };
  return (
    <Modal>
      <Form className={classes.form} method="post" 
      // onSubmit={submitFormHandler}
      >
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} name="body"
          //  onChange={changeBodyHandler} 
           />
        </p>

        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            name="author"
            // onChange={changeAuthorHandler}
          />
        </p>
        <p className={classes.actions}>
          <Link to='..'>
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
};

export default NewPost;


export async function action ({request}){
  console.log("request",request)
const formData = await request.formData();
const postData = Object.fromEntries(formData)
// formData.get('body');
console.log("postData", postData, formData)
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect('/')
}