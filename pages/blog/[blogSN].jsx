import { useRouter } from "next/router";
import React from "react";
import Styles from "../../styles/singleBlog.module.css";
import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((getId) => {
    return {
      params: {
        blogSN: getId.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.blogSN;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: { data },
  };
};

const singlePost = ({ data }) => {
  const { id, title, body } = data;
  return (
    <div className={`${Styles.SinglePost} SinglePost`}>
      <div>
        <Link href={"/blog"}>
         
          <h6>&larr;</h6>
        </Link>
        <h3>{id}</h3>
      </div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default singlePost;
