interface ColorfulRippleLoaderProps {
  label?: string;
}

export const ColorfulRippleLoader = ({ label }: ColorfulRippleLoaderProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <div className="relative flex items-center justify-center">
        <div className="absolute h-12 w-12 rounded-full border-t-4 border-blue-400 animate-spin-slow" />
        <div className="absolute h-12 w-12 rounded-full border-t-4 border-green-400 animate-spin-slower" />
        <div className="absolute h-12 w-12 rounded-full border-t-4 border-red-400 animate-spin-slowest" />
      </div>
      {label && <p className="text-sm text-muted-foreground">{label}</p>}
    </div>
  );
};
