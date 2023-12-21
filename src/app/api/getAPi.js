export const responseBageur = await fetch(process.env.SECRET_BAGEUR_API, {
  cache: "force-cache",
});

export const responseSetaman = await fetch(process.env.SECRET_SETAMAN_SEMAI, {
  cache: "force-cache",
});

export const responseSetamanTanam = await fetch(
  process.env.SECRET_SETAMAN_TANAM,
  {
    cache: "force-cache",
  }
);
