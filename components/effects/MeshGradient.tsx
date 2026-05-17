export default function MeshGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/20 blur-3xl rounded-full animate-pulse" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-300/20 blur-3xl rounded-full animate-pulse" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-200/10 blur-3xl rounded-full" />

    </div>
  );
}