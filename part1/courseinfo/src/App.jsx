const Header = props => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = ({ part, exercises }) => {
  return (
    <div>
      <p>
        {part} {exercises}
      </p>
    </div>
  );
};

const Content = ({
  parts: [
    { name: n1, exercises: e1 },
    { name: n2, exercises: e2 },
    { name: n3, exercises: e3 },
  ],
}) => {
  return (
    <div>
      <Part part={n1} exercises={e1} />
      <Part part={n2} exercises={e2} />
      <Part part={n3} exercises={e3} />
    </div>
  );
};

const Total = ({
  parts: [{ exercises: e1 }, { exercises: e2 }, { exercises: e3 }],
}) => {
  return (
    <div>
      <p>Number of exercises {e1 + e2 + e3}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
