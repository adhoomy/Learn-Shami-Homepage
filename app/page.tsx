import { Button } from './components'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Learn Palestinian
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover the rich culture, history, and language of Palestine through our comprehensive educational resources.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="card text-center">
          <div className="card-header">
            <h3 className="card-title">Culture</h3>
          </div>
          <div className="card-content">
            <p>Explore Palestinian traditions, customs, and cultural heritage.</p>
          </div>
        </div>

        <div className="card text-center">
          <div className="card-header">
            <h3 className="card-title">History</h3>
          </div>
          <div className="card-content">
            <p>Learn about the rich historical background and significant events.</p>
          </div>
        </div>

        <div className="card text-center">
          <div className="card-header">
            <h3 className="card-title">Language</h3>
          </div>
          <div className="card-content">
            <p>Master Palestinian Arabic with our language learning resources.</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Begin Your Journey?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Join thousands of learners who are already exploring Palestinian culture and language.
        </p>
        <Button variant="primary" size="lg">
          Start Learning Today
        </Button>
      </section>
    </div>
  )
}
