type PaperPlaneProps = { className?: string };

export default function PaperPlane({ className = "" }: PaperPlaneProps) {
  return (
    <svg className={className} viewBox="0 0 280 190" role="img" aria-label="Paper plane drawing">
      <g id="paper-plane" stroke="#111111" strokeWidth="7" strokeLinejoin="round" strokeLinecap="round">
        <path d="M24 32L257 83L151 112L103 170L91 119Z" fill="#FFFFFF" />
        <path d="M91 119L257 83L103 170" fill="#C9C5FF" />
        <path d="M91 119L151 112" fill="none" />
      </g>
    </svg>
  );
}
