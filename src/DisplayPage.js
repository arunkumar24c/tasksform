import React from "react";
import { useSearchParams } from "react-router-dom";

const DisplayPage = ({ location }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const formData = {
    name: searchParams.get("name"),
    email: searchParams.get("email"),
    phoneNumber: searchParams.get("phone"),
    image: searchParams.get("image"),
  };

  return (
    <div className="container mx-auto ">
      <h1 className="my-4 text-2xl font-bold">View Page</h1>
      <hr />
      <p className="text-xl font-bold mb-4 mt-4">
        Name:
        <span className="text-lg font-semibold text-green">
          {formData.name}
        </span>{" "}
      </p>
      <p className="text-xl font-bold mb-4">
        Email:
        <span className="text-lg font-semibold text-green">
          {formData.email}
        </span>{" "}
      </p>
      <p className="text-xl font-bold mb-4">
        Phone Number:
        <span className="text-lg font-semibold text-green">
          {" "}
          {formData.phoneNumber}
        </span>
      </p>
      {formData.image && (
        <div>
          <p>Image:</p>
          <img src={formData.image} alt="Uploaded" className="max-w-full" />
        </div>
      )}
    </div>
  );
};

export default DisplayPage;
