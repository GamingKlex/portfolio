export default function typewriter(text, duration, onChange) {
  let i = 0;
  let interval = setInterval(() => {
    onChange(text.slice(0, i));
    i++;
    if (i === text.length + 1) clearInterval(interval);
  }, duration / text.length);
}
