'use client';
import { motion } from 'framer-motion';
import EmailIcon from './icons/email';
import GitHubIcon from './icons/github';
import ModeToggle from './mode-toggle';
import { Button, MotionButton } from './ui/button';
import { useState } from 'react';
import HeaderEasterEggDialog from './header-easter-egg-dialog';
import MenuIcon from './icons/menu';
import { Drawer, DrawerContent } from './ui/drawer';
import { MenuDraw } from './menu-draw';
import Link from 'next/link';

const Header: React.FC = () => {
  const [currentRotation, setCurrentRotation] = useState(180);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const rotationAngle = 180;

  const rotateEmoji = () => {
    setCurrentRotation((rotation) => rotation + 180);
    if (currentRotation === rotationAngle * 6) {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="flex flex-row w-full px-2 py-4">
      <div className="mr-auto">
        <MotionButton
          variant={'link'}
          className="hover:no-underline pl-8 text-xl"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onHoverStart={rotateEmoji}
          onHoverEnd={rotateEmoji}
        >
          RyanDoesWeb.dev &lt;
          {
            <motion.span
              animate={{ rotate: currentRotation }}
              transition={{ delay: currentRotation === rotationAngle ? 4 : 0.2 }}
            >
              🙂
            </motion.span>
          }
          /&gt;
        </MotionButton>
      </div>
      <div className="sm:flex hidden">
        <MotionButton
          asChild={true}
          variant={'icon'}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <Link href="mailto:hello@ryandoesweb.dev">
            <EmailIcon />
          </Link>
        </MotionButton>
        <MotionButton
          asChild={true}
          variant={'icon'}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <Link href="https://github.com/me-0xe" target="_blank">
            <GitHubIcon />
          </Link>
        </MotionButton>
        <div className="border-r border-gray-300" />
        <ModeToggle />
      </div>
      <div className="flex sm:hidden">
        <MenuDraw />
      </div>
      <HeaderEasterEggDialog
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};

export default Header;
