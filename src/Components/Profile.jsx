import { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import pp from "../assets/pp.jpg";  // Gambar Profil
import AOS from "aos";
import "aos/dist/aos.css";

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Inisialisasi AOS saat komponen dimuat
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi 1000ms (1 detik)
      easing: "ease-in-out", // Jenis easing animasi
      once: true, // Animasi hanya terjadi sekali
    });

    // Cek apakah pengguna sudah memilih dark mode
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    return () => {
      AOS.refresh(); // Menyegarkan AOS jika ada perubahan
    };
  }, []);

  // Toggle Dark/Light mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode.toString());
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <Card className="max-w-4xl mx-auto my-5 shadow-lg border-2 border-gray-100 dark:border-gray-700 rounded-lg">
        {/* Dark/Light Mode Switcher */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleDarkMode}
            className="text-xl p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded-full shadow-md"
          >
            {isDarkMode ? "🌞" : "🌙"}
          </button>
        </div>

        {/* Profile Section */}
        <div
          className="flex flex-col sm:flex-row sm:space-x-6 px-8 py-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-lg"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-center sm:items-start pb-6 sm:pb-0 w-full sm:w-1/3">
            <img
              alt="Profile Image"
              src={pp}
              height="96"
              width="96"
              className="mb-4 rounded-full shadow-2xl border-4 border-indigo-500"
              data-aos="zoom-in"
              data-aos-delay="200"
            />
            <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Muhammad Gilang Eka Saputra
            </h3>
            <span className="text-lg text-gray-500 dark:text-gray-400">Web Designer</span>
          </div>

          <div className="w-full sm:w-2/3 sm:text-left mt-6 sm:mt-0" data-aos="fade-left">
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
              <i className="fa-solid fa-phone text-blue-600 dark:text-indigo-400"></i>
              <span className="text-lg">+62 817-7483-4674</span>
            </h4>
            <h5 className="text-gray-700 dark:text-gray-300 flex items-center mb-3 text-lg">
              <i className="fa-solid fa-envelope text-blue-600 dark:text-indigo-400 mr-2"></i>
              <a
                href="mailto:gilangeka25@gmail.com"
                className="text-blue-500 hover:text-blue-700 dark:hover:text-indigo-500"
              >
                gilangeka25@gmail.com
              </a>
            </h5>
            <h5 className="text-gray-700 dark:text-gray-300 flex items-center mb-3 text-lg">
              <i className="fa-brands fa-github text-gray-800 dark:text-gray-300 mr-2"></i>
              <a
                href="https://github.com/gilangeka25"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 dark:hover:text-indigo-500"
              >
                github.com/gilangeka25
              </a>
            </h5>
            <h5 className="text-gray-700 dark:text-gray-300 flex items-center text-lg">
              <i className="fa-brands fa-instagram text-pink-500 dark:text-pink-400 mr-2"></i>
              <a
                href="https://www.instagram.com/sastrazinggalangg_?igsh=Y2tkNnVueWV0ajh2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700 dark:hover:text-pink-400"
              >
                Instagram: @sastrazinggalangg_
              </a>
            </h5>
          </div>
        </div>

        {/* About Me Section */}
        <div
          className="px-8 py-6 mt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row sm:space-x-6"
          data-aos="fade-up"
        >
          <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
            <img
              alt="Medium Image"
              src="paa.jpg"  
              className="rounded-lg shadow-xl"
              data-aos="zoom-in"
              data-aos-delay="300"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Tentang Saya</h4>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Saya seorang Web Designer dengan pengalaman dalam membuat antarmuka yang ramah pengguna dan desain web yang responsif. Saya sangat terampil dalam HTML, CSS, JavaScript, dan berbagai alat desain seperti Figma dan Adobe XD.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div
          className="px-8 py-6 mt-6 border-t border-gray-200 dark:border-gray-700"
          data-aos="fade-up"
        >
          <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Skills</h4>
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
        <div
          className="px-8 py-6 mt-6 border-t border-gray-200 dark:border-gray-700"
          data-aos="fade-up"
        >
          <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Education</h4>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>SMK PRAKARYA INTERNASIONAL</strong> | High School (2023 - 2026)
          </p>
          <p className="text-gray-700 dark:text-gray-300">Sekolah terbaik dengan fasilitas lengkap untuk pengembangan diri.</p>
        </div>

        {/* Work Experience Section */}
        <div
          className="px-8 py-6 mt-6 border-t border-gray-200 dark:border-gray-700"
          data-aos="fade-up"
        >
          <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Experience</h4>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Web Designer</strong> | SMK PRAKARYA INTERNASIONAL
          </p>
          <p className="text-gray-700 dark:text-gray-300">
          Berikut adalah beberapa proyek yang telah saya kerjakan. Proyek ini mencakup pengembangan web, aplikasi mobile, dan desain UI/UX. Saya menggunakan teknologi modern untuk memastikan pengalaman pengguna yang optimal dan performa yang baik.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
