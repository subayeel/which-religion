/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Chart.js
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend as ChartLegend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  RadialLinearScale,
} from "chart.js";

ChartJS.register(
  ArcElement,
  ChartTooltip,
  ChartLegend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  RadialLinearScale
);

// Datasets (estimates, synthesized from commonly cited sources; see references)
const totals = {
  practicingPct: 75,
  nonPracticingPct: 20,
  othersPct: 5,
  literacyPct: 85,
  growthPct: 1.8,
  birthPct: 2.8,
  totalCount: 1.9, // billions
};

function IslamPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Islam
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A comprehensive analysis of Islam's demographics, history, and
            global impact
          </p>
        </div>

        <Tabs defaultValue="analytical" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="analytical">Analytical</TabsTrigger>
            <TabsTrigger value="historical">Historical</TabsTrigger>
            <TabsTrigger value="geographical">Geographical</TabsTrigger>
          </TabsList>

          {/* Analytical Data */}
          <TabsContent value="analytical" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Population Data</CardTitle>
                  <CardDescription>Global Muslim demographics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Practicing Followers
                    </span>
                    <span className="font-semibold text-green-600">
                      {totals.practicingPct}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Non-Practicing Followers
                    </span>
                    <span className="font-semibold text-gray-600">
                      {totals.nonPracticingPct}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Literacy Rate
                    </span>
                    <span className="font-semibold text-green-600">
                      {totals.literacyPct}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Growth Rate
                    </span>
                    <span className="font-semibold text-green-600">
                      +{totals.growthPct}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Birth Rate
                    </span>
                    <span className="font-semibold text-green-600">
                      {totals.birthPct}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Total Count
                    </span>
                    <span className="font-semibold">{totals.totalCount}B</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Institutions</CardTitle>
                  <CardDescription>
                    Places of worship, charity, education
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Places of Worship
                    </span>
                    <span className="font-semibold">4.2M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Charity Institutions
                    </span>
                    <span className="font-semibold">180K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Educational Institutions
                    </span>
                    <span className="font-semibold">120K</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Modern World Alignment</CardTitle>
                  <CardDescription>
                    Alignment with contemporary values
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Logic
                    </span>
                    <span className="font-semibold text-green-600">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Reasoning
                    </span>
                    <span className="font-semibold text-green-600">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Human Innate Disposition
                    </span>
                    <span className="font-semibold text-green-600">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Science
                    </span>
                    <span className="font-semibold text-green-600">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Math
                    </span>
                    <span className="font-semibold text-green-600">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Humanity
                    </span>
                    <span className="font-semibold text-green-600">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Nature (Biology)
                    </span>
                    <span className="font-semibold text-green-600">100%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Rituals Alignment</CardTitle>
                  <CardDescription>
                    Alignment with body, nature, and mind
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Body
                    </span>
                    <span className="font-semibold text-green-600">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Nature
                    </span>
                    <span className="font-semibold text-green-600">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Mind
                    </span>
                    <span className="font-semibold text-green-600">100%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Rules & Governance</CardTitle>
                  <CardDescription>
                    Regulatory framework coverage
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Personal Level
                    </span>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Yes
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Family Level
                    </span>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Yes
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Community Level
                    </span>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Yes
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Country Level
                    </span>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Yes
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Aligns with All Pillars
                    </span>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Yes
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Scripture Analysis</CardTitle>
                  <CardDescription>
                    Texts and reported evaluations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Number of Scriptures
                    </span>
                    <span className="font-semibold">1 (Qur'an)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Contradictions
                    </span>
                    <span className="font-semibold text-green-600">None</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Scientific Errors
                    </span>
                    <span className="font-semibold text-green-600">None</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Scientific Miracles
                    </span>
                    <span className="font-semibold text-green-600">Many</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Denominations</CardTitle>
                  <CardDescription>Diversity and disagreements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Major groups
                    </span>
                    <span className="font-semibold">Sunni and Shia</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Level of disagreement
                    </span>
                    <span className="font-semibold text-green-600">Low</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Concept of Higher Being</CardTitle>
                  <CardDescription>Core theological claims</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Belief in God
                    </span>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Yes
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Number of Gods
                    </span>
                    <span className="font-semibold">1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Philosophical alignment
                    </span>
                    <span className="font-semibold text-green-600">100%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Historical Data */}
          <TabsContent value="historical" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Foundation & Origin</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Date Founded
                    </span>
                    <span className="font-semibold">610–632 CE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Place of Origin
                    </span>
                    <span className="font-semibold">Mecca/Medina (Arabia)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Founder
                    </span>
                    <span className="font-semibold">Muhammad ibn Abdullah</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Major Historical Events</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <div>
                    <span className="font-medium">610 CE:</span> First
                    revelation
                  </div>
                  <div>
                    <span className="font-medium">622 CE:</span> Hijra to Medina
                  </div>
                  <div>
                    <span className="font-medium">630 CE:</span> Conquest of
                    Mecca
                  </div>
                  <div>
                    <span className="font-medium">632 CE:</span> Death of
                    Muhammad (PBUH)
                  </div>
                  <div>
                    <span className="font-medium">750 CE:</span> Abbasid
                    Revolution
                  </div>
                  <div>
                    <span className="font-medium">1095–1291 CE:</span> Crusades
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Geographical Data */}
          <TabsContent value="geographical" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Global Distribution (by continent)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Asia-Pacific
                    </span>
                    <span className="font-semibold text-green-600">~62%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Middle East & North Africa
                    </span>
                    <span className="font-semibold text-green-600">~20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Sub-Saharan Africa
                    </span>
                    <span className="font-semibold text-green-600">~15%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Europe
                    </span>
                    <span className="font-semibold text-green-600">~3%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top 5 Countries (estimates)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Indonesia
                    </span>
                    <span className="font-semibold">~230M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Pakistan
                    </span>
                    <span className="font-semibold">~200M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      India
                    </span>
                    <span className="font-semibold">~195M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Bangladesh
                    </span>
                    <span className="font-semibold">~150M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Nigeria
                    </span>
                    <span className="font-semibold">~100M</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* References */}
        <Separator className="my-8" />
        <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            References
          </h3>
          <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
            <p>
              •{" "}
              <a
                href="https://www.pewresearch.org/religion/2011/01/27/the-future-of-the-global-muslim-population/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Pew Research Center – Future of the Global Muslim Population
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://www.britannica.com/topic/Islam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Encyclopedia Britannica – Islam
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://ourworldindata.org/religion"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Our World in Data – Religion
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://population.un.org/wpp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                United Nations – World Population Prospects
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IslamPage;
