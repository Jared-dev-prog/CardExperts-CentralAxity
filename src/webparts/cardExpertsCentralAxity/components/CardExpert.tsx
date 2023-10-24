import * as React from "react";
import { IExpertProps } from "./ICardExpertsCentralAxityProps";
import { ROUTES } from "../constants/routes";
import styles from "./CardExpertsCentralAxity.module.scss";

import { mergeStyles } from "office-ui-fabric-react";
import { FontIcon } from "@fluentui/react/lib/Icon";

const CardExpert: React.FC<IExpertProps> = (props) => {
  const {
    photo,
    name,
    description,
    yearsExperience,
    position,
    email,
    SoftSkills,
    TechnicalSkills,
    Expeciality,
  } = props;
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const icon = require("../assets/icon.svg");

  const [url, setUrl] = React.useState("");
  const [softSkillsList, setSoftSkillsList] = React.useState([""]);
  const [technicalSkillsList, setTechnicalSkillsList] = React.useState([""]);

  const iconEmail = mergeStyles({
    fontSize: 16,
    height: 16,
    width: 16,
    margin: "0 10px",
    color: "#3c1053",
    fontWeight: "bold",
  });

  React.useEffect(() => {
    const objectPhoto = JSON.parse(photo);
    const urlPhoto = `${ROUTES.generic}${objectPhoto.serverRelativeUrl}`;
    setUrl(urlPhoto);
    const listSoft: string[] = SoftSkills.split(",");
    setSoftSkillsList(listSoft);
    const listTechnical: string[] = TechnicalSkills.split(",");
    setTechnicalSkillsList(listTechnical);
  }, []);

  return (
    <div className={`col-lg-3 col-md-6 col-sm-12`}>
      <div className={`${styles.card} w-100`}>
        <div className={styles.card_info_user}>
          <div className={styles.card__imageBackground}>
            <img src={url} alt="" width={150} height={150} />
          </div>

          <div className={styles.card__name}>{name}</div>
          <div className={styles.card__email}>
            <FontIcon
              aria-label="Compass"
              iconName="D365TalentLearn"
              className={iconEmail}
            />
            <div>{position}</div>
          </div>

          <div className={styles.card__email}>
            <FontIcon
              aria-label="Compass"
              iconName="MessageFriendRequest"
              className={iconEmail}
            />
            <a className={styles.link} href={`mailto:${email}`}>
              {email}
            </a>
          </div>
          <div className={styles.card__starts} />
        </div>

        <div className={styles.card__info}>
          <div className={styles.card__description}>{description}</div>
          <div className={styles.card__abilities}>
            <div className={styles.title}>Experiencia</div>
            <div>{yearsExperience} años</div>
          </div>
          <div className={styles.card__abilities}>
            <div className={styles.title}>Especialidad destacable</div>
            <div>{Expeciality}</div>
          </div>
          <div className={styles.card__abilities}>
            <div className={styles.title}>Habilidades técnicas</div>
            <ul>
              {technicalSkillsList !== undefined
                ? technicalSkillsList.map((technical, index) => (
                    <li key={index}>
                      <img src={icon} alt="" />
                      <p>{technical}</p>
                    </li>
                  ))
                : ""}
            </ul>
          </div>

          <div className={styles.card__abilities}>
            <div className={styles.title}>Habilidades blandas</div>
            <ul>
              {softSkillsList !== undefined
                ? softSkillsList.map((soft, index) => (
                    <li key={index}>
                      <img src={icon} alt="" />
                      <p>{soft}</p>
                    </li>
                  ))
                : ""}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardExpert;
