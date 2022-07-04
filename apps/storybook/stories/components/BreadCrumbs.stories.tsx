import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  BreadCrumbs,
  CommunityLink,
  CommunityPackagesLink,
} from "@chromatictest/components";
import React from "react";

const meta = { component: BreadCrumbs } as ComponentMeta<typeof BreadCrumbs>;

const Template: ComponentStory<typeof BreadCrumbs> = (args) => (
  <BreadCrumbs {...args} />
);

const community = "Animal Types";

const FirstLevel = Template.bind({});
FirstLevel.args = {
  parts: [{ label: community }],
};

const SecondLevel = Template.bind({});
SecondLevel.args = {
  parts: [
    {
      LinkComponent: CommunityLink,
      LinkProps: { community },
      label: community,
    },
    {
      label: "Small",
    },
  ],
};

const ThirdLevel = Template.bind({});
ThirdLevel.args = {
  parts: [
    {
      LinkComponent: CommunityLink,
      LinkProps: { community },
      label: community,
    },
    {
      LinkComponent: CommunityPackagesLink,
      LinkProps: { community },
      label: "Small",
    },
    {
      label: "Mouse",
    },
  ],
};

export { meta as default, FirstLevel, SecondLevel, ThirdLevel };
