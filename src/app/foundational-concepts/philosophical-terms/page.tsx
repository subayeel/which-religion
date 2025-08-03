/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function PhilosophicalTermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
          Philosophical Terms
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
          A comprehensive guide to essential philosophical concepts for academic
          and interfaith study. This collection provides strictly factual
          explanations from a global perspective.
        </p>
      </header>

      {/* Terms Grid */}
      <div className="space-y-12">
        {/* Religious Belief Systems */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-3">
            Religious Belief Systems
          </h2>

          <div className="space-y-8">
            <TermCard
              id="monotheistic"
              title="Monotheistic"
              definition="Monotheism is the belief in the existence of only one God. This God is typically considered all-powerful, all-knowing, and morally perfect."
              context="Major monotheistic religions include Judaism, Christianity, Islam, and Sikhism. These faiths differ in their conceptions of God but share the foundational belief in a single divine entity."
            />

            <TermCard
              id="polytheistic"
              title="Polytheistic"
              definition="Polytheism is the belief in or worship of multiple gods, each often responsible for different aspects of the cosmos or human experience."
              context="Ancient Greek, Roman, Hindu, and many indigenous religions are polytheistic, with complex pantheons and mythologies."
            />

            <TermCard
              id="henotheist"
              title="Henotheist"
              definition="Henotheism is the worship of one god without denying the existence or possible worship of other deities."
              context="This approach appears in some forms of Hindu worship, where particular gods are venerated as supreme for practical or devotional purposes while recognizing others exist."
            />

            <TermCard
              id="pantheist"
              title="Pantheist"
              definition="Pantheism is the belief that everything that exists (the universe and nature) is identical with divinity or that everything composes an all-encompassing, immanent God."
              context="Pantheism is prominent in some expressions of Hindu philosophy (e.g., Advaita Vedanta) and has philosophical proponents in the West, such as Baruch Spinoza."
            />

            <TermCard
              id="monolatristic"
              title="Monolatristic"
              definition="Monolatry is the belief in the existence of many gods but with the consistent worship of only one deity."
              context="It differs from henotheism, as monolatry involves exclusive worship (but not the denial of others' existence), visible in certain periods of ancient Hebrew religion and other traditions."
            />
          </div>
        </section>

        {/* Ethical Philosophy */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-3">
            Ethical Philosophy
          </h2>

          <div className="space-y-8">
            <TermCard
              id="consequentialist"
              title="Consequentialist"
              definition="Consequentialism is a broad class of ethical theories which hold that the morality of an action depends solely on its outcomes or consequences. The most notable example is utilitarianism."
              context="A consequentialist evaluates actions by comparing their results, holding that the ends justify the means."
            />

            <TermCard
              id="utilitarians"
              title="Utilitarians"
              definition="Utilitarianism is a form of consequentialism which asserts that the best action is the one that maximizes overall happiness or utility and minimizes suffering."
              context="Major proponents include Jeremy Bentham and John Stuart Mill."
              details={
                <div className="mt-4 space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Key Principles:
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                      <li>
                        Morality depends on maximizing collective well-being
                      </li>
                      <li>Each person's happiness is equally weighted</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Types:
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                      <li>
                        <strong>Act Utilitarianism:</strong> Evaluates actions
                        case by case
                      </li>
                      <li>
                        <strong>Rule Utilitarianism:</strong> Favors rules that,
                        when generally followed, maximize happiness
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Criticisms:
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                      <li>May neglect individual rights</li>
                      <li>Difficult to compare and measure happiness</li>
                    </ul>
                  </div>
                </div>
              }
            />

            <TermCard
              id="morality-subjective-vs-objective"
              title="Morality: Subjective vs Objective"
              definition="The fundamental debate about the nature of moral truth."
              details={
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Subjective Morality:
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Holds that moral judgments are statements of personal or
                      cultural attitudes, emotions, or conventions; right and
                      wrong depend on individual or societal perspectives.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Objective Morality:
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Claims that certain acts are right or wrong independently
                      of human opinions; moral facts exist much like
                      mathematical or physical facts.
                    </p>
                  </div>
                </div>
              }
            />
          </div>
        </section>

        {/* Logic and Knowledge */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-3">
            Logic and Knowledge
          </h2>

          <div className="space-y-8">
            <TermCard
              id="tautology"
              title="Tautology"
              definition="In philosophy and logic, a tautology is a statement that is true by necessity or by virtue of its logical form, not because of any factual content."
              context="Example: 'All bachelors are unmarried men' is tautological."
            />

            <TermCard
              id="a-priori-vs-a-posteriori"
              title="A priori vs A posteriori"
              definition="Fundamental categories of knowledge and justification."
              details={
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      A priori:
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Knowledge, justification, or argument that is independent
                      of experience; it can be known through reason alone (e.g.,
                      "All triangles have three sides").
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      A posteriori:
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Knowledge, justification, or argument that depends on
                      empirical evidence or experience (e.g., "The sky is
                      blue").
                    </p>
                  </div>
                </div>
              }
            />

            <TermCard
              id="verificationism"
              title="Verificationism"
              definition="Verificationism is a philosophical theory about meaning. It asserts that a statement is meaningful only if it can be empirically verified or is analytically true (i.e., true by definition)."
              context="Associated with logical positivism and the Vienna Circle, it challenged metaphysical and religious claims for being untestable and therefore meaningless."
            />
          </div>
        </section>

        {/* Problematic Concepts */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-3">
            Historical and Problematic Concepts
          </h2>

          <div className="space-y-8">
            <TermCard
              id="scientific-racism"
              title="Scientific Racism (Biological Racism)"
              definition="Scientific racism, sometimes called biological racism, refers to the discredited claim that empirical evidence exists to support or justify racism, racial inferiority, or superiority, often using pseudoscientific methods."
              context="Practiced from the 18th to 20th centuries, this ideology underpinned colonialism, eugenics, and discrimination, but it has been thoroughly refuted by contemporary genetics and anthropology."
              warning={true}
            />
          </div>
        </section>

        {/* References */}
        <section className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            References
          </h2>
          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <p>• Utilitarianism: polilegal.com, britannica.com, Investopedia</p>
            <p>• Consequentialism, Utilitarianism Types: utilitarianism.net</p>
            <p>
              • General philosophical definitions: Stanford Encyclopedia of
              Philosophy
            </p>
            <p className="mt-4 italic">
              This report prioritizes accuracy, global context, and academic
              rigor. For source quotes or further expansion on any specific
              entry, please consult primary academic sources.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

interface TermCardProps {
  id: string;
  title: string;
  definition: string;
  context?: string;
  details?: React.ReactNode;
  warning?: boolean;
}

function TermCard({
  id,
  title,
  definition,
  context,
  details,
  warning,
}: TermCardProps) {
  return (
    <article
      id={id}
      className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border ${
        warning
          ? "border-yellow-200 dark:border-yellow-800"
          : "border-gray-200 dark:border-gray-700"
      } hover:shadow-md transition-shadow duration-200 scroll-mt-6`}
    >
      <header className="mb-4">
        <h3
          className={`text-xl font-semibold mb-3 ${
            warning
              ? "text-yellow-800 dark:text-yellow-300"
              : "text-gray-900 dark:text-gray-100"
          }`}
        >
          {title}
          {warning && (
            <span className="ml-2 text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">
              Historical/Discredited
            </span>
          )}
        </h3>
      </header>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Definition:
          </h4>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {definition}
          </p>
        </div>

        {context && (
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Context:
            </h4>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {context}
            </p>
          </div>
        )}

        {details && details}
      </div>
    </article>
  );
}
