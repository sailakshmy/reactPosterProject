import { MdMessage, MdPostAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./MainHeader.module.css";
const MainHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to='/create-post' className={styles.button}>
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
};

export default MainHeader;
