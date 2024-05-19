import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Navbar = () => {
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="h-40 w-30" src="/kp-logo.png" alt="" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://linkedin.com/in/khai-pong-teoh" target="_blank">
                <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/KPTeoh" target="_blank">
                <FaGithub size={30} />
            </a>
            <a href="https://linkedin.com/in/khai-pong-teoh" target="_blank">
                <MdEmail size={30} />
            </a>

        </div>
    </nav>
}

export default Navbar
