import {UserRoundPen} from "lucide-react"
const testimonials = [
  {
    quote: "This platform has revolutionized the way we work. It's intuitive, powerful, and a joy to use every day.",
    author: "Jane Doe",
    role: "CEO, TechCorp",
    avatar: "/placeholder.svg"
  },
  {
    quote: "I can't imagine running my business without this tool. It's been a game-changer for our productivity.",
    author: "John Smith",
    role: "Founder, StartupX",
    avatar: "/placeholder.svg"
  },
  {
    quote: "The customer support is outstanding. They've gone above and beyond to ensure our success.",
    author: "Emily Brown",
    role: "CTO, InnovateNow",
    avatar: "/placeholder.svg"
  }
]

export default function FeedbackReview() {
  return (
    <section className="py-14 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-blue-400 text-white p-6 rounded-lg shadow">
              <p className=" mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
              <UserRoundPen />
                <div className="ml-2">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm ">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-3">
          <button className="bg-blue-500 hover:bg-blue-400 text-white rounded-lg animate-pulse p-1 font-semibold">
            Feedback
          </button>
        </div>
      </div>
    </section>
  )
}