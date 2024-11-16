import { Card } from "flowbite-react"
import pp from "../assets/pp.jpg"

const Profile = () => {
    return (
        <Card className="max-w-full m-5">
            <div className="flex justify-between px-4 pt-4 flex-wrap">
                <div className="flex flex-col items-center pb-10">
                    <img
                        alt="Profile Image"
                        height="96"
                        src={pp}
                        width="96"
                        className="mb-3 rounded-full shadow-lg"
                    />
                    <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Muhammad Gilang Eka Saputra</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400"> Web Designer </span>
                </div>
                <div className="coloumn py-4 sm:text-center md:text-left">
                    <h4 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Phone +62 817-7483-4674</h4>
                    <h5>Email gilangeka25@gmail.com</h5>
                    <h5>Github: github.com/gilangeka25</h5>
                    <h5>Linkedin: linkedin.com/in/gilang</h5>
                </div>
            </div>
        </Card>
    )
}

export default Profile