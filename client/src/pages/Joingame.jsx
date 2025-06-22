import { Leaderform } from "../components/Leaderform"
import { Memberform } from "../components/Memberform"
export const Joingame = () => {
    return (
        <>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift items-center justify-center mx-[5%] mt-10">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Join as Leader" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <div>
                        <Leaderform/>
                    </div>
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Join as Member" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <div>
                        <Memberform/>
                    </div>
                </div>

            </div>
        </>
    )
}    