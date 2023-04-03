const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3}
      exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}
      />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

const Header = (data) => {
  console.log(data.course);
  return (
    <h1>{data.course}</h1>
  )
}

const Content = (data1) => {
  console.log(data1);
  return (
  <div>
    <p>
      {data1.part1} {data1.exercises1}
    </p>
    <p>
      {data1.part2} {data1.exercises2}
    </p>
    <p>
      {data1.part3} {data1.exercises3}
    </p>
  </div>
  )
}

const Total = (data2) => {
  console.log(data2);
  return (
    <p>
      Number of exercises {data2.exercises1+data2.exercises2+data2.exercises3}
    </p>
  )
}

export default App
