// ./components/UserDetailsForm.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { UserDetails } from "@/app/start/page"
import { User, MapPin, Home, Palette, ArrowRight } from "lucide-react"

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
]

const BUDGET_RANGES = [
  "Under ₹15,000",
  "₹15,000 - ₹30,000",
  "₹30,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "Above ₹1,00,000"
]

const HOME_TYPES = [
  "Apartment",
  "Independent House",
  "Villa",
  "Studio",
  "PG/Hostel Room"
]

const ROOM_TYPES = [
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Bathroom",
  "Balcony",
  "Study Room",
  "Dining Room"
]

const PREFERENCES = [
  "Indoor Plants",
  "Natural Light",
  "Upcycled Materials",
  "Minimalist Design",
  "Bohemian Style",
  "Modern Contemporary",
  "Traditional Indian",
  "Space Saving Solutions"
]

interface UserDetailsFormProps {
  onSubmit: (details: UserDetails) => void
}

export function UserDetailsForm({ onSubmit }: UserDetailsFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    budget: "",
    homeType: "",
    roomType: [] as string[],
    preferences: [] as string[]
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    const newErrors: Record<string, string> = {}

    if (!formData.name) newErrors.name = "Name is required"
    if (!formData.email) newErrors.email = "Email is required"
    if (!formData.phone) newErrors.phone = "Phone is required"
    if (!formData.state) newErrors.state = "State is required"
    if (!formData.city) newErrors.city = "City is required"
    if (!formData.budget) newErrors.budget = "Budget range is required"
    if (!formData.homeType) newErrors.homeType = "Home type is required"
    if (formData.roomType.length === 0) newErrors.roomType = "Select at least one room"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    onSubmit(formData as UserDetails)
  }

  const handleRoomTypeChange = (roomType: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        roomType: [...prev.roomType, roomType]
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        roomType: prev.roomType.filter(rt => rt !== roomType)
      }))
    }
  }

  const handlePreferenceChange = (preference: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        preferences: [...prev.preferences, preference]
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        preferences: prev.preferences.filter(p => p !== preference)
      }))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-primary/10 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <User className="h-4 w-4 mr-2" />
            Step 1 of 2
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Tell Us About Yourself
          </h1>
          <p className="text-xl text-muted-foreground">
            Help us connect you with the right eco-designers in your area
          </p>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Your Details
            </CardTitle>
            <CardDescription>
              We&apos;ll use this information to find local materials and the best designers for your project
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your full name"
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your.email@example.com"
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="+91 98765 43210"
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <Label htmlFor="state">State *</Label>
                  <Select
                    value={formData.state}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, state: value }))}
                  >
                    <SelectTrigger className={errors.state ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {INDIAN_STATES.map(state => (
                        <SelectItem key={state} value={state}>{state}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                </div>

                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                    placeholder="Enter your city"
                    className={errors.city ? "border-red-500" : ""}
                  />
                  {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                </div>
              </div>

              {/* Project Details */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Home className="h-5 w-5 text-primary" />
                  Project Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="budget">Budget Range *</Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                    >
                      <SelectTrigger className={errors.budget ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        {BUDGET_RANGES.map(budget => (
                          <SelectItem key={budget} value={budget}>{budget}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
                  </div>

                  <div>
                    <Label htmlFor="homeType">Home Type *</Label>
                    <Select
                      value={formData.homeType}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, homeType: value }))}
                    >
                      <SelectTrigger className={errors.homeType ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select home type" />
                      </SelectTrigger>
                      <SelectContent>
                        {HOME_TYPES.map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.homeType && <p className="text-red-500 text-sm mt-1">{errors.homeType}</p>}
                  </div>
                </div>

                <div className="mb-4">
                  <Label>Rooms to Transform *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                    {ROOM_TYPES.map(room => (
                      <div key={room} className="flex items-center space-x-2">
                        <Checkbox
                          id={room}
                          checked={formData.roomType.includes(room)}
                          onCheckedChange={(checked) => handleRoomTypeChange(room, checked as boolean)}
                        />
                        <Label htmlFor={room} className="text-sm">{room}</Label>
                      </div>
                    ))}
                  </div>
                  {errors.roomType && <p className="text-red-500 text-sm mt-1">{errors.roomType}</p>}
                </div>
              </div>

              {/* Preferences */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Palette className="h-5 w-5 text-primary" />
                  Design Preferences (Optional)
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {PREFERENCES.map(preference => (
                    <div key={preference} className="flex items-center space-x-2">
                      <Checkbox
                        id={preference}
                        checked={formData.preferences.includes(preference)}
                        onCheckedChange={(checked) => handlePreferenceChange(preference, checked as boolean)}
                      />
                      <Label htmlFor={preference} className="text-sm">{preference}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Continue to Photo Upload
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}