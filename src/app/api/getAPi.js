export const responseBageur = await fetch(process.env.SECRET_BAGEUR_API, {
  cache: "no-store",
});

export const responseSetaman = await fetch(process.env.SECRET_SETAMAN_SEMAI, {
  cache: "no-store",
});

export const responseSetamanTanam = await fetch(
  process.env.SECRET_SETAMAN_TANAM,
  {
    cache: "no-store",
  }
);
