type CameraProps = { className?: string };

export default function Camera({ className = "" }: CameraProps) {
  return (
    <svg className={className} viewBox="0 0 390 290" role="img" aria-label="Simple camera drawing">
      <g id="camera" stroke="#111111" strokeWidth="8" strokeLinejoin="round" strokeLinecap="round">
        <path id="camera-strap" d="M45 80C14 132 17 223 68 261" fill="none" />
        <path d="M64 78H132L152 45H242L264 78H326C345 78 358 91 358 110V229C358 248 345 261 326 261H64C45 261 32 248 32 229V110C32 91 45 78 64 78Z" fill="#FF641A" />
        <circle cx="196" cy="169" r="68" fill="#FFFFFF" />
        <circle cx="196" cy="169" r="39" fill="#4A7DF3" />
        <circle cx="317" cy="113" r="10" fill="#FFC515" />
        <rect x="78" y="50" width="55" height="30" rx="8" fill="#111111" stroke="none" />
      </g>
    </svg>
  );
}
