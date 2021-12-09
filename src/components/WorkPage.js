import React, { useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './Themes';
import { motion } from 'framer-motion';

import { LogoComponent } from '../subComponents/LogoComponent';
import { SocialIcons } from '../subComponents/SocialIcons';
import { PowerButton } from '../subComponents/PowerButton';

import { Work } from '../data/WorkData';
import { Card } from './Card';
import { YinYang } from './AllSvgs';
import { BigTitle } from '../subComponents/BigTitle';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 5;
`;

// Framer - motion Configuration
const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

export const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;
    let element2 = yinyang.current;
    // if(yinyang.current){

    // }
    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (element2.style.transform =
        'rotate(' + -window.pageYOffset + 'deg)');
    };

    window.addEventListener('scroll', rotate);

    return () => {
      window.removeEventListener('scroll', rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={darkTheme.text} />
        </Rotate>

        <BigTitle text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};
