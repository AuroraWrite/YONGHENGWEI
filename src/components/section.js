export default function Section({ eyebrow, title, desc, actions, children }) {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="flex flex-col gap-6 max-w-3xl">
          {eyebrow ? (
            <div
              className="text-xs tracking-[0.3em] uppercase font-bold"
              style={{ color: 'var(--brand)', opacity: 0.8 }}
            >
              {eyebrow}
            </div>
          ) : null}
          {title ? (
            <h2 className="text-4xl md:text-6xl font-extrabold serif leading-[1.1]">{title}</h2>
          ) : null}
          {desc ? (
            <p className="text-lg md:text-xl" style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
              {desc}
            </p>
          ) : null}
          {actions ? <div className="mt-4 flex flex-wrap gap-4">{actions}</div> : null}
        </div>

        {children ? <div className="mt-16 md:mt-24">{children}</div> : null}
      </div>
    </section>
  )
}
