export default function NoiseOverlay() {
  return (
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage:
          "url('https://grainy-gradients.vercel.app/noise.svg')",
      }}
    />
  );
}