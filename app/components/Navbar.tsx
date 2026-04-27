import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <div>
            <div className="bg-gradient-to-r from-blue-700 to-blue-500 h-50">
               <div className="flex">
                 <div className="items-center flex h-full pl-15 drop-shadow-3 shadow-white p-10">
                    <img className="w-50" src="https://freepnglogo.com/images/all_img/1733727354_chevrolet-logo-png.png" alt="" />
                    <h1 className="text-6xl font-serif font-bold text-gray-300 ">AvtoBozor</h1>
                </div>
                <div className="gap-5 items-center flex h-full ml-auto pr-20 p-5">
                    <input className="bg-white text-2xl text-black rounded-lg border-gray-500 border-1 drop-shadow-lg" placeholder="Qidiruv..." type="text" />
                    <Button className="rounded-lg bg-white text-blue-700 font-bold">Log In</Button>
                </div>
               </div>
                <div className="flex justify-center gap-10 text-blue-500 font-bold pl-154">
                    <h1 className="bg-white w-25 rounded-4xl text-center border-blue-700 border-2">Chevrolet</h1>
                    <h1 className="bg-white w-22 rounded-4xl text-center border-blue-700 border-2">BYD</h1>
                    <h1 className="bg-white w-22 rounded-4xl text-center border-blue-700 border-2">KIA</h1>
                    <h1 className="bg-white w-22 rounded-4xl text-center border-blue-700 border-2">Daewoo</h1>
                    <h1 className="bg-white w-40 rounded-4xl text-center border-blue-700 border-2">Yuqori Reyting</h1>
               </div>
            </div>
        </div>
    )
}