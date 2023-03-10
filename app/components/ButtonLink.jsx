import Link from "next/link";
import React from "react";
import "../styles/ButtonLink.css";

function ButtonLink({ url, text }) {
  return (
    <Link className="button-link" href={url} target="_blank">
      {text}
    </Link>
  );
}

export default ButtonLink;
