import type { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import { Container, Col, Spacer, Text, Link } from "@nextui-org/react";
import { NavLink, ThemeChanger, Logo } from "../components";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Oi Doug</title>
        <meta name="description" content="Douglas Schmidt's - App Creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container sm style={{ height: "100vh" }}>
        <Col>
          <Spacer y={6} />
          <Logo />
          <Spacer y={2} />
          <Text h1>Oi,&nbsp; I&apos;m Doug&nbsp; 👋</Text>
          <Spacer />
          <Text h1>
            I create digital products from idea to production using fast-to-ship
            tools like <NavLink a="/react-native/">React-Native</NavLink> and{" "}
            <NavLink a="/firebase/">Firebase</NavLink>.
          </Text>
          <Spacer />
          <Text>
            Check my{" "}
            <NavLink a="https://www.linkedin.com/in/schmidtdouglas/">
              LinkedIn
            </NavLink>{" "}
            where I talk about design, enterpreneuship, and product management.
          </Text>
          <Spacer y={2} />
          <ThemeChanger />
          <Spacer y={6} />
        </Col>
      </Container>
    </Container>
  );
};

export default Home;
