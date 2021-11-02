import Menu from '@components/Menu'

const DefaultTemplate = ({ children }) => {
  return (
    <div>
      <Menu></Menu>
      <main>{children}</main>
    </div>
  )
}

export default DefaultTemplate
