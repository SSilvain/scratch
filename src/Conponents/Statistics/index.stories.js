// Statistics.stories.js

import React from 'react';

import Statistics from '.';

//๐ This default export determines where your story goes in the story list
export default {
  title: 'Statistics',
  component: Statistics,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <Statistics {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*๐ The args you need here will depend on your component */
};