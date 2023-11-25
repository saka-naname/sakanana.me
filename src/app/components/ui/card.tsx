import Image from "next/image";
import { card, type CardVariants } from "../recipes/card";
import { LinkBox, LinkOverlay } from "@/../styled-system/jsx";

type CardProps = CardVariants & {
  src?: string;
  alt?: string;
  title?: string;
  description?: string;
  href?: string;
};

export default function Card(props: CardProps) {
  const classes = card(props);
  return (
    <LinkBox className={classes.root}>
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
          <LinkOverlay href={props.href} title={props.title}>
            <h1 className={classes.title}>{props.title}</h1>
          </LinkOverlay>
        ) : (
          <h1 className={classes.title}>{props.title}</h1>
        )}
        <p className={classes.description}>{props.description}</p>
      </div>
    </LinkBox>
  );
}
