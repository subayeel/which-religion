/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  Dot,
  Book,
  Tally1,
  User,
  HandHeart,
  TreePalm,
  Leaf,
  ChartNoAxesCombined,
  ShieldCheck,
  Settings,
  ChevronUp,
  MessageCircle,
  Home,
  Feather,
  Brain,
  Egg,
  Sparkle,
  WholeWord,
  MessageCircleWarning,
  BookHeart,
  Bug,
  Lightbulb, // New icon for Philosophical Terms
  Scale, // New icon for Comparative Studies & Analysis
  Globe, // New icon for Major Religions
  AlignLeft, // New icon for Characteristics
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

const SidebarComponent = () => {
  const [currentPath, setCurrentPath] = useState("");
  // Set the current path when component mounts
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };
  }, []);

  // Menu items.
  const foundationalConcepts = [
    {
      title: "Religion",
      url: "/foundational-concepts/religion",
      icon: Book,
    },
    {
      title: "Philosophical Terms",
      url: "/foundational-concepts/philosophical-terms",
      icon: Lightbulb,
    },
  ];

  const majorReligions = [
    {
      title: "Islam",
      url: "/major-religions/islam",
      icon: TreePalm,
    },
    {
      title: "Christianity",
      url: "/major-religions/christianity",
      icon: HandHeart, // Changed from HandHeart, might want a more specific icon
    },
    {
      title: "Hinduism",
      url: "/major-religions/hinduism",
      icon: Leaf, // Changed from Leaf, might want a more specific icon
    },
    {
      title: "Atheism",
      url: "/major-religions/atheism",
      icon: User, // Changed from User, might want a more specific icon
    },
    {
      title: "Agnosticism",
      url: "/major-religions/agnosticism",
      icon: MessageCircle, // Changed from MessageCircle, might want a more specific icon
    },
    {
      title: "Buddhism",
      url: "/major-religions/buddhism",
      icon: Feather, // Changed from Feather, might want a more specific icon
    },
    {
      title: "Judaism",
      url: "/major-religions/judaism",
      icon: ShieldCheck, // Changed from ShieldCheck, might want a more specific icon
    },
  ];

  const philosophies = [
    {
      title: "Scientology",
      url: "/philosophies/scientology",
      icon: Brain,
    },
    {
      title: "Existentialism",
      url: "/philosophies/existentialism",
      icon: Dot,
    },
    {
      title: "Confucianism",
      url: "/philosophies/confucianism",
      icon: Tally1,
    },
    {
      title: "Logical Positivism",
      url: "/philosophies/logical-positivism",
      icon: MessageCircleWarning,
    },
    {
      title: "Stoicism",
      url: "/philosophies/stoicism",
      icon: Egg,
    },
    {
      title: "Absurdism",
      url: "/philosophies/absurdism",
      icon: Bug,
    },
    {
      title: "Nihilism",
      url: "/philosophies/nihilism",
      icon: ChartNoAxesCombined,
    },
    {
      title: "Determinism",
      url: "/philosophies/determinism",
      icon: WholeWord,
    },
    {
      title: "Empiricism",
      url: "/philosophies/empiricism",
      icon: Sparkle,
    },
    {
      title: "Ethics",
      url: "/philosophies/ethics",
      icon: BookHeart,
    },
    {
      title: "Idealism",
      url: "/philosophies/idealism",
      icon: Feather,
    },
    {
      title: "Metaphysics",
      url: "/philosophies/metaphysics",
      icon: Brain,
    },
    {
      title: "Philosophy of Language",
      url: "/philosophies/philosophy-of-language",
      icon: WholeWord,
    },
    {
      title: "Philosophy of Law",
      url: "/philosophies/philosophy-of-law",
      icon: ShieldCheck,
    },
    {
      title: "Philosophy of Science",
      url: "/philosophies/philosophy-of-science",
      icon: ChartNoAxesCombined,
    },
    {
      title: "Political Philosophy",
      url: "/philosophies/political-philosophy",
      icon: Tally1,
    },
    {
      title: "Aesthetics",
      url: "/philosophies/aesthetics",
      icon: Sparkle,
    },
    {
      title: "Epistemology",
      url: "/philosophies/epistemology",
      icon: Lightbulb,
    },
    {
      title: "Rationalism",
      url: "/philosophies/rationalism",
      icon: Brain,
    },
    {
      title: "Relativism",
      url: "/philosophies/relativism",
      icon: MessageCircle,
    },
    {
      title: "Marxism",
      url: "/philosophies/marxism",
      icon: Book,
    },
    {
      title: "Continental Philosophy",
      url: "/philosophies/continental-philosophy",
      icon: Egg,
    },
    {
      title: "Dualism",
      url: "/philosophies/dualism",
      icon: Dot,
    },
    {
      title: "Objectivism",
      url: "/philosophies/objectivism",
      icon: ShieldCheck,
    },
    {
      title: "Taoism",
      url: "/philosophies/taoism",
      icon: Leaf,
    },
  ];

  const comparativeStudies = [
    {
      title: "Comparative Religion Study",
      url: "/comparative-studies/comparative-religion-study",
      icon: Scale,
    },
    {
      title: "Similarities between Religions",
      url: "/comparative-studies/similarities",
      icon: HandHeart,
    },
    {
      title: "Categories of Religion",
      url: "/comparative-studies/categories",
      icon: AlignLeft,
    },
    {
      title: "Finding Correlation and Case Studies",
      url: "/comparative-studies/correlation-case-studies",
      icon: ChartNoAxesCombined,
    },
    {
      title: "Religion & Personalities",
      url: "/comparative-studies/religion-personalities",
      icon: User,
    },
    {
      title: "Religion & Age groups",
      url: "/comparative-studies/religion-age-groups",
      icon: Tally1,
    },
    {
      title: "Religion & Literacy",
      url: "/comparative-studies/religion-literacy",
      icon: Book,
    },
    {
      title: "Religion & God",
      url: "/comparative-studies/religion-god",
      icon: TreePalm,
    },
    {
      title: "Religion & Nationalism",
      url: "/comparative-studies/religion-nationalism",
      icon: Globe,
    },
  ];

  const characteristics = [
    {
      title: "Doctrines",
      url: "/characteristics/doctrines",
      icon: Book,
    },
    {
      title: "Myths",
      url: "/characteristics/myths",
      icon: MessageCircleWarning,
    },
    {
      title: "Ethical & Social Teachings",
      url: "/characteristics/ethical-social-teachings",
      icon: HandHeart,
    },
    {
      title: "Rituals",
      url: "/characteristics/rituals",
      icon: Egg,
    },
    {
      title: "Social Institutions",
      url: "/characteristics/social-institutions",
      icon: ShieldCheck,
    },
    {
      title: "Inner Experiences",
      url: "/characteristics/inner-experiences",
      icon: Brain,
    },
    {
      title: "Sentiments",
      url: "/characteristics/sentiments",
      icon: Feather,
    },
  ];

  // Function to determine if a link is currently active
  const isActive = (url: string) => {
    return currentPath === url;
  };

  // Custom menu item component with active state highlighting
  interface MenuItemProps {
    item: {
      title: string;
      url: string;
      icon: React.ComponentType;
    };
  }

  const MenuItemWithActiveState: React.FC<MenuItemProps> = ({ item }) => {
    const active = isActive(item.url);
    return (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton
          asChild
          className={
            active
              ? "relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary before:rounded-r-sm bg-primary/10"
              : ""
          }
        >
          <a href={item.url}>
            <item.icon />
            <span>{item.title}</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex gap-4 items-center">
            <Link href="/">
              <Image
                src="/logo.png" // Assuming you'll have a logo for "Which Religion?"
                alt="Brand logo"
                width={32}
                height={32}
                className="object-contain"
              />{" "}
            </Link>
            <div className="text-core flex flex-col font-semibold text-lg leading-3">
              <span className="tracking-wide text-lg m-0">Which Religion?</span>
            </div>
            <ModeToggle />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={
                    isActive("/")
                      ? "relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary before:rounded-r-sm bg-muted"
                      : ""
                  }
                >
                  <a href="/">
                    <Home size={16} />
                    <span>Home</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Foundational Concepts</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {foundationalConcepts.map((item) => (
                <MenuItemWithActiveState key={item.title} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Major Religions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {majorReligions.map((item) => (
                <MenuItemWithActiveState key={item.title} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Philosophies</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {philosophies.map((item) => (
                <MenuItemWithActiveState key={item.title} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Comparative Studies & Analysis</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {comparativeStudies.map((item) => (
                <MenuItemWithActiveState key={item.title} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>
            Characteristics of Major World Religions
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {characteristics.map((item) => (
                <MenuItemWithActiveState key={item.title} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Settings /> Settings
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="/privacy-policy">Privacy & Policy</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="/about-us">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="/contact-us">Contact Us</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SidebarComponent;
