import React from "react";
import {  Navigate, Route, Routes } from "react-router-dom";
import Assignment from "./Assignment";
import AssignmentDetails from "./AssignmentDetails";
import LectureList from "./LectureList";
import MainLayout from "./MainLayout";
import NotFound from "./NotFound";
import Quiz from "./Quiz";
import StudentsList from "./StudentsList";

function App() {
  return (
    <div className=" ">
      <Routes>
        <Route path="/" element={<Navigate to="/assignment"></Navigate>} />
        <Route path="/" element={<MainLayout></MainLayout>}>
          <Route path="assignment" element={<Assignment />} />
          <Route path="lecture" element={<LectureList />} />
          <Route path="studentsList" element={<StudentsList />} />

          <Route
            path="assignment/:assignmentnumber/details"
            element={<AssignmentDetails />}
          />
        </Route>
        <Route path="quiz" element={<Quiz />} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
