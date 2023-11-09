import Header from "./Header/Header.jsx";
import Stack from "./Stack/Stack.jsx";
import LangStack from "./LangStack/LangStack.jsx";
import ReactAuth from "./ReactAuth/ReactAuth.jsx";
import Footer from "./Footer/Footer.jsx";
import React from 'react';
import { LanguageProvider } from "../contexts/LanguageContext.js";

export default function App() {
  return (
    <>
     <LanguageProvider>
    <>
      <Header />
      <Stack />
      <LangStack />
      <ReactAuth />
      <Footer />
    </>
    </LanguageProvider>
    </>
  );
}
