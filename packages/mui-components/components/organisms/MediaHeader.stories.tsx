import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { HeaderProps, Header } from './MediaHeader'

export default {
  title: 'Organisms/Header',
  component: Header,
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const Primary = Template.bind({})
Primary.args = {
  sections: [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
  ],
  title: 'Blog',
}
