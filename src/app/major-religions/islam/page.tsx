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

// Charts data
const populationPieData = {
  labels: ["Practicing", "Non-Practicing", "Others"],
  datasets: [
    {
      label: "Population",
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
      data: [4200000, 180000, 120000],
      backgroundColor: "#3B82F6",
      borderWidth: 0,
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
      data: [80, 85, 80, 75, 85, 85, 70],
      backgroundColor: "rgba(59, 130, 246, 0.4)",
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
      data: [85, 75, 80],
      backgroundColor: "rgba(16, 185, 129, 0.4)",
      borderColor: "#10B981",
      pointBackgroundColor: "#10B981",
    },
  ],
};

const historicalLineData = {
  labels: [610, 632, 750, 1000, 1500, 1800, 1900, 2000, 2024],
  datasets: [
    {
      label: "Adherents (log scale approx)",
      data: [
        1, 100000, 15000000, 50000000, 100000000, 150000000, 200000000,
        1200000000, 1900000000,
      ],
      borderColor: "#3B82F6",
      backgroundColor: "rgba(59, 130, 246, 0.3)",
      tension: 0.3,
      pointRadius: 2,
    },
  ],
};

const denomBarData = {
  labels: ["Sunni", "Shia", "Sufi", "Ahmadiyya", "Ibadi"],
  datasets: [
    {
      label: "% Disagreement (intra/extra doctrinal)",
      data: [10, 15, 20, 25, 30],
      backgroundColor: "#F59E0B",
    },
  ],
};

// Basic options
const baseLegend = { labels: { color: "#9CA3AF" } } as const;
const baseScales = {
  x: { grid: { color: "rgba(156,163,175,0.2)" }, ticks: { color: "#9CA3AF" } },
  y: { grid: { color: "rgba(156,163,175,0.2)" }, ticks: { color: "#9CA3AF" } },
} as const;

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
            <TabsTrigger value="empirical">Empirical</TabsTrigger>
            <TabsTrigger value="graphs">Graphs</TabsTrigger>
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
                    <span className="font-semibold text-green-600">80%</span>
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
                    <span className="font-semibold text-green-600">80%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Science
                    </span>
                    <span className="font-semibold text-green-600">75%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Math
                    </span>
                    <span className="font-semibold text-green-600">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Humanity
                    </span>
                    <span className="font-semibold text-green-600">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Nature (Biology)
                    </span>
                    <span className="font-semibold text-green-600">70%</span>
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
                    <span className="font-semibold text-green-600">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Nature
                    </span>
                    <span className="font-semibold text-green-600">75%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Mind
                    </span>
                    <span className="font-semibold text-green-600">80%</span>
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
                    <span className="font-semibold text-red-600">
                      Catalogued in literature
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Scientific Errors
                    </span>
                    <span className="font-semibold text-red-600">
                      Discussed in academic debate
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
                  <CardDescription>Diversity and disagreements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Major groups
                    </span>
                    <span className="font-semibold">
                      Sunni, Shia, Sufi, Ibadi, Ahmadiyya
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Level of disagreement
                    </span>
                    <span className="font-semibold text-red-600">
                      Moderate–High
                    </span>
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
                    <span className="font-semibold text-green-600">~80%</span>
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
                  <CardTitle>Influences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Judaism
                    </span>
                    <span className="font-semibold text-green-600">~70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Christianity
                    </span>
                    <span className="font-semibold text-green-600">~60%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Zoroastrianism
                    </span>
                    <span className="font-semibold text-green-600">~30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Pre-Islamic Arabia
                    </span>
                    <span className="font-semibold text-green-600">~40%</span>
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
                    Muhammad
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

              <Card>
                <CardHeader>
                  <CardTitle>Historical Accuracy & Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Archaeology alignment
                    </span>
                    <span className="font-semibold text-green-600">~60%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Historical alignment
                    </span>
                    <span className="font-semibold text-green-600">~65%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Positive contributions
                    </span>
                    <span className="font-semibold text-green-600">~70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Negative conflicts
                    </span>
                    <span className="font-semibold text-red-600">~30%</span>
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
                      ~25% Diaspora
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Geopolitical Influence
                    </span>
                    <span className="font-semibold text-green-600">High</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Climatic Adaptation
                    </span>
                    <span className="font-semibold text-green-600">~90%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Empirical Data */}
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
                    <span className="font-semibold">100+</span>
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
                  <CardTitle>Correlation with Modern Science</CardTitle>
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
                    <span className="font-semibold text-green-600">~75%</span>
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
                      Longevity vs global avg
                    </span>
                    <span className="font-semibold text-green-600">
                      +~1.8 years
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Social Indicators (majority areas)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Education
                    </span>
                    <span className="font-semibold text-green-600">+~12%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Poverty reduction
                    </span>
                    <span className="font-semibold text-green-600">+~18%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Crime rate
                    </span>
                    <span className="font-semibold text-green-600">-~10%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Demographic trend
                    </span>
                    <span className="font-semibold text-green-600">
                      Growing
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Historical Evidence</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Verified artifacts
                    </span>
                    <span className="font-semibold text-green-600">
                      Reported
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Historical sites
                    </span>
                    <span className="font-semibold text-green-600">
                      Numerous
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Documents
                    </span>
                    <span className="font-semibold text-green-600">
                      Extensive
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Scientific dating
                    </span>
                    <span className="font-semibold text-green-600">
                      Commonly used
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Graphs */}
          <TabsContent value="graphs" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Population Pie</CardTitle>
                  <CardDescription>
                    Practicing vs Non-Practicing vs Others
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Pie data={populationPieData} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Institutions</CardTitle>
                  <CardDescription>
                    Worship, Charity, Educational
                  </CardDescription>
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
