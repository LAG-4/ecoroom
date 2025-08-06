"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight,
  Camera,
  Heart,
  Home,
  Leaf,
  Star,
  Sparkles,
  CheckCircle2,
  Coffee,
  TreePine,
  Smile,
  Lightbulb, 
  Palette, 
  Gem, 
  User
} from "lucide-react"

// Updated content for features/problems/solutions
const problems = [
  "Your home feels disconnected from nature?",
  "Want to be eco-friendly but don&apos;t know where to start?", 
  "Worried about high costs or overwhelming projects?",
  "Need expert advice that matches your style?"
]

const solutions = [
  {
    icon: Palette, 
    title: "Personalized Eco-Designs",
    description: "Get ideas tailored just for your space, focusing on natural beauty and sustainability."
  },
  {
    icon: Leaf, 
    title: "Bring Nature Indoors",
    description: "Discover effortless ways to infuse your home with plants, light, and natural materials."
  },
  {
    icon: Lightbulb, 
    title: "Clever & Cost-Effective",
    description: "Explore budget-friendly solutions, including creative &apos;best out of waste&apos; ideas."
  }
]

const process = [
  {
    step: "01",
    icon: Camera,
    title: "Share Your Space",
    description: "Upload a few photos of your room. Tell us your dreams—more light, cozy nooks, green vibes!"
  },
  {
    step: "02", 
    icon: User,
    title: "Get Inspired Ideas & Quotes",
    description: "Connect with certified eco-designers. See their unique portfolios & receive personalized proposals with clear pricing."
  },
  {
    step: "03",
    icon: Sparkles,
    title: "Love Your New Home!",
    description: "Watch your vision bloom! Our team supports you every step until your home is your happy, sustainable sanctuary."
  }
]

const quickWins = [
  {
    icon: TreePine,
    title: "Upcycled Bottle Planters",
    description: "Turn waste into beautiful plant homes instantly.",
    price: "From Rs. 12",
    time: "2-day delivery",
    imageSrc: "/bottles.png" 
  },
  {
    icon: Coffee,
    title: "Reclaimed Wood Shelves",
    description: "Add rustic charm with sustainable, ready-to-hang shelves.",
    price: "From Rs. 45", 
    time: "1-week delivery",
    imageSrc: "/woodshelf.png" 
  },
  {
    icon: Gem, 
    title: "Eco-Friendly Wall Art Kits",
    description: "Craft unique pieces from recycled materials—fun for all ages!",
    price: "From Rs. 20",
    time: "Next-day shipping",
    imageSrc: "/wallart.png" 
  }
]

const testimonials = [
  {
    name: "Aisha S.",
    avatar: "AS",
    rating: 5,
    text: "I wanted a green home but felt overwhelmed. New Branch connected me with a brilliant designer who used amazing upcycled ideas. My apartment feels like a breathable oasis now!",
    transform: "Cozy Urban Oasis",
    imageSrc: "/home1.png" // Added image source for the first testimonial
  },
  {
    name: "Ben L.", 
    avatar: "BL",
    rating: 5,
    text: "Getting quotes was so easy, and the prices were surprisingly affordable for eco-design. Our living room is transformed, and we love knowing it&apos;s sustainable.",
    transform: "Modern Family Space",
    imageSrc: "/home2.png" // No image for this one, or add another if you have it
  },
  {
    name: "Chloe P.",
    avatar: "CP", 
    rating: 5,
    text: "The ready-made plant pots from recycled bottles were a perfect quick win! They add so much character. Can&apos;t wait for my bigger project!",
    transform: "Sunny Plant Corner",
    imageSrc: "/home3.png"// No image for this one, or add another if you have it
  }
]


export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Image with Stronger Overlay for Readability */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png" // Your specified hero image
            alt="Beautiful transformed home with natural light and plants"
            fill
            className="object-cover"
            priority
          />
          {/* Enhanced overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-left"> {/* Aligned text to left */}
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
              <Leaf className="h-4 w-4 mr-2" />
              Your Path to a Happier, Greener Home
            </Badge>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              Your Home Should Make You{" "}
              <span className="text-primary relative">
                Smile.
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-primary/20 -rotate-1 transform -translate-x-1"></div>
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Discover how effortless it is to create a cozy, eco-friendly sanctuary. 
              No stress, no overwhelm—just beautiful transformations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg" asChild>
                <Link href="/start">
                  <Camera className="h-5 w-5 mr-2" />
                  Show Me My Home&apos;s Potential
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="#how-it-works-section">
                  See How It Works ↓
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Free initial ideas
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                No commitment
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Verified experts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Relatable & Empathetic */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Feeling Stuck With Your Space?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Many homeowners face these common challenges when dreaming of a makeover:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border shadow-sm">
                <div className="w-2 h-2 bg-muted-foreground rounded-full flex-shrink-0"></div>
                <span className="text-muted-foreground">{problem}</span>
              </div>
            ))}
          </div>
          
          <p className="text-xl text-primary font-semibold">
            It doesn&apos;t have to be this way. We&apos;re here to help you unlock your home&apos;s full potential!
          </p>
        </div>
      </section>

      {/* Solution Section - Hopeful & Inspiring */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Imagine Your Dream Home. We&apos;ll Help You Get There.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              New Branch makes creating your perfect, eco-friendly space surprisingly simple and joyful.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <solution.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-4 text-foreground">{solution.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {solution.description}
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Simple & Encouraging */}
      <section id="how-it-works-section" className="py-20 bg-primary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <Sparkles className="h-4 w-4 mr-2" />
              Your Green Makeover Journey
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              It&apos;s Easier Than You Think!
            </h2>
            <p className="text-xl text-muted-foreground">
              Just three simple steps to unlock your home&apos;s natural potential
            </p>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="relative inline-block mb-6">
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        {step.step}
                      </div>
                      {/* Animated pulse around the step number */}
                      <div className="absolute -inset-2 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: `${index * 200}ms` }}></div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Connecting lines for desktop only */}
            <div className="hidden md:block absolute top-1/3 left-1/2 transform -translate-x-1/2 w-full max-w-2xl z-0">
              <div className="flex justify-between items-center">
                <div className="w-32 h-0.5 bg-primary/30 transform -rotate-12 translate-x-12 -translate-y-8"></div>
                <div className="w-32 h-0.5 bg-primary/30 transform rotate-12 -translate-x-12 -translate-y-8"></div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="shadow-lg" asChild>
              <Link href="/start">
                <Heart className="h-5 w-5 mr-2" />
                Ready to Start? Let&apos;s Go!
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof - Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Real Homes, Real Happy People!
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our amazing community is saying about their New Branch transformations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Conditional rendering for image or icon */}
                <div className="relative aspect-video flex items-center justify-center">
                  {testimonial.imageSrc ? (
                    <Image 
                      src={testimonial.imageSrc}
                      alt={testimonial.transform}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <div className="text-center p-4">
                        <Home className="h-10 w-10 text-primary mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground font-medium">{testimonial.transform}</p>
                      </div>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-foreground mb-4 italic leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                        {testimonial.avatar}
                      </div>
                      <span className="font-semibold text-foreground">{testimonial.name}</span>
                    </div>
                    <div className="flex text-primary">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Wins - Immediate Satisfaction (with images) */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Need a Little Spark Right Now?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sometimes you don&apos;t need a full makeover to feel good. Grab a quick win for instant happiness!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickWins.map((item, index) => (
              <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative w-full aspect-square bg-primary/10 rounded-lg overflow-hidden mb-4">
                  <Image 
                    src={item.imageSrc} 
                    alt={item.title} 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute top-2 right-2 px-3 py-1 bg-background/80 rounded-full text-xs font-medium text-foreground shadow-sm">
                    {item.time}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{item.price}</span>
                  <Button size="sm">
                    Quick Add
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/shop">
                Browse All Instant Happiness Boosters
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA - Emotional & Encouraging */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Smile className="h-16 w-16 text-primary mx-auto mb-4 animate-bounce-slow" /> 
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Your Happy, Eco-Friendly Home Awaits!
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              It&apos;s time to create a space that truly reflects you and your love for the planet. 
              Let&apos;s make some magic happen!
            </p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-lg mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="text-center sm:text-left">
                <p className="text-sm text-muted-foreground mb-1">Limited Time Offer</p>
                <p className="text-2xl font-bold text-primary">Get Your FREE Design Consultation!</p>
                <p className="text-sm text-muted-foreground">Worth $150 • No obligations, just great ideas.</p>
              </div>
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg" asChild>
                <Link href="/start">
                  <Camera className="h-5 w-5 mr-2" />
                  Claim My Free Consultation!
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Zero pressure</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>100% satisfaction focus</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Your vision, our expertise NEW BRANCH</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}