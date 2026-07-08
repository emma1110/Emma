"use client";
/**
 * PolaroidSticker
 * ----------------
 * Component tái sử dụng cho các "ảnh dán" kiểu polaroid xuất hiện phía sau
 * ảnh chính trong Hero (file Figma: node 127:47 "Group 2" và 127:51 "Group 1").
 *
 * Mỗi polaroid gồm:
 *  - 1 khung trắng (bg-white, rounded-md, shadow nhẹ) — giống khung giấy polaroid
 *  - 1 ảnh bên trong, bo góc nhỏ hơn khung
 *
 * Hover: nghiêng nhẹ (rotate) + nhô lên (scale + translateY), mô phỏng cảm giác
 * "nhón" một tấm ảnh dán thật trên bàn. Transition êm, dùng easing tự nhiên.
 *
 * Props:
 *  - src: đường dẫn ảnh
 *  - alt: text mô tả ảnh (bắt buộc, cho accessibility)
 *  - baseRotation: độ nghiêng "nghỉ" của polaroid (độ, có thể âm/dương) — khớp art-direction gốc
 *  - hoverRotation: độ nghiêng khi hover (mặc định giảm góc nghiêng, tạo cảm giác "đứng thẳng lại")
 *  - className: cho phép truyền thêm vị trí (absolute, left/top...) từ component cha
 */
import { useState } from "react";

export default function PolaroidSticker({
  src,
  alt,
  baseRotation = 0,
  hoverRotation = 0,
  className = "",
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`absolute size-[168px] rounded-[var(--radius-md)] bg-white p-[6.5px] transition-all duration-300 ease-out will-change-transform ${className}`}
      style={{
        transform: `rotate(${isHovered ? hoverRotation : baseRotation}deg) ${isHovered ? "translateY(-6px) scale(1.04)" : "translateY(0) scale(1)"}`,
        boxShadow: isHovered
          ? "0px 10px 18px 0px rgba(176,176,176,0.35)"
          : "0px 4px 4px 0px rgba(176,176,176,0.25)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="size-full overflow-hidden rounded-[var(--radius-sm)]">
        <img
          src={src}
          alt={alt}
          className="size-full object-cover pointer-events-none"
          width="155"
          height="155"
          loading="eager"
          decoding="async"
          draggable={false}
        />
      </div>
    </div>
  );
}
