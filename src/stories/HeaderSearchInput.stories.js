import HeaderSearchInput from '../components/HeaderSearchForm/Input'

export default {
  title: 'Component/Header/HeaderSearchForm',
  component: HeaderSearchInput,
  argTypes: {
    onChange: { action: 'onChange' },
  },
}

export const Input = (args) => {
  return <HeaderSearchInput {...args} />
}
