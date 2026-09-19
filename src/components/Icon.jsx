import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faArrowUpRightFromSquare,
  faBookOpen,
  faCode,
  faCodeBranch,
  faCodeFork,
  faCopy,
  faEnvelope,
  faGamepad,
  faHeart,
  faFolder,
  faLock,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons'
import {
  faDiscord,
  faFacebook,
  faGithub,
  faSteam,
} from '@fortawesome/free-brands-svg-icons'

const icons = {
  arrow: faArrowRight,
  github: faGithub,
  mail: faEnvelope,
  discord: faDiscord,
  facebook: faFacebook,
  riot: faGamepad,
  steam: faSteam,
  external: faArrowUpRightFromSquare,
  heart: faHeart,
  folder: faFolder,
  lock: faLock,
  copy: faCopy,
  code: faCode,
  branch: faCodeBranch,
  fork: faCodeFork,
  trophy: faTrophy,
  book: faBookOpen,
}

export function Icon({ name, size = 18 }) {
  if (name === 'riot') {
    return (
      <svg
        aria-hidden="true"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M13.458.86 0 7.093l3.353 12.761 2.552-.313-.701-8.024.838-.373 1.447 8.202 4.361-.535-.775-8.857.83-.37 1.591 9.025 4.412-.542-.849-9.708.84-.374 1.74 9.87L24 17.318V3.5Zm.316 19.356.222 1.256L24 23.14v-4.18l-10.22 1.256Z" />
      </svg>
    )
  }

  return (
    <FontAwesomeIcon
      icon={icons[name]}
      aria-hidden="true"
      style={{ width: size, height: size }}
    />
  )
}