import Link from 'next/link'
import Image from 'next/image'
import { SITE } from '@/lib/site'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-32">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand opacity-[0.03] -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="container grid gap-16 lg:grid-cols-2 items-center">
        <div className="relative z-10">
          <div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-8"
            style={{
              background: 'var(--brand-dim)',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              color: 'var(--brand)',
            }}
          >
            <span className="text-xs tracking-[0.2em] font-bold uppercase">Established in Changchun</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold serif leading-[1.1] mb-8">
            对话身体 <br />
            <span className="text-brand">唤醒</span> 内在宁静
          </h1>

          <p className="text-lg md:text-xl mb-10" style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
            在 {SITE.name}，我们不仅仅提供按摩。我们创造一个让您可以暂时切断外界喧嚣、与自己对话的私密场域。通过克制且专业的舒缓手法，让疲惫消解于无形。
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a className="btn" href={`tel:${SITE.phone}`}>
              预约体验
            </a>
            <Link className="btn btnGhost" href="/concept">
              探索理念
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3 border-t border-line pt-12">
            <div>
              <div className="text-brand text-xl mb-2">✦</div>
              <div className="cardTitle !text-lg !mb-1">意境</div>
              <p className="text-sm color-muted">光影与声学的精细雕琢</p>
            </div>
            <div>
              <div className="text-brand text-xl mb-2">✦</div>
              <div className="cardTitle !text-lg !mb-1">手法</div>
              <p className="text-sm color-muted">克制且精准的循环导引</p>
            </div>
            <div>
              <div className="text-brand text-xl mb-2">✦</div>
              <div className="cardTitle !text-lg !mb-1">私享</div>
              <p className="text-sm color-muted">为您预留的留白空间</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="photo" style={{ aspectRatio: '4/5', borderRadius: '40px' }}>
            <Image
              src="/images/1.jpg"
              alt="按摩店空间意境"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          
          {/* Floating Address Card */}
          <div
            className="hidden md:block absolute -left-12 -bottom-8 card !py-6 !px-8 max-w-[320px]"
            style={{ borderRadius: '24px' }}
          >
            <div className="text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--brand)' }}>Location</div>
            <div className="text-lg font-bold serif leading-snug">{SITE.address}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
