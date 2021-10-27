import Header from '../components/Header'

export default {
  title: 'Component/Header',
  Component: Header,
}

export const Default = (args) => {
  return <Header {...args} />
}
