import Header from "./Header/Header.jsx";
import Stack from "./Stack/Stack.jsx";
import LangStack from "./LangStack/LangStack.jsx";
import Courses from "./Courses/Courses.jsx";
import OtherTools from "./OtherTools/OtherTools.jsx";
import ReactAuth from "./ReactAuth/ReactAuth.jsx";
import BackMesto from "./BackMesto/BackMesto.jsx";
import Diploma from "./Diploma/Diploma.jsx";
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
          <OtherTools />
          <LangStack />
          <Courses />
          <ReactAuth />
          <BackMesto />
          <Diploma />
          <Footer />
        </>
      </LanguageProvider>
    </>
  );
}
