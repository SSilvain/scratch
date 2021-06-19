// Form.stories.js

import React from 'react';

import Form from '.';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Form',
  component: Form,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Form {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    onChange: () => {}
};