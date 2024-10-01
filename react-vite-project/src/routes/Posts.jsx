import { Outlet } from "react-router-dom";
import PostList from "../components/PostList";

function Posts() {
  return (
    <>
      <Outlet />
      {/* <MainHeader onCreatePost={showModalHandler}/> */}
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;
