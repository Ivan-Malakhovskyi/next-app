import { FC } from "react";

const SocialLinks: FC = () => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        className="text-white hover:text-gray-300 transition"
      >
        <img src="/icons/facebook.svg" alt="facebook" />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/ivan_m_06/"
        className="text-white hover:text-gray-300 transition"
      >
        <img src="/icons/instagram.svg" alt="instagram" />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/ivan-malakhovskyi/"
        className="text-white hover:text-gray-300 transition"
      >
        <img src="/icons/linkedin.svg" alt="linkedin" />
      </a>
    </div>
  );
};

export default SocialLinks;
