import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg';

import { LogoComponent } from '../subComponents/LogoComponent';
import { PowerButton } from '../subComponents/PowerButton';
import { SocialIcons } from '../subComponents/SocialIcons';

import { Blogs } from '../data/BlogData';
import { BlogComponent } from './BlogComponent';
import { AnchorComponent } from '../subComponents/Anchor';
import { BigTitle } from '../subComponents/BigTitle';
import { motion } from 'framer-motion';

const MainContainer = styled(motion.div)`
  background: url(${img}) fixed no-repeat center;
  background-size: cover;
  /* width: 100vw;
  height: 100vh; */
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
  width: 100%;
  /* height: 100vh; */
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: centern;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

// Framer-motion config
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

export const BlogPage = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);

  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <AnchorComponent numbers={numbers} />

        <Center>
          <Grid>
            {Blogs.map((blog) => (
              <BlogComponent key={blog.id} blog={blog} />
            ))}
          </Grid>
        </Center>

        <BigTitle text="BLOG" top="5rem" left="5rem" />
      </Container>
    </MainContainer>
  );
};
