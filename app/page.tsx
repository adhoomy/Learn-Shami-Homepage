import { Button } from './components'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-24 px-4 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Learn Palestinian Arabic
          </h1>
          
          <p className="text-xl md:text-2xl text-emerald-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Master the beautiful Palestinian dialect with fun, bite-sized lessons. 
            Start your journey to fluency today!
          </p>
          
          <div className="flex justify-center">
            <Button 
              variant="white" 
              size="lg" 
              className="border-2 border-white"
            >
              Start Learning Free
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Why Learn Palestinian Arabic?</h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 bg-emerald-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-200 shadow-lg group-hover:shadow-xl">
                <span className="text-3xl">🗣️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Authentic Dialect</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn the genuine Palestinian dialect used in real conversations, 
                where every phrase tells a story of resilience and heritage.
              </p>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 bg-amber-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-200 shadow-lg group-hover:shadow-xl">
                <span className="text-3xl">🏺</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Cultural Immersion</h3>
              <p className="text-gray-600 leading-relaxed">
                Dive deep into Palestinian culture, traditions, and history through 
                language learning. Every word carries the wisdom of generations.
              </p>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 bg-red-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-200 shadow-lg group-hover:shadow-xl">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Global Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with millions of Palestinian speakers worldwide and 
                become part of a vibrant, supportive community of learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">What You'll Learn</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-emerald-300 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-all duration-200">👋</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Basics</h3>
              <p className="text-gray-600 mb-6">Greetings, numbers, and essential phrases to get you started</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 font-medium">5 lessons</span>
                <span className="text-emerald-600 text-lg font-bold group-hover:translate-x-1 transition-all duration-200">→</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-amber-300 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-all duration-200">👨‍👩‍👧‍👦</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Family</h3>
              <p className="text-gray-600 mb-6">Master family vocabulary and relationships in Palestinian Arabic</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 font-medium">6 lessons</span>
                <span className="text-amber-600 text-lg font-bold group-hover:translate-x-1 transition-all duration-200">→</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-red-300 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-all duration-200">🍽️</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Food & Culture</h3>
              <p className="text-gray-600 mb-6">Discover Palestinian cuisine and cultural traditions</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 font-medium">4 lessons</span>
                <span className="text-red-600 text-lg font-bold group-hover:translate-x-1 transition-all duration-200">→</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-blue-300 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-all duration-200">✈️</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Travel</h3>
              <p className="text-gray-600 mb-6">Navigate Palestinian cities and landmarks with confidence</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 font-medium">7 lessons</span>
                <span className="text-blue-600 text-lg font-bold group-hover:translate-x-1 transition-all duration-200">→</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-purple-300 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-all duration-200">💼</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Business</h3>
              <p className="text-gray-600 mb-6">Professional Arabic for work and commerce</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 font-medium">8 lessons</span>
                <span className="text-purple-600 text-lg font-bold group-hover:translate-x-1 transition-all duration-200">→</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-300 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-all duration-200">🧠</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Advanced</h3>
              <p className="text-gray-600 mb-6">Complex grammar and cultural expressions</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 font-medium">10 lessons</span>
                <span className="text-gray-600 text-lg font-bold group-hover:translate-x-1 transition-all duration-200">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-16">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold group-hover:scale-110 transition-all duration-200 shadow-lg group-hover:shadow-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Choose Your Lesson</h3>
              <p className="text-gray-600">Pick from our variety of topics and difficulty levels</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold group-hover:scale-110 transition-all duration-200 shadow-lg group-hover:shadow-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Learn & Practice</h3>
              <p className="text-gray-600">Interactive lessons with audio, exercises, and cultural context</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold group-hover:scale-110 transition-all duration-200 shadow-lg group-hover:shadow-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Track Progress</h3>
              <p className="text-gray-600">Monitor your learning journey and celebrate achievements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Join thousands of learners mastering Palestinian Arabic today!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              variant="white" 
              size="lg" 
              className="border-2 border-white"
            >
              Get Started Free
            </Button>
            <Button 
              variant="white" 
              size="lg" 
              className="border-2 border-white"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
