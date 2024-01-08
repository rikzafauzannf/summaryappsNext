import { Axios } from "axios";
export const responseBageur = await Axios.get(
  `${process.env.NEXT_PUBLIC_BAGEUR_API}`
);

export const responseSetaman = await Axios.get(
  `${process.env.NEXT_PUBLIC_SETAMAN_SEMAI}`
);

export const responseSetamanTanam = await Axios.get(
  `${process.env.NEXT_PUBLIC_SETAMAN_TANAM}`
);
