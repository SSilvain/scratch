// Transaction.stories.js

import React from 'react';

import Transaction from '.';

//๐ This default export determines where your story goes in the story list
export default {
  title: 'Transaction',
  component: Transaction,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <Transaction {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    label: "some action",
    value: 0
  /*๐ The args you need here will depend on your component */
};