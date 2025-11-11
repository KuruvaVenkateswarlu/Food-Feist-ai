import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, BarChart, Search, Share2, Sparkles } from "lucide-react";

const Report = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Project Report</h1>
            <p className="text-lg text-muted-foreground">
              Digital Marketing Assignment - FoodExpress Website
            </p>
          </header>

          {/* Introduction */}
          <section className="mb-12 bg-card p-8 rounded-lg border border-border shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <FileText className="h-6 w-6 text-primary mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-muted-foreground mb-4">
                  This project is a complete responsive food delivery website inspired by leading
                  platforms like Zomato and Swiggy. The website demonstrates modern web design
                  principles, SEO optimization, and digital marketing integrations.
                </p>
                <p className="text-muted-foreground">
                  Built using React, TypeScript, and Tailwind CSS, the website features a clean,
                  user-friendly interface with responsive design that works seamlessly across all
                  devices.
                </p>
              </div>
            </div>
          </section>

          {/* Website Structure */}
          <section className="mb-12 bg-card p-8 rounded-lg border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Website Structure & Features</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. Home Page</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Hero section with compelling food imagery and call-to-action</li>
                  <li>Navigation bar with links to all pages</li>
                  <li>Search functionality for finding restaurants and dishes</li>
                  <li>Featured restaurant cards with ratings and quick order buttons</li>
                  <li>AI-generated SEO keywords display section</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">2. Menu Page</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Grid layout showcasing food items with images</li>
                  <li>Pricing information and "Add to Cart" functionality</li>
                  <li>All images include descriptive alt text for SEO</li>
                  <li>Responsive design adapts to different screen sizes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">3. About Page</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Brand story and mission statement</li>
                  <li>Customer trust elements and testimonials</li>
                  <li>Key features and benefits section</li>
                  <li>Statistics showcasing platform success</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">4. Contact Page</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Contact form with validation (name, email, message)</li>
                  <li>Business location and contact information</li>
                  <li>Google Maps integration showing location</li>
                  <li>Form submission with user feedback</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SEO Optimization */}
          <section className="mb-12 bg-card p-8 rounded-lg border border-border shadow-sm">
            <div className="flex items-start gap-4">
              <Search className="h-6 w-6 text-primary mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">SEO Optimization</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Meta Tags Implementation</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>
                        <strong>Title:</strong> "FoodExpress - Order Food Online | Fast Delivery |
                        Best Restaurants Near You"
                      </li>
                      <li>
                        <strong>Description:</strong> Compelling meta description under 160
                        characters
                      </li>
                      <li>
                        <strong>Keywords:</strong> food delivery, online food order, restaurant near
                        me, best biryani near me, fast food delivery
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Semantic HTML Structure</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Proper use of H1, H2, H3 tags for content hierarchy</li>
                      <li>Semantic HTML5 elements (header, main, section, footer)</li>
                      <li>Descriptive alt text for all images</li>
                      <li>Clean URL structure with proper routing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Google Analytics */}
          <section className="mb-12 bg-card p-8 rounded-lg border border-border shadow-sm">
            <div className="flex items-start gap-4">
              <BarChart className="h-6 w-6 text-primary mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Google Analytics Integration</h2>
                <p className="text-muted-foreground mb-4">
                  Google Analytics tracking code has been integrated into the website's HTML head
                  section. The implementation includes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Global site tag (gtag.js) script for tracking</li>
                  <li>Placeholder ID (G-XXXXXXX) for demonstration purposes</li>
                  <li>
                    <strong>Instructions for users:</strong> Replace "G-XXXXXXX" with your actual
                    Google Analytics Measurement ID
                  </li>
                  <li>Tracks page views, user interactions, and conversion events</li>
                </ul>
                <div className="mt-4 p-4 bg-secondary rounded-lg">
                  <p className="text-sm font-mono text-muted-foreground">
                    Location: index.html (lines 27-33)
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    To activate: Sign up for Google Analytics, create a property, and replace the
                    placeholder ID with your unique Measurement ID.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Social Media Integration */}
          <section className="mb-12 bg-card p-8 rounded-lg border border-border shadow-sm">
            <div className="flex items-start gap-4">
              <Share2 className="h-6 w-6 text-primary mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Social Media Integration</h2>
                <p className="text-muted-foreground mb-4">
                  The website includes comprehensive social media integration in the footer with
                  links to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>
                    <strong>Facebook:</strong> facebook.com/foodexpress
                  </li>
                  <li>
                    <strong>Instagram:</strong> instagram.com/foodexpress
                  </li>
                  <li>
                    <strong>Twitter/X:</strong> twitter.com/foodexpress
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Note: Users should create promotional posts on these platforms showcasing special
                  offers, new restaurant partnerships, and customer testimonials to drive
                  engagement and traffic to the website.
                </p>
              </div>
            </div>
          </section>

          {/* AI Strategy */}
          <section className="mb-12 bg-card p-8 rounded-lg border border-border shadow-sm">
            <div className="flex items-start gap-4">
              <Sparkles className="h-6 w-6 text-primary mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">AI-Driven SEO Strategy</h2>
                <p className="text-muted-foreground mb-4">
                  The website features an AI-powered keyword suggestion system that displays
                  optimized search terms on the home page. This feature demonstrates:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>
                    <strong>Dynamic keyword display:</strong> Shows trending and high-performing
                    search terms
                  </li>
                  <li>
                    <strong>SEO optimization:</strong> Keywords like "best biryani near me", "online
                    food delivery fast"
                  </li>
                  <li>
                    <strong>User engagement:</strong> Interactive keyword tags that can be clicked
                  </li>
                  <li>
                    <strong>Educational value:</strong> Helps users understand search optimization
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-secondary rounded-lg">
                  <p className="text-sm font-semibold mb-2">AI-Suggested Keywords:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "best biryani near me",
                      "online food delivery fast",
                      "top restaurants in city",
                      "home delivery food",
                    ].map((keyword, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Implementation */}
          <section className="mb-12 bg-card p-8 rounded-lg border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Technical Implementation</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>React 18 - Modern JavaScript framework</li>
                  <li>TypeScript - Type-safe development</li>
                  <li>Tailwind CSS - Utility-first CSS framework</li>
                  <li>Vite - Fast build tool and dev server</li>
                  <li>React Router - Client-side routing</li>
                  <li>Lucide React - Beautiful icon library</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Responsive Design</h3>
                <p className="text-muted-foreground">
                  The website is fully responsive and optimized for all devices using a
                  mobile-first approach. Breakpoints are implemented for mobile, tablet, and
                  desktop views.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Color Scheme</h3>
                <p className="text-muted-foreground mb-2">
                  Inspired by Zomato's branding, the color scheme uses:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Primary Red (HSL: 355, 82%, 54%) - Brand color</li>
                  <li>White and light gray backgrounds</li>
                  <li>Dark text for readability</li>
                  <li>Smooth hover animations and transitions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
            <p className="mb-4">
              This FoodExpress website successfully demonstrates modern web development practices,
              digital marketing strategies, and user experience design. The project incorporates:
            </p>
            <ul className="space-y-2 ml-4">
              <li>✓ Comprehensive SEO optimization for search visibility</li>
              <li>✓ Google Analytics integration for tracking and insights</li>
              <li>✓ Social media integration for broader reach</li>
              <li>✓ AI-powered features for enhanced functionality</li>
              <li>✓ Responsive design for all devices</li>
              <li>✓ Clean, maintainable code structure</li>
            </ul>
            <p className="mt-4">
              The website is ready for deployment and can serve as a foundation for a real food
              delivery platform with proper backend integration.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Report;
