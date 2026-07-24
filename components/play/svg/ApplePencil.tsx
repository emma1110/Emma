type ApplePencilProps = { className?: string };

export default function ApplePencil({ className = "" }: ApplePencilProps) {
  return (
    <svg className={className} viewBox="0 0 360 92" role="img" aria-label="Oversized Apple Pencil">
      <g id="apple-pencil" stroke="#111111" strokeWidth="6" strokeLinejoin="round">
        <path d="M20 46L58 18H316C333 18 346 31 346 46C346 62 333 74 316 74H58Z" fill="#FFFFFF" />
        <path d="M20 46L58 18V74Z" fill="#FFC515" />
        <path d="M20 46L40 39V53Z" fill="#111111" stroke="none" />
        <path d="M306 18V74" fill="none" />
        <path d="M316 18C333 18 346 31 346 46C346 62 333 74 316 74Z" fill="#F27CE5" />
      </g>
    </svg>
  );
}
