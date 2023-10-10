import * as React from "react";
// import styles from './CardExpertsCentralAxity.module.scss';
import { ICardExpertsCentralAxityProps, IExpert } from "./ICardExpertsCentralAxityProps";
import { sp } from "@pnp/sp/presets/all";
import "@pnp/sp/lists";
import CardExpert from "./CardExpert";
import styles from "./CardExpertsCentralAxity.module.scss";

const CardExpertsCentralAxity: React.FC<ICardExpertsCentralAxityProps> = (props) => {
  const [experts, setExperts] = React.useState<IExpert[]>([]);
  React.useEffect(() => {
    sp.setup({
      sp: {
        baseUrl:
          "https://intellego365.sharepoint.com/sites/CentralAxity/M%C3%A9xico/Consultoria2/Aplicaciones/Expertos",
      },
    });

    sp.web.lists
      .getByTitle("listaExpertos")
      .items.get()
      .then((response) => {
        setExperts(response);
      })
      .catch((error) => {
        console.error("Error al obtener elementos de la lista:", error);
      });
  }, []);

  return (
    <div>
      <div className={styles.container}>
        {experts !== undefined
          ? experts.map((expert) => (
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
              />
            ))
          : ""}
      </div>
    </div>
  );
};

export default CardExpertsCentralAxity;
