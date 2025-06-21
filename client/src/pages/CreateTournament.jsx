import { useRef, useState } from "react";
import { BACKEND_URL } from "../App";
import { useUser } from "@civic/auth/react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'

export const CreateTournament = () => {
    const { user } = useUser();
    const navigate = useNavigate();

    const [createForm, setCreateForm] = useState({
        title: "",
        description: "",
        hostName: "",
        pictureUrl: "",
        startdate: "",
        deadline: "",
        prizeMoney: ""
    });

    const handleCreateSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...createForm,
            pictureUrl: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg",
            hostName: user.email
        };

        console.log(createForm);
        try {
            const response = await fetch(`${BACKEND_URL}/create-tournament`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                credentials: "include",
                body: JSON.stringify(payload)
            });

            console.log(response);

            navigate("/");
            toast.success("Tournament created successfully");
        }

        catch (err) {
            console.log(err);
        }
    };

    return (
        <main className="h-screen w-full flex justify-center items-center">
            <div className="flex justify-center items-center flex-col">
                <h1 className="font-game2 text-6xl text-center">Create Tournament</h1>
                <div className=" border-2 w-[40vw] p-4">
                    <form className="flex flex-col gap-4" onSubmit={handleCreateSubmit}>
                        <div className="flex flex-col items-start">
                            <label htmlFor="title">Enter Title</label>
                            <input type="text" placeholder="Title" className="input input-primary" onChange={(e) => setCreateForm({ ...createForm, title: e.target.value })} />
                        </div>
                        <div className="flex flex-col items-start w-90">
                            <label htmlFor="description">Enter Tornament Description</label>
                            <textarea placeholder="Describe" name="description" className="textarea textarea-primary" onChange={(e) => setCreateForm({ ...createForm, description: e.target.value })}></textarea>
                        </div>
                        <div className="flex gap-8">
                            {/* <div className="flex flex-col items-start w-54">
                                <label htmlFor="hostname">Enter Host Name</label>
                                <input type="text" placeholder="Host Name" name="hostname" className="input input-primary" onChange={(e) => setCreateForm({ ...createForm, hostName: e.target.value })} />
                            </div> */}
                            <div className="flex flex-col items-start">
                                <label htmlFor="title">Picture</label>
                                <input type="file" accept="image/*" placeholder="Title" className="input input-primary" />
                            </div>
                        </div>
                        <div className="flex gap-8">
                            <div className="flex flex-col items-start">
                                <label htmlFor="startdate">Select Starting Date</label>
                                <input type="date" placeholder="Starting Date" name="startdate" className="input input-primary" onChange={(e) => setCreateForm({ ...createForm, startdate: e.target.value })} />
                            </div>
                            <div className="flex flex-col items-start">
                                <label htmlFor="deadline">Select Deadline Date</label>
                                <input type="date" placeholder="Deadline Date" name="deadline" className="input input-primary" min={createForm.startdate} onChange={(e) => setCreateForm({ ...createForm, deadline: e.target.value })} />
                            </div>
                            <div className="flex flex-col items-start">
                                <label htmlFor="prizemoney">Select Prize Money (in wei)</label>
                                <input type="number" step="any" placeholder="Prize Money" className="input input-primary" onChange={(e) => setCreateForm({ ...createForm, prizeMoney: e.target.value })} />
                            </div>
                        </div>

                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </main>

    );
};