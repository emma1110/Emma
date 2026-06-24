import PolaroidSticker from "./PolaroidSticker";

/**
 * HeroVisual
 * ----------
 * Tương ứng frame "Hero Visual" (128:44) trong Figma sau khi cập nhật node 121:2228.
 * Cấu trúc (z-index thấp -> cao):
 *  1. Background card xám (bg-[#f4f4f5], rounded-[24px])
 *  2. PolaroidSticker "Be Yourself"      - trái dưới, nghiêng -6 độ
 *  3. PolaroidSticker "You are the Artist of your own Life" - phải trên, nghiêng 6 độ
 *  4. Ảnh người + laptop (lớn nhất, đè lên các lớp trên)
 */
export default function HeroVisual() {
  return (
    <div className="relative h-[701px] w-[428px] shrink-0">
      {/* 1. Background Card xám */}
      <div className="absolute left-0 top-[75px] h-[476px] w-[428px] rounded-[24px] bg-[#f4f4f5]"></div>

      {/* 2. Polaroid 1: "Be Yourself" — nằm dưới-trái, đè lên card */}
      <PolaroidSticker
        src="/images/yourself.png"
        alt="Sticker minh hoạ chữ 'Be Yourself'"
        className="left-[26px] top-[52px]"
        baseRotation={-6}
        hoverRotation={0}
      />

      {/* 3. Polaroid 2: "You are the Artist of your own Life" — nằm trên-phải, đè lên card */}
      <PolaroidSticker
        src="/images/artist.png"
        alt="Sticker minh hoạ chữ 'You are the Artist of your own Life'"
        className="left-[235px] top-0"
        baseRotation={6}
        hoverRotation={0}
      />

      {/* 4. Ảnh chính: người + laptop (đứng trước cùng, đè lên cả hai sticker) */}
      <div className="absolute left-0 top-[128px] h-[573px] w-[403px]">
        <img
          src="/images/emma.png"
          alt="Emma làm việc với laptop, ngồi trên ghế"
          className="size-full object-cover pointer-events-none"
          draggable={false}
        />
      </div>
    </div>
  );
}
