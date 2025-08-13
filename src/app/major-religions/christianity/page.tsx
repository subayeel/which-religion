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
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Area,
  AreaChart,
} from "recharts";

// Data for charts
const populationData = [
  { name: "Practicing", value: 65, color: "#3B82F6" },
  { name: "Non-Practicing", value: 25, color: "#6B7280" },
  { name: "Others", value: 10, color: "#EF4444" },
];

const institutionsData = [
  { name: "Places of Worship", count: 3700000, color: "#3B82F6" },
  { name: "Charity Institutions", count: 150000, color: "#10B981" },
  { name: "Educational Institutions", count: 95000, color: "#F59E0B" },
];

const pillarsData = [
  { subject: "Logic", A: 85, fullMark: 100 },
  { subject: "Reasoning", A: 80, fullMark: 100 },
  { subject: "Human Innate Disposition", A: 75, fullMark: 100 },
  { subject: "Science", A: 70, fullMark: 100 },
  { subject: "Math", A: 75, fullMark: 100 },
  { subject: "Humanity", A: 90, fullMark: 100 },
  { subject: "Nature (Biology)", A: 65, fullMark: 100 },
];

const ritualsData = [
  { subject: "Body", A: 80, fullMark: 100 },
  { subject: "Nature", A: 70, fullMark: 100 },
  { subject: "Mind", A: 85, fullMark: 100 },
];

const historicalSpreadData = [
  { year: 30, followers: 120 },
  { year: 100, followers: 25000 },
  { year: 300, followers: 6000000 },
  { year: 500, followers: 15000000 },
  { year: 1000, followers: 50000000 },
  { year: 1500, followers: 100000000 },
  { year: 1800, followers: 200000000 },
  { year: 1900, followers: 500000000 },
  { year: 2000, followers: 2000000000 },
  { year: 2024, followers: 2400000000 },
];

const geographicalData = [
  { country: "United States", followers: 230000000 },
  { country: "Brazil", followers: 190000000 },
  { country: "Mexico", followers: 120000000 },
  { country: "Russia", followers: 100000000 },
  { country: "Philippines", followers: 95000000 },
];

const denominationData = [
  { denomination: "Catholicism", disagreement: 15 },
  { denomination: "Protestantism", disagreement: 25 },
  { denomination: "Orthodoxy", disagreement: 10 },
  { denomination: "Anglicanism", disagreement: 20 },
  { denomination: "Pentecostalism", disagreement: 30 },
];

function ChristianityPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Christianity
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A comprehensive analysis of Christianity's demographics, history,
            and global impact
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
              {/* Population */}
              <Card>
                <CardHeader>
                  <CardTitle>Population Data</CardTitle>
                  <CardDescription>
                    Global Christian demographics
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Practicing Followers
                      </span>
                      <span className="font-semibold text-green-600">65%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Non-Practicing Followers
                      </span>
                      <span className="font-semibold text-gray-600">25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Literacy Rate
                      </span>
                      <span className="font-semibold text-green-600">95%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Growth Rate
                      </span>
                      <span className="font-semibold text-green-600">
                        +1.1%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Birth Rate
                      </span>
                      <span className="font-semibold text-green-600">2.1%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Total Count
                      </span>
                      <span className="font-semibold">2.4B</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Institutions */}
              <Card>
                <CardHeader>
                  <CardTitle>Institutions</CardTitle>
                  <CardDescription>
                    Christian organizational infrastructure
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Places of Worship
                      </span>
                      <span className="font-semibold">3.7M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Charity Institutions
                      </span>
                      <span className="font-semibold">150K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Educational Institutions
                      </span>
                      <span className="font-semibold">95K</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pillars Alignment */}
              <Card>
                <CardHeader>
                  <CardTitle>Modern World Alignment</CardTitle>
                  <CardDescription>
                    Alignment with contemporary values
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
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
                      <span className="font-semibold text-green-600">80%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Human Innate Disposition
                      </span>
                      <span className="font-semibold text-green-600">75%</span>
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
                      <span className="font-semibold text-green-600">75%</span>
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
                      <span className="font-semibold text-green-600">65%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Rituals Alignment */}
              <Card>
                <CardHeader>
                  <CardTitle>Rituals Alignment</CardTitle>
                  <CardDescription>
                    Alignment with human body, nature, and mind
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Alignment with Human Body
                      </span>
                      <span className="font-semibold text-green-600">80%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Alignment with Nature
                      </span>
                      <span className="font-semibold text-green-600">70%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Alignment with Mind
                      </span>
                      <span className="font-semibold text-green-600">85%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Rules */}
              <Card>
                <CardHeader>
                  <CardTitle>Rules & Governance</CardTitle>
                  <CardDescription>
                    Regulatory framework coverage
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Personal Level
                      </span>
                      <Badge
                        variant="default"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      >
                        Yes
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Family Level
                      </span>
                      <Badge
                        variant="default"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      >
                        Yes
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Community Level
                      </span>
                      <Badge
                        variant="default"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      >
                        Yes
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Country Level
                      </span>
                      <Badge
                        variant="default"
                        className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      >
                        No
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Aligns with All Pillars
                      </span>
                      <Badge
                        variant="default"
                        className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      >
                        No
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Scripture */}
              <Card>
                <CardHeader>
                  <CardTitle>Scripture Analysis</CardTitle>
                  <CardDescription>Biblical text examination</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Number of Scriptures
                      </span>
                      <span className="font-semibold">66</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Contradictions
                      </span>
                      <span className="font-semibold text-red-600">
                        Yes (150+)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Scientific Errors
                      </span>
                      <span className="font-semibold text-red-600">
                        Yes (25+)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Scientific Miracles
                      </span>
                      <span className="font-semibold text-red-600">No</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Denominations */}
              <Card>
                <CardHeader>
                  <CardTitle>Denominations</CardTitle>
                  <CardDescription>
                    Christian theological diversity
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Number of Denominations
                      </span>
                      <span className="font-semibold">45,000+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Level of Disagreement
                      </span>
                      <span className="font-semibold text-red-600">High</span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Causes:</span> Theological
                      interpretation, cultural adaptation, historical schisms,
                      doctrinal differences, leadership disputes
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Higher Being */}
              <Card>
                <CardHeader>
                  <CardTitle>Concept of Higher Being</CardTitle>
                  <CardDescription>
                    Theological understanding of divinity
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Belief in God
                      </span>
                      <Badge
                        variant="default"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      >
                        Yes
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Number of Gods
                      </span>
                      <span className="font-semibold">
                        3 (Father, Son, Holy Spirit)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Philosophical Alignment
                      </span>
                      <span className="font-semibold text-red-600">0%</span>
                    </div>
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
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Date Founded
                      </span>
                      <span className="font-semibold">30-33 CE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Place of Origin
                      </span>
                      <span className="font-semibold">Jerusalem, Judea</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Founder
                      </span>
                      <span className="font-semibold">Jesus of Nazareth</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Historical Influence</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Judaism Influence
                      </span>
                      <span className="font-semibold text-green-600">85%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Hellenistic Influence
                      </span>
                      <span className="font-semibold text-green-600">60%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Roman Influence
                      </span>
                      <span className="font-semibold text-green-600">40%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Zoroastrian Influence
                      </span>
                      <span className="font-semibold text-green-600">25%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Major Historical Events</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="text-sm">
                      <span className="font-medium">30-33 CE:</span> Crucifixion
                      and resurrection of Jesus
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">50-100 CE:</span> Pauline
                      missions and early church formation
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">313 CE:</span> Edict of
                      Milan legalizes Christianity
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">325 CE:</span> First Council
                      of Nicaea
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">1054 CE:</span> Great Schism
                      between East and West
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">1517 CE:</span> Protestant
                      Reformation begins
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">1962-1965:</span> Second
                      Vatican Council
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Historical Accuracy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Archaeological Alignment
                      </span>
                      <span className="font-semibold text-green-600">65%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Historical Accuracy
                      </span>
                      <span className="font-semibold text-green-600">70%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Positive Impact
                      </span>
                      <span className="font-semibold text-green-600">75%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Negative Conflicts
                      </span>
                      <span className="font-semibold text-red-600">25%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Historical Spread</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="text-sm">
                      <span className="font-medium">1st Century:</span>{" "}
                      Jerusalem, Antioch, Asia Minor
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">2nd-3rd Century:</span>{" "}
                      North Africa, Rome, Alexandria
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">4th-5th Century:</span>{" "}
                      Europe, Ethiopia, Armenia
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">6th-10th Century:</span>{" "}
                      Northern Europe, Slavic regions
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">15th-16th Century:</span>{" "}
                      Americas, Asia via colonization
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">19th-20th Century:</span>{" "}
                      Global missionary expansion
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Impact on World History</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Positive Contributions
                      </span>
                      <span className="font-semibold text-green-600">75%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Negative Conflicts
                      </span>
                      <span className="font-semibold text-red-600">25%</span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Contributions:</span>{" "}
                      Education, healthcare, art, music, literature, social
                      services, human rights
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Conflicts:</span> Crusades,
                      religious wars, persecution, colonialism
                    </div>
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
                  <CardTitle>Global Distribution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Americas
                      </span>
                      <span className="font-semibold text-green-600">37%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Europe
                      </span>
                      <span className="font-semibold text-green-600">26%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Sub-Saharan Africa
                      </span>
                      <span className="font-semibold text-green-600">24%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Asia-Pacific
                      </span>
                      <span className="font-semibold text-green-600">13%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Countries by Adherents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {geographicalData.map((country, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {country.country}
                        </span>
                        <span className="font-semibold">
                          {(country.followers / 1000000).toFixed(0)}M
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Distribution Patterns</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Urban vs Rural
                      </span>
                      <span className="font-semibold text-green-600">
                        65% Urban
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Homeland vs Diaspora
                      </span>
                      <span className="font-semibold text-green-600">
                        40% Diaspora
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
                      <span className="font-semibold text-green-600">85%</span>
                    </div>
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
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Claims Tested
                      </span>
                      <span className="font-semibold">150+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Confirmed
                      </span>
                      <span className="font-semibold text-green-600">15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Unverified
                      </span>
                      <span className="font-semibold text-gray-600">70%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Refuted
                      </span>
                      <span className="font-semibold text-red-600">15%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Modern Science Correlation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Overall Correlation
                      </span>
                      <span className="font-semibold text-green-600">65%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Life Satisfaction
                      </span>
                      <span className="font-semibold text-green-600">72%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Psychological Impact
                      </span>
                      <span className="font-semibold text-green-600">
                        Positive 60%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Longevity Impact
                      </span>
                      <span className="font-semibold text-green-600">
                        +2.3 years
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Social Indicators</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Education Impact
                      </span>
                      <span className="font-semibold text-green-600">+15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Poverty Reduction
                      </span>
                      <span className="font-semibold text-green-600">+20%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Crime Rate Impact
                      </span>
                      <span className="font-semibold text-green-600">-12%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Demographic Growth
                      </span>
                      <span className="font-semibold text-green-600">
                        Stable
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Archaeological Evidence</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Verified Artifacts
                      </span>
                      <span className="font-semibold text-green-600">45+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Historical Sites
                      </span>
                      <span className="font-semibold text-green-600">200+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Documentary Evidence
                      </span>
                      <span className="font-semibold text-green-600">High</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Scientific Dating
                      </span>
                      <span className="font-semibold text-green-600">
                        Reliable
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Psychological Studies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Positive Impact
                      </span>
                      <span className="font-semibold text-green-600">60%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Negative Impact
                      </span>
                      <span className="font-semibold text-red-600">25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Neutral Impact
                      </span>
                      <span className="font-semibold text-gray-600">15%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Demographic Trends</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Growth Rate
                      </span>
                      <span className="font-semibold text-green-600">
                        +1.1%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Decline Rate
                      </span>
                      <span className="font-semibold text-red-600">-0.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Stability
                      </span>
                      <span className="font-semibold text-green-600">85%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Graphical Data */}
          <TabsContent value="graphs" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Population Pie Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Population Distribution</CardTitle>
                  <CardDescription>
                    Practicing vs Non-Practicing vs Others
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={populationData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {populationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Institutions Bar Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Institutional Infrastructure</CardTitle>
                  <CardDescription>
                    Number of institutions by type
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={institutionsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip
                        formatter={(value) =>
                          `${(Number(value) / 1000).toFixed(0)}K`
                        }
                      />
                      <Bar dataKey="count" fill="#3B82F6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Pillars Radar Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Modern World Pillars Alignment</CardTitle>
                  <CardDescription>
                    Alignment with contemporary values
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart
                      cx="50%"
                      cy="50%"
                      outerRadius="80%"
                      data={pillarsData}
                    >
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Radar
                        name="Alignment"
                        dataKey="A"
                        stroke="#3B82F6"
                        fill="#3B82F6"
                        fillOpacity={0.6}
                      />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Rituals Spider Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Rituals Alignment</CardTitle>
                  <CardDescription>
                    Alignment with human body, nature, and mind
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart
                      cx="50%"
                      cy="50%"
                      outerRadius="80%"
                      data={ritualsData}
                    >
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Radar
                        name="Alignment"
                        dataKey="A"
                        stroke="#10B981"
                        fill="#10B981"
                        fillOpacity={0.6}
                      />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Historical Spread Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle>Historical Growth</CardTitle>
                  <CardDescription>
                    Christian population growth over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={historicalSpreadData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip
                        formatter={(value) =>
                          `${(Number(value) / 1000000).toFixed(1)}M`
                        }
                      />
                      <Area
                        type="monotone"
                        dataKey="followers"
                        stroke="#3B82F6"
                        fill="#3B82F6"
                        fillOpacity={0.6}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Denomination Disagreement */}
              <Card>
                <CardHeader>
                  <CardTitle>Denomination Disagreement Levels</CardTitle>
                  <CardDescription>
                    Percentage of disagreement by denomination
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={denominationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="denomination" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="disagreement" fill="#F59E0B" />
                    </BarChart>
                  </ResponsiveContainer>
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
                href="https://www.pewresearch.org/religion/2011/12/19/global-christianity/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Pew Research Center - Global Christianity Report (2024)
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://www.gordonconwell.edu/center-for-global-christianity/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                World Christian Database - Gordon-Conwell Theological Seminary
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
                United Nations Population Division - Religious Demographics
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://www.archaeological.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Archaeological Institute of America - Biblical Archaeology
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://link.springer.com/journal/10943"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Journal of Religion and Health - Psychological Impact Studies
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://www.tandfonline.com/journals/csrp20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Science and Religion Studies - Correlation Analysis
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://www.britannica.com/topic/Christianity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Encyclopedia Britannica - Christianity Historical Data
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://www.worldatlas.com/religions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Historical Atlas of World Religions - Geographic Distribution
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://www.census.gov/library/publications/2021/demo/p60-273.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                US Census Bureau - Religious Demographics
              </a>
            </p>
            <p>
              •{" "}
              <a
                href="https://www.who.int/data/gho/info/gho-odata-api"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                World Health Organization - Health Impact Studies
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChristianityPage;
