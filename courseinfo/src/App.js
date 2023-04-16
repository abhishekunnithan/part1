const App = () => {
  const parts = { 
    course : 'Half Stack application development',
    info : [ {
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
    ]
  };

  return (
    <div>
      <Header parts={parts}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

const Header = (data) => {
  console.log('$$$Header',data.parts.course);
  return (
    <h1>{data.parts.course}</h1>
  )
}

const Part = (data) => {
  console.log('$$$Part',data);
  return (
    <p>{data.part} &nbsp; {data.exercise}</p>
  )
}
const Content = (data1) => {
  console.log('$$$$$Content',data1);
  return (
  <div>
    <Part part={data1.parts.info[0].name} exercise={data1.parts.info[0].exercises}/>
    <Part part={data1.parts.info[1].name} exercise={data1.parts.info[1].exercises}/>
    <Part part={data1.parts.info[2].name} exercise={data1.parts.info[2].exercises}/>
  </div>
  )
}

const Total = (data1) => {
  console.log(data1);
  return (
    <p>
      Number of exercises {data1.parts.info[0].exercises+data1.parts.info[1].exercises+data1.parts.info[2].exercises}
    </p>
  )
}

export default App
