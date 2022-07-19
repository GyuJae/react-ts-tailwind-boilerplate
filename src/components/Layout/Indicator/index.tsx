import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { cx } from 'styles'

interface IProps {
  path: string
  isCurrent: boolean
}

const Indicator = ({ path, isCurrent }: IProps) => {
  return (
    <li>
      <Link to={path}>
        <motion.div className={cx('h-3 w-3 rounded-full bg-gray-500')} animate={{ opacity: isCurrent ? 1 : 0.5 }} />
      </Link>
    </li>
  )
}

export default Indicator
