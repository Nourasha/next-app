"use client";
import Register from "@/app/components/Register";
import { useRouter } from "next/navigation";
import React from "react";

const NewUserPage = () => {
  const router = useRouter();
  return (
    <>
      <Register />
      <button className="btn btn-primary" onClick={() => router.push("/users")}>
        Create
      </button>
    </>
  );
};

export default NewUserPage;
