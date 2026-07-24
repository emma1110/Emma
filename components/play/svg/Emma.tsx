type EmmaProps = { className?: string };

export default function Emma({ className = "" }: EmmaProps) {
  return (
    <svg className={className} viewBox="0 0 360 420" role="img" aria-label="Editorial illustration of Emma drawing">
      <g id="emma-character" stroke="#111111" strokeWidth="7" strokeLinejoin="round" strokeLinecap="round">
        <path id="emma-hair" d="M102 180C70 74 126 28 207 35C294 42 320 118 286 214L252 263H105Z" fill="#111111" />
        <path id="emma-face" d="M133 97C171 67 241 73 265 115V193C265 246 229 278 184 268C139 258 116 222 120 177Z" fill="#FFD7BF" />
        <path d="M245 127C254 143 258 160 254 179" fill="none" />
        <circle cx="209" cy="139" r="4" fill="#111111" stroke="none" />
        <path d="M224 157L214 169L226 172" fill="none" />
        <path id="emma-hair-front" d="M119 151C113 91 154 65 203 69C175 83 156 114 152 160C141 147 130 145 119 151Z" fill="#111111" />
        <path id="emma-top" d="M104 263C135 238 224 239 258 264L296 410H66Z" fill="#00B96B" />
        <path id="emma-arm" d="M245 273C285 289 303 321 313 374L276 389C258 342 238 323 213 312Z" fill="#FFD7BF" />
        <path id="emma-hand" d="M276 389C288 406 314 402 320 381C313 367 297 365 284 374Z" fill="#FFD7BF" />
        <path id="emma-trousers" d="M92 365H267L286 420H68Z" fill="#F27CE5" />
      </g>
    </svg>
  );
}
