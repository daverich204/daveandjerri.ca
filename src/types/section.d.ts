import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";

export enum Section {
  about = "about",
  rsvp = "rsvp",
  work = "work",
  blog = "blog",
  contact = "contact",
}

export interface SectionProps
  extends PropsWithChildren<Omit<ComponentPropsWithoutRef<"div">, "title">> {
  title?: ReactNode;
  onEnterViewport: VoidFunction;
  onLeaveViewport?: VoidFunction;
  rootMargin?: string;
}
