export const Register = () => {
    return(
        <>
            <h1 className="font-game2 text-6xl text-center">Create Tournament</h1>
            <div className=" border-2 w-[40vw]">
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col items-start">
                        <label htmlFor="title">Enter Title</label>
                        <input type="text" placeholder="Title" className="input input-primary" />
                    </div>
                    <div className="flex flex-col items-start w-90">
                        <label htmlFor="description">Enter Tornament Description</label>
                        <textarea placeholder="Describe" name="description" className="textarea textarea-primary"></textarea>
                    </div>
                    <div className="flex gap-8"> 
                        <div className="flex flex-col items-start w-54">
                            <label htmlFor="hostname">Enter Host Name</label>
                            <input type="text" placeholder="Host Name" name="hostname" className="input input-primary" />
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="title">Picture</label>
                            <input type="file" accept="image/*" placeholder="Title" className="input input-primary" />
                        </div>
                    </div>
                    <div className="flex gap-8">
                        <div className="flex flex-col items-start">
                            <label htmlFor="startdate">Select Starting Date</label>
                            <input type="date" placeholder="Starting Date" name="startdate" className="input input-primary" />
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="deadline">Select Deadline Date</label>
                            <input type="date" placeholder="Deadline Date" name="deadline" className="input input-primary" />
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="prizemoney">Select Prize Money</label>
                            <input type="text" placeholder="Prize Money" className="input input-primary" />
                        </div>
                    </div>
                </form>
            </div>
        </>
        
    )
}