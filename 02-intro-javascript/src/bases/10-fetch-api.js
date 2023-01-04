console.log("Hola Nundo");

const apiKey = "oTrT90IZIpCb94Dgc9OozLGeZPmz589u";

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

peticion
  .then((respuesta) => respuesta.json())
  .then(
    ({
      data: {
        images: {
          original: { url },
        },
      },
    }) => {
      const img = document.createElement("img");
      img.src = url;

      document.body.append(img);
    }
  );
