import React from 'react'
import { Card } from '../components'
export default {
  name: 'Card',
  component: Card,
  argTypes: {
    popularity:{
      comtrol: { type: 'boolean' }
    },
    image: {
      control:{type: 'text'}
    },
    title: {
      control:{type: 'text'}
    },
    text: {
      control:{type: 'text'}
    },
    link: {
      control:{type: 'text'}
    },
    linkText: {
      control:{type: 'text'}
    },
    titleColor: {
      options: ["primary", "secondary", "danger", "warning", "info", "success"],
      control: { type: "select" },
    },
    textColor: {
      options: ["primary", "secondary", "danger", "warning", "info", "success"],
      control: { type: "select" },
    },
    linkColor: {
      options: ["primary", "secondary", "danger", "warning", "info", "success"],
      control: { type: "select" },
    },
    linkIsButton: {
      options: [true, false],
      control: {type: 'radio'}
    },
    radius: {
      options: [
        "top",
        "end",
        "bottom",
        "start",
        "0",
        "1",
        "1",
        "3",
      ],
      control: { type: "select" },
    },
  }
};
const Template = (args) => <Card {...args} />
export const primary = Template.bind({});
primary.args= {
  text: 'lorem ipsum dolor sit amet bla bla kar ile dunyayi gezin kanka',
  image: 'https://picsum.photos/200/300',
  title: 'Baslik',
  link: 'furkanguler.com', 
  linkText: 'Linke Tikla', 
  titleColor: 'primary', 
  textColor: 'success', 
  linkColor: 'info', 
  radius: '0',
  popularity: false,
  linkIsButton: false,
}