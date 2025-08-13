/* eslint-disable react/no-unescaped-entities */
import React from "react";

function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      {/* Header */}
      <header className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-6 leading-tight tracking-tight">
          Simple Categories of World Religions
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Understanding the world's major religions through their most
          fundamental beliefs about God and the divine
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-16 pb-12 border-b border-gray-200 dark:border-gray-800">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
          To make it simple to understand, we've grouped the world's major
          religions based on their most basic beliefs about God and the divine.
          This helps you quickly understand what makes each religion unique and
          how they relate to one another.
        </p>
      </section>

      {/* Category 1: Monotheistic */}
      <section className="mb-16 pb-12 border-b border-gray-200 dark:border-gray-800">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="text-4xl mr-3">🕌</span>
          Religions That Believe in One God
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          These religions teach that there is only one God who created and rules
          everything. They're often called "monotheistic" religions and share
          common roots in the Middle East.
        </p>

        <div className="space-y-8">
          <div className="pl-6 border-l-2 border-green-200 dark:border-green-800">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
              Islam
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Believes in Allah as the one God. Founded by Prophet Muhammad in
              the 7th century.
              <strong className="text-gray-900 dark:text-gray-100">
                {" "}
                ~2 billion followers
              </strong>{" "}
              worldwide, making it the second-largest religion.
            </p>
          </div>

          <div className="pl-6 border-l-2 border-green-200 dark:border-green-800">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
              Christianity
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Believes in God as Trinity (Father, Son, Holy Spirit). Founded on
              the teachings of Jesus Christ.
              <strong className="text-gray-900 dark:text-gray-100">
                {" "}
                ~2.3 billion followers
              </strong>
              , making it the world's largest religion.
            </p>
          </div>

          <div className="pl-6 border-l-2 border-green-200 dark:border-green-800">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
              Judaism
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Believes in Yahweh as the one God. The ancient religion of the
              Jewish people and the oldest of the Abrahamic faiths.
              <strong className="text-gray-900 dark:text-gray-100">
                {" "}
                ~15 million followers
              </strong>{" "}
              worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Category 2: Polytheistic/Henotheistic */}
      <section className="mb-16 pb-12 border-b border-gray-200 dark:border-gray-800">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="text-4xl mr-3">🕉️</span>
          Religions with Many Gods or Spiritual Forces
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          From a logical perspective, the idea of multiple omnipotent gods is
          logically inconsistent, since competing wills would undermine
          omnipotence. In some traditions, the term “god” is used more broadly
          to refer to various beings or aspects.
        </p>

        <div className="pl-6 border-l-2 border-purple-200 dark:border-purple-800">
          <h3 className="text-xl font-semibold mb-3 text-purple-700 dark:text-purple-400">
            Hinduism
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Believes in many gods (like Vishnu, Shiva, Brahma) but sees them as
            different aspects of one ultimate reality called Brahman. Focuses on
            karma, reincarnation, and dharma (duty).
            <strong className="text-gray-900 dark:text-gray-100">
              {" "}
              ~1.2 billion followers
            </strong>
            , primarily in India and neighboring regions.
          </p>
        </div>
      </section>

      {/* Category 3: Non-theistic */}
      <section className="mb-16 pb-12 border-b border-gray-200 dark:border-gray-800">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="text-4xl mr-3">☸️</span>
          Religions Focused on Personal Enlightenment
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          These religions don't focus on worshipping a creator God, but on
          achieving wisdom and inner peace through personal spiritual
          development.
        </p>

        <div className="pl-6 border-l-2 border-orange-200 dark:border-orange-800">
          <h3 className="text-xl font-semibold mb-3 text-orange-700 dark:text-orange-400">
            Buddhism
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Founded by Buddha (Siddhartha Gautama) in ancient India. Teaches the
            Four Noble Truths and Eightfold Path to end suffering. Focuses on
            meditation, compassion, and reaching Nirvana.
            <strong className="text-gray-900 dark:text-gray-100">
              {" "}
              ~500 million followers
            </strong>{" "}
            across Asia and growing worldwide.
          </p>
        </div>
      </section>

      {/* Category 4: Non-religious */}
      <section className="mb-16 pb-12 border-b border-gray-200 dark:border-gray-800">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="text-4xl mr-3">🔬</span>
          Non-Religious Worldviews
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Some depend on personal intuition to determine what is right and
          wrong, a practice that is frequently problematic because it is not
          grounded in evidence or any objective benchmark.
        </p>

        <div className="space-y-8">
          <div className="pl-6 border-l-2 border-gray-300 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-400">
              Atheism
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The belief that no gods exist. Relies on science and reason to
              understand the world and human morality.
            </p>
          </div>

          <div className="pl-6 border-l-2 border-gray-300 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-400">
              Agnosticism
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The belief that we can't know for sure if gods exist or not. Takes
              a "wait and see" approach to questions about the divine.
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 italic">
          <strong className="text-gray-900 dark:text-gray-100">
            ~1.9 billion people
          </strong>{" "}
          worldwide identify as non-religious, making this the third-largest
          worldview category globally.
        </p>
      </section>

      {/* Key Insights */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="text-4xl mr-3">💡</span>
          Key Things to Remember
        </h2>

        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <div className="flex items-start">
            <span className="text-2xl mr-4 mt-1">📊</span>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                Size Matters
              </h3>
              <p className="leading-relaxed">
                Christianity and Islam are the largest religions, each with over
                2 billion followers, representing more than half of humanity
                combined.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="text-2xl mr-4 mt-1">🌍</span>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                Geography
              </h3>
              <p className="leading-relaxed">
                Religions often spread from specific regions—Judaism,
                Christianity, and Islam from the Middle East; Hinduism and
                Buddhism from India.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="text-2xl mr-4 mt-1">⏳</span>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                Age
              </h3>
              <p className="leading-relaxed">
                Judaism is the oldest (3,000+ years), then Hinduism and Buddhism
                (2,500+ years), then Christianity (2,000+ years), then Islam
                (1,400+ years).
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="text-2xl mr-4 mt-1">📈</span>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                Growth
              </h3>
              <p className="leading-relaxed">
                Islam is currently growing the fastest, while non-religious
                worldviews are also increasing, especially in developed
                countries.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="text-2xl mr-4 mt-1">🌳</span>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                Diversity
              </h3>
              <p className="leading-relaxed">
                Each religion has many different branches and ways of
                practicing—there's incredible diversity within each tradition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="text-center pt-8 border-t border-gray-200 dark:border-gray-800">
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed italic">
          Understanding these basic categories helps you navigate the complex
          world of religious and philosophical thought with confidence.
        </p>
      </section>
    </article>
  );
}

export default Page;
