import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-[#c4a0cb] to-[#6d0f7d] text-xl ">
        EXPLORE NOW
      </p>
      <div className="container mx-auto max-w-[800px] mt-8 pl-4 pr-4 grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
        <Link
          href="https://tmdb-lake.vercel.app/"
          rel="noopener noreferrer"
          target="_blank"
          className="z-[1] w-full max-w-[550px] sm:max-w-[350px]"
        >
          <div className="flex-row flex mb-5 max-h-[100px]">
            <Image src="/tmdb.png" height={150} width={150} alt="TMDB" />
            <div className="px-3">
              <p className="text-white font-semibold text-xl">TMDB</p>
              <p className="text-gray-500 text-[11px]">
                Web app with Next.js that allows users to search for movies and
                TV shows.
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="https://calculation-game-ten.vercel.app/"
          rel="noopener noreferrer"
          target="_blank"
          className="z-[1] w-full max-w-[550px] sm:max-w-[350px]"
        >
          <div className="flex-row flex mb-5 max-h-[100px]">
            <Image
              src="/calculation-game.png"
              height={150}
              width={150}
              alt="Calculation game"
            />
            <div className="px-3">
              <p className="text-white font-semibold text-xl">
                Calculation Game
              </p>
              <p className="text-gray-500 text-[11px]">
                React app to practice and improve your arithmetic skills.
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
            <div className="px-3">
              <p className="text-white font-semibold text-xl">Taskify</p>
              <p className="text-gray-500 text-[11px]">
                Next.js app for organizing projects and tasks using boards,
                lists, and cards.
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
            <div className="px-3">
              <p className="text-white font-semibold text-xl">
                Fast React Pizza
              </p>
              <p className="text-gray-500 text-[11px]">
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
            <div className="px-3">
              <p className="text-white font-semibold text-xl">Natours</p>
              <p className="text-gray-500 text-[11px]">
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
            <div className="px-3">
              <p className="text-white font-semibold text-xl">Monster Slayer</p>
              <p className="text-gray-500 text-[11px]">
                Simple monster slayer game with Vue.
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="https://todo-app-taupe-mu-38.vercel.app/"
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
            <div className="px-3">
              <p className="text-white font-semibold text-xl">Todo</p>
              <p className="text-gray-500 text-[11px]">
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
            <div className="px-3">
              <p className="text-white font-semibold text-xl">Pig Game</p>
              <p className="text-gray-500 text-[11px]">
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
            <div className="px-3">
              <p className="text-white font-semibold text-xl">Forkify</p>
              <p className="text-gray-500 text-[11px]">
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
            <div className="px-3">
              <p className="text-white font-semibold text-xl">Budgety</p>
              <p className="text-gray-500 text-[11px]">
                Web app with JavaScript that allows users to manage their
                monthly budget.
              </p>
            </div>
          </div>
        </Link>
      </div>
      <p className="container mx-auto text-white text-center mt-4 max-w-[800px]">
        For more, see{' '}
        <a
          className="font-semibold text-[#c4a0cb] hover:text-[#6d0f7d] cursor-pointer"
          href="https://github.com/tim-koprivnik?tab=repositories"
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
