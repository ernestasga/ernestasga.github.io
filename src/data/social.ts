import { faFacebook, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { NavigationItem } from '@/types/navigation'

const socialItems: NavigationItem[] = [
    { icon: faFacebook, color: '#1877F2', path: 'https://www.facebook.com/ernestas.garjonis' },
    { icon: faLinkedin, color: '#0077b5', path: 'https://www.linkedin.com/in/ernestas-garjonis' },
    { icon: faGithub, color: '#171515', path: 'https://github.com/ernestasga' },
    { icon: faInstagram, color: '#fbad50', path: 'https://www.instagram.com/ernestasga' }
]

export default socialItems