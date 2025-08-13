import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Scale, Sparkles } from "lucide-react";
import Link from "next/link";
import { comparativeStudies } from "@/utils/data";

export default function ComparativeStudiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-white dark:bg-gray-800 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comparative Studies & Analysis
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              Explore the similarities, differences, and connections between
              world religions through comprehensive comparative analysis. Use
              our interactive tools to understand how belief systems relate to
              each other.
            </p>

            {/* Featured Tool */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Scale className="h-8 w-8 text-blue-600" />
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800"
                >
                  <Sparkles className="h-3 w-3 mr-1" />
                  Featured Tool
                </Badge>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Religion Comparison Tool
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Compare up to 4 religions side by side across 15 comprehensive
                parameters. Inspired by Apple's comparison interface for clear,
                organized analysis.
              </p>
              <Button size="lg" asChild>
                <Link href="/comparative-studies/comparative-religion-study">
                  Start Comparing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {comparativeStudies.map((study, index) => (
            <Card
              key={study.title}
              className="hover:shadow-lg transition-all duration-200 group"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                    <study.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </span>
                  {index === 0 && (
                    <Badge variant="secondary" className="ml-auto">
                      Interactive
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    {index === 0 &&
                      "Compare multiple religions side-by-side with detailed parameter analysis. Apple-inspired interface for clear comparison."}
                    {index === 1 &&
                      "Discover the common threads that unite different religious traditions across cultures and time periods."}
                    {index === 2 &&
                      "Understand the different ways religions can be categorized and classified in academic study."}
                    {index === 3 &&
                      "Explore statistical correlations and real-world case studies in religious demographics and behavior."}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/10"
                    asChild
                  >
                    <Link href={study.url}>
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="py-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Academic Approach
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Our comparative studies follow rigorous academic standards,
                presenting objective information about world religions without
                bias. All data is sourced from scholarly research and
                established academic institutions.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline">Objective Analysis</Badge>
                <Badge variant="outline">Academic Sources</Badge>
                <Badge variant="outline">Interfaith Understanding</Badge>
                <Badge variant="outline">Cultural Sensitivity</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
