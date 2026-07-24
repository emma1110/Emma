type WireframeProps = { className?: string };

export default function Wireframe({ className = "" }: WireframeProps) {
  return (
    <svg className={className} viewBox="0 0 700 430" role="img" aria-label="Rough product wireframe">
      <g id="wireframe-ui" fill="none" stroke="#111111" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
        <rect x="28" y="24" width="644" height="380" rx="18" fill="#FFFFFF" />
        <rect x="54" y="50" width="592" height="46" rx="8" fill="#F7F2EA" />
        <circle cx="78" cy="73" r="8" fill="#F27CE5" />
        <circle cx="104" cy="73" r="8" fill="#FFC515" />
        <circle cx="130" cy="73" r="8" fill="#00B96B" />
        <rect id="wire-image" x="56" y="124" width="266" height="148" rx="10" strokeDasharray="12 10" />
        <path d="M382 135H610M382 166H568M382 197H590" />
        <rect id="wire-button" x="382" y="229" width="142" height="45" rx="10" />
        <rect className="wire-card" x="56" y="302" width="176" height="72" rx="10" />
        <rect className="wire-card" x="262" y="302" width="176" height="72" rx="10" />
        <rect className="wire-card" x="468" y="302" width="176" height="72" rx="10" />
        <path className="wire-handle" d="M42 116V136M32 126H52M332 116V136M322 126H342" stroke="#4A7DF3" />
        <path id="wire-cursor" d="M613 240L640 264L623 268L632 289L620 295L610 274L596 286Z" fill="#FFC515" />
      </g>
    </svg>
  );
}
