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
export default function PolaroidSticker({
  src,
  alt,
  baseRotation = 0,
  hoverRotation = 0,
  className = "",
}) {
  return (
    <div
      className={`group absolute size-[168px] rounded-[var(--radius-md)] bg-white p-[6.5px] shadow-[0px_4px_4px_0px_rgba(176,176,176,0.25)] transition-all duration-300 ease-out will-change-transform hover:-translate-y-1.5 hover:scale-[1.04] hover:shadow-[0px_10px_18px_0px_rgba(176,176,176,0.35)] ${className}`}
      style={{
        transform: `rotate(${baseRotation}deg)`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `rotate(${hoverRotation}deg)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `rotate(${baseRotation}deg)`;
      }}
    >
      <div className="size-full overflow-hidden rounded-[var(--radius-sm)]">
        <img
          src={src}
          alt={alt}
          className="size-full object-cover pointer-events-none"
          draggable={false}
        />
      </div>
    </div>
  );
}
