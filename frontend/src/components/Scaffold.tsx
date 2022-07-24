import React from "react";
import Header from "./Header/header";

interface ILayout {
  children: React.ReactNode;
}

export function Scaffold({ children }: ILayout) {
  return <div className="container mt-6 p-4 md:p-8 mx-auto"> {children}</div>;
}
