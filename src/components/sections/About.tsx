/**
 *
 * About
 *
 */
import { memo, ComponentPropsWithoutRef } from "react";

import { Trans } from "next-i18next";

import { FocusedText } from "../FocusedText";
import { Section } from "../Section";

export const About = memo((props: ComponentPropsWithoutRef<typeof Section>) => (
  <Section {...props}>
    <Trans
      i18nKey="Hi, we are getting married"
      components={{
        name: <strong />,
        focused: <FocusedText active />,
      }}
    />
  </Section>
));

About.displayName = About.name;
