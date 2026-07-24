type FinalShapesProps = { className?: string };

export default function FinalShapes({ className = "" }: FinalShapesProps) {
  return (
    <svg className={className} viewBox="0 0 900 520" aria-hidden="true">
      <g id="final-decorative-shapes" stroke="#111111" strokeWidth="6">
        <circle className="final-shape" cx="104" cy="102" r="38" fill="#FFC515" />
        <rect className="final-shape" x="722" y="72" width="88" height="88" rx="20" fill="#F27CE5" transform="rotate(9 766 116)" />
        <path className="final-shape" d="M96 390L146 304L196 390Z" fill="#00B96B" />
        <path className="final-shape" d="M742 346C785 305 843 333 825 383C807 433 746 422 742 346Z" fill="#FF641A" />
        <path d="M260 89C286 62 314 62 340 89M572 408C598 381 626 381 652 408" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}
