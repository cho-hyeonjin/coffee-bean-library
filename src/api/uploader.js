export async function uploadImage(file) {
  console.log(file, "파일");
  const url = import.meta.env.VITE_COFFEE_BEAN_LIBRARY_CLOUDINARY_URL;
  const preset = import.meta.env.VITE_COFFEE_BEAN_LIBRARY_CLOUDINARY_PRESET;
  const data = new FormData();
  console.log(url, "!!@@@#!@");
  data.append("file", file);
  data.append("upload_preset", preset);

  fetch(url, {
    method: "POST",
    body: data,
  })
    .then((response) => response.json())
    .then((data) => data.url);
}
