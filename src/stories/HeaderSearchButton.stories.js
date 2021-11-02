import HeaderSearchButton from '../components/HeaderSearchForm/Button'

export default {
  title: 'Component/Header/HeaderSearchForm',
  component: HeaderSearchButton,
  argTypes: {
    onClick: { action: 'onClick' },
  },
}

export const Button = (args) => {
  return <HeaderSearchButton {...args} />
}
