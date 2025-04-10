import Link from "next/link";
import {
  FaGithub,
  FaYoutube,
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="">
      <div className="bg-[#000000] flex flex-col gap-10 p-5 pb-0">
        <div className="flex flex-col w-[80vw] mx-auto">
          <div className="flex ">
            <div className="w-1/3 flex flex-col self-start ">
              <div>
                <h1 className="text-xl font-bold mb-3">Pages</h1>
                <div className="flex flex-col gap-2">
                  <Link href="/" className="hover:cursor-pointer hover:underline">
                    Home
                  </Link>
                  <Link
                    href="#about"
                    className="hover:cursor-pointer hover:underline"
                  >
                    About
                  </Link>
                  <Link
                    href="#services"
                    className="hover:cursor-pointer hover:underline"
                  >
                    Services
                  </Link>
                  <Link
                    href="#contact"
                    className="hover:cursor-pointer hover:underline"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-1/3 flex flex-col items-center ">
              <div>
                <h1 className="text-xl font-bold mb-3">Privacy & Policy</h1>
                <div className="flex flex-col gap-2">
                  <Link
                    href=""
                    className="hover:cursor-pointer hover:underline"
                    target="_blank"
                  >
                    Privacy
                  </Link>
                  <Link
                    href=""
                    className="hover:cursor-pointer hover:underline"
                    target="_blank"
                  >
                    Policy
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-1/3 flex flex-col items-end">
              <div>
                <h1 className="text-xl font-bold mb-3">Follow Us</h1>
                <div className="flex flex-col gap-2">
                <Link className="hover:cursor-pointer" target="_blank" href="https://www.youtube.com/@itsabdullahtech"><FaYoutube/></Link>
                <Link className="hover:cursor-pointer" target="_blank" href="https://www.instagram.com/_____abdullah_here/"><FaInstagram/></Link>
                <Link className="hover:cursor-pointer" target="_blank" href="https://github.com/abdullah12ka4"><FaGithub/></Link>
                <Link className="hover:cursor-pointer" target="_blank" href="https://www.linkedin.com/in/abdullah-malik-769770309/"><FaLinkedin/></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="self-center text-center mt-10 mb-3">
            <p>&copy; Copyrighted Developed and Designed by Abdullah</p>
          </div>
        </div>
      </div>
    </div>
  );
}
