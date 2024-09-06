import Link from "next/link";
import Navbar from "./components/Navbar";
import { FiGithub, FiMail, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

const Section = ({ id, title, children }) => (
  <section id={id} className="mb-8 sm:mb-12">
    <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 pb-2 border-b border-muted">
      {title}
    </h2>
    {children}
  </section>
);

const ProjectLink = ({ href, title, desc, github }) => (
  <li className="mb-4">
    <div className="flex items-center justify-between">
      <Link href={href} className="font-bold text-lg hover:underline">
        {title}
      </Link>
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-text transition-colors"
        >
          <FiGithub size={20} />
        </a>
      )}
    </div>
    <p className="text-muted mt-1">{desc}</p>
  </li>
);

const EducationItem = ({ title, institution, certificateLink }) => (
  <li className="mb-4">
    <div className="flex items-center justify-between sm:justify-start">
      <h3 className="font-medium text-lg">{title}</h3>
      {certificateLink && (
        <a
          href={certificateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-muted hover:text-text transition-colors"
          title="View Certificate"
        >
          <FiExternalLink size={16} />
        </a>
      )}
    </div>
    <p className="text-muted">{institution}</p>
  </li>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6 sm:py-8 max-w-3xl">
        <header className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Fullstack Developer & ML Enthusiast
          </h1>
          <p className="text-lg sm:text-xl text-muted">
            Keep improving. Keep learning.
          </p>
        </header>

        {/* Image placeholder */}
        <div className="w-full h-24 sm:h-32 mb-6 sm:mb-8 relative overflow-hidden">
          <Image
            src="/cover-image.jpg" // Replace with your image path
            alt="Your chosen image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <Section id="about" title="About">
          <p className="text-lg">
            Computer Science student at Maynooth University, exploring the
            intersection of web development and machine learning.
          </p>
          <Link
            className="text-blue-400 underline"
            href="https://www.youtube.com/watch?v=y9ygGm_rwpg"
          >
            it&apos;s going to be a fine night tonight
          </Link>
          <Image
            src="/aviator.jpg"
            className="mt-2"
            alt="Your chosen image"
            width={500}
            height={500}
            objectFit="cover"
          />
        </Section>

        <Section id="education" title="Education">
          <ul className="space-y-4">
            <EducationItem
              title="Computer Science"
              institution="Maynooth University"
            />
            <EducationItem
              title="Machine Learning Specialization"
              institution="Stanford University, DeepLearning.ai"
              certificateLink="https://coursera.org/share/a5bedc97c91ddcbed053cd4ffd23cbf0"
            />
            <EducationItem
              title="CompTIA A+"
              institution="CompTIA"
              certificateLink="https://www.credly.com/badges/5e215f55-c79a-4c9e-b6be-992511f7cd2f/public_url"
            />
            <EducationItem
              title="Practical Deep Learning for Coders"
              institution="Fast.ai"
            />
          </ul>
        </Section>

        <Section id="skills" title="Skills">
          <ul className="grid grid-cols-2 gap-2">
            <li>JavaScript (React, Node.js)</li>
            <li>Python (ML, Data Analysis)</li>
            <li>HTML/CSS</li>
            <li>SQL and NoSQL Databases</li>
            <li>Git</li>
          </ul>
        </Section>

        <Section id="projects" title="Projects">
          <ul className="space-y-6">
            <ProjectLink
              href="/blog/0"
              title="Diffedit Reimplementation"
              desc="AI-driven image manipulation using deep learning techniques."
            />
            <ProjectLink
              href="/blog/0"
              title="This Website"
              desc="I worked really hard on it, trust me."
            />
            <ProjectLink
              href="https://oxycholy.com"
              title="Oxycholy"
              desc="Full-stack lead generation website with SEO optimization."
              github="https://github.com/tomoige/oxycholy"
            />
            <ProjectLink
              href="https://merge-e2d8c.web.app/"
              title="Merge"
              desc="Wordle-inspired word puzzle game built with React."
              github="https://github.com/tomoige/merge"
            />
            <ProjectLink
              href="https://multitimer95.vercel.app/"
              title="Multitimer95"
              desc="Windows 95-inspired multi-timer web application."
              github="https://github.com/tomoige/multitimer95"
            />
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <div className="flex items-center">
            <FiMail size={20} className="mr-2" />
            <a
              href="mailto:thomascormican123@gmail.com"
              className="hover:underline"
            >
              thomascormican123@gmail.com
            </a>
          </div>
        </Section>
      </main>
      <footer className="flex flex-col items-center justify-center border-t border-muted py-3 sm:py-4 text-center text-xs sm:text-sm text-muted">
        <Link
          className="text-xl mb-2 w-fit hover:text-text"
          href="https://github.com/tomoige"
        >
          <FiGithub />
        </Link>
        <div>&copy; 2024 Thomas Cormican. All rights reserved.</div>
      </footer>
    </div>
  );
}
