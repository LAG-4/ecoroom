"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Camera, 
  Search, 
  Users, 
  CheckCircle,
  Leaf,
  Recycle,
  ShoppingCart,
  Star,
  DollarSign,
  ArrowRight,
  Upload,
  Eye,
  MessageCircle,
  Sparkles,
  TreePine,
  Heart
} from "lucide-react"

const steps = [
  {
    step: 1,
    icon: Camera,
    title: "Upload Your Home Photos",
    description: "Take photos of rooms you want to transform and upload them to our platform. Our secure system keeps your privacy protected.",
    color: "bg-blue-500"
  },
  {
    step: 2,
    icon: Search,
    title: "Browse Expert Vendors",
    description: "View portfolios of verified eco-friendly designers and contractors. Compare prices, reviews, and previous work to find your perfect match.",
    color: "bg-green-500"
  },
  {
    step: 3,
    icon: MessageCircle,
    title: "Get Custom Proposals",
    description: "Receive personalized suggestions, detailed quotes, and timelines from multiple vendors. Choose the proposal that fits your vision and budget.",
    color: "bg-purple-500"
  },
  {
    step: 4,
    icon: Sparkles,
    title: "Transform Your Space",
    description: "Work with your chosen vendor to create an eco-friendly, sustainable home that brings you closer to nature while reducing waste.",
    color: "bg-orange-500"
  }
]

const benefits = [
  {
    icon: TreePine,
    title: "Connect with Nature",
    description: "Transform your home into a green sanctuary with plants, natural materials, and sustainable design elements."
  },
  {
    icon: Recycle,
    title: "Best Out of Waste",
    description: "Turn waste materials into beautiful, functional pieces. Our vendors specialize in upcycling and sustainable solutions."
  },
  {
    icon: DollarSign,
    title: "Best Prices Guaranteed",
    description: "Compare quotes from multiple vendors to ensure you get the best value for your eco-friendly home makeover."
  },
  {
    icon: Star,
    title: "Verified Professionals",
    description: "All our vendors are thoroughly vetted with portfolios, reviews, and certifications to ensure quality work."
  }
]

const ecoProducts = [
  {
    name: "Upcycled Bottle Planters",
    description: "Beautiful plant pots made from recycled glass bottles",
    price: "Starting at $15"
  },
  {
    name: "Reclaimed Wood Shelves",
    description: "Rustic floating shelves from sustainable wood sources",
    price: "Starting at $45"
  },
  {
    name: "Eco-Friendly Wall Art",
    description: "Handcrafted art pieces made from recycled materials",
    price: "Starting at $25"
  },
  {
    name: "Natural Fiber Rugs",
    description: "Sustainable rugs made from organic hemp and jute",
    price: "Starting at $75"
  }
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              <Leaf className="w-4 h-4 mr-1" />
              Sustainable Living Made Simple
            </Badge>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
              How It Works
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-muted-foreground">
              Transform your home into an eco-friendly sanctuary in just 4 simple steps. 
              Connect with nature, reduce waste, and create the sustainable home of your dreams.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/start">
                  Start Your Green Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Process Steps */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Your Green Transformation Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From upload to transformation, we make sustainable home improvement simple and affordable.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.step} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1">
                  <Card className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2">Step {step.step}</Badge>
                        <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </Card>
                </div>
                <div className="flex-1 text-center">
                  <div className="w-32 h-32 bg-primary/5 rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="h-16 w-16 text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose EcoBid?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              More than just home improvement - we're building a sustainable future, one home at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Vendor Selection Process */}
        <div className="mb-20">
          <Card className="p-8 bg-primary/5 border-primary/20">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Choose Your Perfect Eco-Partner
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our platform makes it easy to find and work with verified sustainable design professionals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Browse Portfolios</h3>
                <p className="text-sm text-muted-foreground">
                  View detailed portfolios with before/after photos, specializations, and eco-credentials
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Compare Prices</h3>
                <p className="text-sm text-muted-foreground">
                  Get multiple quotes and choose the best value for your budget and vision
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Read Reviews</h3>
                <p className="text-sm text-muted-foreground">
                  Make informed decisions based on authentic reviews from previous clients
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Eco Products Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready-Made Eco Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Can't wait for a full makeover? Start small with our curated collection of sustainable, upcycled home decor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecoProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="w-full h-32 bg-primary/5 rounded-lg flex items-center justify-center mb-3">
                    <Recycle className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary">{product.price}</span>
                    <Button size="sm" variant="outline">
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link href="/shop">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <Card className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Real Transformations, Real Impact
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2,500+</div>
                <p className="text-muted-foreground">Homes Transformed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <p className="text-muted-foreground">Waste Reduction Average</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
                <p className="text-muted-foreground">Customer Satisfaction</p>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-12 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Love Your Home Again?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of homeowners who've created their dream eco-friendly spaces. 
              Your sustainable home transformation starts with a single photo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/start">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Your First Photo
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/shop">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Shop Eco Products
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}