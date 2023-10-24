import * as React from "react";
// import styles from './CardExpertsCentralAxity.module.scss';
import {
  ICardExpertsCentralAxityProps,
  IExpert,
} from "./ICardExpertsCentralAxityProps";
import { sp } from "@pnp/sp/presets/all";
import "@pnp/sp/lists";
import CardExpert from "./CardExpert";
import styles from "./CardExpertsCentralAxity.module.scss";
import { NAMELIST } from "../constants/routes";

const CardExpertsCentralAxity: React.FC<ICardExpertsCentralAxityProps> = (
  props
) => {
  const { absoluteUrl } = props;
  const [error, setError] = React.useState<string>("");
  const [experts, setExperts] = React.useState<IExpert[]>([]);
  React.useEffect(() => {
    sp.setup({
      sp: {
        baseUrl: absoluteUrl,
      },
    });

    sp.web.lists
      .getByTitle(NAMELIST.expert)
      .items.get()
      .then((response) => {
        setExperts(response);
      })
      .catch((error) => {
        alert(
          "Es necesario crear una lista llamada listaExpertos en el contenido de este sitio"
        );
        setError(
          "Es necesario crear una lista llamada listaExpertos en el contenido de este sitio"
        );
      });
  }, []);

  return (
    <div>
      <div className={`${styles.container} row`}>
        {experts !== undefined ? (
          experts.map((expert) => (
            <CardExpert
              key={expert.Id}
              NumberStarts={expert.NumberStarts}
              SoftSkills={expert.SoftSkills}
              TechnicalSkills={expert.TechnicalSkills}
              description={expert.description}
              email={expert.email}
              name={expert.name}
              photo={expert.photo}
              position={expert.position}
              yearsExperience={expert.yearsExperience}
              Expeciality={expert.Expeciality}
            />
          ))
        ) : (
          <div>{error}</div>
        )}
      </div>
    </div>
  );
};

export default CardExpertsCentralAxity;
