import { FC, CSSProperties } from 'react'
import { MenuIcon, XIcon as CloseIcon, LinkIcon, ExternalLinkIcon } from '@heroicons/react/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

type TSocialIcon = {
  className?: string
  style?: CSSProperties
}

const TwitterIcon: FC<TSocialIcon> = ({ style, className }) => (
  <FontAwesomeIcon className={className} style={style} icon={faTwitter} />
)

const FacebookIcon: FC<TSocialIcon> = ({ style, className }) => (
  <FontAwesomeIcon className={className} style={style} icon={faFacebookF} />
)

const LinkedinIcon: FC<TSocialIcon> = ({ style, className }) => (
  <FontAwesomeIcon className={className} style={style} icon={faLinkedinIn} />
)

export {
  // Core
  MenuIcon,
  CloseIcon,
  LinkIcon,
  ExternalLinkIcon,
  //
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon
}
