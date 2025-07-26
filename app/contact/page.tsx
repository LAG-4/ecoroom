"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Have questions about Ecobid? We&apos;re here to help. Reach out to
              us through any of the following channels.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                Email Us
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">
                  General inquiries
                </p>
                <a
                  href="mailto:hello@newbranch.com"
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  aryan@lagaryan.click
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Support</p>
                <a
                  href="mailto:support@newbranch.com"
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  knu01234@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Business Hours Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                Business Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
              <p className="text-muted-foreground">
                We will typically get back to you in 1 or 2 days
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                We&apos;re Here to Help
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Whether you have questions about our services, need technical
                support, or want to explore partnership opportunities, our team
                is ready to assist you. We typically respond within 24 hours
                during business days.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}