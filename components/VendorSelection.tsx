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
  // IndianRupee, // Removed: 'IndianRupee' is defined but never used.
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
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="relative inline-block">
              <CheckCircle className="h-20 w-20 text-green-500" />
              <div className="absolute inset-0 rounded-full border-4 border-green-200 animate-pulse"></div>
            </div>
          </div>

          <Badge className="mb-6 px-4 py-2 bg-green-500 hover:bg-green-600">
            <Heart className="h-4 w-4 mr-2" />
            Booking Confirmed!
          </Badge>

          <h1 className="text-4xl font-bold text-foreground mb-4">
            Your Dream Home Journey Begins!
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            {selectedVendor.vendorName} will contact you within 24 hours to discuss your project details.
          </p>

          <Card className="text-left mb-8">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">What Happens Next?</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-semibold text-primary">1</span>
                  </div>
                  <div>
                    <p className="font-medium">Initial Consultation</p>
                    <p className="text-sm text-muted-foreground">Your designer will call you to discuss your vision and preferences in detail.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-semibold text-primary">2</span>
                  </div>
                  <div>
                    <p className="font-medium">Site Visit & Measurements</p>
                    <p className="text-sm text-muted-foreground">A professional visit to your home to take accurate measurements and assess the space.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-semibold text-primary">3</span>
                  </div>
                  <div>
                    <p className="font-medium">Design Proposal</p>
                    <p className="text-sm text-muted-foreground">Receive detailed 3D designs, material lists, and project timeline.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-semibold text-primary">4</span>
                  </div>
                  <div>
                    <p className="font-medium">Project Execution</p>
                    <p className="text-sm text-muted-foreground">Professional implementation with regular updates and quality checks.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline">
              View My Dashboard
            </Button>
            <Button size="lg">
              Share My Experience
            </Button>
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
                      {selectedVendor.portfolio.slice(0, 4).map((work, i) => (
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