import { Button } from './components'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-emerald-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-amber-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-red-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/3 right-20 w-5 h-5 bg-blue-400 rounded-full animate-bounce delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center relative z-10 max-w-6xl mx-auto">
          {/* Palestinian Flag Colors Accent - Enhanced */}
          <div className="flex justify-center mb-8 group">
            <div className="flex space-x-1 transform group-hover:scale-110 transition-transform duration-500">
              <div className="w-4 h-12 bg-black rounded-sm shadow-lg transform hover:rotate-3 transition-transform duration-300"></div>
              <div className="w-4 h-12 bg-white rounded-sm shadow-lg transform hover:-rotate-3 transition-transform duration-300"></div>
              <div className="w-4 h-12 bg-emerald-500 rounded-sm shadow-lg transform hover:rotate-3 transition-transform duration-300"></div>
              <div className="w-4 h-12 bg-red-500 rounded-sm shadow-lg transform hover:-rotate-3 transition-transform duration-300"></div>
            </div>
          </div>
          
          {/* Main Title with Advanced Typography */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-white to-amber-400 mb-4 leading-tight">
              تعلّم
            </h1>
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 leading-tight">
              العربية الفلسطينية
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white/90 mt-4 font-mono">
              Learn Palestinian Arabic
            </h3>
          </div>
          
          {/* Enhanced Description */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Embark on a transformative journey through the rich tapestry of Palestinian Arabic. 
            Master authentic conversations, unlock cultural wisdom, and forge deep connections 
            with the heart of Palestine through its beautiful, melodic language.
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="palestinian" 
              size="lg" 
              className="px-12 py-6 text-xl font-bold transform hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-xl"
            >
              <span className="mr-3">🚀</span>
              ابدأ التعلم الآن
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-12 py-6 text-xl font-bold transform hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-white/10"
            >
              <span className="mr-3">✨</span>
              Explore Lessons
            </Button>
          </div>

          {/* Floating Stats */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-8 text-white/60 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">10K+</div>
              <div>Active Learners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-400">500+</div>
              <div>Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">50+</div>
              <div>Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-slate-900/50 to-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400 mb-20">
            Why Choose Palestinian Arabic?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-400/50 transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  🗣️
                </div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-4 text-center">Authentic Dialect</h3>
                <p className="text-white/80 text-center leading-relaxed">
                  Immerse yourself in the genuine Palestinian dialect used in real conversations, 
                  not textbook Arabic. Experience the language as it's truly spoken.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-8 hover:border-amber-400/50 transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  🏺
                </div>
                <h3 className="text-2xl font-bold text-amber-400 mb-4 text-center">Cultural Immersion</h3>
                <p className="text-white/80 text-center leading-relaxed">
                  Dive deep into Palestinian culture, traditions, and history through 
                  language learning. Every word tells a story of resilience and heritage.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8 hover:border-red-400/50 transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  🌍
                </div>
                <h3 className="text-2xl font-bold text-red-400 mb-4 text-center">Global Community</h3>
                <p className="text-white/80 text-center leading-relaxed">
                  Connect with millions of Palestinian speakers worldwide. Build meaningful 
                  relationships and become part of a vibrant, supportive community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Section - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 mb-20">
            Your Transformative Journey
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { step: 1, title: "Foundation", arabic: "مرحبا، كيف حالك؟", english: "Basic Greetings", color: "emerald" },
              { step: 2, title: "Conversation", arabic: "أين تسكن؟", english: "Daily Dialogues", color: "blue" },
              { step: 3, title: "Expression", arabic: "يا هلا والله", english: "Cultural Phrases", color: "purple" },
              { step: 4, title: "Mastery", arabic: "أنا أتكلم العربية", english: "Fluency", color: "amber" }
            ].map((item) => (
              <div key={item.step} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-700/50 to-slate-800/50 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 text-center hover:border-slate-500/50 transition-all duration-500 transform hover:-translate-y-3">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${item.color}-400 to-${item.color}-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-black shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{item.english}</p>
                  <div className="bg-slate-700/50 rounded-lg p-3 border border-slate-600/30">
                    <p className="text-lg font-semibold text-emerald-400">{item.arabic}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="relative py-32 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-emerald-500/90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Ready to Transform Your Language Skills?
          </h2>
          <p className="text-xl md:text-2xl text-emerald-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Join thousands of passionate learners who are already speaking Palestinian Arabic 
            and building meaningful connections with Palestinian culture worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="palestinian" 
              size="lg" 
              className="bg-white text-emerald-700 hover:bg-gray-100 px-16 py-6 text-xl font-bold transform hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-xl"
            >
              <span className="mr-3">🚀</span>
              Start Your Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-3 border-white text-white hover:bg-white hover:text-emerald-700 px-16 py-6 text-xl font-bold transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="mr-3">📚</span>
              View Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer Note */}
      <section className="py-12 bg-slate-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-amber-500/10"></div>
        <div className="relative z-10">
          <p className="text-lg text-white/80 font-light">
            <span className="text-2xl text-emerald-400 font-bold">"اللغة هي روح الأمة"</span>
            <span className="mx-4 text-white/50">|</span>
            <span className="text-white/60 italic">"Language is the soul of a nation"</span>
          </p>
        </div>
      </section>
    </div>
  )
}
