'use client'

interface ButtonProps {
  text: string;
  width?: string;
  height?: string;
  onClick?: () => void;
}

export default function Button({ text, width = "auto", height = "auto",  onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{ width, height }}
      className="py-2 px-4 text-white border border-white rounded-[40px] flex items-center justify-between gap-2 transition hover:bg-white hover:text-blue-600 cursor-pointer"
    >
      {text}
      <span>➡️</span>
    </button>
  );
}
