export const getGifs = async (categoria) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=oTrT90IZIpCb94Dgc9OozLGeZPmz589u&q=${categoria}&limit=20`;

  const resp = await fetch(url);

  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    titulo: img.title,
    url: img.images.downsized_medium.url,
  }));

  console.log(gifs);

  return gifs;
};
