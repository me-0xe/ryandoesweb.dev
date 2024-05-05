'use client';

import { Button } from './ui/button';

interface Role {
  company: string;
  title: string;
  logo: string;
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}

function Role({ role }: { role: Role }) {
  let startLabel = typeof role.start === 'string' ? role.start : role.start.label;
  let startDate = typeof role.start === 'string' ? role.start : role.start.dateTime;

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label;
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime;

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <img src={role.logo} alt="" className="rounded-sm" />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">{role.title}</dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time> <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}

const About: React.FC = () => {
  let resume: Array<Role> = [
    {
      company: 'Vista Entertainment Solutions',
      title: 'Software developer',
      logo: './companies/vista.png',
      start: 'Aug 2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString()
      }
    },
    {
      company: 'Company-X / Cisco systems',
      title: 'Analyst developer',
      logo: './companies/cisco.png',
      start: 'Sep 2017',
      end: 'Aug 2019'
    },
    {
      company: 'Elevate9',
      title: 'Web developer',
      logo: './companies/e9.jpeg',
      start: 'Aug 2015',
      end: 'Sep 2017'
    }
  ];

  return (
    <section>
      <div className="width-full py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12">
          <div className="flex flex-col w-full lg:w-2/3 justify-center items-start p-8">
            <p className="text-base mb-4">
              Currently working at Vista Entertainment Solutions using modern web technologies to
              improve the cinema experience. I work with a talented team building a React component
              library and suite of data handling libraries that take care of the complex business
              logic and user interfaces specific to the film industry.
            </p>
            <p className="text-base mb-4">
              When I'm not working you'll find me bouldering, mountain biking, and learning how to
              repair cars.
            </p>
          </div>
          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-1/3  justify-center">
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {/* <BriefcaseIcon className="h-6 w-6 flex-none" /> */}
                <span className="ml-3">Work</span>
              </h2>
              <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                  <Role key={roleIndex} role={role} />
                ))}
              </ol>
              <Button variant="secondary" className="group mt-6 w-full">
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
