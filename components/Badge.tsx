export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block w-fit px-3 py-1 rounded-full text-xs font-semibold"
      style={{ background: 'var(--brand-primary)', color: '#fff' }}>
      {children}
    </span>
  );
}