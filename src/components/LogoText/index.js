import PropTypes from 'prop-types'
import './index'

const LogoText = ({
  block,
  paragraph,
  size = 40,
  strong = true,
  color = '#1C7947',
  ...props
}) => {
  const Tag = block ? 'div' : paragraph ? 'p' : 'span'
  const fontStyle = {
    fontSize: size,
    fontWeight: strong ? 'bold' : undefined,
    color: color,
    fontFamily: 'Lobster Two, cursive',
  }
  return (
    <Tag style={{ ...props.style, ...fontStyle }} {...props}>
      Mate
    </Tag>
  )
}

LogoText.propTypes = {
  block: PropTypes.bool,
  paragraph: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strong: PropTypes.string,
  color: PropTypes.string,
}

export default LogoText
