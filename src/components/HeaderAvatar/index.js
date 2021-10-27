import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import ImageComponent from '../Image'

const ShapeToCssValue = {
  circle: '50%',
  round: '4px',
  square: '0px',
}

const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
  border: 1px solid #dadada;
  border-radius: ${({ shape }) => ShapeToCssValue[shape]};
  background-color: #eee;
  overflow: hidden;

  > img {
    transition: opacity 0.2s ease-out;
  }
`
const Avatar = ({
  lazy,
  threshold,
  src,
  size = 60,
  shape = 'circle', // round, square
  placeholder,
  alt,
  mode = 'cover',
  ...props
}) => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => setLoaded(true)
  }, [src])
  const divStyle = {
    marginRight: 30,
    textAlign: 'right',
  }
  return (
    <AvatarWrapper {...props} style={divStyle} shape={shape}>
      <ImageComponent
        lazy={lazy}
        threshold={threshold}
        width={size}
        height={size}
        src={src}
        placeholder={placeholder}
        alt={alt}
        mode={mode}
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </AvatarWrapper>
  )
}

export default Avatar
