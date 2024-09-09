import { useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

// const postData = [
//   {
//     id: 1,
//     author: "Max",
//     text: "text1",
//   },
//   {
//     id: 2,
//     author: "Min",
//     text: "text2",
//   },
// ];

const PostList = ({ modalIsVisible, hideModalHandler }) => {
  const [posts, setPosts] = useState([]);

  function addPosts(postData) {
    // setPosts([postData, ...posts]);
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  return (
    <>
      {modalIsVisible ? (
        <Modal onClose={hideModalHandler}>
          <NewPost onCancel={hideModalHandler} onAddPost={addPosts} />
        </Modal>
      ) : (
        false
      )}
      {posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts?.map((post) => (
            <Post author={post.author} key={post.id} text={post.body} />
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some</p>
        </div>
      )}
    </>
  );
};

export default PostList;
