export function formatTimeLeft(duration: number): string {
  const days = Math.floor(duration / (3600 * 24));
  const hours = Math.floor((duration % (3600 * 24)) / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  const pad = (v: number) => String(v).padStart(2, "0");
  return `${days}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
}
