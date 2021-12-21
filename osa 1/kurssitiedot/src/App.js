import React from "react";

const course = {
  name: "Half Stack application development",
  parts: [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ],
};

const App = () => {
  const Header = (props) => {
    return (
      <div>
        <h1>{props.course.name}</h1>
      </div>
    );
  };

  const Content = (props) => {
    return(
      <div>
        {props.parts.map((part) => (
          <p key={part.name}>{part.name} {part.exercises}</p>
        ))}
      </div>
    )
  }

  const Total = (props) => {
    let sum = 0;
    props.parts.forEach(value => {
      sum = sum + value.exercises
    })
    return (
      <div>
        <p>
          Number of exercises{" "}
          {sum}
        </p>
      </div>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
