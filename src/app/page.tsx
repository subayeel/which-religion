import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Book,
  Globe,
  Lightbulb,
  Scale,
  ArrowRight,
  Users,
  Target,
  Eye,
} from "lucide-react";

export default function Home() {
  const featuredSections = [
    {
      title: "Foundational Concepts",
      description:
        "Understanding the basics of religion, philosophy, and belief systems",
      icon: Book,
      href: "/foundational-concepts",
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      items: ["Religion", "Philosophical Terms"],
    },
    {
      title: "Major Religions",
      description:
        "Explore the world's major religious traditions and their core teachings",
      icon: Globe,
      href: "/major-religions",
      color: "bg-green-500/10 text-green-600 dark:text-green-400",
      items: [
        "Islam",
        "Christianity",
        "Hinduism",
        "Buddhism",
        "Judaism",
        "Atheism",
        "Agnosticism",
      ],
    },
    {
      title: "Philosophies",
      description:
        "Dive into philosophical systems that shape human thought and behavior",
      icon: Lightbulb,
      href: "/philosophies",
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
      items: [
        "Existentialism",
        "Stoicism",
        "Nihilism",
        "Marxism",
        "Taoism",
        "And more...",
      ],
    },
    {
      title: "Comparative Studies",
      description:
        "Analyze similarities, differences, and patterns across belief systems",
      icon: Scale,
      href: "/comparative-studies",
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
      items: [
        "Comparative Religion",
        "Similarities",
        "Case Studies",
        "Demographics",
      ],
    },
  ];

  const stats = [
    { label: "Religions Covered", value: "7+", icon: Globe },
    { label: "Philosophies Explored", value: "25+", icon: Lightbulb },
    { label: "Comparative Studies", value: "9+", icon: Scale },
    { label: "Core Concepts", value: "15+", icon: Book },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Which Religion?
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Navigate the complexities of world religions and philosophies.
              Find your path through comprehensive, objective exploration of
              belief systems that have shaped human civilization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/foundational-concepts">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
                asChild
              >
                <Link href="/comparative-studies">
                  Compare Religions
                  <Scale className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Explore Our Comprehensive Guide
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From foundational concepts to detailed comparative studies,
              discover everything you need to understand world religions and
              philosophies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredSections.map((section, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${section.color}`}>
                      <section.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {section.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="px-3 py-1 bg-muted rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <Button className="w-full mt-4" variant="outline" asChild>
                      <Link href={section.href}>
                        Explore {section.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We believe that understanding different belief systems is
              essential for personal growth and global harmony. Our platform
              provides objective, comprehensive information about religions and
              philosophies, helping you make informed decisions about your
              spiritual journey.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Objective Information
                </h3>
                <p className="text-muted-foreground">
                  Neutral, well-researched content presented without bias
                </p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Comprehensive Coverage
                </h3>
                <p className="text-muted-foreground">
                  From major world religions to contemporary philosophies
                </p>
              </div>
              <div className="text-center">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Clear Understanding
                </h3>
                <p className="text-muted-foreground">
                  Complex concepts explained in accessible language
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
