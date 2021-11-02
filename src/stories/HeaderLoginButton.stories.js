import HeaderLoginButton from '../components/HeaderLoginButton'

export default {
  title: 'Component/Header/HeaderLoginButton',
  component: HeaderLoginButton,
  argTypes: {
    width: { controle: 'number' },
    height: { controle: 'number' },
    backgroundColor: { controle: 'color' },
    // borderRadius: { controle: 'color' },
  },
}

const Template = (args) => <HeaderLoginButton {...args} />
export const Default = Template.bind({})
