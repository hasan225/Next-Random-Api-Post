import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ErrorPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);
  return (
    <div className="ErrorPage">
      <h2>Page not found</h2>
      <p>Will redirect you to the homepage....</p>
      <Link href="/">Back to homepage</Link>
    </div>
  );
};

export default ErrorPage;
