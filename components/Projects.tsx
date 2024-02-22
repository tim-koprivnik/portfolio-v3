import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-500 to-purple-900 text-1xl ">
        EXPLORE NOW
      </p>
      <div className="container mx-auto 2xl max-w-[800px] mt-8 pl-4 pr-4 grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
        <Link
          href="https://tmdb-lake.vercel.app/"
          rel="noopener noreferrer"
          target="_blank"
          className="z-[1] w-full max-w-[550px] sm:max-w-[350px]"
        >
          <div className="flex-row flex mb-5 max-h-[100px]">
            <Image src="/tmdb.png" height={150} width={150} alt="TMDB" />
            <div className="p-3">
              <p className="text-white font-semibold text-xl">TMDB</p>
              <p className="text-gray-500 text-[10px]">
                Web app with Next.js that allows users to search for movies and
                TV shows.
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="https://github.com/tim-koprivnik/trello-clone/"
          rel="noopener noreferrer"
          target="_blank"
          className="z-[1] w-full max-w-[550px] sm:max-w-[350px]"
        >
          <div className="flex-row flex mb-5 max-h-[100px]">
            <Image
              src="/trello.png"
              height={150}
              width={150}
              alt="Trelo clone"
            />
            <div className="p-3">
              <p className="text-white font-semibold text-xl">Taskify</p>
              <p className="text-gray-500 text-[10px]">
                Web app with Next.js that allows users to organize projects,
                tasks, and workflows using a flexible and visual system based on
                boards, lists, and cards.
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="https://fast-react-pizza-p7jm3f142-thedude23.vercel.app/"
          rel="noopener noreferrer"
          target="_blank"
          className="z-[1] w-full max-w-[550px] sm:max-w-[350px]"
        >
          <div className="flex-row flex mb-5 max-h-[100px]">
            <Image
              src="/fast-react-pizza.png"
              height={150}
              width={150}
              alt="Fast React Pizza"
            />
            <div className="p-3">
              <p className="text-white font-semibold text-xl">
                Fast React Pizza
              </p>
              <p className="text-gray-500 text-[10px]">
                Web app with React that allows users to order pizza.
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="https://github.com/tim-koprivnik/natours-app"
          rel="noopener noreferrer"
          target="_blank"
          className="z-[1] w-full max-w-[550px] sm:max-w-[350px]"
        >
          <div className="flex-row flex mb-5 max-h-[100px]">
            <Image src="/natours.png" height={150} width={150} alt="Natours" />
            <div className="p-3">
              <p className="text-white font-semibold text-xl">Natours</p>
              <p className="text-gray-500 text-[10px]">
                Web app with Node.js (Express) and MongoDB (Mongoose) that
                allows users to book tours.
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="https://monster-slayer-game-five.vercel.app/"
          rel="noopener noreferrer"
          target="_blank"
          className="z-[1] w-full max-w-[550px] sm:max-w-[350px]"
        >
          <div className="flex-row flex mb-5 max-h-[100px]">
            <Image
              src="/monster-slayer-game.png"
              height={150}
              width={150}
              alt="Monster Slayer"
            />
            <div className="p-3">
              <p className="text-white font-semibold text-xl">Monster Slayer</p>
              <p className="text-gray-500 text-[10px]">
                Simple monster slayer game with Vue.
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="https://github.com/tim-koprivnik/todo-app"
          rel="noopener noreferrer"
          target="_blank"
          className="z-[1] w-full max-w-[550px] sm:max-w-[350px]"
        >
          <div className="flex-row flex mb-5 max-h-[100px]">
            <Image
              src="/to-do-app.png"
              height={150}
              width={150}
              alt="Todo app"
            />
            <div className="p-3">
              <p className="text-white font-semibold text-xl">Todo</p>
              <p className="text-gray-500 text-[10px]">
                Simple to-do app with Next.js.
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="https://piggame-three.vercel.app/"
          rel="noopener noreferrer"
          target="_blank"
          className="z-[1] w-full max-w-[550px] sm:max-w-[350px]"
        >
          <div className="flex-row flex mb-5 max-h-[100px]">
            <Image src="/piggame.png" height={150} width={150} alt="PigGame" />
            <div className="p-3">
              <p className="text-white font-semibold text-xl">Pig Game</p>
              <p className="text-gray-500 text-[10px]">
                Web app with JavaScript that allows users to play a dice game.
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="https://ktix-forkify.netlify.app/"
          rel="noopener noreferrer"
          target="_blank"
          className="z-[1] w-full max-w-[550px] sm:max-w-[350px]"
        >
          <div className="flex-row flex mb-5 max-h-[100px]">
            <Image src="/forkify.png" height={150} width={150} alt="Forkify" />
            <div className="p-3">
              <p className="text-white font-semibold text-xl">Forkify</p>
              <p className="text-gray-500 text-[10px]">
                Web app with JavaScript that allows users to search for recipes.
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="https://ktix-budgety.netlify.app/"
          rel="noopener noreferrer"
          target="_blank"
          className="z-[1] w-full max-w-[550px] sm:max-w-[350px]"
        >
          <div className="flex-row flex mb-5 max-h-[100px]">
            <Image src="/budgety.png" height={150} width={150} alt="Budgety" />
            <div className="p-3">
              <p className="text-white font-semibold text-xl">Budgety</p>
              <p className="text-gray-500 text-[10px]">
                Web app with JavaScript that allows users to manage their
                monthly budget.
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="https://tim-koprivnik.netlify.app/"
          rel="noopener noreferrer"
          target="_blank"
          className="z-[1] w-full max-w-[550px] sm:max-w-[350px]"
        >
          <div className="flex-row flex mb-5">
            <Image
              src="/portfolio-old.png"
              height={150}
              width={150}
              alt="Old Portfolio"
            />
            <div className="p-3">
              <p className="text-white font-semibold text-xl">
                Portfolio (old)
              </p>
              <p className="text-gray-500 text-[10px]">
                Personal portfolio with React showcasing my projects, skills,
                and professional details.
              </p>
            </div>
          </div>
        </Link>
      </div>
      <p className="container mx-auto 2xl text-white text-center mt-4 max-w-[800px]">
        For more, see{' '}
        <a
          className="font-semibold text-purple-500 hover:text-purple-700 cursor-pointer"
          href="https://github.com/tim-koprivnik"
          rel="noopener noreferrer"
          target="_blank"
        >
          Github
        </a>
        .
      </p>
    </section>
  );
};

export default Projects;
