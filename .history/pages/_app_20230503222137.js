import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import "styles/globals.scss";
import "tailwindcss/tailwind.css";
import 

export default function App({ Component, pageProps }) {
  return (
    <layout>
    <Component {...pageProps} />
  </layout>
  ); 
}
