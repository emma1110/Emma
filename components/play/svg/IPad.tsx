type IPadProps = { className?: string };

export default function IPad({ className = "" }: IPadProps) {
  return (
    <svg className={className} viewBox="0 0 920 580" role="img" aria-label="Large illustrated iPad">
      <g id="ipad-frame">
        <rect x="8" y="8" width="904" height="564" rx="54" fill="#111111" />
        <rect id="ipad-screen" x="28" y="28" width="864" height="524" rx="38" fill="#FFFFFF" />
        <circle cx="460" cy="18" r="4" fill="#4A4A4A" />
      </g>
    </svg>
  );
}
