const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  )

  return <p><strong>Number of exercises {total}</strong></p>
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      parts: [
        { id: 1, name: 'Fundamentals of React', exercises: 10 },
        { id: 2, name: 'Using props to pass data', exercises: 7 },
        { id: 3, name: 'State of a component', exercises: 14 }
      ]
    },
    {
      name: 'Node.js',
      parts: [
        { id: 1, name: 'Routing', exercises: 3 },
        { id: 2, name: 'Middlewares', exercises: 7 }
      ]
    }
  ]

  return (
    <div>
      {courses.map((course) => (
        <Course key={course.name} course={course} />
      ))}
    </div>
  )
}

export default App