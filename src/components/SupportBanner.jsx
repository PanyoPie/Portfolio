import { Icon } from './Icon'

export function SupportBanner() {
  return (
    <section className="support-band container">
      <div>
        <p className="eyebrow">A little support goes a long way</p>
        <h2>Like what I'm doing??</h2>
        <p>Independent projects run on curiosity, caffeine, and kind people :333</p>
      </div>
      <a className="button button-accent" href="https://github.com/PanyoPie" target="_blank" rel="noreferrer">
        <Icon name="heart" size={17} /> Give me a follow :3
      </a>
    </section>
  )
}