export default function BackgroundGlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-gradient-radial-purple blur-3xl" />
      <div className="absolute top-1/3 -right-40 h-[26rem] w-[26rem] rounded-full bg-gradient-radial-blue blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-[22rem] w-[22rem] rounded-full bg-gradient-radial-purple blur-3xl opacity-70" />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}
