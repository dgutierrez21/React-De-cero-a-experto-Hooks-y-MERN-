console.log("Hola Nundo");

// const getImagenPromesa = () =>
//   new Promise((resolve) => resolve("https://lasjflkjaasdf.com"));

// getImagenPromesa().then(console.log);

const getImagen = async () => {
  try {
    const apiKey = "oTrT90IZIpCb94Dgc9OozLGeZPmz589u";

    const respuesta = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );

    const { data } = await respuesta.json();

    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  } catch (error) {
    // manejo error
    console.error(error);
  }
};

getImagen();
