const Total = ({ parts }) => (
  <b>
    <p>
      total of {parts.map(x => x.exercises).reduce((e, acc) => e + acc, 0)}{' '}
      exercises
    </p>
  </b>
);

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map(x => (
      <Part part={x} key={x.id} />
    ))}
    <Total parts={parts} />
  </>
);

const Header = ({ course }) => <h2>{course}</h2>;

const Course = ({ courses }) => (
  <>
    {courses.map(x => (
      <div key={x.id}>
        <Header course={x.name} />
        <Content parts={x.parts} />
      </div>
    ))}
  </>
);

export default Course;
