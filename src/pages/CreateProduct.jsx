import { useState } from "react";
import Button from "../components/ui/Button";
import { uploadImage } from "../api/uploader";
import { addNewProduct } from "../api/firebase";
import { useMutation, useQueryClient } from "react-query";

export default function CreateProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const queryClient = useQueryClient();

  const addProduct = useMutation(
    ({ product, url }) => addNewProduct(product, url),
    {
      onSuccess: () => queryClient.invalidateQueries(["products"]),
    }
  );

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
        // 2. Firebase에 해당 상품 추가
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              setSuccess("게시 성공!");
              setTimeout(() => {
                setSuccess(null);
                setFile(null);
                setProduct("");
              }, 3000);
            },
          }
        );
      })
      .finally(() => setIsUploading(false));
  };

  return (
    <>
      <header className="flex flex-col justify-center align-middle p-8">
        <div className="font-bold self-center m-2">새로운 제품 등록</div>
        {success && <div className="self-center">✅{success}</div>}
      </header>
      <section className="flex justify-center text-sm">
        {file ? (
          <img
            src={URL.createObjectURL(file)}
            alt="local file"
            className="w-6/12"
          />
        ) : (
          <div className="w-6/12 bg-zinc-200 flex justify-center items-center h-96">
            제품 이미지 첨부
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-around pl-10"
        >
          <div className="flex gap-1">
            <div className="w-20 text-black font-bold">제품 이미지</div>
            <input
              type="file"
              accept="image/*"
              name="file"
              required
              onChange={handleChange}
            />
          </div>
          {/* 아래 input에서는 Nullish Coalescing(병합) 연산자로 왼쪽이 null이나 undefined인 경우에만 우항을 반환하는 원리를 이용하여 value 값을 설정해봤다. */}
          <div className="flex gap-1">
            <div className="w-20 text-black font-bold">브랜드명</div>
            <input
              type="text"
              name="brandName"
              value={product.brandName ?? ""}
              placeholder="브랜드명 입력"
              className="w-80"
              required
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-1">
            <div className="w-20  text-black font-bold">제품명</div>
            <input
              className="w-80"
              type="text"
              name="productName"
              value={product.productName ?? ""}
              placeholder="제품명 입력"
              required
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-1">
            <div className="w-20 text-black font-bold">원두 종류</div>
            <input
              type="radio"
              name="blendType"
              value={product.blendType ?? "싱글오리진"}
              required
              onChange={handleChange}
              id="singleOrigin"
            />
            <label htmlFor="singleOrigin" className="mr-1">
              싱글오리진
            </label>
            <input
              type="radio"
              name="blendType"
              value={product.blendType ?? "블렌드"}
              required
              onChange={handleChange}
              id="blended"
            />
            <label htmlFor="blended">블렌드</label>
          </div>
          <div className="flex gap-1">
            <div className="w-20 text-black font-bold">가격</div>
            <input
              type="number"
              name="price"
              value={product.price ?? ""}
              placeholder="가격 입력"
              required
              onChange={handleChange}
            />
            원
          </div>
          <div className="flex gap-1">
            <div className="w-20 text-black font-bold">옵션</div>
            <input
              type="text"
              name="options"
              value={product.options ?? ""}
              placeholder="#으로 구분하여 입력 (예: 옵션1#옵션2#옵션3) "
              required
              onChange={handleChange}
              className="w-80"
            />
          </div>
          <div className="flex gap-1">
            <div className="w-20 text-black font-bold">제품 설명</div>
            <input
              type="text"
              name="description"
              value={product.description ?? ""}
              placeholder="제품 설명 입력"
              required
              onChange={handleChange}
              className="w-80"
            />
          </div>
          <div className="flex gap-1">
            <div className="w-20 text-black font-bold">추가 설명</div>
            <input
              type="text"
              name="descriptionOption"
              value={product.descriptionOption ?? ""}
              placeholder="추가 제품 설명 입력 "
              required
              onChange={handleChange}
              className="w-80"
            />
          </div>
          <div className="flex gap-1">
            <div className="w-20 text-black font-bold">구매 링크</div>
            <input
              type="text"
              name="buyURL"
              value={product.buyURL ?? ""}
              placeholder="구매 링크 URL"
              required
              onChange={handleChange}
              className="w-80"
            />
          </div>
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
