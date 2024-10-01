import { useEffect, useState } from "react";
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

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      setPosts(data.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  function addPosts(postData) {
    // setPosts([postData, ...posts]);
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  return (
    <>
      {/* {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost onCancel={hideModalHandler} onAddPost={addPosts} />
        </Modal>
      )} */}
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts?.map((post) => (
            <Post author={post.author} key={post.id} text={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some</p>
        </div>
      )}

      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default PostList;
