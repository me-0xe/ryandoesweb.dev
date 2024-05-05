'use client';

import Link from 'next/link';
import HeartIcon from './icons/heart';
import SmileIcon from './icons/smile';
import { MotionButton } from './ui/button';

const Hero: React.FC = () => {
  return (
    <section>
      <div className="width-full">
        <div className="container mx-auto flex flex-col md:flex-row items-center lg:my-12">
          <div className="flex flex-col w-full lg:w-2/3 justify-center items-start p-8">
            <h1 className="text-3xl md:text-5xl tracking-loose">Ryan O&apos;Connor</h1>
            <h2 className="text-xl md:text-3xl leading-relaxed md:leading-snug mb-2 text-violet-600">
              Software developer
            </h2>
            <p>Auckland, New Zealand</p>
            <ul className="list-disc ml-8">
              <li>
                {`React`} <HeartIcon className="inline align-top pl-0.25" />
              </li>
              <li>Next.JS</li>
              <li>TypeScript</li>
              <li>Webpack</li>
              <li className="list-none">
                ...and other good stuff <SmileIcon className="inline align-top pl-0.25" />
              </li>
            </ul>
            <p>
              <MotionButton
                asChild={true}
                variant={'icon'}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="p-0"
              >
                <Link href="https://onplan.co.nz/">OnPlan</Link>
              </MotionButton>{' '}
              is my current passion project.
            </p>
          </div>
          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-1/3  justify-center">
            <div className="h-48 flex flex-wrap content-center">
              {/* <div>
                <img className="inline-block mt-28 hidden xl:block h-72" src="./climbing.jpg" />
              </div> */}
              <div>
                <img className="inline-block mt-28 xl:block h-72" src="./me.jpg" />
              </div>
              {/* <div>
                <img className="inline-block mt-28 hidden xl:block h-72" src="./climbing.jpg" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
