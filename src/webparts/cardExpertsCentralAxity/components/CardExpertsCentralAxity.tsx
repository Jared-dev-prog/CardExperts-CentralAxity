import * as React from "react";
// import styles from './CardExpertsCentralAxity.module.scss';
import { ICardExpertsCentralAxityProps } from "./ICardExpertsCentralAxityProps";
import { sp } from "@pnp/sp/presets/all";
import "@pnp/sp/lists";

// import { ImageHelper } from "@microsoft/sp-image-helper";

// const image = ImageHelper.convertToImageUrl(<I);


const CardExpertsCentralAxity: React.FC<ICardExpertsCentralAxityProps> = (props) => {
  const [urlPhoto, setUrlPhoto] = React.useState('')
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
      .then((response: any) => {
        const photoObject = JSON.parse(response[0].photo);
        console.log(response);
        console.log(photoObject);
        const url = `${photoObject.serverUrl}${photoObject.serverRelativeUrl}`;
        setUrlPhoto(url)
        console.log(urlPhoto);
      })
      .catch((error) => {
        console.error("Error al obtener elementos de la lista:", error);
      });
  }, []);

  // const resizedImage = ImageHelper.convertToImageUrl({
  //   sourceUrl: "",
  //   width: 200,
  // });

  return (
    <div>
      <h3>Card Experts</h3>
      <img src={urlPhoto} alt="" width={200} />
    </div>
  );
};

export default CardExpertsCentralAxity;
