import sharp from "sharp";
import { readdir, stat, rename, unlink } from "fs/promises";
import path from "path";

const dirs = ["public/lovable-uploads", "public/logos", "src/assets"];
let before = 0, after = 0;

for (const dir of dirs) {
  let files;
  try { files = await readdir(dir); } catch { continue; }
  for (const f of files) {
    const p = path.join(dir, f);
    const ext = path.extname(f).toLowerCase();
    if (![".png", ".jpg", ".jpeg", ".webp"].includes(ext)) continue;
    const s = await stat(p);
    if (!s.isFile()) continue;
    const tmp = p + ".tmp";
    try {
      const img = sharp(p, { limitInputPixels: false }).rotate();
      const meta = await img.metadata();
      let pipe = sharp(p, { limitInputPixels: false });
      if ((meta.width || 0) > 1600) pipe = pipe.resize({ width: 1600, withoutEnlargement: true });
      if (ext === ".png") pipe = pipe.png({ quality: 80, compressionLevel: 9, palette: true, effort: 8 });
      else if (ext === ".webp") pipe = pipe.webp({ quality: 80 });
      else pipe = pipe.jpeg({ quality: 78, mozjpeg: true, progressive: true });
      await pipe.toFile(tmp);
      const ns = await stat(tmp);
      before += s.size;
      if (ns.size < s.size) { await rename(tmp, p); after += ns.size; }
      else { await unlink(tmp); after += s.size; }
    } catch (e) {
      console.error("skip", p, e.message);
      try { await unlink(tmp); } catch {}
    }
  }
}
console.log("before MB", (before / 1e6).toFixed(1), "after MB", (after / 1e6).toFixed(1));
