import LogoText from '../components/LogoText'

export default {
  title: 'Component/LogoText',
  component: LogoText,
  argTypes: {
    size: { control: 'number' },
    strong: { control: 'boolean' },
    color: { control: 'color' },
    block: { control: 'boolean' },
    paragraph: { control: 'boolean' },
  },
}

export const Default = (args) => {
  return <LogoText {...args} />
}
