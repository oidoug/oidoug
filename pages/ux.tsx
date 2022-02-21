import type { NextPage } from "next";
import Image from "next/image";
import { Spacer, Text } from "@nextui-org/react";
import { Page } from "../components";

const Home: NextPage = () => {
  return (
    <Page
      metaTitle="Lean UX"
      metaContent="Lean User Experience, UX, UI, design process"
    >
      <Text h1>Lean UX: Recover your ability to innovate</Text>
      <Spacer y={2} />
      <Text>
        From the end of 2010 up to around 2013, I studied Interaction Design in
        a trendy new design school called Faber-Ludens Institute, now
        unfortunately extinct. Their students, or Fabers, were thinkers and
        tinkerers coming from Design or IT bachelors looking for discovering new
        frontiers in Human-Computer-Interactions. To us, students, Faber-Ludens
        was more than just a grad school, it was almost a cult to people and
        their lives, desires, and needs. We focused on understanding people
        through anthropology and psychology lenses.
      </Text>
      <Spacer y={2} />
      <Text>
        At that time, design to me was so simple and enjoyable. With my
        colleagues, we had deep discussions about crazy ideas, we talked to
        people, we prototyped crazy stuff and we validated that whatever we
        produced, in a cycle of research, ideation, prototyping, and validation.
        We were students, so we had freedom and little pressure to create, but
        still, from time to time, some amazing projects surfaced there. I think
        that the laid-back environment that favored open-minded thinking had the
        perfect ingredients for great innovation. Faber-Ludens Institute was way
        ahead of its time, so it had a hard time fitting in more traditional
        colleges programs.
      </Text>
      <Spacer y={2} />
      <Text>
        Moving forward, I had the chance to work with new products and teams as
        a User Experience Designer, Interaction Design's better-known cousin.
      </Text>
      <Spacer y={2} />
      <Text>
        UX as a field has grown a lot and has spawned whole new divisions in big
        companies. And that is really great, it shows how much designing from
        the user's needs perspective has a positive impact on companies,
        services, and products.
      </Text>
      <Spacer y={2} />
      <Text>
        But that popularity has to lead us to a new problem. Designing UX
        professionally had become bureaucratic and boring. There are so many new
        processes and deliverables for the team to take note of and produce,
        that the basic Interaction Design ideals are now forgotten.
      </Text>
      <Spacer y={2} />
      <Text>
        So that's why, in my interpretation, some designers started doing a
        leaner version of the known UX processes. The concept of Lean UX isn't
        new and I first read about it in this post from Jeff Gothelf from 2011,
        and it probably was the biggest influence on Jake Knapp's Design Sprint
        methodology, which I'm also a big fan.
      </Text>
      <Spacer y={2} />
      <Text>
        Regardless of the method or how we call it, we need to recover that
        sense of understanding people's desires and needs and create proper
        innovative environments for new interaction solutions to appear, that
        are again user-centered.
      </Text>
      <Spacer y={2} />
      <Text>
        In practice, what I as a designer do is focus on what brings the most
        value the faster, without prejudice on the method or without letting the
        process get between the user and the end result. That may mean sometimes
        to only use paper or to avoid doing wireframes or even creating personas
        that will end up limiting the scope of our product. Instead, we go out,
        observe, take notes, and quickly prototype.
      </Text>
      <Spacer y={2} />
      <Text>
        There's actually no secret sauce. Successful founders have been doing
        that empirically since always. We designers complicate stuff for several
        and no reason at all.
      </Text>
      <Spacer y={2} />
      <Text>Douglas A. Schmidt</Text>
    </Page>
  );
};

export default Home;
