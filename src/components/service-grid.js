import { services } from '@/lib/services'

export default function ServiceGrid({ limit }) {
  const list = typeof limit === 'number' ? services.slice(0, limit) : services

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {list.map((s) => (
        <div key={s.title} className="card">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="cardTitle">{s.title}</div>
              <div className="cardDesc">{s.desc}</div>
            </div>
            <div
              className="shrink-0 px-3 py-1 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.78)',
                fontWeight: 700,
              }}
            >
              {s.duration}
            </div>
          </div>

          <div className="divider" />

          <div className="flex items-center justify-between gap-3">
            <div style={{ color: 'rgba(255,255,255,0.62)' }}>{s.note}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
