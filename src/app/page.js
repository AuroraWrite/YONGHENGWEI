import Link from 'next/link'
import Image from 'next/image'
import { SITE } from '@/lib/site'
import Hero from '@/components/hero'
import Section from '@/components/section'
import ServiceGrid from '@/components/service-grid'

export default function Page() {
  return ( 
    <div>
      <Hero />

      <Section
        eyebrow="OUR PHILOSOPHY"
        title="在喧嚣中寻觅一种克制的平衡"
        desc="我们不仅仅是在经营一家按摩店，而是在构建一个关于身体与时间对话的场域。在 YONGHENGWEI，每一处光影的明暗、每一寸空气的湿度，都经过精心的调和，只为在那一刻，让您的感官重获自由。"
      >
        <div className="feature-grid">
          <div className="feature-card">
            <h3 className="cardTitle">感官留白</h3>
            <p className="cardDesc">
              我们剔除了所有非必要的商业元素，将空间还给宁静。在纯粹的静谧中，您可以更清晰地听到呼吸的频率，感受身体最真实的反馈。
            </p>
          </div>
          <div className="feature-card">
            <h3 className="cardTitle">手法礼赞</h3>
            <p className="cardDesc">
              每一位理疗师都是时间的工匠。我们不追求机械的覆盖，而是通过指尖的精准感知，寻找淤堵的源头，用克制而持续的力度完成导引。
            </p>
          </div>
          <div className="feature-card">
            <h3 className="cardTitle">环境叙事</h3>
            <p className="cardDesc">
              从原木的纹理到香氛的层次，这里的每一处细节都在诉说。这不是装饰，而是为了营造一个让心率自然放缓的呼吸空间。
            </p>
          </div>
        </div>
      </Section>

      <section className="py-20 section-alt">
        <div className="container">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <div className="photo" style={{ aspectRatio: '1/1' }}>
              <Image
                src="/images/2.jpg"
                alt="理疗意境"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-8">
              <div className="text-xs tracking-[0.3em] text-brand font-bold uppercase">Heritage & Skill</div>
              <h2 className="text-4xl md:text-5xl serif leading-tight">指尖下的非凡旅程</h2>
              <p className="text-lg color-muted leading-relaxed">
                在长春，我们坚持用最传统却也最纯粹的方式服务客户。每一次按压，都是对经络的重新梳理；每一次拉伸，都是对紧绷肌肉的温和劝解。
              </p>
              <div className="stat-grid">
                <div className="stat-item">
                  <div className="stat-value">5000+</div>
                  <div className="stat-label">理疗小时数</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">12</div>
                  <div className="stat-label">道服务礼序</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">100%</div>
                  <div className="stat-label">定制化建议</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="SIGNATURE SERVICES"
        title="意境、手法与深度的交互"
        desc="以下是我们为都市生活精选的舒缓项目。没有复杂的套餐，只有专注于感受的纯粹选择。"
        actions={
          <div className="flex flex-wrap gap-4">
            <Link className="btn" href="/services">
              探索全部服务项目
            </Link>
            <a className="btn btnGhost" href={`tel:${SITE.phone}`}>
              致电预约服务
            </a>
          </div>
        }
      >
        <ServiceGrid limit={6} />
      </Section>

      <Section
        eyebrow="CLIENT VOICES"
        title="来自感官的真实回响"
        desc="他们的评价不关乎价格，而关乎在那一刻，身体被重新连接的奇妙体验。"
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card">
            <p className="italic text-lg mb-6 leading-relaxed">
              "在明达路这个静谧的角落，我找到了久违的呼吸节奏。理疗师对肩颈的控制力极其精准，没有那种廉价的疼痛，只有透入骨髓的松弛感。"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-1px bg-brand" />
              <div className="font-bold serif">常客 · 王女士</div>
            </div>
          </div>
          <div className="card">
            <p className="italic text-lg mb-6 leading-relaxed">
              "YONGHENGWEI 提供的不仅是按摩，更是一种关于『留白』的体验。从入座的那杯热茶开始，外面的喧嚣仿佛都被挡在了门外。"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-1px bg-brand" />
              <div className="font-bold serif">常客 · 张先生</div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="VISIT US"
        title="我们在明达路等候您"
        desc="在这个城市的快节奏中，为您预留一处可以停靠的港湾。明达路达兴东区，期待您的光临。"
        actions={
          <div className="flex flex-wrap gap-4">
            <a className="btn" href={SITE.mapSearchUrl} target="_blank">
              立即开启地图导航
            </a>
            <Link className="btn btnGhost" href="/store">
              查看门店详细指引
            </Link>
          </div>
        }
      >
        <div className="card">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="kv">
                <div className="k">店名</div>
                <div className="v">{SITE.name}</div>
              </div>
              <div className="kv">
                <div className="k">联系人</div>
                <div className="v">{SITE.contact}</div>
              </div>
              <div className="kv">
                <div className="k">预约热线</div>
                <div className="v">
                  <a className="link font-bold text-lg" href={`tel:${SITE.phone}`}>
                    {SITE.phone}
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="kv">
                <div className="k">公司</div>
                <div className="v">{SITE.company}</div>
              </div>
              <div className="kv">
                <div className="k">详细地址</div>
                <div className="v leading-relaxed">{SITE.address}</div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
