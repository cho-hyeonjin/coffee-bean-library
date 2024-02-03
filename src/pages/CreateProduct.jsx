import { useState } from "react";
import Button from "../components/ui/Button";
import { uploadImage } from "../api/uploader";
import { addNewProduct } from "../api/firebase";

export default function CreateProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]); //  setFile을 호출하고, 파일이 선택되지 않았을 때는 setFile을 호출하지 않도록 하기 위해 논리 연산자 AND 를 사용했다. (&& 연산자는 왼쪽 값이 true로 평가될 때만 우항을 실행하는 연산자)
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    // 1. 제품 사진 Cloudinary에 업로드 하고 URL 획득
    uploadImage(file) //
      .then((url) => {
        console.log(url, "url");
        // 2. Firebase에 해당 상품 추가
        addNewProduct(product, url) //
          .then(() => {
            setSuccess("게시 성공!");
            setTimeout(() => {
              setSuccess(null);
            }, 4000);
          });
      })
      .finally(() => setIsUploading(false));
  };

  return (
    <>
      <header className="flex flex-col justify-center align-middle p-8">
        <div className="font-bold self-center m-2">새로운 제품 등록</div>
        {success && <div className="self-center">✅{success}</div>}
      </header>
      <section className="flex justify-center">
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt="local file"
            className="w-6/12"
          />
        )}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-around pl-10"
        >
          <input
            type="file"
            accept="image/*"
            name="file"
            required
            onChange={handleChange}
          />
          {/* 아래 input에서는 Nullish Coalescing(병합) 연산자로 왼쪽이 null이나 undefined인 경우에만 우항을 반환하는 원리를 이용하여 value 값을 설정해봤다. */}
          <input
            type="text"
            name="title"
            value={product.title ?? ""}
            placeholder="상품명"
            required
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            value={product.price ?? ""}
            placeholder="가격"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            value={product.category ?? ""}
            placeholder="카테고리"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={product.description ?? ""}
            placeholder="상품 설명"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="options"
            value={product.options ?? ""}
            placeholder="옵션들(콤마,로 구분)"
            required
            onChange={handleChange}
          />
          <Button
            text={isUploading ? "게시중..." : "게시하기"}
            disabled={isUploading}
            tailwindcss={"bg-black text-white p-4"}
          />
        </form>
      </section>
    </>
  );
}
