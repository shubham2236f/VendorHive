import { CheckCircle, Users, Briefcase, Shield,Star } from "lucide-react"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Whyuse() {
    useGSAP(() => {
        
        gsap.from(".why", {
          opacity:0,
          x:-180,
          y:50,
          duration: .8,
          stagger: 0.2,
          scrollTrigger:{
            trigger:".why",
            start: "top 70%",
          },
        });
      });
  const benefits = [
    {
      title: "Top Talent",
      description: "Access a pool of skilled and vetted vendors across various industries.",
      icon: Star,
    },
    {
      title: "Opportunities",
      description: "Find projects that match your skills and interests.",
      icon:Briefcase ,
    },
    {
      title: "Security",
      description: "Rest easy knowing your data is protected with state-of-the-art security measures.",
      icon: Shield,
    },
    {
      title: "Reliability",
      description: "Our rating system ensures you work with reliable professionals.",
      icon: CheckCircle,
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Why Use VendorHive?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="why bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}