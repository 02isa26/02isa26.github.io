import styles from "@/app/_styles/accordion-styles.module.css";
import React from "react";

interface AccorionProps {
  heading: string;
  content: string | JSX.Element;
  isOpen?: boolean;
}

const Accordion: React.FC<AccorionProps> = ({ heading, content, isOpen = false }) => {
  return (
    <details className="group mb-8 border-b" open={isOpen}>
      <summary className={styles.heading}>
        {heading}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={styles.icon}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </summary>
      <div className={styles.content}>{content}</div>
    </details>
  );
};

export default Accordion;
