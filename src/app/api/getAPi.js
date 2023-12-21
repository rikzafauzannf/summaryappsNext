export const responseBageur = await fetch(process.env.NEXT_PUBLIC_BAGEUR_API, {
  cache: "force-cache",
});

export const responseSetaman = await fetch(
  process.env.NEXT_PUBLIC_SETAMAN_SEMAI,
  {
    cache: "force-cache",
  }
);

export const responseSetamanTanam = await fetch(
  process.env.NEXT_PUBLIC_SETAMAN_TANAM,
  {
    cache: "force-cache",
  }
);
