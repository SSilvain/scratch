// Form.stories.js

import React from "react";

import Counter from ".";

//👇 This default export determines where your story goes in the story list
export default {
    title: "Example/Counter",
    component: Counter,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Counter {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {};
