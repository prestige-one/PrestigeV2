export type HiltonAmenityVideoRow = {
  label: string;
  video: string;
  poster: string;
  videoWidth: number;
  videoHeight: number;
};

/**
 * Parses `public/data/hilton-amenities-videos.txt`
 * Lines: Label | video URL | poster URL | width | height
 */
export function parseHiltonAmenityVideosTxt(raw: string): HiltonAmenityVideoRow[] {
  const out: HiltonAmenityVideoRow[] = [];
  for (const line of raw.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const parts = t.split("|").map((s) => s.trim());
    if (parts.length < 5) continue;
    const [label, video, poster, wStr, hStr] = parts;
    const videoWidth = Number(wStr);
    const videoHeight = Number(hStr);
    if (
      !label ||
      !video ||
      !Number.isFinite(videoWidth) ||
      !Number.isFinite(videoHeight) ||
      videoWidth <= 0 ||
      videoHeight <= 0
    ) {
      continue;
    }
    out.push({
      label,
      video,
      poster: poster || "",
      videoWidth,
      videoHeight,
    });
  }
  return out;
}
