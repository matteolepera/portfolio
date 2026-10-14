const WIDTH = 392;
const HEIGHT = 64;
const PADDING = 6;

export default function ActivityTrace({ series }) {
  const max = Math.max(1, ...series);
  const step = WIDTH / (series.length - 1);

  const points = series.map((value, index) => [
    index * step,
    HEIGHT - PADDING - (value / max) * (HEIGHT - PADDING * 2),
  ]);
  const line = points
    .map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ");
  const [lastX, lastY] = points[points.length - 1];

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      aria-hidden="true"
      className="mt-2 block h-auto w-full overflow-visible"
    >
      <line
        x1="0"
        y1="16"
        x2={WIDTH}
        y2="16"
        strokeWidth="1"
        className="stroke-line"
      />
      <line
        x1="0"
        y1="40"
        x2={WIDTH}
        y2="40"
        strokeWidth="1"
        className="stroke-line"
      />
      <polyline
        points={line}
        fill="none"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        className="stroke-accent transition-[stroke] duration-500"
      />
      <circle cx={lastX} cy={lastY} r="4" className="fill-sector" />
    </svg>
  );
}
