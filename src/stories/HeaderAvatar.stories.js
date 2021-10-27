import HeaderAvatar from '../components/HeaderAvatar'

export default {
  title: 'Component/Header/HeaderAvatar',
  component: HeaderAvatar,
  argTypes: {
    src: {
      defaultValue: 'https://picsum.photos/200',
    },
    shape: {
      defaultValue: 'circle',
      control: 'inline-radio',
      options: ['circle', 'round', 'square'],
    },
    size: {
      defaultValue: 70,
      control: { type: 'range', min: 40, max: 200 },
    },
    mode: {
      defaultValue: 'cover',
      control: 'inline-radio',
      options: ['contain', 'cover', 'fill'],
    },
  },
}

export const Default = (args) => <HeaderAvatar {...args} />
