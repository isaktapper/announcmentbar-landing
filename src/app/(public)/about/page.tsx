import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Yello.bar - Helping teams communicate clearly',
  description: 'Learn about Yello.bar - a tool for creating beautiful announcement bars, banners, and carousels. Built for marketers, product teams, and founders who want to keep users in the loop.',
  openGraph: {
    title: 'About Yello.bar - Helping teams communicate clearly',
    description: 'Learn about Yello.bar - a tool for creating beautiful announcement bars, banners, and carousels. Built for marketers, product teams, and founders who want to keep users in the loop.',
    url: 'https://yello.bar/about',
    siteName: 'Yello.bar',
    type: 'website',
  },
};

// Structured data for better SEO
export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Yello.bar',
  description: 'A tool for creating beautiful announcement bars, banners, and carousels.',
  url: 'https://yello.bar',
  sameAs: ['https://yello.bar'],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Helping teams communicate clearly — one bar at a time.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We believe websites should speak directly to visitors. Our mission is to make that easy.
          </p>
          <a
            href="https://app.yello.bar/auth/signup"
            className="btn-primary text-lg px-8 py-4"
          >
            Get started free ✨
          </a>
        </div>
      </section>

      {/* What is it Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What is Yello.bar?
          </h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 text-center mb-6">
              A tool for creating beautiful announcement bars, banners, and carousels.
              Designed for marketers, product teams, and founders who want to keep users in the loop.
            </p>
            <p className="text-gray-600 text-center">
              Fully customizable, fast to implement, and built for conversions.
            </p>
          </div>
        </div>
      </section>

      {/* Who it's for Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Who is it for?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Startups and SaaS companies',
              'E-commerce stores',
              'Publishers and blogs',
              'Anyone who wants to drive action or share updates without coding',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
              >
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why we built this Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why we built this
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'We were tired of static, boring announcement banners.',
              'Existing tools were slow, clunky, and lacked flexibility.',
              'We wanted something elegant, real-time, and fun to use.',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Live preview & easy customization',
              'Carousel support with individual styling per slide',
              'Geo-targeting and page-based targeting',
              'CTA button controls',
              'Font, size, color, and gradient control',
              'Bar scheduling and visibility toggles',
              'Sticky and dismissible options',
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-3"
              >
                <span className="text-yellow-400">✨</span>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Simplicity over complexity',
              'Speed over perfection',
              'Small details matter',
              'Empowering non-technical users',
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
              >
                <p className="text-gray-700 font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to get started?
          </h2>
          <a
            href="https://app.yello.bar/auth/signup"
            className="btn-primary text-lg px-8 py-4"
          >
            Get started free ✨
          </a>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
} 