"use client";

import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

type cloudinaryResult = {
  public_id: string;
};

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="whatever" />
      )}
      <CldUploadWidget
        uploadPreset="wyoglhgw"
        options={{
          sources: ["local"],
          multiple: false,
          maxFiles: 5,
          styles: {
            palette: {
              window: "#464040",
              sourceBg: "#292222",
              windowBorder: "#c7a49f",
              tabIcon: "#cc6600",
              inactiveTabIcon: "#E8D5BB",
              menuIcons: "#ebe5db",
              link: "#ffb107",
              action: "#ffcc00",
              inProgress: "#99cccc",
              complete: "#78b3b4",
              error: "#ff6666",
              textDark: "#4C2F1A",
              textLight: "#D8CFCF",
            },
            fonts: {
              default: null,
              "'Merriweather', serif": {
                url: "https://fonts.googleapis.com/css?family=Merriweather",
                active: true,
              },
            },
          },
        }}
        onSuccess={(result) => {
          const info = result.info as cloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
