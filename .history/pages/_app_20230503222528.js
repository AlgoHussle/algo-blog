import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import "../stylesstyles/globals.scss";
import "tailwindcss/tailwind.css";


export default function App({ Component, pageProps }) {
  return (
    <layout>
    <Component {...pageProps} />
  </layout>
  ); 
}
