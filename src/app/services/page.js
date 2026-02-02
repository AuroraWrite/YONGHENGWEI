import Link from 'next/link'
import Image from 'next/image'
import { SITE } from '@/lib/site'
import Section from '@/components/section'
import ServiceGrid from '@/components/service-grid'

export const metadata = {
  title: '项目与价格 | YONGHENGWEI',
}

export default function Page() {
  return (
    <div className="page">
      <Section
        eyebrow="SERVICE PORTFOLIO"
        title="专业的服务项目"
        desc="我们提供以舒缓放松为核心的项目组合，专注于精准的力度与克制的节奏。以下项目可根据您的身体状态进行个性化微调。"
        actions={
          <div className="flex flex-wrap gap-4">
            <Link className="btn" href="/contact">
              预约咨询
            </Link>
            <a className="btn btnGhost" href={`tel:${SITE.phone}`}>
              致电门店
            </a>
          </div>
        }
      >
        <ServiceGrid />
      </Section>

      <section className="py-20 section-alt">
        <div className="container">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <div className="flex flex-col gap-8">
              <div className="text-xs tracking-[0.3em] text-brand font-bold uppercase">Our Standards</div>
              <h2 className="text-4xl serif">我们对理疗的严苛定义</h2>
              <div className="grid gap-6">
                <div className="feature-card !p-6">
                  <h3 className="font-bold mb-2 serif">不盲目追求力度</h3>
                  <p className="text-sm color-muted">力度应是穿透性的而非破坏性的。我们通过精准的按压寻找身体的平衡点。</p>
                </div>
                <div className="feature-card !p-6">
                  <h3 className="font-bold mb-2 serif">全程静谧保障</h3>
                  <p className="text-sm color-muted">理疗过程中，除非必要沟通，我们坚持零交谈，确保您的感官完全沉浸。</p>
                </div>
                <div className="feature-card !p-6">
                  <h3 className="font-bold mb-2 serif">定制化方案</h3>
                  <p className="text-sm color-muted">没有完全相同的身体，只有不断调整的节奏。每次服务前，我们都会确认您的即时状态。</p>
                </div>
              </div>
            </div>
            <div className="photo" style={{ aspectRatio: '4/5' }}>
              <Image
                src="/images/3.jpg"
                alt="理疗细节"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="SERVICE NOTE" title="我们会在开始前做简短沟通" desc="主要确认你的感受、重点部位、可承受力度以及是否有不适或禁忌。体验过程中你也可以随时调整。我们坚持以“舒适”为第一优先级，让放松真正发生。" />
    </div>
  )
}
