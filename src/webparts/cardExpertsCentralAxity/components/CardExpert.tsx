import * as React from "react";
import { IExpertProps } from "./ICardExpertsCentralAxityProps";
import { ROUTES } from "../constants/routes";
import styles from "./CardExpertsCentralAxity.module.scss";

import { mergeStyles } from "office-ui-fabric-react";
import { FontIcon } from "@fluentui/react/lib/Icon";

const CardExpert: React.FC<IExpertProps> = (props) => {
  const { photo, name, description, yearsExperience, position, email } = props;
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const icon = require("../assets/icon.svg");

  const [url, setUrl] = React.useState("");

  const iconEmail = mergeStyles({
    fontSize: 24,
    height: 24,
    width: 24,
    margin: "0 10px",
    color: "#3c1053",
  });

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
      <div className={styles.card__email}>
        <FontIcon aria-label="Compass" iconName="MessageFriendRequest" className={iconEmail} />
        <a className={styles.link} href={`mailto:${email}`}>
          {email}
        </a>
      </div>

      <div className={styles.card__starts} />

      <div className={styles.card__info}>
        <div className={styles.card__description}>
          {description} Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </div>

        <div>{yearsExperience} años</div>

        <div>Especialidad destacable</div>

        {/* div -> Habilidades técnicas */}
        <div className={styles.card__abilities}>
          <h3>Habilidades técnicas</h3>
          <ul>
            <li>
              <img src={icon} alt="" />
              <p>Trabajo en equipo</p>
            </li>

            <li>
              <img src={icon} alt="" />
              <p>{position}</p>
            </li>
          </ul>
        </div>
        {/* div -> Habilidades técnicas */}

        {/* div -> Habilidades blandas */}
        <div className={styles.card__abilities}>
          <h3>Habilidades blandas</h3>
          <ul>
            <li>
              <img src={icon} alt="" />
              <p>Trabajo en equipo</p>
            </li>

            <li>
              <img src={icon} alt="" />
              <p>{position}</p>
            </li>
          </ul>
        </div>
        {/* div -> Habilidades blandas */}
      </div>
    </div>
  );
};

export default CardExpert;
