type IdeaNotesProps = { className?: string };

const notes = [
  { x: 35, y: 30, rotate: -8, fill: "#FFC515" },
  { x: 205, y: 18, rotate: 7, fill: "#F27CE5" },
  { x: 382, y: 48, rotate: -4, fill: "#4A7DF3" },
  { x: 100, y: 190, rotate: 5, fill: "#C9C5FF" },
  { x: 300, y: 198, rotate: -7, fill: "#00B96B" },
];

export default function IdeaNotes({ className = "" }: IdeaNotesProps) {
  return (
    <svg className={className} viewBox="0 0 560 360" role="img" aria-label="Colorful sticky notes">
      <g id="idea-notes" stroke="#111111" strokeWidth="6" strokeLinejoin="round">
        {notes.map((note, index) => (
          <g className="idea-note" key={note.x} transform={`translate(${note.x} ${note.y}) rotate(${note.rotate} 68 58)`}>
            <rect width="136" height="116" rx="8" fill={note.fill} />
            <path d="M22 36H105M22 58H84M22 80H96" fill="none" strokeLinecap="round" strokeWidth="5" />
            <circle cx="112" cy="18" r="7" fill="#FFFFFF" stroke="none" />
            <text x="16" y="20" fill="#111111" stroke="none" fontSize="13" fontWeight="700">0{index + 1}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}
