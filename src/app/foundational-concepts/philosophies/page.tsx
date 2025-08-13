/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { philosophies } from "@/utils/data";
import { Badge } from "@/components/ui/badge";
import { Users, Lightbulb, BookOpen } from "lucide-react";

function Philosophies() {
  // Group philosophies by type/category for better organization
  const ethicsPhilosophies = philosophies.filter((p) =>
    [
      "Utilitarianism",
      "Consequentialism",
      "Ethics",
      "Virtue Ethics",
      "Deontological Ethics",
    ].includes(p.title)
  );

  const epistemologyPhilosophies = philosophies.filter((p) =>
    [
      "Rationalism",
      "Empiricism",
      "Epistemology",
      "Logical Positivism",
      "Pragmatism",
    ].includes(p.title)
  );

  const existentialPhilosophies = philosophies.filter((p) =>
    [
      "Existentialism",
      "Absurdism",
      "Nihilism",
      "Stoicism",
      "Phenomenology",
    ].includes(p.title)
  );

  const metaphysicsPhilosophies = philosophies.filter((p) =>
    ["Metaphysics", "Idealism", "Dualism", "Determinism"].includes(p.title)
  );

  const politicalPhilosophies = philosophies.filter((p) =>
    [
      "Political Philosophy",
      "Marxism",
      "Objectivism",
      "Feminist Philosophy",
    ].includes(p.title)
  );

  const culturalPhilosophies = philosophies.filter((p) =>
    ["Confucianism", "Taoism"].includes(p.title)
  );

  const academicPhilosophies = philosophies.filter((p) =>
    [
      "Philosophy of Language",
      "Philosophy of Science",
      "Philosophy of Law",
      "Aesthetics",
      "Continental Philosophy",
      "Analytic Philosophy",
      "Logical Atomism",
    ].includes(p.title)
  );

  const modernPhilosophies = philosophies.filter((p) =>
    ["Postmodernism"].includes(p.title)
  );

  const otherPhilosophies = philosophies.filter((p) =>
    ["Relativism", "Scientology"].includes(p.title)
  );

  const PhilosophyCard = ({ philosophy }: { philosophy: any }) => {
    const IconComponent = philosophy.icon;

    return (
      <article className="py-8 border-b border-gray-100 dark:border-gray-800 last:border-b-0">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-2 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <IconComponent className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {philosophy.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                {philosophy.description}
              </p>
            </div>
          </div>

          {/* Key Points */}
          {philosophy.keyPoints && (
            <div className="ml-14">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="h-4 w-4 text-amber-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Key Insights
                </span>
              </div>
              <ul className="space-y-2">
                {philosophy.keyPoints.map((point: string, index: number) => (
                  <li
                    key={index}
                    className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-3"
                  >
                    <span className="text-gray-400 mt-1 flex-shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Proponents */}
          {philosophy.proponents && (
            <div className="ml-14">
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Notable Thinkers
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {philosophy.proponents.map(
                  (proponent: string, index: number) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs px-2 py-1 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {proponent}
                    </Badge>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </article>
    );
  };

  const CategorySection = ({
    title,
    philosophies,
    description,
  }: {
    title: string;
    philosophies: any[];
    description: string;
  }) => (
    <section className="mb-16">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
          {description}
        </p>
      </div>
      <div className="space-y-0">
        {philosophies.map((philosophy) => (
          <PhilosophyCard key={philosophy.title} philosophy={philosophy} />
        ))}
      </div>
    </section>
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
          Philosophical Systems & Schools of Thought
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
          An exploration of the major philosophical traditions that have shaped
          human thought throughout history. From ancient wisdom to contemporary
          ethical theories, discover the key ideas and principles that continue
          to influence our understanding of reality, knowledge, and morality.
        </p>
      </header>

      {/* Stats Bar */}
      <div className="mb-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {philosophies.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Philosophies
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              8
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Categories
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Ancient–Modern
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Time Span
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Global
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Scope
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Categories */}
      <main>
        <CategorySection
          title="Ethics & Moral Philosophy"
          philosophies={ethicsPhilosophies}
          description="Philosophical systems concerned with moral principles, values, and what constitutes right and wrong actions. These traditions examine the nature of morality, ethical decision-making, and the foundations of moral judgment."
        />

        <CategorySection
          title="Epistemology & Knowledge"
          philosophies={epistemologyPhilosophies}
          description="The study of knowledge, justified belief, and the rationality of belief systems. These philosophical approaches examine how we acquire knowledge, what constitutes valid reasoning, and the limits of human understanding."
        />

        <CategorySection
          title="Existential & Life Philosophy"
          philosophies={existentialPhilosophies}
          description="Philosophical movements addressing human existence, meaning, anxiety, and authentic living. These traditions explore fundamental questions about the purpose of life, individual responsibility, and the nature of human experience."
        />

        <CategorySection
          title="Metaphysics & Reality"
          philosophies={metaphysicsPhilosophies}
          description="The branch of philosophy concerned with the fundamental nature of reality and existence. These systems examine the relationship between mind and matter, the nature of consciousness, and the basic structure of reality."
        />

        <CategorySection
          title="Political & Social Philosophy"
          philosophies={politicalPhilosophies}
          description="Philosophical examination of government, politics, liberty, justice, and social organization. These traditions analyze power structures, social justice, and the relationship between individuals and society."
        />

        <CategorySection
          title="Eastern Philosophy & Wisdom Traditions"
          philosophies={culturalPhilosophies}
          description="Ancient Eastern philosophical systems emphasizing harmony, virtue, and the natural order. These traditions offer distinctive approaches to ethics, spirituality, and the cultivation of wisdom."
        />

        <CategorySection
          title="Specialized Philosophy"
          philosophies={academicPhilosophies}
          description="Focused philosophical disciplines examining specific domains of human knowledge and experience. These areas apply philosophical methods to particular fields of inquiry and human activity."
        />

        <CategorySection
          title="Modern & Contemporary Philosophy"
          philosophies={modernPhilosophies}
          description="20th and 21st-century philosophical movements that challenge traditional concepts and grand narratives. These approaches often emphasize the contextual, provisional nature of knowledge and meaning."
        />

        {otherPhilosophies.length > 0 && (
          <CategorySection
            title="Other Philosophical Systems"
            philosophies={otherPhilosophies}
            description="Additional philosophical movements and belief systems with unique perspectives on reality, knowledge, and human experience."
          />
        )}
      </main>

      {/* Footer Note */}
      <footer className="mt-20 p-8 bg-gray-50 dark:bg-gray-900 rounded-lg">
        <div className="flex items-start gap-3 mb-4">
          <BookOpen className="h-5 w-5 text-gray-600 dark:text-gray-400 mt-0.5 flex-shrink-0" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Academic Context
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed ml-8">
          This collection represents major philosophical traditions compiled for
          academic study and interfaith dialogue. Each philosophy encompasses
          rich historical contexts, internal variations, and ongoing scholarly
          debates. The summaries provided offer introductory overviews rather
          than exhaustive analyses. For comprehensive understanding, readers are
          encouraged to consult primary sources and specialized academic
          literature.
        </p>
      </footer>
    </div>
  );
}

export default Philosophies;
