// ./components/VendorSelection.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Separator } from "@/components/ui/separator" // Removed: 'Separator' is defined but never used.
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { UserDetails, HomePhoto, Quotation } from "@/app/start/page"
import {
  CheckCircle,
  Star,
  Calendar,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Award,
  Heart
} from "lucide-react"
import Image from "next/image"

interface VendorSelectionProps {
  selectedVendor: Quotation
  userDetails: UserDetails
  homePhotos: HomePhoto[]
}

export function VendorSelection({
  selectedVendor,
  userDetails,
  homePhotos
}: VendorSelectionProps) {
  const [step, setStep] = useState<'confirm' | 'schedule' | 'success'>('confirm')
  const [scheduleData, setScheduleData] = useState({
    preferredDate: '',
    preferredTime: '',
    message: ''
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  const handleConfirm = () => {
    setStep('schedule')
  }

  const handleSchedule = () => {
    // Here you would typically send the data to your backend
    console.log('Booking confirmed:', {
      vendor: selectedVendor,
      user: userDetails,
      photos: homePhotos,
      schedule: scheduleData
    })
    setStep('success')
  }

if (step === 'success') {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          {/* Success Animation */}
          <div className="relative inline-block mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-2xl">
                <CheckCircle className="h-12 w-12 text-primary-foreground" />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-ping"></div>
              <div className="absolute -inset-2 rounded-full border border-primary/10 animate-pulse"></div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <Badge className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground border-0 text-base font-medium">
              <Heart className="h-5 w-5 mr-2" />
              Booking Confirmed Successfully!
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Welcome to Your
              <br />
              <span className="text-primary">
                Dream Home Journey
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              🎉 Congratulations! <strong>{selectedVendor.vendorName}</strong> will reach out within <strong>24 hours</strong> to begin crafting your perfect space.
            </p>
          </div>
        </div>

        {/* Enhanced Booking Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-xl border">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-16 w-16 border-4 border-primary/20">
                  <AvatarImage src={`/vendor-${selectedVendor.vendorId}.jpg`} />
                  <AvatarFallback className="text-lg bg-primary text-primary-foreground">
                    {selectedVendor.vendorName.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{selectedVendor.vendorName}</h3>
                  <div className="flex items-center gap-2 text-primary">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-medium">{selectedVendor.vendorRating} • {selectedVendor.completedProjects}+ projects</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                  <span className="font-medium text-foreground">Project Value</span>
                  <span className="text-xl font-bold text-primary">{formatPrice(selectedVendor.price)}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <span className="font-medium text-foreground">Timeline</span>
                  <span className="font-semibold text-foreground">{selectedVendor.timeline}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                What Happens Next?
              </h3>
              
              <div className="space-y-4">
                {[
                  { icon: "📞", title: "Initial Call", desc: "Designer contacts you within 24 hours", time: "Today" },
                  { icon: "📏", title: "Site Visit", desc: "Professional measurements & assessment", time: "Week 1" },
                  { icon: "🎨", title: "Design Phase", desc: "3D designs & material selection", time: "Week 2-3" },
                  { icon: "🔨", title: "Execution", desc: "Professional implementation begins", time: "Week 4+" }
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="text-2xl">{step.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-foreground">{step.title}</h4>
                        <Badge variant="outline" className="text-xs">{step.time}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Button size="lg" variant="outline" className="flex-1 h-14 text-lg font-medium">
              <MessageCircle className="h-5 w-5 mr-2" />
              View Project Dashboard
            </Button>
            <Button size="lg" className="flex-1 h-14 text-lg font-medium shadow-lg">
              <Heart className="h-5 w-5 mr-2" />
              Share Your Experience
            </Button>
          </div>

          {/* Contact Support */}
          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground mb-4">Need immediate assistance?</p>
            <div className="flex justify-center gap-6">
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                <Phone className="h-4 w-4 mr-2" />
                Call Support
              </Button>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                <Mail className="h-4 w-4 mr-2" />
                Email Us
              </Button>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                <MessageCircle className="h-4 w-4 mr-2" />
                Live Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


  if (step === 'schedule') {
    return (
      <div className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <Calendar className="h-4 w-4 mr-2" />
              Almost Done!
            </Badge>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Schedule Your Consultation
            </h1>
            <p className="text-lg text-muted-foreground">
              Let {selectedVendor.vendorName} know when you&apos;re available for the initial discussion
            </p>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Consultation Details</CardTitle>
              <CardDescription>
                This will be a free consultation to discuss your project in detail
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="preferredDate">Preferred Date</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={scheduleData.preferredDate}
                      onChange={(e) => setScheduleData(prev => ({ ...prev, preferredDate: e.target.value }))}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div>
                    <Label htmlFor="preferredTime">Preferred Time</Label>
                    <Input
                      id="preferredTime"
                      type="time"
                      value={scheduleData.preferredTime}
                      onChange={(e) => setScheduleData(prev => ({ ...prev, preferredTime: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Additional Message (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Any specific requirements, questions, or preferred communication method..."
                    value={scheduleData.message}
                    onChange={(e) => setScheduleData(prev => ({ ...prev, message: e.target.value }))}
                    rows={3}
                  />
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> The designer will contact you to confirm the exact time.
                    If your preferred slot isn&apos;t available, they&apos;ll suggest alternative times.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <Button
                  variant="outline"
                  onClick={() => setStep('confirm')}
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  onClick={handleSchedule}
                  className="flex-1"
                  disabled={!scheduleData.preferredDate}
                >
                  Confirm Booking
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <CheckCircle className="h-4 w-4 mr-2" />
            Great Choice!
          </Badge>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Confirm Your Selection
          </h1>
          <p className="text-lg text-muted-foreground">
            Review your project details before we connect you with your designer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Vendor Details */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={`/vendor-${selectedVendor.vendorId}.jpg`} />
                    <AvatarFallback className="text-lg">
                      {selectedVendor.vendorName.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <CardTitle className="text-2xl">{selectedVendor.vendorName}</CardTitle>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{selectedVendor.vendorRating} rating</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4" />
                        <span>{selectedVendor.completedProjects} projects</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{selectedVendor.experience}y experience</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">
                      {formatPrice(selectedVendor.price)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Timeline: {selectedVendor.timeline}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Project Description</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedVendor.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Proposed Materials</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedVendor.materials.map((material, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 bg-muted/30 rounded-lg">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{material}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
  <h3 className="font-semibold mb-3">Portfolio Highlights</h3>
  <div className="grid grid-cols-2 gap-3">
    {[
      { image: "/home1.png", title: "Modern Living Room Design", description: "Contemporary furniture with clean lines" },
      { image: "/home2.png", title: "Elegant Bedroom Setup", description: "Cozy and sophisticated interior" },
      { image: "/home3.png", title: "Kitchen Renovation", description: "Functional and stylish cooking space" },
      { image: "/bottles.png", title: "Decorative Accents", description: "Artistic bottle arrangements" },
      { image: "/hero.png", title: "Complete Home Makeover", description: "Full interior transformation" },
      { image: "/rug.png", title: "Floor Styling", description: "Premium rug and flooring design" },
      { image: "/wallart.png", title: "Wall Art Installation", description: "Creative wall decoration solutions" },
      { image: "/woodshelf.png", title: "Custom Storage Solutions", description: "Handcrafted wooden shelving" }
    ].slice(0, 4).map((work, i) => (
      <div key={i} className="space-y-2">
        <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
          <Image
            src={work.image}
            alt={work.title}
            fill
            className="object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
        <div>
          <h4 className="font-medium text-sm">{work.title}</h4>
          <p className="text-xs text-muted-foreground">{work.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

                </div>
              </CardContent>
            </Card>
          </div>

          {/* Project Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Project</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm text-muted-foreground">Client</Label>
                  <p className="font-medium">{userDetails.name}</p>
                </div>

                <div>
                  <Label className="text-sm text-muted-foreground">Location</Label>
                  <p className="font-medium">{userDetails.city}, {userDetails.state}</p>
                </div>

                <div>
                  <Label className="text-sm text-muted-foreground">Budget Range</Label>
                  <p className="font-medium">{userDetails.budget}</p>
                </div>

                <div>
                  <Label className="text-sm text-muted-foreground">Home Type</Label>
                  <p className="font-medium">{userDetails.homeType}</p>
                </div>

                <div>
                  <Label className="text-sm text-muted-foreground">Rooms</Label>
                  <p className="font-medium">{userDetails.roomType.join(", ")}</p>
                </div>

                <div>
                  <Label className="text-sm text-muted-foreground">Photos Uploaded</Label>
                  <p className="font-medium">{homePhotos.length} photo(s)</p>
                </div>

                {userDetails.preferences.length > 0 && (
                  <div>
                    <Label className="text-sm text-muted-foreground">Style Preferences</Label>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {userDetails.preferences.map((pref, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {pref}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="bg-primary/5">
              <CardContent className="p-6">
                <div className="text-center space-y-3">
                  <h3 className="font-semibold">Ready to Transform Your Home?</h3>
                  <p className="text-sm text-muted-foreground">
                    By confirming, you agree to share your contact details and photos with {selectedVendor.vendorName}
                  </p>
                  <Button onClick={handleConfirm} size="lg" className="w-full">
                    Confirm & Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-center text-sm text-muted-foreground">
              <p>Need help? Contact our support team</p>
              <div className="flex justify-center gap-4 mt-2">
                <Button variant="ghost" size="sm">
                  <Phone className="h-4 w-4 mr-1" />
                  Call
                </Button>
                <Button variant="ghost" size="sm">
                  <Mail className="h-4 w-4 mr-1" />
                  Email
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}