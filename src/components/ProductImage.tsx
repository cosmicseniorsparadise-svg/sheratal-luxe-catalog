import { useRef, type ChangeEvent, type MouseEvent } from "react";
import { useProductImage } from "@/lib/product-images";

type Props = {
  id: string;
  alt: string;
  className?: string;
  rounded?: boolean;
  /** Show Replace/Remove controls over an existing image (editor only). */
  controls?: boolean;
};

export function ProductImage({ id, alt, className = "", controls = true }: Props) {
  const { image, upload, clear } = useProductImage(id);
  const inputRef = useRef<HTMLInputElement>(null);

  const openPicker = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    inputRef.current?.click();
  };

  const onFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) {
      try {
        await upload(f);
      } catch {
        alert("Could not read that image. Try a smaller file.");
      }
    }
    e.target.value = "";
  };

  const onClear = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    clear();
  };

  return (
    <div
      className={`group/img relative overflow-hidden bg-[color:var(--muted)] aspect-[3/4] ${className}`}
    >
      {image ? (
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[color:var(--muted-foreground)]">
          <span className="gold-divider" />
          <span className="text-[0.62rem] tracking-[0.32em] uppercase">
            Product image
          </span>
          <span className="text-[0.62rem] tracking-[0.28em] uppercase text-[color:var(--gold)]">
            Upload to add
          </span>
        </div>
      )}

      <div
        className={`absolute inset-0 flex items-end justify-center gap-2 p-4 transition duration-300 ${
          image
            ? "bg-black/0 opacity-0 group-hover/img:bg-black/40 group-hover/img:opacity-100"
            : "bg-transparent opacity-100"
        }`}
      >
        <button
          type="button"
          onClick={openPicker}
          className="btn-gold btn-gold-hover !py-2 !px-4 !text-[0.62rem]"
        >
          {image ? "Replace" : "Upload image"}
        </button>
        {image && (
          <button
            type="button"
            onClick={onClear}
            className="btn-ghost-gold !py-2 !px-4 !text-[0.62rem] !text-white !border-white/70 hover:!bg-white hover:!text-[color:var(--ink)]"
          >
            Remove
          </button>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={onFile}
      />
    </div>
  );
}
