import { Button } from './components'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border-4 border-emerald-600 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-4 border-amber-600 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-4 border-emerald-500 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Palestinian Flag Colors Accent */}
            <div className="flex justify-center mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-8 bg-black rounded-sm"></div>
                <div className="w-3 h-8 bg-white rounded-sm"></div>
                <div className="w-3 h-8 bg-emerald-600 rounded-sm"></div>
                <div className="w-3 h-8 bg-red-600 rounded-sm"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              تعلّم <span className="text-emerald-600">العربية الفلسطينية</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
              Learn Palestinian Arabic
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover the rich dialect of Palestinian Arabic through authentic conversations, 
              cultural insights, and practical language skills. Connect with the heart of Palestine 
              through its beautiful language.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="palestinian" size="lg" className="px-8 py-4 text-lg">
                ابدأ التعلم الآن
              </Button>
              <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg">
                Explore Lessons
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Why Learn Palestinian Arabic?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🗣️</span>
              </div>
              <div className="card-header">
                <h3 className="card-title text-emerald-700">Authentic Dialect</h3>
              </div>
              <div className="card-content">
                <p>Learn the real Palestinian dialect used in everyday conversations, not just formal Arabic.</p>
              </div>
            </div>

            <div className="card text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏺</span>
              </div>
              <div className="card-header">
                <h3 className="card-title text-amber-700">Cultural Context</h3>
              </div>
              <div className="card-content">
                <p>Understand Palestinian culture, traditions, and history through language learning.</p>
              </div>
            </div>

            <div className="card text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌍</span>
              </div>
              <div className="card-header">
                <h3 className="card-title text-red-700">Global Connection</h3>
              </div>
              <div className="card-content">
                <p>Connect with millions of Palestinian speakers worldwide and build meaningful relationships.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Your Learning Journey
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Basic Greetings</h3>
              <p className="text-gray-600 text-sm">مرحبا، كيف حالك؟</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Daily Conversations</h3>
              <p className="text-gray-600 text-sm">أين تسكن؟</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Cultural Expressions</h3>
              <p className="text-gray-600 text-sm">يا هلا والله</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fluency</h3>
              <p className="text-gray-600 text-sm">أنا أتكلم العربية</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Elements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Experience Palestinian Culture
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Traditional Hospitality
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Learn the beautiful expressions of Palestinian hospitality like "أهلاً وسهلاً" 
                (Welcome) and "تفضل" (Please, go ahead). Discover how Palestinians 
                express warmth and generosity through language.
              </p>
              <div className="bg-emerald-50 p-4 rounded-lg border-r-4 border-emerald-600">
                <p className="text-emerald-800 font-medium">
                  "الضيافة الفلسطينية من أجمل ما في ثقافتنا"
                </p>
                <p className="text-emerald-600 text-sm mt-2">
                  "Palestinian hospitality is among the most beautiful aspects of our culture"
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <span className="text-3xl mb-2 block">☕</span>
                <h4 className="font-semibold text-amber-800">Arabic Coffee</h4>
                <p className="text-amber-600 text-sm">Traditional welcome drink</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-lg text-center">
                <span className="text-3xl mb-2 block">🫓</span>
                <h4 className="font-semibold text-emerald-800">Fresh Bread</h4>
                <p className="text-emerald-600 text-sm">Daily bread making</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg text-center">
                <span className="text-3xl mb-2 block">🌿</span>
                <h4 className="font-semibold text-red-800">Olive Trees</h4>
                <p className="text-red-600 text-sm">Symbol of peace</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <span className="text-3xl mb-2 block">🏺</span>
                <h4 className="font-semibold text-blue-800">Traditional Crafts</h4>
                <p className="text-blue-600 text-sm">Handmade pottery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Begin Your Palestinian Arabic Journey?
          </h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Join thousands of learners who are already speaking Palestinian Arabic 
            and connecting with Palestinian culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="palestinian" 
              size="lg" 
              className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-4 text-lg"
            >
              Start Learning Today
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-emerald-700 px-8 py-4 text-lg"
            >
              View Course Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 bg-gray-900 text-white text-center">
        <p className="text-sm text-gray-400">
          "اللغة هي روح الأمة" - "Language is the soul of a nation"
        </p>
      </section>
    </div>
  )
}
