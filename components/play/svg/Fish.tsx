type FishProps = { className?: string };

export default function Fish({ className = "" }: FishProps) {
  return (
    <svg className={className} viewBox="0 0 360 220" role="img" aria-label="Simple fish drawing">
      <g id="fish" fill="none" stroke="#111111" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
        <path id="fish-body" d="M54 111C98 51 216 52 274 111C218 170 102 172 54 111Z" fill="#4A7DF3" />
        <path id="fish-tail" d="M273 111L332 64L323 111L332 159Z" fill="#F27CE5" />
        <path d="M114 71C132 88 132 134 114 151" />
        <circle id="fish-eye" cx="92" cy="103" r="7" fill="#111111" stroke="none" />
      </g>
    </svg>
  );
}
