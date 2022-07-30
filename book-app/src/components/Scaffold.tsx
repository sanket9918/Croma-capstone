import React from "react";
import Footer from "./Footer";
import Header from "./Header/Header";

interface ILayout {
  children: React.ReactNode;
}

export function Scaffold({ children }: ILayout) {
  return (
    <>
      <div className="container mt-6 p-4 md:p-8 mx-auto min-h-screen ">
        <Header />
        <div className="px-2">{children}</div>
      </div>
      <Footer />
    </>
  );
}
