export async function uploadImage(file) {
  const url = import.meta.env.VITE_COFFEE_BEAN_LIBRARY_CLOUDINARY_URL;
  const preset = import.meta.env.VITE_COFFEE_BEAN_LIBRARY_CLOUDINARY_PRESET;
  const data = new FormData();

  data.append("file", file);
  data.append("upload_preset", preset);

  return fetch(url, {
    method: "POST",
    body: data,
  })
    .then((response) => response.json())
    .then((data) => {
      return data.url;
    });
}
