import React from "react";
import {
  Star,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Award,
  Heart,
  Target,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-amber-600" />
              <span className="text-xl font-bold text-gray-900">
                Elenora Green Coaching
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Contact
              </a>
            </div>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full transition-colors">
              Book Session
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Life with
                <span className="text-amber-600"> Professional Coaching</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Unlock your potential and achieve your goals with personalized
                coaching that empowers you to create lasting change and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
                  Start Your Journey
                </button>
                <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional coach in consultation"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-amber-500" />
                  <span className="text-gray-900 font-semibold">
                    5.0 Rating
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-1">
                  200+ Success Stories
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/coaching.png"
                alt="Coaching image"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Elenora Green
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 10 years of experience in professional coaching, I've
                dedicated my career to helping individuals unlock their full
                potential and achieve meaningful transformation in their
                personal and professional lives.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                My approach combines evidence-based methodologies with
                compassionate guidance, creating a safe space for growth,
                self-discovery, and sustainable change.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">500+</div>
                  <div className="text-gray-600">Clients Coached</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  Certified Life Coach
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  NLP Practitioner
                </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  Mindfulness Expert
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Coaching Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Personalized coaching programs designed to meet your unique needs
              and goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Target className="w-12 h-12 text-amber-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Life Coaching
              </h3>
              <p className="text-gray-600 mb-6">
                Discover your purpose, set meaningful goals, and create a
                fulfilling life aligned with your values and aspirations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">
                    Goal Setting & Achievement
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Work-Life Balance</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Personal Growth</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-amber-600 mb-4">
                $150/session
              </div>
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-full font-semibold transition-colors">
                Learn More
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Award className="w-12 h-12 text-amber-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Career Coaching
              </h3>
              <p className="text-gray-600 mb-6">
                Advance your career, transition to new roles, and develop
                leadership skills that drive professional success.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Career Transitions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Leadership Development</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Interview Preparation</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-amber-600 mb-4">
                $175/session
              </div>
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-full font-semibold transition-colors">
                Learn More
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Heart className="w-12 h-12 text-amber-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Wellness Coaching
              </h3>
              <p className="text-gray-600 mb-6">
                Build healthy habits, manage stress, and create sustainable
                wellness practices for optimal mental and physical health.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Stress Management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Mindfulness Training</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Habit Formation</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-amber-600 mb-4">
                $140/session
              </div>
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-full font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real people who've transformed their lives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-500 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Elenora helped me completely transform my career path. Her
                guidance gave me the confidence to pursue my dreams and land my
                ideal job."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Client testimonial"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    Sarah Johnson
                  </div>
                  <div className="text-gray-500 text-sm">
                    Marketing Director
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-500 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The life coaching sessions were transformational. I finally
                found balance and purpose in my life. I couldn't be more
                grateful."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Client testimonial"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    Michael Chen
                  </div>
                  <div className="text-gray-500 text-sm">Entrepreneur</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-500 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Elenora's wellness coaching helped me overcome stress and build
                healthy habits that have improved every aspect of my life."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Client testimonial"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    Emily Rodriguez
                  </div>
                  <div className="text-gray-500 text-sm">Teacher</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Your Life?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Take the first step towards your goals. Book a free consultation
                to discuss how coaching can help you achieve the life you want.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-amber-400 mr-4" />
                  <span className="text-blue-100">
                    elenora@greencoaching.com
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-amber-400 mr-4" />
                  <span className="text-blue-100">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-amber-400 mr-4" />
                  <span className="text-blue-100">
                    Available Online & In-Person
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Book Your Free Consultation
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                    <option>Select Coaching Type</option>
                    <option>Life Coaching</option>
                    <option>Career Coaching</option>
                    <option>Wellness Coaching</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Tell me about your goals..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-semibold transition-colors"
                >
                  Schedule Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="w-8 h-8 text-amber-600" />
              <span className="text-2xl font-bold">Elenora Green Coaching</span>
            </div>
            <p className="text-gray-400 mb-8">
              Empowering individuals to unlock their potential and create
              meaningful change
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                © 2025 Elenora Green Coaching. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
