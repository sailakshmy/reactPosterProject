import { useState } from 'react';
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function hideModalHandler() {
    setModalIsVisible(false);
  }
  function showModalHandler() {
    setModalIsVisible(true);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostList modalIsVisible={modalIsVisible} hideModalHandler={hideModalHandler}/>
      </main>
    </>
  );
}

export default App;
