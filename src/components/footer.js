import Link from 'next/link'
import { SITE } from '@/lib/site'

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.10)',
        background: 'rgba(0,0,0,0.18)',
      }}
    >
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-bold text-lg">{SITE.name}</div>
            <div className="mt-2" style={{ color: 'rgba(255,255,255,0.70)' }}>
              我们提供以舒缓放松为主的到店服务。
            </div>
          </div>

          <div>
            <div className="font-bold">快捷入口</div>
            <div className="mt-3 grid gap-2">
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
            </div>
          </div>

          <div>
            <div className="font-bold">联系</div>
            <div className="mt-3 grid gap-2" style={{ color: 'rgba(255,255,255,0.72)' }}>
              <div>联系人：{SITE.contact}</div>
              <div>
                电话：
                <a className="link" href={`tel:${SITE.phone}`}>
                  {SITE.phone}
                </a>
              </div>
              <div>公司：{SITE.company}</div>
              <div>地址：{SITE.address}</div>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-6"
          style={{
            borderTop: '1px dashed rgba(255,255,255,0.14)',
            color: 'rgba(255,255,255,0.55)',
            fontSize: 13,
          }}
        >
          © {new Date().getFullYear()} {SITE.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
