import React from "react";
import Styles from "../../styles/blog.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: { data },
  };
};

const Blog = ({ data }) => {
  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <div className={`${Styles.Blog} Blog`}>
      <h1 style={{ textAlign: "center", margin: "2rem 0" }}>Posts</h1>
      <div className={`${Styles.posts} posts`}>
        {" "}
        {data.slice(0, 12).map((post, key) => {
          const { id, body, title } = post;
          return (
            <div key={id} className={`${Styles.post} post`}>
              <h5>{id}</h5>
              <Link href={`/blog/${post.id}`}>
                <p>{truncateString(title, 50)}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
