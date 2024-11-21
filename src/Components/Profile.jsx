import { useEffect } from 'react';
import { Card } from 'flowbite-react';
import pp from '../assets/pp.jpg';  // Gambar Profil
import AOS from 'aos';  // Mengimpor AOS
import 'aos/dist/aos.css';  // Mengimpor file CSS untuk animasi AOS

const Profile = () => {
    // Inisialisasi AOS saat komponen dimuat
    useEffect(() => {
        AOS.init({
            duration: 1000,  // Durasi animasi 1000ms (1 detik)
            easing: 'ease-in-out',  // Jenis easing animasi
            once: true,  // Animasi hanya terjadi sekali
        });

        return () => {
            AOS.refresh();  // Menyegarkan AOS jika ada perubahan
        };
    }, []);  // [] berarti hanya dijalankan sekali saat komponen dimuat

    return (
        <Card className="max-w-full m-5 p-6 shadow-lg rounded-xl bg-white dark:bg-gray-800">
            <div className="flex justify-between items-center flex-wrap">
                {/* Profile Section */}
                <div className="flex flex-col items-center pb-10">
                    {/* Gambar Profil */}
                    <img
                        alt="Profile Image"
                        src={pp}
                        height="96"
                        width="96"
                        className="mb-3 rounded-full shadow-lg border-4 border-blue-600 transform transition duration-500 hover:scale-105"
                        data-aos="zoom-in"  // Animasi Zoom-In
                    />
                    {/* Nama Profil */}
                    <h3 className="mb-1 text-2xl font-semibold text-gray-900 dark:text-white" data-aos="fade-up">
                        Muhammad Gilang Eka Saputra
                    </h3>
                    {/* Pekerjaan */}
                    <span className="text-sm text-gray-500 dark:text-gray-400" data-aos="fade-up">
                        Web Designer
                    </span>
                </div>

                {/* Contact Section */}
                <div className="flex flex-col justify-center text-left space-y-2 py-4" data-aos="fade-up">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        <i className="fa-solid fa-phone-alt mr-2 text-blue-500"></i>
                        +62 817-7483-4674
                    </h4>
                    <h5 className="text-md text-gray-700 dark:text-gray-300">
                        <i className="fa-solid fa-envelope mr-2 text-blue-500"></i>
                        gilangeka25@gmail.com
                    </h5>
                    <h5 className="text-md text-gray-700 dark:text-gray-300">
                        <i className="fa-brands fa-square-github mr-2 text-blue-500"></i>
                        <a href="https://github.com/gilangeka25" target="_blank" className="text-blue-600">
                            github.com/gilangeka25
                        </a>
                    </h5>
                    <h5 className="text-md text-gray-700 dark:text-gray-300">
                        <i className="fa-brands fa-square-instagram mr-2 text-pink-500"></i>
                        <a href="https://www.instagram.com/sastrazinggalangg_?igsh=Y2tkNnVueWV0ajh2" target="_blank" className="text-pink-600">
                            Instagram: @sastrazinggalangg_
                        </a>
                    </h5>
                </div>
            </div>

            {/* Skills Section */}
            <div className="mt-6" data-aos="fade-up">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Skills</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>HTML, CSS, JavaScript</li>
                    <li>React, Next.js</li>
                    <li>Web Design & UX/UI</li>
                    <li>Figma, Adobe XD, Photoshop</li>
                    <li>Responsive Web Design</li>
                    <li>Git & GitHub</li>
                </ul>
            </div>

            {/* Education Section */}
            <div className="mt-6" data-aos="fade-up">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Education</h4>
                <p className="text-gray-700 dark:text-gray-300">
                    <strong>Bachelor of Computer Science</strong> | Universitas XYZ (2018 - 2022)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                    Focus on Web Development, UI/UX Design, and Frontend Technologies.
                </p>
            </div>

            {/* Experience Section */}
            <div className="mt-6" data-aos="fade-up">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Work Experience</h4>
                <p className="text-gray-700 dark:text-gray-300">
                    <strong>Web Designer</strong> | ABC Tech Solutions (2022 - Present)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                    Lead web design projects from concept to launch, collaborating closely with developers to create user-friendly interfaces and responsive websites.
                </p>
            </div>
        </Card>
    );
};

export default Profile;