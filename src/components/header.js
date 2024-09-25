export const Header=() =>{
    return(
        <div className="flex flex-row space-x-6 text-2xl bg-teal-600 ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3zfmLD-d1d_vl8MBtVtuoh6omyWG07geuRA&s" width="100" height="50"></img>
          <a className="mt-6">Home</a>
          <a className="mt-6">About</a>
          <a className="mt-6">Contact</a>
          <a className="mt-6">Services</a>
        
          <button  className="bg-teal-300 px-4 rounded-full">Login</button>

        </div>
    )
}