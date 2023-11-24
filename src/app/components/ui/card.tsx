import Image from "next/image";
import { card, type CardVariants } from "../recipes/card";

type CardProps = CardVariants & {
  src?: string;
  alt?: string;
  title?: string;
  description?: string;
};

export default function Card(props: CardProps) {
  const classes = card(props);
  return (
    <div className={classes.root}>
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
        <h1 className={classes.title}>{props.title}</h1>
        <p className={classes.description}>{props.description}</p>
      </div>
    </div>
  );
}
