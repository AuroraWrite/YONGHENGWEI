import Link from 'next/link'
import { SITE } from '@/lib/site'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-40">
      <div
        className="w-full"
        style={{
          background: 'rgba(11,15,20,0.72)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255,255,255,0.10)',
        }}
      >
        <div className="container flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-3 no-underline group">
            <div className="flex flex-col">
              <div className="font-extrabold tracking-[0.2em] text-xl serif group-hover:text-brand transition-colors">
                {SITE.name}
              </div>
              <div className="text-[10px] tracking-[0.4em] uppercase opacity-50">
                Aesthetic & Wellness
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            <Link className="link" href="/concept">
              舒缓理念
            </Link>
            <Link className="link" href="/services">
              服务项目
            </Link>
            <Link className="link" href="/store">
              门店信息
            </Link>
            <Link className="link" href="/contact">
              联系预约
            </Link>
            <a className="btn" href={`tel:${SITE.phone}`}>
              {SITE.phone}
            </a>
          </nav>

          <div className="md:hidden">
            <a className="btn" href={`tel:${SITE.phone}`}>
              拨打
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
