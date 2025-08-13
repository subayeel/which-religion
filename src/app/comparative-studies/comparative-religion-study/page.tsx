/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { religionComparisonData, comparisonParameters } from "@/utils/data";
import { X, Plus, Eye, EyeOff, Filter } from "lucide-react";

export default function ReligionComparisonPage() {
  const [selectedReligions, setSelectedReligions] = useState<string[]>([]);
  const [visibleParameters, setVisibleParameters] = useState<string[]>(
    comparisonParameters.slice(0, 8).map((p) => p.id) // Show first 8 parameters by default
  );
  const [showParameterFilter, setShowParameterFilter] = useState(false);

  // Initialize with first two religions for demo
  useEffect(() => {
    setSelectedReligions(["islam", "christianity"]);
  }, []);

  const handleReligionToggle = (religionId: string) => {
    setSelectedReligions((prev) => {
      if (prev.includes(religionId)) {
        return prev.filter((id) => id !== religionId);
      } else if (prev.length < 4) {
        // Limit to 4 comparisons like Apple
        return [...prev, religionId];
      }
      return prev;
    });
  };

  const handleParameterToggle = (parameterId: string) => {
    setVisibleParameters((prev) => {
      if (prev.includes(parameterId)) {
        return prev.filter((id) => id !== parameterId);
      } else {
        return [...prev, parameterId];
      }
    });
  };

  const selectedReligionData = selectedReligions.map(
    (id) => religionComparisonData.find((r) => r.id === id)!
  );

  const groupedParameters = comparisonParameters.reduce((acc, param) => {
    if (!acc[param.category]) {
      acc[param.category] = [];
    }
    acc[param.category].push(param);
    return acc;
  }, {} as Record<string, typeof comparisonParameters>);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Compare Religions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Compare up to 4 religions side by side. Select the belief systems
              you want to analyze and explore their key differences and
              similarities.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Religion Selection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Select Religions to Compare
              <Badge variant="secondary">{selectedReligions.length}/4</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {religionComparisonData.map((religion) => {
                const isSelected = selectedReligions.includes(religion.id);
                const isDisabled = !isSelected && selectedReligions.length >= 4;

                return (
                  <Button
                    key={religion.id}
                    variant={isSelected ? "default" : "outline"}
                    className={`h-auto p-4 flex flex-col items-center gap-2 ${
                      isDisabled ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={() =>
                      !isDisabled && handleReligionToggle(religion.id)
                    }
                    disabled={isDisabled}
                  >
                    {React.createElement(religion.icon as any, {
                      className: "h-6 w-6",
                    })}
                    <span className="text-sm font-medium text-center">
                      {religion.name}
                    </span>
                    {isSelected && (
                      <X className="h-4 w-4 absolute top-1 right-1" />
                    )}
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Parameter Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Comparison Parameters
                <Badge variant="secondary">
                  {visibleParameters.length}/{comparisonParameters.length}
                </Badge>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowParameterFilter(!showParameterFilter)}
              >
                {showParameterFilter ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
                {showParameterFilter ? "Hide" : "Show"} Filters
              </Button>
            </CardTitle>
          </CardHeader>
          {showParameterFilter && (
            <CardContent>
              <div className="space-y-6">
                {Object.entries(groupedParameters).map(([category, params]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-3">
                      {category}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {params.map((param) => (
                        <div
                          key={param.id}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={param.id}
                            checked={visibleParameters.includes(param.id)}
                            onCheckedChange={() =>
                              handleParameterToggle(param.id)
                            }
                          />
                          <label
                            htmlFor={param.id}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {param.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          )}
        </Card>

        {/* Comparison Table */}
        {selectedReligions.length > 0 && (
          <Card className="overflow-x-auto">
            <CardHeader>
              <CardTitle>Comparison Results</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="min-w-full">
                <table className="w-full">
                  {/* Header with religion names */}
                  <thead className="sticky top-0 bg-white dark:bg-gray-800 border-b">
                    <tr>
                      <th className="text-left p-4 w-48 font-semibold text-gray-900 dark:text-white">
                        Parameter
                      </th>
                      {selectedReligionData.map((religion) => (
                        <th
                          key={religion.id}
                          className="text-center p-4 min-w-[280px] border-l"
                        >
                          <div className="flex flex-col items-center gap-2">
                            {React.createElement(religion.icon as any, {
                              className: "h-8 w-8 text-blue-600",
                            })}
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {religion.name}
                            </span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {visibleParameters.map((paramId) => {
                      const param = comparisonParameters.find(
                        (p) => p.id === paramId
                      )!;
                      return (
                        <tr
                          key={paramId}
                          className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50"
                        >
                          <td className="p-4 font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800/50">
                            <div>
                              <div className="font-semibold">{param.label}</div>
                              <div className="text-xs text-gray-500 mt-1">
                                {param.category}
                              </div>
                            </div>
                          </td>
                          {selectedReligionData.map((religion) => (
                            <td
                              key={religion.id}
                              className="p-4 border-l align-top"
                            >
                              <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                {
                                  religion.parameters[
                                    paramId as keyof typeof religion.parameters
                                  ]
                                }
                              </div>
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {selectedReligions.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <div className="text-gray-500 dark:text-gray-400">
                <Filter className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-semibold mb-2">
                  No Religions Selected
                </h3>
                <p>
                  Choose at least one religion from the selection above to start
                  comparing.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
