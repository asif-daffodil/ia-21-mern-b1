import MyInfo from "./Components/MyInfo"
import UserInfo from "./Components/UserInfo"

function App() {

  const userData = [
    { id: 1, name: "Asif Abir", city: "Dhaka" },
    { id: 2, name: "Md Abdullah Towhid", city: "Dubai" },
    { id: 3, name: "Sayed Rifatuzzaman", city: "Brahmanbaria" },
  ];

  return (
    <>
      <MyComponent />
      <MyInfo />
      {userData.map((user) => (
        <UserInfo key={user.id} name={user.name} city={user.city} />
      ))}
    </>
  )
}

export default App

// CREATE A COMPONENT

function MyComponent() {
  return (
    <div>
      <h1>My Component</h1>
      <p>This is my component</p>
    </div>
  )
}