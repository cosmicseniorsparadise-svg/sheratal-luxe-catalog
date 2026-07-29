import { useCallback, useEffect, useState } from "react";

const KEY = "sheratal:product-images";
const EVT = "sheratal:product-images-changed";

type Store = Record<string, string>;

const read = (): Store => {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}") as Store;
  } catch {
    return {};
  }
};

const write = (s: Store) => {
  localStorage.setItem(KEY, JSON.stringify(s));
  window.dispatchEvent(new Event(EVT));
};

export function useProductImage(id: string) {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const load = () => setImage(read()[id] ?? null);
    load();
    window.addEventListener(EVT, load);
    window.addEventListener("storage", load);
    return () => {
      window.removeEventListener(EVT, load);
      window.removeEventListener("storage", load);
    };
  }, [id]);

  const upload = useCallback(
    (file: File) =>
      new Promise<void>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const s = read();
            s[id] = reader.result as string;
            write(s);
            resolve();
          } catch (err) {
            reject(err);
          }
        };
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
      }),
    [id],
  );

  const clear = useCallback(() => {
    const s = read();
    delete s[id];
    write(s);
  }, [id]);

  return { image, upload, clear };
}
