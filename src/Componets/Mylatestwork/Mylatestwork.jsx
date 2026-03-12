import './mylatestwork.css'

const MyLatestWork = () => {


  let latestWorkData = [
    {
      id: 1,
      name: "E-commerce Website",
      picture: "./OIP.png",
    },
    {
      id: 2,
      name: "Portfolio Website",
      picture: "./OIP (2).png",
    },
    {
      id: 3,
      name: "Blog Platform",
      picture: "./OIP (3).png",
    },
    {
      id: 4,
      name: "Mobile App",
      picture: "./OIP (1).png",
    },
    {
      id: 5,
      name: "Dashboard Design",
      picture: "./OIP (4).png",
    },
    {
      id: 6,
      name: "Portfolio Website",
      picture: "./gradient-cretive-portfolio-template.png",
    },
  ]

  return (
    <div className='latestwork'>

      <h1>My Latest Work</h1>


      <div className='cards-container'>

        {
          latestWorkData.map((item) => (
            <div className='latestwork-ui'>
              <h2 className=''>0{item.id}</h2>
              <h1 className='gradient-text'>{item.name}</h1>
              <img src={item.picture} alt={item.name} />
            </div>
          ))
        }


      </div>
    </div>
  )
}

export default MyLatestWork