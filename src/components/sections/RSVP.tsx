/**
 *
 * RSVP
 *
 */
import { memo, ComponentPropsWithoutRef } from "react";

import { Trans } from "next-i18next";

import { FocusedText } from "../FocusedText";
import { Section } from "../Section";

export const RSVP = memo((props: ComponentPropsWithoutRef<typeof Section>) => (
  <Section {...props}>
    <Trans
      i18nKey="Please RSVP"
      components={{
        name: <strong />,
        focused: <FocusedText active />,
      }}
    />
  </Section>
));

RSVP.displayName = RSVP.name;
