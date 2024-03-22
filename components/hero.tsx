'use client';

import HeartIcon from './icons/heart';

const Hero: React.FC = () => {
  return (
    <section className="width-full border border-sky-500">
      <h1>Ryan O&apos;Connor</h1>
      <ul>
        <li>Software developer</li>
        <li className="flex">
          {`React `} <HeartIcon />{' '}
        </li>
        <li>Stay at home astronaut</li>
        <li>Auckland, New Zealand</li>
      </ul>
    </section>
  );
};

export default Hero;
