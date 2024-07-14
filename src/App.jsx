import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1 className='text-center text-white text-3xl bg-slate-800 p-5'>✨ Context API with Chai aur Code ✨</h1>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6">
        <Login />
        <Profile />
      </div>
        
    </UserContextProvider>
  )
}

export default App
