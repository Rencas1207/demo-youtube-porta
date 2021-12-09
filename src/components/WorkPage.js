import React, { useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './Themes';

import { LogoComponent } from '../subComponents/LogoComponent';
import { SocialIcons } from '../subComponents/SocialIcons';
import { PowerButton } from '../subComponents/PowerButton';

import { Work } from '../data/WorkData';
import { Card } from './Card';
import { YinYang } from './AllSvgs';

const Box = styled.div`
  background: ${(props) => props.theme.body};
  /* width: 100vw; */
  height: 400vh;
  position: relative;
  overflow: hidden;
`;

const Main = styled.ul`
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
  bottom: 1rem;
  right: 1rem;
  width: 80px;
  height: 80px;
  z-index: 5;
`;

export const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      yinyang.current.style.transform =
        `rotate(` + -window.pageYOffset + `deg)`;
    };

    window.addEventListener('scroll', rotate);

    return () => window.removeEventListener('scroll', rotate);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Main ref={ref}>
          {Work.map((d) => {
            return <Card key={d.id} data={d} />;
          })}
        </Main>
        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={darkTheme.text} />
        </Rotate>
      </Box>
    </ThemeProvider>
  );
};
