import React from "react";
import { Button } from "../components";
export default {
  title: "Buton",
  component: Button,
  argTypes: {
    type: {
      options: ['outline', 'normal'],
      control: {type: 'radio'}
    },
    btnColor: {
      options: ["primary", "secondary", "danger", "warning", "info", "success"],
      control: { type: "select" },
    },
    textColor: {
      options: [
        "light",
        "primary",
        "secondary",
        "danger",
        "warning",
        "info",
        "success",
      ],
      control: { type: "select" },
    },
    radius: {
      options: [
        "top",
        "end",
        "bottom",
        "start",
        "circle",
        "pill",
        "0",
        "1",
        "1",
        "3",
      ],
      control: { type: "select" },
    },
  },
};
const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  label: "Deneme",
  btnColor: "primary",
  textColor: "light",
  radius: "pill",
  onPress: () => {
    alert("primary");
  },
};
//Dropdown ile renk ver bordersectir
