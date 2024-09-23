type Props = {
  tags: string[];
};

export function DisplayTags({ tags }: Props) {
  return (
    <div className="mr-4 mt-1 flex flex-row lg:mt-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-8 pb-2 text-white"
        viewBox="0 0 21 21"
      >
        <g fill="none" fillRule="evenodd" transform="translate(1 3)">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.914.5H15.5a2 2 0 0 1 2 2v3.586a1 1 0 0 1-.293.707l-6.793 6.793a2 2 0 0 1-2.828 0l-3.172-3.172a2 2 0 0 1 0-2.828L11.207.793A1 1 0 0 1 11.914.5"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m7.5 13.5l-2.013 1.006A2 2 0 0 1 2.72 13.42L1.105 9.114a2 2 0 0 1 .901-2.45L9.5 2.5"
          />
          <rect width="2" height="2" x="14" y="2" fill="currentColor" rx="1" />
        </g>
      </svg>
      <div className="flex flex-row flex-wrap font-sub text-gray-400">
        {tags.map((tag, index) => (
          <span key={tag} className={`${index >= 0 && "mx-1"}`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
