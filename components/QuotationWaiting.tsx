// ./components/QuotationWaiting.tsx
"use client"

import { Badge } from "@/components/ui/badge"
import { Card} from "@/components/ui/card"
import { Loader2, Clock, Users, CheckCircle } from "lucide-react"

export function QuotationWaiting() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <Badge variant="secondary" className="mb-6 px-4 py-2">
          <Clock className="h-4 w-4 mr-2" />
          Processing Your Request
        </Badge>

        <div className="mb-8">
          <div className="relative inline-block">
            <Loader2 className="h-16 w-16 text-primary animate-spin" />
            <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-foreground mb-4">
          Finding Perfect Designers for You!
        </h1>

        <p className="text-xl text-muted-foreground mb-12">
          We&apos;re connecting you with eco-friendly designers in your area.
          This should take just a few moments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6">
            <Users className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Matching Experts</h3>
            <p className="text-sm text-muted-foreground">
              Finding designers with experience in your style and budget
            </p>
          </Card>

          <Card className="p-6">
            <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Reviewing Photos</h3>
            <p className="text-sm text-muted-foreground">
              Analyzing your space for personalized recommendations
            </p>
          </Card>

          <Card className="p-6">
            <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Preparing Quotes</h3>
            <p className="text-sm text-muted-foreground">
              Getting detailed proposals with timelines and pricing
            </p>
          </Card>
        </div>

        <div className="mt-12 p-6 bg-card rounded-lg border">
          <p className="text-sm text-muted-foreground">
            <strong>What happens next?</strong> You&apos;ll see all quotations sorted by price,
            along with each designer&apos;s portfolio and reviews. You can then choose the perfect match for your project!
          </p>
        </div>
      </div>
    </div>
  )
}