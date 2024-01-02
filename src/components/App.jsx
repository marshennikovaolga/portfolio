import Header from "./Header/Header.jsx";
import Stack from "./Stack.jsx";
import LangStack from "./LangStack.jsx";
import Courses from "./Courses.jsx";
import OtherTools from "./OtherTools.jsx";
import ReactAuth from "./ReactAuth.jsx";
import Diploma from "./Diploma.jsx";
import ChatProject from './ChatProject.jsx';
import TodoList from "./TodoList.jsx";
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
          <TodoList />
          <ChatProject />
          <ReactAuth />
          <Diploma />
          <Footer />
        </>
      </LanguageProvider>
    </>
  );
}
