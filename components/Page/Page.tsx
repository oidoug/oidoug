import Head from "next/head";
import { Container } from "@nextui-org/react";
import { Header, Footer } from "../../components";

interface PageProps {
  children: React.ReactNode;
  metaTitle?: string;
  metaContent?: string;
}

export const Page = ({ metaTitle, metaContent, children }: PageProps) => (
  <Container>
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaContent} />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Container xs>
      <Header />
      {children}
      <Footer />
    </Container>
  </Container>
);
