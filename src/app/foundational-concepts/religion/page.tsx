import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { religionTimeline, philosophicalTerms } from "@/utils/data";
import { Clock, BookOpen, Users, Globe } from "lucide-react";

// Interface for match objects
interface TextMatch {
  start: number;
  end: number;
  text: string;
  type: "religion" | "philosophical";
  href: string;
}

// Unified function to create links for both religions and philosophical terms
const linkText = (text: string): React.ReactNode => {
  const religionNames = [
    "Islam",
    "Christianity",
    "Hinduism",
    "Buddhism",
    "Judaism",
    "Atheism",
    "Agnosticism",
  ];
  const philosophicalTerms_local = philosophicalTerms.map((t) => t.term);

  // Find all matches for religions and philosophical terms
  const matches: TextMatch[] = [];

  // Find religion matches
  religionNames.forEach((religion) => {
    const regex = new RegExp(`\\b${religion}\\b`, "gi");
    let match;
    while ((match = regex.exec(text)) !== null) {
      matches.push({
        start: match.index,
        end: match.index + match[0].length,
        text: match[0],
        type: "religion",
        href: `/major-religions/${religion.toLowerCase()}`,
      });
    }
  });

  // Find philosophical term matches
  philosophicalTerms_local.forEach((term) => {
    const regex = new RegExp(`\\b${term}\\b`, "gi");
    let match;
    while ((match = regex.exec(text)) !== null) {
      matches.push({
        start: match.index,
        end: match.index + match[0].length,
        text: match[0],
        type: "philosophical",
        href: `/foundational-concepts/philosophical-terms/#${term}`,
      });
    }
  });

  // Sort matches by start position
  matches.sort((a, b) => a.start - b.start);

  // Remove overlapping matches (keep the first one)
  const filteredMatches: TextMatch[] = [];
  let lastEnd = 0;

  matches.forEach((match) => {
    if (match.start >= lastEnd) {
      filteredMatches.push(match);
      lastEnd = match.end;
    }
  });

  // If no matches found, return original text
  if (filteredMatches.length === 0) {
    return text;
  }

  // Build result with text segments and links
  const result: React.ReactNode[] = [];
  let currentIndex = 0;

  filteredMatches.forEach((match, index) => {
    // Add text before this match
    if (match.start > currentIndex) {
      result.push(text.slice(currentIndex, match.start));
    }

    // Add the linked text
    const className =
      match.type === "religion"
        ? "text-blue-600 hover:text-blue-800 underline font-medium"
        : "text-purple-600 hover:text-purple-800 underline font-medium";

    result.push(
      <Link
        key={`${match.type}-${match.start}-${index}`}
        href={match.href}
        className={className}
      >
        {match.text}
      </Link>
    );

    currentIndex = match.end;
  });

  // Add remaining text after last match
  if (currentIndex < text.length) {
    result.push(text.slice(currentIndex));
  }

  return result;
};

interface TimelinePeriod {
  period: string;
  timeRange: string;
  description: string;
  events: string[];
}

function TimelineCard({ period }: { period: TimelinePeriod }) {
  return (
    <Card className="mb-4 border-l-4 border-l-blue-500">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-blue-500" />
          <CardTitle className="text-sm font-bold">{period.period}</CardTitle>
        </div>
        <Badge variant="outline" className="w-fit text-xs">
          {period.timeRange}
        </Badge>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-gray-600 mb-2">{period.description}</p>
        <ul className="text-xs space-y-1">
          {period.events.map((event: string, index: number) => (
            <li key={index} className="flex items-start gap-1">
              <span className="text-blue-500 mt-1">•</span>
              <span>{event}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function Page() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-2/3">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comparative Study of World Religions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Origins, Beliefs, and Demographics — An Academic Analysis for
              Interfaith Understanding
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>Academic Study</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>Interfaith Focus</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                <span>Global Perspective</span>
              </div>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Definition of Religion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Definition of Religion
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Religion is broadly understood as a systematic set of beliefs
                and practices involving the sacred or ultimate reality.
                Academically, religion is defined as &ldquo;human beings&apos;
                relation to that which they regard as holy, sacred, absolute,
                spiritual, divine, or worthy of especial reverence,&rdquo;
                typically addressing life&apos;s ultimate concerns.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Emile Durkheim, a foundational sociologist, likewise defined
                religion as &ldquo;a unified system of beliefs and practices
                relative to sacred things… which unite…into one single moral
                community&rdquo;. In other words, religion integrates beliefs
                and rituals about the sacred (e.g. gods, spirits, ultimate
                truth) into a communal moral framework.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Most scholarly definitions emphasize four common features:
                belief in transcendent or supernatural forces, a community of
                practitioners, rituals or practices expressing those beliefs,
                and a moral or ethical code (often thought to derive from the
                sacred). These elements distinguish &ldquo;religion&rdquo; from
                general spirituality or secular philosophies, making it &ldquo;a
                total way of life&rdquo; integrating theology, law and culture
                for its adherents.
              </p>
            </div>
          </section>

          {/* Origins and Development */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Origins and Development of Religion
            </h2>

            {/* Categories of Religion */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Categories of Religion
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  {linkText(
                    "Religions can be classified by their conception of the divine and the supernatural. Monotheism (belief in one God) characterizes Judaism, Christianity and Islam. Polytheism (belief in multiple gods) was typical of ancient Egypt, Mesopotamia, Greece, and many folk religions (e.g. Hindu traditions before philosophical Hinduism)."
                  )}
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  {linkText(
                    "Henotheism (one god supreme among many) and pantheism/panentheism (God as world or immanent in world) appear in Hindu and some mystical traditions. Animism (ascribed souls or spirits to animals, plants and natural phenomena) is often seen as the earliest form of religion, underlying many indigenous and prehistoric practices."
                  )}
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  {linkText(
                    "Other categories include transtheism (gods may exist but are irrelevant, e.g. some Buddhist views), atheism (denial of any god) and agnosticism (uncertainty about gods). Religions are also categorized as organized (world) religions versus folk/tribal religions or new religious movements."
                  )}
                </p>
              </div>
            </div>

            {/* Prehistoric and Early Religions */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Prehistoric and Early Religions
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Human religious behavior dates back to prehistoric times.
                  Archaeological evidence (e.g. ritual burials, cave art,
                  figurines) suggests proto-religious practices as far back as
                  the Middle Paleolithic (roughly 100,000 years ago).
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  {linkText(
                    "The oldest known burials (Middle Paleolithic) included grave offerings (stone tools, animal parts) arranged with the deceased, implying a rudimentary belief in an afterlife or spirit world. Such burials, plus objects like Venus figurines and decorated caves, suggest animistic or fertility cult practices among hunter-gatherers."
                  )}
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  In the Neolithic (10,000–4,000 BCE) emerging agricultural
                  societies developed more complex rituals (sacred feasting,
                  ancestor reverence, earth-mother worship). These early
                  religions likely worshipped natural forces and ancestors
                  without formal scriptures, laying the groundwork for later
                  organized faiths.
                </p>
              </div>
            </div>
          </section>

          {/* Deep Dive on Major Belief Systems */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Deep Dive on Major Belief Systems
            </h2>

            {/* Islam */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                <Link
                  href="/major-religions/islam"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Islam
                </Link>
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  <strong>Origin & Founder:</strong>{" "}
                  {linkText(
                    "Islam was founded by the Prophet Muḥammad (570–632 CE) in Mecca (Hejaz, Arabia). According to tradition, at age 40 Muhammad began receiving God's revelations, which he preached publicly until his death. Muslims regard him as the last prophet in a line with Abraham, Moses, Jesus, etc."
                  )}
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  <strong>Timeline:</strong> 610 CE (first revelation) through
                  632 CE (Muhammad&apos;s death). After 632, Islam expanded
                  under the Rashidun, Umayyad and Abbasid caliphates.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  <strong>Core Doctrines:</strong>{" "}
                  {linkText(
                    "Islam is strictly monotheistic (tawḥīd): belief in one God (Allah). The Qur'an teaches that Allah is omnipotent, just and merciful; He communicates through prophets. The Articles of Faith include belief in angels, divine scriptures (Qur'an as final scripture), prophets (Muḥammad as Seal of the Prophets), the Day of Judgment, and divine decree (predestination)."
                  )}
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Five pillars structure practice: the profession of faith
                  (shahāda), five daily prayers (ṣalāh), almsgiving (zakāt),
                  fasting during Ramadan (sawm), and pilgrimage to Mecca (ḥajj).
                  Ethical teachings emphasize compassion, social justice,
                  charity, and obedience to God.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Global Distribution:</strong> Islam is one of the
                  world&apos;s largest religions, with roughly{" "}
                  <strong>1.8–2.0 billion</strong> adherents worldwide (about
                  25–26% of global population as of 2020). The largest Muslim
                  populations are in <strong>Indonesia (~240 million)</strong>,{" "}
                  <strong>Pakistan</strong>, <strong>India</strong>,{" "}
                  <strong>Bangladesh</strong>, and <strong>Nigeria</strong>.
                </p>
              </div>
            </div>

            {/* Christianity */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                <Link
                  href="/major-religions/christianity"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Christianity
                </Link>
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  <strong>Origin & Founder:</strong>{" "}
                  {linkText(
                    "Christianity was founded on the life and teachings of Jesus of Nazareth (c.4 BCE–30 CE), a Jewish preacher in Roman Palestine. Christians believe Jesus to be the Messiah and Son of God. He did not leave a written scripture, but his apostles and followers produced the New Testament."
                  )}
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  <strong>Core Doctrines:</strong>{" "}
                  {linkText(
                    "Christianity is monotheistic but uniquely Trinitarian: God is one Being in three Persons (Father, Son, Holy Spirit). Key doctrines include the Incarnation (God becoming man in Jesus), atonement (Jesus' sacrificial death redeeming sin), and resurrection (Jesus' victory over death)."
                  )}
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  <strong>Denominations:</strong> Today Christianity is the
                  world&apos;s largest religion (≈2.3 billion, ~28–30% of world
                  population). It has three major branches:{" "}
                  <strong>Roman Catholicism</strong> (the largest single body,
                  led by the Pope), <strong>Eastern Orthodoxy</strong>, and{" "}
                  <strong>Protestantism</strong> (diverse movements that broke
                  from Catholicism from the 16th century onward).
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Global Distribution:</strong> Christianity has ~2.3
                  billion adherents (≈29% of world population). Historically
                  centered in Europe, today its largest populations are in the
                  Americas, Sub-Saharan Africa, and parts of Asia Pacific.
                </p>
              </div>
            </div>

            {/* Hinduism */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                <Link
                  href="/major-religions/hinduism"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Hinduism
                </Link>
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  <strong>Origin & Founder:</strong>{" "}
                  {linkText(
                    "Hinduism has no single founder or starting point. It grew organically in the Indian subcontinent from the convergence of Indus Valley traditions and Aryan Vedic religion. Its history is usually divided into Vedic (rigid sacrificial Brahmanism) and classical/post-Vedic phases."
                  )}
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  <strong>Core Doctrines:</strong>{" "}
                  {linkText(
                    "Hinduism encompasses diverse beliefs but has key concepts: Dharma (moral duty/ethics), Karma (action and its consequences), Samsara (cycle of rebirth), and Moksha (liberation from the cycle). The ultimate reality is Brahman (absolute ground of being), experienced as a personal god or impersonal oneness."
                  )}
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  {linkText(
                    "Hindus may be polytheistic (worshiping many deities) or more philosophically monist/henotheist (seeing all gods as aspects of Brahman). The concept of atman (individual soul) as identical with Brahman is central in many schools."
                  )}
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Global Distribution:</strong>{" "}
                  {linkText(
                    "Hinduism has about 1.2 billion followers (roughly 15% of world population). It is overwhelmingly concentrated in South Asia: about 80% of Indians are Hindus, and Nepal also has a Hindu majority."
                  )}
                </p>
              </div>
            </div>

            {/* Buddhism */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                <Link
                  href="/major-religions/buddhism"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Buddhism
                </Link>
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  <strong>Origin & Founder:</strong>{" "}
                  {linkText(
                    "Buddhism was founded by Siddhartha Gautama (the Buddha) in northeastern India. Gautama was born a prince (c. 563 BCE) who renounced worldly life, attained enlightenment, and taught for 45 years."
                  )}
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  <strong>Core Doctrines:</strong>{" "}
                  {linkText(
                    "Buddhism is fundamentally non-theistic (no creator God). Its main teachings are the Four Noble Truths: (1) life involves suffering (dukkha); (2) suffering is caused by attachment and ignorance; (3) there is an end to suffering (nirvana); and (4) the Eightfold Path leads to that end."
                  )}
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  {linkText(
                    "Karma (action) and rebirth operate without a permanent soul (anatta doctrine). Ethical teachings stress compassion (karuṇā), loving-kindness (mettā), and the Middle Way between indulgence and extreme asceticism."
                  )}
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Global Distribution:</strong>{" "}
                  {linkText(
                    "Buddhism has roughly 500 million followers (~6–7% of global population). Major concentrations are in East Asia (China, Japan, Korea) and Southeast Asia (Thailand, Myanmar, Vietnam)."
                  )}
                </p>
              </div>
            </div>

            {/* Judaism */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                <Link
                  href="/major-religions/judaism"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Judaism
                </Link>
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  <strong>Origin & Founder:</strong>{" "}
                  {linkText(
                    "Judaism originated with the ancient Hebrews/Israelites. It does not have a single historical founder in the way Christianity or Islam does, but key figures include Abraham (progenitor of the Jewish people, ca. 1800–1600 BCE) and Moses (13th c. BCE, who received the Torah)."
                  )}
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  <strong>Core Doctrines:</strong>{" "}
                  {linkText(
                    "Judaism is strictly monotheistic: belief in one, indivisible God (Yahweh/El). God is Creator and Lawgiver. The covenant with the Israelites (chosen people) is central: God gave the Torah (law) to Israel, and Israel agreed to live by it."
                  )}
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  {linkText(
                    "Unlike Christianity, Judaism denies the divinity of any human (Jesus was a prophet/teacher, not God) and awaits a future Messiah."
                  )}
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Global Distribution:</strong> There are about{" "}
                  <strong>15 million</strong> Jews worldwide (≈0.2% of people).
                  Over 80% live in just two countries: <strong>Israel</strong>{" "}
                  (~7 million, ~45% of world Jews) and the{" "}
                  <strong>United States</strong> (~6 million, ~39% of world
                  Jews).
                </p>
              </div>
            </div>

            {/* Atheism and Agnosticism */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                <Link
                  href="/major-religions/atheism"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Atheism
                </Link>{" "}
                and{" "}
                <Link
                  href="/major-religions/agnosticism"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Agnosticism
                </Link>
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  <strong>Definitions:</strong>{" "}
                  {linkText(
                    "Atheism and agnosticism are not religions but worldviews about theism. Atheism is the absence of belief in any god or gods. Agnosticism is the position that the existence of gods is unknown or unknowable."
                  )}
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  <strong>Historical Origins:</strong> Skeptical or non-theistic
                  thought can be traced to antiquity (e.g. Greek atomists, some
                  Indian materialists). The modern use of &ldquo;atheist&rdquo;
                  and &ldquo;agnostic&rdquo; emerged in the Enlightenment
                  (18th–19th centuries) with figures like Baron d&apos;Holbach
                  and Thomas Huxley.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Demographics:</strong> The Pew Research Center
                  estimates that about <strong>24%</strong> of the world&apos;s
                  population (~1.9 billion) is <em>religiously unaffiliated</em>
                  . This category includes atheists, agnostics and those who say
                  &ldquo;none.&rdquo; Self-identified atheists are a subset
                  (estimates vary, roughly 7–8% globally).
                </p>
              </div>
            </div>
          </section>

          {/* References */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              References
            </h2>
            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Academic Sources:</strong>
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    • Encyclopædia Britannica. Religion and Religious Studies
                    entries.
                  </li>
                  <li>
                    • Pew Research Center. (2020). &ldquo;The Global Religious
                    Landscape.&rdquo;
                  </li>
                  <li>
                    • Durkheim, Emile. (1912). &ldquo;The Elementary Forms of
                    Religious Life.&rdquo;
                  </li>
                  <li>
                    • Smith, Huston. (1991). &ldquo;The World&apos;s
                    Religions.&rdquo;
                  </li>
                  <li>
                    • Eliade, Mircea. (1987). &ldquo;The Sacred and the
                    Profane.&rdquo;
                  </li>
                  <li>• World Religion Database, Boston University.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar - Timeline */}
        <div className="lg:w-1/3">
          <div className="sticky top-8">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  Religion Timeline
                </CardTitle>
              </CardHeader>
            </Card>

            <div className="space-y-4">
              {religionTimeline.map((period, index) => (
                <TimelineCard key={index} period={period} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
