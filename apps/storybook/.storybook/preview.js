import { LinkingProvider, theme } from "@chromatictest/components";
import { LinkLibrary } from "../LinkLibrary";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "@chromatictest",
    values: [
      { name: "@chromatictest", value: "#242e48" },
      { name: "light", value: "#f8f8f8" },
      { name: "dark", value: "#333" },
    ],
  },
  chakra: {
    theme,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <LinkingProvider value={LinkLibrary}>
      <Story />
    </LinkingProvider>
  ),
];
