import { withKnobs, text } from '@storybook/addon-knobs'
import { Meta, Story } from '@storybook/react'

import { Main } from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta

export const Basic: Story = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text(
      'Description',
      'Typescript, React.js, Next.js, e Styled Components'
    )}
  />
)
