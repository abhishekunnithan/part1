const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
      },
    {
      name: 'Using props to pass data',
      exercises: 7
      },
    {
    name: 'State of a component',
    exercises: 14
      }
    ];

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

const Header = (data) => {
  console.log(data.course);
  return (
    <h1>{data.course}</h1>
  )
}

const Part = (data) => {
  return (
    <p>{data.part} {data.exercise}</p>
  )
}
const Content = (data1) => {
  console.log(data1);
  return (
  <div>
    <Part part={data1.parts[0].name} exercise={data1.parts[0].exercises}/>
    <Part part={data1.parts[1].name} exercise={data1.parts[1].exercises}/>
    <Part part={data1.parts[2].name} exercise={data1.parts[2].exercises}/>
  </div>
  )
}

const Total = (data1) => {
  console.log(data1);
  return (
    <p>
      Number of exercises {data1.parts[0].exercises+data1.parts[1].exercises+data1.parts[2].exercises}
    </p>
  )
}

export default App
