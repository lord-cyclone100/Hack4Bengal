export const Card = () =>{
    return(
      <div className="w-70 bg-gradient-to-br from-white/5 via-white/10 to-white/20 backdrop-blur-md border border-white/30 rounded-lg shadow-lg">
        <figure className="px-2 pt-2">
          <img src="https://wallpapers.com/images/hd/fortnite-background-34h5tua0czqu7u9t.jpg"className="rounded-xl" />
        </figure>
        <div className="card-body flex gap-4 font-game">
          <div className="flex justify-between items-center">
            <p>26 December 2025</p>
            <p className="font-game2 tracking-wide">Fortnight</p>
          </div>
          <h1 className="card-title font-extrabold">Winter 2025 Tourney</h1>
          <p>One more contest is coming up upon us. Make sure to participate.</p>
          <div class="relative inline-block w-full font-game2 tracking-wide">
            <button class="w-full h-10 bg-blue-600 text-white rounded-lg pr-4 text-right">Participate Now</button>
            <div class="absolute top-0 left-0 w-1/2 h-10 bg-amber-300 text-black font-semibold rounded-lg rounded-br-[20vw] rounded-tr-none pointer-events-none flex items-center justify-items-start pl-4">
              Prize :- 500$
            </div>
          </div>
          <div className="flex justify-end">
            <h3>Host Name</h3>
          </div>
        </div>
      </div>
    )
}