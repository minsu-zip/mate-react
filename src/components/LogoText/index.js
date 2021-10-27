import PropTypes from 'prop-types'
const LogoText = ({ block, paragraph, size, strong, color, ...props }) => {
  const Tag = block ? 'div' : paragraph ? 'p' : 'span'
  const fontStyle = {
    fontSize: size,
    fontWeight: strong ? 'bold' : undefined,
    color: color,
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
// LogoText.defaultProps = {
//   fontSize: 30,
//   color: 'black',
//   fontWeight: 'bold',
// }

export default LogoText
