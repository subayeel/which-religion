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
import { Settings, ChevronUp, Home } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import {
  comparativeStudies,
  foundationalConcepts,
  majorReligions,
} from "@/utils/data";

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
          <SidebarMenuItem className="flex gap-2 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png" // Assuming you'll have a logo for "Which Religion?"
                alt="Brand logo"
                width={32}
                height={32}
                className="object-contain"
              />{" "}
              <div className="text-core flex flex-col font-semibold text-lg leading-3">
                <span className="tracking-wide text-lg m-0">
                  Which Religion?
                </span>
              </div>
            </Link>
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
          <SidebarGroupLabel>Religions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {majorReligions.map((item) => (
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
