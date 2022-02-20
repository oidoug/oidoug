import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Container, Spacer, Text, Link } from "@nextui-org/react";
import { ThemeChanger } from "../components/ThemeChanger";
import { FiCoffee } from "react-icons/fi";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>IxD</title>
        <meta name="description" content="Interaction Design - UX/UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container sm style={{ height: "100vh" }}>
        <Spacer y={6} />
        <FiCoffee size={50} color="#4ADE7B" />
        <Spacer y={2} />
        <Text h1>Why Interaction Design?</Text>
        <Spacer />
        <Text h1>Nice to meet you!</Text>
        <Spacer />
        <Text h1>
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
        <Text>
          *Plus a bunch of other stuff we pile up together to run our product.
        </Text>
        <Spacer y={2} />
        <ThemeChanger />
        <Spacer y={6} />
      </Container>
    </Container>
  );
};

export default Home;
