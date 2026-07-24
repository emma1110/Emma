type PolishedUIProps = { className?: string };

export default function PolishedUI({ className = "" }: PolishedUIProps) {
  return (
    <svg className={className} viewBox="0 0 700 430" role="img" aria-label="Polished product interface">
      <g id="polished-ui" stroke="#111111" strokeWidth="5" strokeLinejoin="round">
        <rect x="28" y="24" width="644" height="380" rx="22" fill="#FFFFFF" />
        <rect x="54" y="50" width="592" height="46" rx="12" fill="#C9C5FF" />
        <circle cx="82" cy="73" r="10" fill="#111111" stroke="none" />
        <path d="M108 68H194M108 79H165" strokeWidth="4" strokeLinecap="round" />
        <rect className="polished-part" x="56" y="124" width="266" height="148" rx="14" fill="#4A7DF3" />
        <circle className="polished-part" cx="188" cy="198" r="45" fill="#FFC515" />
        <path d="M382 139H602M382 171H553M382 203H579" strokeWidth="7" strokeLinecap="round" />
        <rect className="polished-part" x="382" y="229" width="152" height="48" rx="24" fill="#00B96B" />
        <path d="M423 253H493" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
        <rect className="polished-part" x="56" y="302" width="176" height="72" rx="14" fill="#F27CE5" />
        <rect className="polished-part" x="262" y="302" width="176" height="72" rx="14" fill="#FFC515" />
        <rect className="polished-part" x="468" y="302" width="176" height="72" rx="14" fill="#FF641A" />
      </g>
    </svg>
  );
}
