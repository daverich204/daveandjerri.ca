/**
 *
 * NavDrawer
 *
 */
import Link from "next/link";
import { memo, SyntheticEvent } from "react";

import {
  mdiAt,
  mdiCodeBracesBox,
  mdiChevronRight,
  mdiCommentTextOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer, {
  SwipeableDrawerProps,
} from "@mui/material/SwipeableDrawer";

import { useTranslation } from "../../hooks/useTranslation";
import { Section } from "../../types.d";
import { scrollToSection } from "../../utils/scrollToSection";

import { DJ } from "./DJ";

interface Props extends SwipeableDrawerProps {
  selected?: Section;
}

export const NavDrawer = memo(({ selected, onClose, ...rest }: Props) => {
  const { t } = useTranslation();

  const onClick = (path: Section) => (e: SyntheticEvent) => {
    scrollToSection(path);
    onClose(e);
  };

  return (
    <SwipeableDrawer anchor="right" onClose={onClose} {...rest}>
      <List>
        <ListItemButton onClick={onClose}>
          <ListItemIcon>
            <Icon path={mdiChevronRight} size={1.125} />
          </ListItemIcon>
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <Link href={`/${Section.about}`} passHref shallow>
          <ListItemButton
            selected={selected === Section.about}
            onClick={onClick(Section.about)}
          >
            <ListItemIcon>
              <DJ />
            </ListItemIcon>
            <ListItemText primary={t("About")} />
          </ListItemButton>
        </Link>
      </List>
    </SwipeableDrawer>
  );
});

NavDrawer.displayName = NavDrawer.name;
