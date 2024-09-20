import styles from "@/app/_styles/top-page-styles.module.css";
import Link from "next/link";
import React from "react";

interface ArrowLinkProps {
  heading: string;
  link: string;
}

const ArrowLink: React.FC<ArrowLinkProps> = ({ heading, link }) => {
  return (
    <Link href={link} className={styles.arrowLink}>
      {heading}
      <svg
        className="ms-2 mt-1 size-4 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </Link>
  );
};

export default ArrowLink;
