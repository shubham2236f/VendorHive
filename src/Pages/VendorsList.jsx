import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'

// Dummy product data
const products = [
  { id: 1, name: "Vendors/worker", price: 199.99, image: "/placeholder.svg?height=100&width=100", description: "good milk man." },
  { id: 1, name: "Vendors/worker", price: 199.99, image: "/placeholder.svg?height=100&width=100", description: "good milk man." },
  { id: 1, name: "Vendors/worker", price: 199.99, image: "/placeholder.svg?height=100&width=100", description: "good milk man." },
  { id: 1, name: "Vendors/worker", price: 199.99, image: "/placeholder.svg?height=100&width=100", description: "good milk man." },
  { id: 1, name: "Vendors/worker", price: 199.99, image: "/placeholder.svg?height=100&width=100", description: "good milk man." },
  { id: 1, name: "Vendors/worker", price: 199.99, image: "/placeholder.svg?height=100&width=100", description: "good milk man." },
  { id: 1, name: "Vendors/worker", price: 199.99, image: "/placeholder.svg?height=100&width=100", description: "good milk man." },
  { id: 1, name: "Vendors/worker", price: 199.99, image: "/placeholder.svg?height=100&width=100", description: "good milk man." },
]

export default function ProductShowcaseList() {
  return (
    <>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 ">
          <ul className="divide-y divide-gray-200">
            {products.map((product) => (
              <li key={product.id} className="py-6 flex mb-2 bg-gradient-to-l from-blue-100 to-blue-50 rounded-lg">
                <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="ml-4 flex-1 flex flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href="#">{product.name}</a>
                      </h3>
                      <p className="ml-4">Rs{product.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                  </div>
                  <div className="flex-1 flex items-end justify-between text-sm">
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
   
    </>
  )
}