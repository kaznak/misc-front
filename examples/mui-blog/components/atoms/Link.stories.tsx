import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Link, LinkProps } from './Link'

export default {
  title: 'Atoms/Link',
  component: Link,
} as Meta

const Template: Story<LinkProps> = (args) => <Link {...args} />

export const Primary = Template.bind({})
Primary.args = {
  href: 'https://www.google.com',
  children: 'Google',
}
