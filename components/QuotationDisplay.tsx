"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { UserDetails, HomePhoto, Quotation } from "@/app/start/page"
import { 
  Star, 
  Clock, 
  CheckCircle, 
  Eye,
  ArrowRight,
  SortAsc
} from "lucide-react"
import Image from "next/image"

interface QuotationDisplayProps {
  quotations: Quotation[]
  onVendorSelect: (quotation: Quotation) => void
  userDetails: UserDetails
  homePhotos: HomePhoto[]
}

export function QuotationDisplay({ 
  quotations, 
  onVendorSelect, 
  userDetails, 
  homePhotos 
}: QuotationDisplayProps) {
  const [selectedQuotation] = useState<string | null>(null)
  const [viewingPortfolio, setViewingPortfolio] = useState<string | null>(null)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <CheckCircle className="h-4 w-4 mr-2" />
            Quotations Ready!
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Choose Your Perfect Designer
          </h1>
          <p className="text-xl text-muted-foreground">
            {quotations.length} eco-friendly designers want to transform your space
          </p>
        </div>

        {/* Project Summary */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold">{userDetails.city}, {userDetails.state}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Budget</p>
                <p className="font-semibold">{userDetails.budget}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Rooms</p>
                <p className="font-semibold">{userDetails.roomType.length} room(s)</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Photos Uploaded</p>
                <p className="font-semibold">{homePhotos.length} photo(s)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sorting Info */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <SortAsc className="h-4 w-4" />
            Sorted by price (lowest first)
          </div>
          <Badge variant="outline">
            {quotations.length} designer{quotations.length !== 1 ? 's' : ''} available
          </Badge>
        </div>

        {/* Quotations List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {quotations.map((quotation, index) => (
            <Card 
              key={quotation.id} 
              className={`hover:shadow-xl transition-all duration-300 ${
                selectedQuotation === quotation.id ? 'ring-2 ring-primary' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={`/vendor-${quotation.vendorId}.jpg`} />
                        <AvatarFallback>
                          {quotation.vendorName.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{quotation.vendorName}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span>{quotation.vendorRating}</span>
                          </div>
                          <span>•</span>
                          <span>{quotation.completedProjects} projects</span>
                          <span>•</span>
                          <span>{quotation.experience}y exp</span>
                        </div>
                      </div>
                    </div>
                    
                    {index === 0 && (
                      <Badge className="bg-green-500 hover:bg-green-600 mb-2">
                        Best Value
                      </Badge>
                    )}
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {formatPrice(quotation.price)}
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {quotation.timeline}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-base mb-4 leading-relaxed">
                  {quotation.description}
                </CardDescription>
                
                {/* Materials */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Proposed Materials:</h4>
                  <div className="flex flex-wrap gap-2">
                    {quotation.materials.map((material, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {material}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Portfolio Preview */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-3">Recent Work:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {quotation.portfolio.slice(0, 2).map((work, i) => (
                      <div key={i} className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                        <Image
                          src={work.image}
                          alt={work.title}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            // Fallback for missing images
                            e.currentTarget.style.display = 'none'
                          }}
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                          <p className="text-white text-xs text-center p-2">{work.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setViewingPortfolio(
                      viewingPortfolio === quotation.id ? null : quotation.id
                    )}
                    className="flex-1"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    {viewingPortfolio === quotation.id ? 'Hide' : 'View'} Portfolio
                  </Button>
                  
                  <Button
                    size="sm"
                    onClick={() => onVendorSelect(quotation)}
                    className="flex-1"
                  >
                    Choose This Designer
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
                
                {/* Extended Portfolio */}
                {viewingPortfolio === quotation.id && (
                  <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                    <h5 className="font-semibold mb-3">Complete Portfolio</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {quotation.portfolio.map((work, i) => (
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
                            <h6 className="font-medium text-sm">{work.title}</h6>
                            <p className="text-xs text-muted-foreground">{work.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Help Section */}
        <Card className="mt-8 bg-primary/5">
          <CardContent className="p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">Need Help Choosing?</h3>
            <p className="text-muted-foreground mb-4">
              Not sure which designer is right for you? Our team can help you make the best choice.
            </p>
            <Button variant="outline">
              Get Expert Advice
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}