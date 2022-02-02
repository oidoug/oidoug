import type { NextPage } from "next";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";
import { Container, Spacer, Text, Link } from "@nextui-org/react";
import { ThemeChanger } from "../components/ThemeChanger";
import { FiCoffee } from "react-icons/fi";

const Home: NextPage = () => {
  const { theme } = useTheme();
  return (
    <Container>
      <Head>
        <title>Oi Doug</title>
        <meta name="description" content="Douglas Schmidt's - App Creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container
        as="main"
        display="flex"
        direction="column"
        justify="center"
        alignItems="flex-start"
        style={{ height: "100vh", maxWidth: "600pt" }}
      >
        <FiCoffee size={50} color="#4ADE7B" />
        <Spacer y={2} />
        <Text h1 style={{ width: "100%" }}>
          Oi!&nbsp;&nbsp;I&apos;m Doug,&nbsp;&nbsp;nice to meet
          you&nbsp;&nbsp;😊
        </Text>
        <Spacer />
        <Text h1 style={{ width: "100%" }}>
          I create digital products from idea to production using{" "}
          <Link color="primary" href="https://oidoug.com/ixd/">
            Interaction Design
          </Link>{" "}
          and{" "}
          <Link color="primary" href="https://reactnative.dev/">
            React-Native
          </Link>
          *.
        </Text>
        <Spacer />
        <Text style={{ width: "100%" }}>
          *Plus a bunch of other stuff we pile up together to run our product.
        </Text>
        <Spacer y={2} />
        <ThemeChanger />
      </Container>
    </Container>
  );
};

export default Home;
