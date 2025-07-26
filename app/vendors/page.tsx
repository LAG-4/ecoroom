"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Eye, 
  FileText, 
  Clock, 
  DollarSign, 
  Camera, 
  Users, 
  Star, 
  CheckCircle,
  ArrowRight,
  Briefcase,
  TrendingUp,
  Shield
} from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Access to Quality Clients",
    description: "Connect with homeowners actively seeking professional design and renovation services."
  },
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    description: "Expand your client base and increase revenue through our trusted platform."
  },
  {
    icon: Star,
    title: "Build Your Reputation",
    description: "Showcase your work and collect reviews to establish credibility in the market."
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "Work with confidence through our secure payment and project management system."
  }
]

const howItWorks = [
  {
    step: 1,
    icon: Camera,
    title: "View Home Photos",
    description: "Browse submitted home photos from homeowners looking for design improvements and renovations."
  },
  {
    step: 2,
    icon: Eye,
    title: "Analyze & Suggest",
    description: "Use your expertise to identify improvement opportunities and create tailored design suggestions."
  },
  {
    step: 3,
    icon: FileText,
    title: "Provide Quotations",
    description: "Submit detailed quotes with cost breakdowns and project timelines for interested clients."
  },
  {
    step: 4,
    icon: CheckCircle,
    title: "Get Hired",
    description: "Connect directly with homeowners who approve your proposals and begin transforming their spaces."
  }
]

const portfolioFeatures = [
  "Upload before/after photos of your completed projects",
  "Add detailed project descriptions and specifications",
  "Showcase different room types and design styles",
  "Include client testimonials and reviews",
  "Display your professional certifications and credentials",
  "Highlight your specializations and expertise areas"
]

export default function VendorsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              For Design Professionals
            </Badge>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
              Join Our Vendor Network
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-muted-foreground">
              Connect with homeowners, showcase your expertise, and grow your design business. 
              Help transform homes while building your professional reputation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/vendor-register">
                  Start Your Application
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/vendor-examples">
                  View Success Stories
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* How It Works Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform connects you directly with homeowners seeking professional design advice and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item) => (
              <Card key={item.step} className="text-center relative">
                <CardHeader>
                  <div className="mx-auto mb-4 relative">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {item.step}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Build Your Professional Portfolio
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your portfolio is your digital showroom. It helps homeowners understand your style, 
                verify your expertise, and choose you for their projects with confidence.
              </p>
              <div className="space-y-3">
                {portfolioFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="p-6">
              <div className="text-center">
                <Briefcase className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Portfolio Benefits
                </h3>
                <p className="text-muted-foreground mb-4">
                  Vendors with complete portfolios receive 3x more project inquiries than those without.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">85%</div>
                    <div className="text-sm text-muted-foreground">Client Trust Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">3x</div>
                    <div className="text-sm text-muted-foreground">More Inquiries</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose EcoBid?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a platform designed to help design professionals succeed and grow their business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6">
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

        {/* What You'll Provide Section */}
        <div className="mb-20">
          <Card className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                What You'll Provide to Clients
              </h2>
              <p className="text-muted-foreground">
                Help homeowners transform their spaces with your professional expertise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Design Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Review home photos and identify improvement opportunities
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Cost Estimates</h3>
                <p className="text-sm text-muted-foreground">
                  Provide detailed quotations with transparent pricing
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Project Timeline</h3>
                <p className="text-sm text-muted-foreground">
                  Offer realistic timelines for project completion
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-12 bg-primary/5 border-primary/20">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of design professionals who are already growing their business with EcoBid. 
              Registration is quick and easy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/vendor-register">
                  Register as Vendor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Have Questions?
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}