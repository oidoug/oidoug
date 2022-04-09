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
        tinkerers coming from Design or IT bachelors looking for new frontiers
        in Human-Computer-Interactions. To its students, Faber-Ludens was more
        than just a graduation program, it was almost a philosophy, a cult to
        people and their lives, needs, and desires. We focused on understanding
        people through anthropology and psychology.
      </Text>
      <Spacer y={2} />
      <Text>
        At that time, design to me was so enjoyable. With my colleagues, we had
        deep discussions about crazy new ideas; we talked to people, prototyped
        crazy new stuff, and validated whatever we produced, in a cycle of
        research, ideation, prototyping, and validation.
      </Text>
      <Spacer y={2} />
      <Text>
        We were students, so we had freedom and little pressure to create viable
        products, but still, from time to time, some amazing projects surfaced
        there. In retrospect, it&apos;s easy to see that the laid-back
        environment that favored open-minded thinking and discussions had the
        perfect ingredients for innovation. Faber-Ludens Institute was way ahead
        of its time, so it had a hard time fitting into more traditional college
        programs.
      </Text>
      <Spacer y={2} />
      <Text>
        Moving forward, in my professional life, along with working as a Mobile
        Developer, I worked on new products as a User Experience Designer,
        Interaction Design&apos;s better-known cousin, and as a founder,
        conciliating creative ideas with what would generate value for both
        users and company.
      </Text>
      <Spacer y={2} />
      <Text>
        UX as a field has grown a lot and has spawned whole new divisions in big
        companies. And that is great, it shows how much designing from the
        user&apos;s needs perspective has a positive impact on companies,
        services, and products.
      </Text>
      <Spacer y={2} />
      <Text>
        But UX&apos;s popularity led to new problems. Designing UX
        professionally had become bureaucratic and boring. There are so many new
        processes and deliverables for the team to keep track of and produce,
        that the basic Interaction Design values are now forgotten. Designers
        need constant reminders to not forget to talk to users, and
        designer-centered design is abundant.
      </Text>
      <Spacer y={2} />
      <Text>
        I too fell into this trap many many times. With so many new tools,
        processes, and deliverables we want to push out, it&apos;s easy to get
        immersed in our assumptions.
      </Text>
      <Spacer y={2} />
      <Text>
        So that&apos;s why, in my interpretation, some designers started doing a
        leaner version of UX processes. The concept of Lean UX isn&apos;t new, I
        first read about it some time ago in this post from Jeff Gothelf from
        2011! And it probably had some influence on Jake Knapp&apos;s Design
        Sprint methodology, of which I&apos;m also fond.
      </Text>
      <Spacer y={2} />
      <Text>
        Regardless of the method or what we call it, we want to recover that
        sense of understanding of people&apos;s needs and desires before
        anything else, so new interactions and more creativity can emerge.
      </Text>
      <Spacer y={2} />
      <Text>
        In practice, what I&apos;m doing as a designer, is focusing on what
        leads to the most valuable ideas, without prejudice on the method or
        without letting the process get between the user and the result. We want
        to quickly iterate, so we have more chances of talking to people and
        getting their feedback. That may mean sometimes we only use paper to
        prototype, or we avoid doing wireframes, diagrams, or personas, which
        will inevitably get outdated, in favor of spending more time out,
        observing, taking notes, to then prototype and validate.
      </Text>
      <Spacer y={2} />
      <Text>
        There&apos;s no secret sauce, it&apos;s just a matter of caring about
        people and not your portfolio. Successful founders have been doing that
        empirically for a long time. We, designers and developers, complicate
        stuff for several and no reason at all.
      </Text>
      <Spacer y={2} />
      <Text>Douglas A. Schmidt</Text>
    </Page>
  );
};

export default Home;
