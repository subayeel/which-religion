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
import { Pie, Bar, Radar, Line } from "react-chartjs-2";

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

const totals = {
  practicingPct: 60,
  nonPracticingPct: 35,
  othersPct: 5,
  literacyPct: 90,
  growthPct: 0.9,
  birthPct: 1.8,
  totalCount: 0.52,
};

const populationPieData = {
  labels: ["Practicing", "Non-Practicing", "Others"],
  datasets: [
    {
      data: [totals.practicingPct, totals.nonPracticingPct, totals.othersPct],
      backgroundColor: ["#10B981", "#6B7280", "#EF4444"],
      borderWidth: 0,
    },
  ],
};
const institutionsBarData = {
  labels: ["Places of Worship", "Charity", "Educational"],
  datasets: [
    {
      label: "Count",
      data: [500000, 60000, 50000],
      backgroundColor: "#3B82F6",
    },
  ],
};
const pillarsRadarData = {
  labels: [
    "Logic",
    "Reasoning",
    "Human Innate Disposition",
    "Science",
    "Math",
    "Humanity",
    "Nature (Biology)",
  ],
  datasets: [
    {
      label: "Alignment",
      data: [85, 85, 90, 70, 70, 90, 80],
      backgroundColor: "rgba(59,130,246,0.4)",
      borderColor: "#3B82F6",
      pointBackgroundColor: "#3B82F6",
    },
  ],
};
const ritualsRadarData = {
  labels: ["Body", "Nature", "Mind"],
  datasets: [
    {
      label: "Alignment",
      data: [75, 70, 90],
      backgroundColor: "rgba(16,185,129,0.4)",
      borderColor: "#10B981",
      pointBackgroundColor: "#10B981",
    },
  ],
};
const historicalLineData = {
  labels: ["-500", "0", "500", "1000", "1500", "1900", "2024"],
  datasets: [
    {
      label: "Adherents (approx)",
      data: [
        1000000, 5000000, 20000000, 30000000, 80000000, 150000000, 520000000,
      ],
      borderColor: "#3B82F6",
      backgroundColor: "rgba(59,130,246,0.3)",
      tension: 0.3,
    },
  ],
};
const denomBarData = {
  labels: ["Theravada", "Mahayana", "Vajrayana"],
  datasets: [
    { label: "% Disagreement", data: [20, 20, 25], backgroundColor: "#F59E0B" },
  ],
};

const baseLegend = { labels: { color: "#9CA3AF" } } as const;
const baseScales = {
  x: { grid: { color: "rgba(156,163,175,0.2)" }, ticks: { color: "#9CA3AF" } },
  y: { grid: { color: "rgba(156,163,175,0.2)" }, ticks: { color: "#9CA3AF" } },
} as const;

export default function BuddhismPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Buddhism
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A comprehensive analysis of Buddhism's demographics, history, and
            global impact
          </p>
        </div>

        <Tabs defaultValue="analytical" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="analytical">Analytical</TabsTrigger>
            <TabsTrigger value="historical">Historical</TabsTrigger>
            <TabsTrigger value="geographical">Geographical</TabsTrigger>
            <TabsTrigger value="empirical">Empirical</TabsTrigger>
            <TabsTrigger value="graphs">Graphs</TabsTrigger>
          </TabsList>

          <TabsContent value="analytical" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Population Data</CardTitle>
                  <CardDescription>
                    Global Buddhist demographics
                  </CardDescription>
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
                    Temples, charities, education
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Temples
                    </span>
                    <span className="font-semibold">500K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Charity Institutions
                    </span>
                    <span className="font-semibold">60K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Educational Institutions
                    </span>
                    <span className="font-semibold">50K</span>
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
                    <span className="font-semibold text-green-600">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Reasoning
                    </span>
                    <span className="font-semibold text-green-600">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Human Innate Disposition
                    </span>
                    <span className="font-semibold text-green-600">90%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Science
                    </span>
                    <span className="font-semibold text-green-600">70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Math
                    </span>
                    <span className="font-semibold text-green-600">70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Humanity
                    </span>
                    <span className="font-semibold text-green-600">90%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Nature (Biology)
                    </span>
                    <span className="font-semibold text-green-600">80%</span>
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
                    <span className="font-semibold text-green-600">75%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Nature
                    </span>
                    <span className="font-semibold text-green-600">70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Mind
                    </span>
                    <span className="font-semibold text-green-600">90%</span>
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
                    <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                      Partial
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
                  <CardDescription>Texts and evaluations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Number of Scriptures
                    </span>
                    <span className="font-semibold">
                      Tripitaka (Pali Canon), Mahayana Sutras, Tantras
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Contradictions
                    </span>
                    <span className="font-semibold text-red-600">
                      Discussed
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Scientific Errors
                    </span>
                    <span className="font-semibold text-red-600">
                      Discussed
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Scientific Miracles
                    </span>
                    <span className="font-semibold text-gray-600">
                      Unverified
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Denominations</CardTitle>
                  <CardDescription>Diversity & disagreements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Major groups
                    </span>
                    <span className="font-semibold">
                      Theravada, Mahayana, Vajrayana
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Level of disagreement
                    </span>
                    <span className="font-semibold text-red-600">Moderate</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Concept of Higher Being</CardTitle>
                  <CardDescription>Core philosophical stance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Belief in God
                    </span>
                    <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                      No (non-theistic)
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Number of Gods
                    </span>
                    <span className="font-semibold">Not central</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Philosophical alignment
                    </span>
                    <span className="font-semibold text-green-600">~85%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

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
                    <span className="font-semibold">5th century BCE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Place of Origin
                    </span>
                    <span className="font-semibold">Northern India/Nepal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Founder
                    </span>
                    <span className="font-semibold">
                      Siddhartha Gautama (Buddha)
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Influences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Upanishadic thought
                    </span>
                    <span className="font-semibold text-green-600">High</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Sramana movements
                    </span>
                    <span className="font-semibold text-green-600">High</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Regional cultures
                    </span>
                    <span className="font-semibold text-green-600">High</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Major Historical Events</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <div>
                    <span className="font-medium">3rd c. BCE:</span> Ashokan
                    patronage
                  </div>
                  <div>
                    <span className="font-medium">1st–5th c. CE:</span> Mahayana
                    expansion
                  </div>
                  <div>
                    <span className="font-medium">7th–12th c. CE:</span>{" "}
                    Vajrayana development
                  </div>
                  <div>
                    <span className="font-medium">19th–20th c.:</span> Global
                    transmission
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Historical Accuracy & Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Archaeology alignment
                    </span>
                    <span className="font-semibold text-green-600">~70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Historical alignment
                    </span>
                    <span className="font-semibold text-green-600">~75%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Positive contributions
                    </span>
                    <span className="font-semibold text-green-600">~80%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Negative conflicts
                    </span>
                    <span className="font-semibold text-red-600">~20%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="geographical" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Global Distribution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      East/Southeast Asia
                    </span>
                    <span className="font-semibold text-green-600">~95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      South Asia
                    </span>
                    <span className="font-semibold text-green-600">~4%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Rest of world
                    </span>
                    <span className="font-semibold text-green-600">~1%</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Top 5 Countries</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      China
                    </span>
                    <span className="font-semibold">~244M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Thailand
                    </span>
                    <span className="font-semibold">~64M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Japan
                    </span>
                    <span className="font-semibold">~45M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Myanmar
                    </span>
                    <span className="font-semibold">~38M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Sri Lanka
                    </span>
                    <span className="font-semibold">~15M</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Patterns</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Urban vs Rural
                    </span>
                    <span className="font-semibold text-green-600">
                      ~60% Urban
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Homeland vs Diaspora
                    </span>
                    <span className="font-semibold text-green-600">
                      ~5% Diaspora
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Geopolitical Influence
                    </span>
                    <span className="font-semibold text-green-600">Medium</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Climatic Adaptation
                    </span>
                    <span className="font-semibold text-green-600">High</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="empirical" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Scientific Testability</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Claims tested
                    </span>
                    <span className="font-semibold">80+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      % confirmed
                    </span>
                    <span className="font-semibold text-green-600">~20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      % unverified
                    </span>
                    <span className="font-semibold text-gray-600">~65%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      % refuted
                    </span>
                    <span className="font-semibold text-red-600">~15%</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Correlation with Science</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Overall correlation
                    </span>
                    <span className="font-semibold text-green-600">~70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Life satisfaction
                    </span>
                    <span className="font-semibold text-green-600">~72%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Psychological impact
                    </span>
                    <span className="font-semibold text-green-600">
                      Positive ~65%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Longevity
                    </span>
                    <span className="font-semibold text-green-600">
                      ~+1.5 years
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="graphs" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Population Pie</CardTitle>
                </CardHeader>
                <CardContent>
                  <Pie data={populationPieData} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Institutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Bar
                    data={institutionsBarData}
                    options={{
                      plugins: { legend: baseLegend },
                      scales: baseScales,
                    }}
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pillars Alignment</CardTitle>
                </CardHeader>
                <CardContent>
                  <Radar data={pillarsRadarData} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Rituals Alignment</CardTitle>
                </CardHeader>
                <CardContent>
                  <Radar data={ritualsRadarData} />
                </CardContent>
              </Card>
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Historical Spread Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <Line
                    data={historicalLineData}
                    options={{
                      plugins: { legend: baseLegend },
                      scales: baseScales,
                    }}
                  />
                </CardContent>
              </Card>
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Denomination Disagreement</CardTitle>
                </CardHeader>
                <CardContent>
                  <Bar
                    data={denomBarData}
                    options={{
                      plugins: { legend: baseLegend },
                      scales: baseScales,
                    }}
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <Separator className="my-8" />
        <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            References
          </h3>
          <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
            <p>
              •{" "}
              <a
                href="https://www.pewresearch.org/religion/2012/12/18/global-religious-landscape-exec/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                Pew – Global Religious Landscape
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://www.britannica.com/topic/Buddhism"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                Encyclopedia Britannica – Buddhism
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://ourworldindata.org/religion"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline"
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
                className="text-blue-600 dark:text-blue-400 underline"
              >
                UN – World Population Prospects
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
