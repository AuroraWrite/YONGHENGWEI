import { SITE } from '@/lib/site'
import Section from '@/components/section'

export const metadata = {
  title: '联系与预约 | YONGHENGWEI',
}

export default function Page() {
  return (
    <div className="page">
      <Section
        eyebrow="CONTACT & APPOINTMENT"
        title="开启您的私享时光"
        desc="为了确保理疗效果，我们建议您简单描述当下的身体状态。无论是肩颈的紧绷还是长途跋涉后的疲惫，我们都会为您安排最合适的理疗师。"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <div className="cardTitle">联系方式</div>
            <div className="kv">
              <div className="k">联系人</div>
              <div className="v">{SITE.contact}</div>
            </div>
            <div className="kv">
              <div className="k">电话</div>
              <div className="v">
                <a className="link" href={`tel:${SITE.phone}`}>
                  {SITE.phone}
                </a>
              </div>
            </div>
            <div className="kv">
              <div className="k">地址</div>
              <div className="v">{SITE.address}</div>
            </div>

            <div className="divider" />

            <div className="flex flex-wrap gap-3">
              <a className="btn" href={`tel:${SITE.phone}`}>
                立即拨打
              </a>
              <a className="btn btnGhost" href={SITE.mapSearchUrl} target="_blank">
                打开地图
              </a>
            </div>
          </div>

          <div className="card">
            <div className="cardTitle">理疗礼序</div>
            <div className="list">
              <div className="li">请提前告知：参与人数及期望的时长。</div>
              <div className="li">沟通重点：告知理疗师您今日最需关照的部位。</div>
              <div className="li">反馈机制：体验中请随时就力度和温度给予反馈。</div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="COMMON QUESTIONS"
        title="您可能想了解的细节"
        desc="关于理疗的每一个细节，我们都希望能为您提供清晰的解答。如果您有其他疑问，请随时致电。"
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-bold mb-2 serif text-brand">Q: 需要提前多久预约？</h3>
              <p className="text-sm color-muted leading-relaxed">我们建议您至少提前 3-5 小时预约，以便我们为您预留独立的静谧空间。周末及法定节假日建议提前一天沟通。</p>
            </div>
            <div className="divider" />
            <div>
              <h3 className="font-bold mb-2 serif text-brand">Q: 理疗后有哪些注意事项？</h3>
              <p className="text-sm color-muted leading-relaxed">理疗结束后，身体处于加速循环状态。我们建议您在 2 小时内避免饮用冰冷饮品，并适量补充温水以促进代谢。</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-bold mb-2 serif text-brand">Q: 身体感到非常疲劳时可以直接按摩吗？</h3>
              <p className="text-sm color-muted leading-relaxed">如果您感到极度疲劳或伴有发热，我们建议先进行充分的休息。我们的理疗师会在开始前评估您的状态，确保过程安全且舒适。</p>
            </div>
            <div className="divider" />
            <div>
              <h3 className="font-bold mb-2 serif text-brand">Q: 所有的房间都是独立的吗？</h3>
              <p className="text-sm color-muted leading-relaxed">是的，YONGHENGWEI 坚持提供全独立的私密空间，确保每一位客人在体验过程中不被打扰，沉浸于纯粹的放松氛围中。</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
