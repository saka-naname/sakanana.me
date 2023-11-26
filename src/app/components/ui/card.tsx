import Image from "next/image";
import { card, type CardVariants } from "../recipes/card";
import { LinkBox } from "@/../styled-system/jsx";
import { cx } from "@/../styled-system/css";
import NextLinkOverlay from "./nextLinkOverlay";

type CardProps = CardVariants & {
  src?: string;
  alt?: string;
  title?: string;
  description?: string;
  href?: string;
};

export default function Card(props: CardProps) {
  const classes = card(props);
  const rootClassName = cx(classes.root, "group");
  return (
    <LinkBox className={rootClassName}>
      <div className={classes.imageWrapper}>
        {!!props.src && !!props.alt ? (
          <Image
            src={props.src}
            alt={props.alt}
            fill={true}
            className={classes.image}
          />
        ) : (
          <></>
        )}
      </div>
      <div className={classes.subContainer}>
        {props.href ? (
          <h1 className={classes.title}>
            <NextLinkOverlay
              className={classes.linkOverlay}
              href={props.href}
              title={props.title}
            >
              {props.title}
            </NextLinkOverlay>
          </h1>
        ) : (
          <h1 className={classes.title}>{props.title}</h1>
        )}
        <p className={classes.description}>{props.description}</p>
      </div>
    </LinkBox>
  );
}
