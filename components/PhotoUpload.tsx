// ./components/PhotoUpload.tsx
"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input" // Removed: 'Input' is defined but never used.
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { UserDetails, HomePhoto } from "@/app/start/page"
import { Camera, Upload, X, ArrowRight, Image as ImageIcon } from "lucide-react"
import Image from "next/image"

interface PhotoUploadProps {
  onSubmit: (photos: HomePhoto[]) => void
  userDetails: UserDetails
}

export function PhotoUpload({ onSubmit, userDetails }: PhotoUploadProps) {
  const [photos, setPhotos] = useState<HomePhoto[]>([])
  const [dragActive, setDragActive] = useState(false)
  const [descriptions, setDescriptions] = useState<Record<string, string>>({})

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files)
    }
  }, [])

  const handleFiles = (files: FileList) => {
    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const newPhoto: HomePhoto = {
            file,
            preview: e.target?.result as string,
            description: ""
          }
          setPhotos(prev => [...prev, newPhoto])
        }
        reader.readAsDataURL(file)
      }
    })
  }

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index))
    setDescriptions(prev => {
      const newDescriptions = { ...prev }
      delete newDescriptions[index.toString()]
      return newDescriptions
    })
  }

  const updateDescription = (index: number, description: string) => {
    setDescriptions(prev => ({
      ...prev,
      [index.toString()]: description
    }))
  }

  const handleSubmit = () => {
    const photosWithDescriptions = photos.map((photo, index) => ({
      ...photo,
      description: descriptions[index.toString()] || ""
    }))
    onSubmit(photosWithDescriptions)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-primary/10 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <Camera className="h-4 w-4 mr-2" />
            Step 2 of 2
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Show Us Your Space
          </h1>
          <p className="text-xl text-muted-foreground">
            Upload photos of the rooms you want to transform. The more photos, the better suggestions you&apos;ll get!
          </p>
        </div>

        <Card className="shadow-xl mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ImageIcon className="h-5 w-5 text-primary" />
              Upload Room Photos
            </CardTitle>
            <CardDescription>
              Take clear photos from different angles. Include lighting conditions and any specific areas you want to focus on.
            </CardDescription>
          </CardHeader>

          <CardContent>
            {/* Upload Area */}
            <div
              className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all ${
                dragActive
                  ? "border-primary bg-primary/5"
                  : "border-muted-foreground/25 hover:border-primary hover:bg-primary/5"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => e.target.files && handleFiles(e.target.files)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />

              <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Drop photos here or click to browse
              </h3>
              <p className="text-muted-foreground mb-4">
                Supports JPG, PNG, WebP files up to 10MB each
              </p>
              <Button variant="outline">
                Choose Files
              </Button>
            </div>

            {/* Photo Preview Grid */}
            {photos.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">
                  Uploaded Photos ({photos.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {photos.map((photo, index) => (
                    <div key={index} className="relative group">
                      <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                        <Image
                          src={photo.preview}
                          alt={`Room photo ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                        <Button
                          size="sm"
                          variant="destructive"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => removePhoto(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="mt-3">
                        <Label htmlFor={`description-${index}`}>
                          Description (Optional)
                        </Label>
                        <Textarea
                          id={`description-${index}`}
                          placeholder="Describe what you'd like to change about this space..."
                          value={descriptions[index.toString()] || ""}
                          onChange={(e) => updateDescription(index, e.target.value)}
                          rows={2}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tips */}
            <div className="mt-8 p-4 bg-primary/5 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">📸 Photo Tips for Better Suggestions:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Take photos during daytime for natural lighting</li>
                <li>• Include wide shots to show the entire room</li>
                <li>• Capture problem areas or spots you want to highlight</li>
                <li>• Show different angles to give designers a complete picture</li>
              </ul>
            </div>

            {/* User Info Summary */}
            <div className="mt-6 p-4 bg-card rounded-lg border">
              <h4 className="font-semibold text-foreground mb-3">Your Project Summary:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Location:</span>
                  <p className="font-medium">{userDetails.city}, {userDetails.state}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Budget:</span>
                  <p className="font-medium">{userDetails.budget}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Rooms:</span>
                  <p className="font-medium">{userDetails.roomType.join(", ")}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <Button
                size="lg"
                onClick={handleSubmit}
                disabled={photos.length === 0}
                className="flex-1"
              >
                Get My Quotations
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}