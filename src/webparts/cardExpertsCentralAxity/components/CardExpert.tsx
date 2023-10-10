import * as React from "react";
import { IExpertProps } from "./ICardExpertsCentralAxityProps";
import { ROUTES } from "../constants/routes";
import styles from "./CardExpertsCentralAxity.module.scss";

const CardExpert: React.FC<IExpertProps> = (props) => {
  const { photo, name } = props;

  const [url, setUrl] = React.useState("");

  React.useEffect(() => {
    const objectPhoto = JSON.parse(photo);
    const urlPhoto = `${ROUTES.generic}${objectPhoto.serverRelativeUrl}`;
    setUrl(urlPhoto);
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.card__imageBackground}>
        <img src={url} alt="" width={150} height={150} />
      </div>

      <h2 className={styles.card__name}>{name}</h2>

      <div className={styles.card__starts}></div>
    </div>
  );
};

export default CardExpert;
