import React from "react";

const Header = ({course}) => {
  return <h1>{course.name}</h1>;
};

const Content = ({ course }) => {
  return (
      <ul style={{listStyle:"none", padding:0}}>
          {course.parts.map(coursePart =>
              <Part key={coursePart.id} coursePart={coursePart} />
          )}
      </ul>
  );
};

const Total = ({course}) => {
  const exerciseTotal = course.parts.reduce((sum, part) => sum + part.exercises,0); 
  return (
    <p style={{ fontWeight: "bold" }}>total of {exerciseTotal} exercises</p>
  );
};

const Part = ({ coursePart }) => {
  return (
      <li>
          {coursePart.name} {coursePart.exercises}
      </li>
  );
};

const Course = ({ course }) => {
  return (
      <div>
          <Header course={course} />
          <Content course={course} />
          <Total course={course} />
      </div>
  );
};

export default Course;
