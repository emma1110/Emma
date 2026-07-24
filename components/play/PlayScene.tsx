import ApplePencil from "./svg/ApplePencil";
import Book from "./svg/Book";
import Camera from "./svg/Camera";
import Emma from "./svg/Emma";
import FinalShapes from "./svg/FinalShapes";
import Fish from "./svg/Fish";
import IdeaNotes from "./svg/IdeaNotes";
import IPad from "./svg/IPad";
import PaperPlane from "./svg/PaperPlane";
import PolishedUI from "./svg/PolishedUI";
import Wireframe from "./svg/Wireframe";
import styles from "./PlayHero.module.css";

const stages = ["Canvas", "Mark", "Fish", "Book", "Plane", "Camera", "Ideas", "Product", "Emma"];

export default function PlayScene() {
  return (
    <div className={styles.scene} data-play-scene>
      <div className={styles.character} data-emma-character>
        <Emma />
      </div>

      <div className={styles.device} data-play-device>
        <IPad className={styles.ipad} />

        <div className={styles.screen}>
          <svg className={styles.continuousLine} viewBox="0 0 1000 580" preserveAspectRatio="none" aria-hidden="true">
            <path
              id="story-line"
              data-story-line
              pathLength="1"
              d="M178 118C232 76 293 90 318 142C340 190 291 232 235 213C193 199 178 161 218 137C284 97 390 106 438 171C479 225 450 285 385 299C320 313 282 273 312 233C352 180 465 181 513 236C555 284 524 338 464 343C412 347 388 315 421 286C472 240 599 249 649 306C688 351 660 400 602 404C551 408 530 377 563 348C619 299 742 305 785 363C822 411 790 456 729 453C675 450 653 416 687 388C730 354 816 365 848 420"
              fill="none"
              stroke="#111111"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className={styles.firstDot} data-first-dot />

          <div className={`${styles.stageObject} ${styles.fish}`} data-stage="fish"><Fish /></div>
          <div className={`${styles.stageObject} ${styles.book}`} data-stage="book"><Book /></div>
          <div className={`${styles.stageObject} ${styles.plane}`} data-stage="plane"><PaperPlane /></div>
          <div className={`${styles.stageObject} ${styles.camera}`} data-stage="camera"><Camera /></div>
          <div className={`${styles.stageObject} ${styles.notes}`} data-stage="notes"><IdeaNotes /></div>
          <div className={`${styles.stageObject} ${styles.wireframe}`} data-stage="wireframe"><Wireframe /></div>
          <div className={`${styles.stageObject} ${styles.product}`} data-stage="product"><PolishedUI /></div>

          <div className={styles.introduction} data-stage="introduction">
            <FinalShapes className={styles.finalShapes} />
            <div className={styles.introCopy}>
              <h1>Hi, I&apos;m Emma.</h1>
              <p>I design products, draw ideas, and turn quiet observations into stories.</p>
            </div>
          </div>

          <div className={styles.pencil} data-apple-pencil>
            <ApplePencil />
          </div>
        </div>
      </div>

      <p className={styles.instruction} data-scroll-instruction>
        <span aria-hidden="true">↓</span> Scroll to draw
      </p>

      <ol className={styles.stageRail} aria-label="Play story progress">
        {stages.map((stage, index) => (
          <li key={stage} data-stage-dot={index + 1}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <i />
            <em>{stage}</em>
          </li>
        ))}
      </ol>

      <div className={styles.flash} data-camera-flash />

      <div className={styles.finalTransition} data-final-transition>
        <FinalShapes className={styles.transitionShapes} />
        <p>This is where I play.</p>
      </div>
    </div>
  );
}
