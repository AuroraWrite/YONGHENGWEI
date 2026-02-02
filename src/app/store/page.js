import Link from 'next/link'
import { SITE } from '@/lib/site'
import Section from '@/components/section'
import Image from 'next/image'

export const metadata = {
  title: '门店信息 | YONGHENGWEI',
}

export default function Page() {
  return (
    <div className="page">
      <Section
        eyebrow="STORE LOCATION"
        title="寻觅静谧之所"
        desc="如果您在寻访途中需要指引，请随时联系我们。我们建议您提前预约，以便我们为您预留最佳的服务时段。"
        actions={
          <div className="flex flex-wrap gap-4">
            <a className="btn" href={SITE.mapSearchUrl} target="_blank">
              在地图中开启导航
            </a>
            <Link className="btn btnGhost" href="/contact">
              联系我们
            </Link>
          </div>
        }
      >
        <div className="grid gap-12 md:grid-cols-2">
          <div className="card">
            <h3 className="cardTitle">详细地址与指引</h3>
            <p className="cardDesc mb-6">{SITE.address}</p>
            <div className="kv">
              <span className="k">所在区域</span>
              <span className="v">长春市汽车开发区</span>
            </div>
            <div className="kv">
              <span className="k">标志建筑</span>
              <span className="v">明达路达兴东区</span>
            </div>
            <div className="kv">
              <span className="k">停车建议</span>
              <span className="v">园区周边设有专属泊车位</span>
            </div>
          </div>

          <div className="card">
            <h3 className="cardTitle">到店建议</h3>
            <div className="list">
              <div className="li">请提前 10-15 分钟抵达，这有助于您在开始前通过茶叙平复心率。</div>
              <div className="li">建议穿着宽松舒适的衣物，以便于后续的舒展与理疗过程。</div>
              <div className="li">如果您有特定的过敏源（如特定香氛），请在到店时第一时间告知。</div>
            </div>
          </div>
        </div>
      </Section>

      <section className="py-20 section-alt">
        <div className="container">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <div className="flex flex-col gap-6 order-2 md:order-1">
              <div className="text-xs tracking-[0.3em] text-brand font-bold uppercase">The Atmosphere</div>
              <h2 className="text-4xl serif">关于空间的呼吸感</h2>
              <p className="color-muted leading-relaxed">
                在 YONGHENGWEI，我们坚持“少即是多”的设计原则。墙面的纹理、灯光的角度、甚至是门把手的触感，都是为了引导您的感官进入一个更低频、更专注的状态。这不是一种简单的装饰，而是一种关于“退后”的哲学。
              </p>
              <div className="divider" />
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <div className="font-bold mb-2 serif">自然材质</div>
                  <p className="text-sm color-muted">原木、棉麻与石材的深度交互</p>
                </div>
                <div>
                  <div className="font-bold mb-2 serif">气流管理</div>
                  <p className="text-sm color-muted">全天候的空气置换与湿度恒定</p>
                </div>
              </div>
            </div>
            <div className="photo order-1 md:order-2" style={{ aspectRatio: '16/10' }}>
              <Image
                src="/images/5.jpg"
                alt="门店氛围"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="SPACE AESTHETICS"
        title="舒缓、干净、克制的场域"
        desc="我们精细雕琢每一处感官细节，只为给您提供一个可以暂时切断外界喧嚣的私密场域。"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SITE.gallery.map((src) => (
            <div key={src} className="photo">
              <Image
                src={src}
                alt="环境图片"
                width={1200} 
                height={800}
                sizes="(max-width: 1024px) 100vw, 33vw"
                style={{ width: '100%',  objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
