'use client';
import commitInfo from '../version.json';

const Footer: React.FC = () => {
  const lateEditedYear = new Date(commitInfo.date).getFullYear();

  return (
    <footer className="w-full border border-sky-500">
      <p className="text-center text-sm text-primary-800 dark:text-primary-500 lg:text-gray-500 dark:lg:text-gray-400">
        &copy; {lateEditedYear} Ryan O'Connor.
      </p>
    </footer>
  );
};

export default Footer;
