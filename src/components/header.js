export const Header=() =>{
    return(

<>
        <div className="hidden md:flex flex-row  gap-16 text-2xl border-red-400  bg-red-200  text-zinc-900 pb-2 ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3zfmLD-d1d_vl8MBtVtuoh6omyWG07geuRA&s" width="110px" height="50px"></img>
          <a className="mt-8">Home</a>
          <a className="mt-8">Menu</a>
          <a className="mt-8">About</a>
          <a className="mt-8">Contact</a>
           <div className="mt-8">
          <input type="text" placeholder="  Search" className="border-solid mx-2 bg-slate-200 rounded-xl"></input>
          <button className=" mx-6">Cart</button>
          </div>
        </div>



</>

    )
}