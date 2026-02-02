import Section from '@/components/section'
import Image from 'next/image'

export const metadata = {
  title: '舒缓理念 | YONGHENGWEI',
}

export default function Page() {
  return (
    <div className="page">
      <Section
        eyebrow="BRAND CONCEPT"
        title="关于 YONGHENGWEI 的舒缓哲学"
        desc="我们相信，身体的放松是心灵回归的第一步。在快节奏的都市生活中，我们为您提供一个克制、安静且专业的留白空间。"
      >
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="photo" style={{ aspectRatio: '16/9' }}>
            <Image
              src="/images/4.jpg"
              alt="空间意境"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold color-brand serif">克制的手法，精准的力度</h3>
            <p className="color-muted">
              我们不追求过度的痛感刺激，而是通过精准的经络按压与循环引导，激发身体自愈力。每一位理疗师都经过严格培训，确保动作的连贯与节奏的克制。
            </p>
            <div className="divider" />
            <h3 className="text-2xl font-bold color-brand serif">静谧的空间，流动的空气</h3>
            <p className="color-muted">
              从灯光的明暗到背景音的频率，我们精细雕琢每一处感官细节。这里的空气是流动的，心境是透明的。
            </p>
          </div>
        </div>
      </Section>

      <section className="py-20 section-alt">
        <div className="container">
          <div className="flex flex-col gap-12 items-center text-center max-w-4xl mx-auto mb-16">
            <div className="text-xs tracking-[0.3em] text-brand font-bold uppercase">The Five Senses</div>
            <h2 className="text-4xl md:text-5xl serif">五感沉浸：全方位的放松礼赞</h2>
            <p className="text-lg color-muted">
              在这里，放松不仅仅发生在指尖与肌肉接触的那一刻。我们通过五感的深度调和，为您构建一个全方位包裹的疗愈场域。
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="card text-center">
              <div className="text-3xl mb-4">🪔</div>
              <h3 className="cardTitle">嗅觉 · 森林余韵</h3>
              <p className="cardDesc">选用特调的草本精油，带有雨后森林的清冷与泥土的厚实，帮助呼吸平稳，心率放缓。</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl mb-4">🎵</div>
              <h3 className="cardTitle">听觉 · 留白之声</h3>
              <p className="cardDesc">剔除杂乱的白噪音，只保留模拟自然界低频脉动的音律，引导脑波进入深度放松状态。</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl mb-4">👁️</div>
              <h3 className="cardTitle">视觉 · 光影克制</h3>
              <p className="cardDesc">拒绝高亮度的直射光。我们利用漫反射原理，营造温润如玉的空间光影，减少视觉神经的压力。</p>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="SERVICE FLOW"
        title="服务礼序：仪式感带来的深层疗愈"
        desc="我们注重流程带来的仪式感，这有助于您的心率从繁忙状态平稳过渡到深度放松。十二道严苛礼序，只为这一个小时的纯粹。"
      >
        <div className="grid gap-6 md:grid-cols-4">
          <div className="card">
            <div className="text-4xl mb-4 opacity-50 serif">01</div>
            <div className="cardTitle">净手沉浸</div>
            <div className="cardDesc">入店即换鞋，温暖的草本茶水开启放松序幕，让纷扰止于门外。</div>
          </div>
          <div className="card">
            <div className="text-4xl mb-4 opacity-50 serif">02</div>
            <div className="cardTitle">深度沟通</div>
            <div className="cardDesc">不仅仅是询问，更是通过触诊感知。确认今日重点部位及身体最真实的反馈。</div>
          </div>
          <div className="card">
            <div className="text-4xl mb-4 opacity-50 serif">03</div>
            <div className="cardTitle">循环导引</div>
            <div className="cardDesc">在专业的呼引导下，进行深度身体交互，让停滞的能量重新流动。</div>
          </div>
          <div className="card">
            <div className="text-4xl mb-4 opacity-50 serif">04</div>
            <div className="cardTitle">温润回甘</div>
            <div className="cardDesc">理疗结束后的轻微拉伸，伴以时令滋补点心，让放松的余韵更持久。</div>
          </div>
        </div>
      </Section>
    </div>
  )
}
