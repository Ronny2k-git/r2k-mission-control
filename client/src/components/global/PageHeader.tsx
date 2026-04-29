interface PageHeaderProps {
  tag: string;
  title: string;
  highlight: string;
  description: string;
}

export function PageHeader({
  tag,
  title,
  highlight,
  description,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-3 animate-fade-up">
      <span className="font-mono text-xs tracking-[0.3em] text-cyber-cyan-text uppercase">
        {tag}
      </span>
      <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-white leading-tight tracking-tight">
        {title} <span className="text-cyber-cyan-text">{highlight}</span>
      </h1>
      <div className="w-16 h-[2px] bg-cyber-cyan-text" />
      <p className="text-cyan-muted text-sm sm:text-base max-w-md">
        {description}
      </p>
    </div>
  );
}
