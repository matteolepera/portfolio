export default function ProjectsSkeleton() {
  return (
    <div aria-busy="true" className="flex flex-col gap-3.5">
      <span className="sr-only">Caricamento dei progetti</span>
      <div className="grid animate-pulse gap-5 rounded-2xl bg-surface p-4 motion-reduce:animate-none md:p-6 lg:grid-cols-2 lg:gap-8">
        <div className="aspect-[16/10] rounded-xl bg-line" />
        <div className="flex flex-col gap-3">
          <div className="h-8 w-1/2 rounded bg-line" />
          <div className="h-4 w-full rounded bg-line" />
          <div className="h-4 w-4/5 rounded bg-line" />
          <div className="mt-2 h-6 w-2/3 rounded bg-line" />
        </div>
      </div>
      {[1, 2, 3].map((row) => (
        <div
          key={row}
          className="flex animate-pulse items-center gap-4 rounded-xl bg-surface px-4 py-5 motion-reduce:animate-none"
        >
          <div className="size-9 shrink-0 rounded bg-line" />
          <div className="flex flex-1 flex-col gap-2">
            <div className="h-5 w-1/3 rounded bg-line" />
            <div className="h-4 w-3/4 rounded bg-line" />
          </div>
        </div>
      ))}
    </div>
  );
}
