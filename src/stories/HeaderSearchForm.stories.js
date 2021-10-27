import HeaderSearchForm from '../components/HeaderSearchForm'

export default {
  title: 'Component/Header/HeaderSearchForm',
  component: HeaderSearchForm,
  argTypes: {
    onSubmit: { action: 'onSubmit' },
  },
}

export const Default = (args) => {
  return <HeaderSearchForm {...args} />
}
