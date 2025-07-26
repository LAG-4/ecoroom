"use client"

import { useState } from "react"
import { UserDetailsForm } from "@/components/UserDetailsForm"
import { PhotoUpload } from "@/components/PhotoUpload"
import { QuotationWaiting } from "@/components/QuotationWaiting"
import { QuotationDisplay } from "@/components/QuotationDisplay"
import { VendorSelection } from "@/components/VendorSelection"

export type UserDetails = {
  name: string
  email: string
  phone: string
  state: string
  city: string
  budget: string
  homeType: string
  roomType: string[]
  preferences: string[]
}

export type HomePhoto = {
  file: File
  preview: string
  description?: string
}

export type Quotation = {
  id: string
  vendorId: string
  vendorName: string
  vendorRating: number
  price: number
  timeline: string
  description: string
  materials: string[]
  portfolio: {
    id: string
    title: string
    image: string
    description: string
  }[]
  experience: number
  completedProjects: number
}

const STEPS = {
  USER_DETAILS: 1,
  PHOTO_UPLOAD: 2,
  WAITING: 3,
  QUOTATIONS: 4,
  VENDOR_SELECTION: 5,
}

export default function StartPage() {
  const [currentStep, setCurrentStep] = useState(STEPS.USER_DETAILS)
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null)
  const [homePhotos, setHomePhotos] = useState<HomePhoto[]>([])
  const [quotations, setQuotations] = useState<Quotation[]>([])
  const [selectedVendor, setSelectedVendor] = useState<Quotation | null>(null)

  const handleUserDetailsSubmit = (details: UserDetails) => {
    setUserDetails(details)
    setCurrentStep(STEPS.PHOTO_UPLOAD)
  }

  const handlePhotosSubmit = (photos: HomePhoto[]) => {
    setHomePhotos(photos)
    setCurrentStep(STEPS.WAITING)
    
    // Simulate API call to submit to vendors
    setTimeout(() => {
      // Mock quotations - in real app, this would come from API
      const mockQuotations: Quotation[] = [
        {
          id: "1",
          vendorId: "vendor1",
          vendorName: "Green Spaces Design",
          vendorRating: 4.8,
          price: 25000,
          timeline: "2-3 weeks",
          description: "Complete eco-friendly makeover with sustainable materials and indoor plants. We'll transform your space into a green oasis.",
          materials: ["Bamboo furniture", "Recycled wood", "Indoor plants", "Natural fiber rugs"],
          portfolio: [
            { id: "1", title: "Urban Jungle Living Room", image: "/portfolio1.jpg", description: "Transformed a boring living room into a plant paradise" },
            { id: "2", title: "Sustainable Bedroom", image: "/portfolio2.jpg", description: "Eco-friendly bedroom with reclaimed wood" }
          ],
          experience: 5,
          completedProjects: 127
        },
        {
          id: "2",
          vendorId: "vendor2",
          vendorName: "EcoHome Experts",
          vendorRating: 4.6,
          price: 18000,
          timeline: "1-2 weeks",
          description: "Budget-friendly eco solutions using upcycled materials and DIY elements you can be proud of.",
          materials: ["Upcycled furniture", "Bottle planters", "Cork boards", "LED grow lights"],
          portfolio: [
            { id: "1", title: "Upcycled Kitchen", image: "/portfolio3.jpg", description: "Kitchen makeover using recycled materials" },
            { id: "2", title: "DIY Plant Wall", image: "/portfolio4.jpg", description: "Stunning vertical garden from waste materials" }
          ],
          experience: 3,
          completedProjects: 89
        },
        {
          id: "3",
          vendorId: "vendor3",
          vendorName: "Nature's Touch Interiors",
          vendorRating: 4.9,
          price: 35000,
          timeline: "3-4 weeks",
          description: "Premium eco-luxury design with high-end sustainable materials and smart home integration.",
          materials: ["Premium bamboo", "Smart plant systems", "Natural stone", "Organic cotton"],
          portfolio: [
            { id: "1", title: "Luxury Eco Suite", image: "/portfolio5.jpg", description: "High-end sustainable bedroom design" },
            { id: "2", title: "Smart Green Living", image: "/portfolio6.jpg", description: "Living room with automated plant care" }
          ],
          experience: 8,
          completedProjects: 203
        }
      ]
      
      setQuotations(mockQuotations.sort((a, b) => a.price - b.price))
      setCurrentStep(STEPS.QUOTATIONS)
    }, 3000) // 3 second delay to simulate processing
  }

  const handleVendorSelect = (quotation: Quotation) => {
    setSelectedVendor(quotation)
    setCurrentStep(STEPS.VENDOR_SELECTION)
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case STEPS.USER_DETAILS:
        return <UserDetailsForm onSubmit={handleUserDetailsSubmit} />
      
      case STEPS.PHOTO_UPLOAD:
        return <PhotoUpload onSubmit={handlePhotosSubmit} userDetails={userDetails!} />
      
      case STEPS.WAITING:
        return <QuotationWaiting />
      
      case STEPS.QUOTATIONS:
        return (
          <QuotationDisplay 
            quotations={quotations} 
            onVendorSelect={handleVendorSelect}
            userDetails={userDetails!}
            homePhotos={homePhotos}
          />
        )
      
      case STEPS.VENDOR_SELECTION:
        return (
          <VendorSelection 
            selectedVendor={selectedVendor!}
            userDetails={userDetails!}
            homePhotos={homePhotos}
          />
        )
      
      default:
        return <UserDetailsForm onSubmit={handleUserDetailsSubmit} />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {renderCurrentStep()}
    </div>
  )
}