import Image from '../Image'

const Avatar = ({
  lazy,
  threshold,
  src,
  size = 70,
  shape = 'circle', // round, square
  placeholder,
  alt,
  mode = 'dover',
  ...props
}) => {
  return (
    <div {...props}>
      <Image
        block
        lazy={lazy}
        threshold={threshold}
        width={size}
        height={size}
        src={src}
        placeholder={placeholder}
        alt={alt}
        mode={mode}
      />
    </div>
  )
}

export default Avatar
