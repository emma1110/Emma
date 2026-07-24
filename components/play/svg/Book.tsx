type BookProps = { className?: string };

export default function Book({ className = "" }: BookProps) {
  return (
    <svg className={className} viewBox="0 0 420 250" role="img" aria-label="Open book drawing">
      <g id="open-book" stroke="#111111" strokeWidth="7" strokeLinejoin="round" strokeLinecap="round">
        <path id="book-left-page" d="M32 47C101 27 157 35 210 76V222C151 188 92 184 32 203Z" fill="#C9C5FF" />
        <path id="book-right-page" d="M210 76C266 34 328 28 388 47V203C330 184 270 188 210 222Z" fill="#FFC515" />
        <path id="book-fold" d="M210 76V222" fill="none" />
        <path className="book-page-line" d="M65 91C105 82 140 86 174 105" fill="none" strokeWidth="5" />
        <path className="book-page-line" d="M246 104C278 85 315 82 352 91" fill="none" strokeWidth="5" />
        <path id="book-lifting-page" d="M210 76C261 33 302 25 341 38C290 55 254 88 229 130Z" fill="#FFFFFF" />
      </g>
    </svg>
  );
}
