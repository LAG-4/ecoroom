"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  ShoppingCart, 
  Search, 
  Filter,
  Heart,
  Star,
  Plus,
  Minus,
  X,
  Leaf,
  Recycle,
  TreePine,
  CheckCircle,
  ArrowLeft,
  CreditCard,
  Truck,
  Check
} from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  category: string
  rating: number
  reviews: number
  inStock: boolean
  featured?: boolean
  sustainable?: boolean
}

interface CartItem extends Product {
  quantity: number
}

interface CheckoutForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  postalCode: string
  state: string
  paymentMethod: string
  cardNumber: string
  expiryDate: string
  cvv: string
  specialInstructions: string
}

const products: Product[] = [
  {
    id: "1",
    name: "Upcycled Bottle Planters",
    description: "Beautiful plant pots made from recycled glass bottles. Perfect for herbs and small plants.",
    price: 15,
    originalPrice: 25,
    image: "/bottles.png",
    category: "planters",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true,
    sustainable: true
  },
  {
    id: "2", 
    name: "Reclaimed Wood Shelves",
    description: "Rustic floating shelves from sustainable wood sources. Each piece is unique.",
    price: 45,
    image: "/woodshelf.png",
    category: "furniture", 
    rating: 4.9,
    reviews: 89,
    inStock: true,
    featured: true,
    sustainable: true
  },
  {
    id: "3",
    name: "Eco-Friendly Wall Art",
    description: "Handcrafted art pieces made from recycled materials and natural dyes.",
    price: 25,
    originalPrice: 35,
    image: "/wallart.png",
    category: "decor",
    rating: 4.7,
    reviews: 156,
    inStock: true,
    sustainable: true
  },
  {
    id: "4",
    name: "Natural Fiber Rugs",
    description: "Sustainable rugs made from organic hemp and jute. Durable and eco-friendly.",
    price: 75,
    image: "/rug.png",
    category: "textiles",
    rating: 4.6,
    reviews: 67,
    inStock: true,
    featured: true,
    sustainable: true
  },
  {
    id: "5",
    name: "Bamboo Storage Baskets",
    description: "Handwoven storage baskets made from sustainable bamboo. Various sizes available.",
    price: 35,
    image: "/bamboo.png",
    category: "storage",
    rating: 4.5,
    reviews: 98,
    inStock: true,
    sustainable: true
  },
  {
    id: "6",
    name: "Solar-Powered Garden Lights",
    description: "Energy-efficient outdoor lighting powered by renewable solar energy.",
    price: 55,
    originalPrice: 80,
    image: "/lights.png",
    category: "lighting",
    rating: 4.4,
    reviews: 201,
    inStock: true,
    sustainable: true
  },
  {
    id: "7",
    name: "Recycled Plastic Outdoor Furniture",
    description: "Weather-resistant outdoor seating made from 100% recycled ocean plastic.",
    price: 120,
    image: "/plastic.png",
    category: "furniture",
    rating: 4.8,
    reviews: 45,
    inStock: false,
    sustainable: true
  },
  {
    id: "8",
    name: "Organic Cotton Throw Pillows",
    description: "Soft and comfortable pillows made from certified organic cotton with natural dyes.",
    price: 30,
    image: "/cotton-pillows.png",
    category: "textiles",
    rating: 4.7,
    reviews: 133,
    inStock: true,
    sustainable: true
  }
]

const categories = [
  { value: "all", label: "All Products" },
  { value: "planters", label: "Planters" },
  { value: "furniture", label: "Furniture" },
  { value: "decor", label: "Home Decor" },
  { value: "textiles", label: "Textiles" },
  { value: "storage", label: "Storage" },
  { value: "lighting", label: "Lighting" }
]

export default function Shop() {
  const [cart, setCart] = React.useState<CartItem[]>([])
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("all")
  const [sortBy, setSortBy] = React.useState("featured")
  const [isCartOpen, setIsCartOpen] = React.useState(false)
  const [checkoutStep, setCheckoutStep] = React.useState<'cart' | 'checkout' | 'success'>('cart')
  const [orderNumber, setOrderNumber] = React.useState("")
  const [addedItems, setAddedItems] = React.useState<Set<string>>(new Set())
  const [cartBadgeAnimate, setCartBadgeAnimate] = React.useState(false)
  const [checkoutForm, setCheckoutForm] = React.useState<CheckoutForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    state: "",
    paymentMethod: "card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    specialInstructions: ""
  })

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })

    // Add visual feedback
    setAddedItems(prev => new Set(prev).add(product.id))
    setCartBadgeAnimate(true)
    
    // Remove feedback after delay
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev)
        newSet.delete(product.id)
        return newSet
      })
    }, 1500)
    
    setTimeout(() => {
      setCartBadgeAnimate(false)
    }, 600)
  }

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const handleCheckout = () => {
    setCheckoutStep('checkout')
  }

  const handleBackToCart = () => {
    setCheckoutStep('cart')
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Generate a random order number
    const newOrderNumber = `ECO-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    setOrderNumber(newOrderNumber)
    
    // Simulate order processing
    setTimeout(() => {
      setCheckoutStep('success')
      setCart([]) // Clear cart after successful order
    }, 1500)
  }

  const handleNewOrder = () => {
    setCheckoutStep('cart')
    setIsCartOpen(false)
    setCheckoutForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      state: "",
      paymentMethod: "card",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      specialInstructions: ""
    })
  }

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0)
  const shippingCost = cartTotal > 100 ? 0 : 25
  const finalTotal = cartTotal + shippingCost

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "featured":
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
    }
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Eco Shop</h1>
              <p className="text-muted-foreground mt-1">
                Sustainable products for your green lifestyle
              </p>
            </div>
            
            {/* Cart Button */}
            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="relative">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart
                  {cartItemsCount > 0 && (
                    <Badge 
                      className={`absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs transition-all duration-300 ${
                        cartBadgeAnimate ? 'scale-125 bg-green-500' : ''
                      }`}
                    >
                      {cartItemsCount}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              
              {/* Cart Sidebar */}
              <SheetContent className="w-full sm:max-w-md flex flex-col">
                {checkoutStep === 'cart' && (
                  <>
                    <SheetHeader className="pb-6">
                      <SheetTitle>Shopping Cart</SheetTitle>
                      <SheetDescription>
                        {cartItemsCount} item{cartItemsCount !== 1 ? 's' : ''} in your cart
                      </SheetDescription>
                    </SheetHeader>
                    
                    <div className="flex-1 overflow-y-auto px-1">
                      {cart.length === 0 ? (
                        <div className="text-center py-12">
                          <ShoppingCart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                          <p className="text-muted-foreground">Your cart is empty</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {cart.map((item) => (
                            <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                              <div className="relative h-16 w-16 rounded-md overflow-hidden">
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-sm truncate">{item.name}</h4>
                                <p className="text-sm text-muted-foreground">Rs.{item.price}</p>
                                
                                <div className="flex items-center gap-2 mt-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="h-8 w-8 p-0"
                                  >
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                  <span className="text-sm font-medium w-8 text-center">
                                    {item.quantity}
                                  </span>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="h-8 w-8 p-0"
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                </div>
                              </div>
                              
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => removeFromCart(item.id)}
                                className="text-muted-foreground hover:text-foreground"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {cart.length > 0 && (
                      <div className="border-t pt-6 mt-6 px-2">
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span>Subtotal:</span>
                            <span>Rs.{cartTotal}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Shipping:</span>
                            <span>{shippingCost === 0 ? 'Free' : `Rs.${shippingCost}`}</span>
                          </div>
                          <div className="flex justify-between text-lg font-semibold border-t pt-2">
                            <span>Total:</span>
                            <span>Rs.{finalTotal}</span>
                          </div>
                        </div>
                        <Button className="w-full mb-4" size="lg" onClick={handleCheckout}>
                          Proceed to Checkout
                        </Button>
                      </div>
                    )}
                  </>
                )}

                {checkoutStep === 'checkout' && (
                  <>
                    <SheetHeader className="pb-6">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleBackToCart}
                          className="p-1"
                        >
                          <ArrowLeft className="h-4 w-4" />
                        </Button>
                        <SheetTitle>Checkout</SheetTitle>
                      </div>
                      <SheetDescription>
                        Complete your order details
                      </SheetDescription>
                    </SheetHeader>
                    
                    <form onSubmit={handlePlaceOrder} className="flex-1 overflow-y-auto">
                      <div className="px-1 pb-6 space-y-8">
                        {/* Personal Information */}
                        <div className="bg-muted/30 rounded-lg p-6 space-y-6">
                          <h3 className="font-semibold text-base text-foreground flex items-center gap-2">
                            Personal Information
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="firstName" className="text-sm font-medium">First Name</Label>
                              <Input
                                id="firstName"
                                value={checkoutForm.firstName}
                                onChange={(e) => setCheckoutForm({...checkoutForm, firstName: e.target.value})}
                                required
                                className="h-10"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="lastName" className="text-sm font-medium">Last Name</Label>
                              <Input
                                id="lastName"
                                value={checkoutForm.lastName}
                                onChange={(e) => setCheckoutForm({...checkoutForm, lastName: e.target.value})}
                                required
                                className="h-10"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              value={checkoutForm.email}
                              onChange={(e) => setCheckoutForm({...checkoutForm, email: e.target.value})}
                              required
                              className="h-10"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-sm font-medium">Phone</Label>
                            <Input
                              id="phone"
                              value={checkoutForm.phone}
                              onChange={(e) => setCheckoutForm({...checkoutForm, phone: e.target.value})}
                              required
                              className="h-10"
                            />
                          </div>
                        </div>

                        {/* Shipping Address */}
                        <div className="bg-muted/30 rounded-lg p-6 space-y-6">
                          <h3 className="font-semibold text-base text-foreground">Shipping Address</h3>
                          <div className="space-y-2">
                            <Label htmlFor="address" className="text-sm font-medium">Address</Label>
                            <Textarea
                              id="address"
                              value={checkoutForm.address}
                              onChange={(e) => setCheckoutForm({...checkoutForm, address: e.target.value})}
                              required
                              className="min-h-[80px] resize-none"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="city" className="text-sm font-medium">City</Label>
                              <Input
                                id="city"
                                value={checkoutForm.city}
                                onChange={(e) => setCheckoutForm({...checkoutForm, city: e.target.value})}
                                required
                                className="h-10"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="state" className="text-sm font-medium">State</Label>
                              <Input
                                id="state"
                                value={checkoutForm.state}
                                onChange={(e) => setCheckoutForm({...checkoutForm, state: e.target.value})}
                                required
                                className="h-10"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="postalCode" className="text-sm font-medium">Postal Code</Label>
                            <Input
                              id="postalCode"
                              value={checkoutForm.postalCode}
                              onChange={(e) => setCheckoutForm({...checkoutForm, postalCode: e.target.value})}
                              required
                              className="h-10"
                            />
                          </div>
                        </div>

                        {/* Payment Information */}
                        <div className="bg-muted/30 rounded-lg p-6 space-y-6">
                          <h3 className="font-semibold text-base text-foreground">Payment Information</h3>
                          <div className="space-y-2">
                            <Label className="text-sm font-medium">Payment Method</Label>
                            <Select 
                              value={checkoutForm.paymentMethod} 
                              onValueChange={(value) => setCheckoutForm({...checkoutForm, paymentMethod: value})}
                            >
                              <SelectTrigger className="h-10">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="card">Credit/Debit Card</SelectItem>
                                <SelectItem value="upi">UPI</SelectItem>
                                <SelectItem value="cod">Cash on Delivery</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          {checkoutForm.paymentMethod === 'card' && (
                            <>
                              <div className="space-y-2">
                                <Label htmlFor="cardNumber" className="text-sm font-medium">Card Number</Label>
                                <Input
                                  id="cardNumber"
                                  placeholder="1234 5678 9012 3456"
                                  value={checkoutForm.cardNumber}
                                  onChange={(e) => setCheckoutForm({...checkoutForm, cardNumber: e.target.value})}
                                  required
                                  className="h-10"
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="expiryDate" className="text-sm font-medium">Expiry Date</Label>
                                  <Input
                                    id="expiryDate"
                                    placeholder="MM/YY"
                                    value={checkoutForm.expiryDate}
                                    onChange={(e) => setCheckoutForm({...checkoutForm, expiryDate: e.target.value})}
                                    required
                                    className="h-10"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="cvv" className="text-sm font-medium">CVV</Label>
                                  <Input
                                    id="cvv"
                                    placeholder="123"
                                    value={checkoutForm.cvv}
                                    onChange={(e) => setCheckoutForm({...checkoutForm, cvv: e.target.value})}
                                    required
                                    className="h-10"
                                  />
                                </div>
                              </div>
                            </>
                          )}
                        </div>

                        {/* Special Instructions */}
                        <div className="bg-muted/30 rounded-lg p-6 space-y-6">
                          <div className="space-y-2">
                            <Label htmlFor="specialInstructions" className="text-sm font-medium">Special Instructions (optional)</Label>
                            <Textarea
                              id="specialInstructions"
                              placeholder="Any special delivery instructions..."
                              value={checkoutForm.specialInstructions}
                              onChange={(e) => setCheckoutForm({...checkoutForm, specialInstructions: e.target.value})}
                              className="min-h-[80px] resize-none"
                            />
                          </div>
                        </div>

                        {/* Order Summary */}
                        <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                          <h3 className="font-semibold text-base text-foreground">Order Summary</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                              <span>Subtotal:</span>
                              <span className="font-medium">Rs.{cartTotal}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Shipping:</span>
                              <span className="font-medium">{shippingCost === 0 ? 'Free' : `Rs.${shippingCost}`}</span>
                            </div>
                            <div className="flex justify-between text-lg font-semibold border-t pt-3">
                              <span>Total:</span>
                              <span>Rs.{finalTotal}</span>
                            </div>
                          </div>
                        </div>

                        <Button type="submit" className="w-full h-12 text-base" size="lg">
                          <CreditCard className="mr-2 h-5 w-5" />
                          Place Order
                        </Button>
                      </div>
                    </form>
                  </>
                )}

                {checkoutStep === 'success' && (
                  <>
                    <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8">
                      <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="h-10 w-10 text-green-600" />
                      </div>
                      
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        Order Placed Successfully!
                      </h2>
                      
                      <p className="text-muted-foreground mb-6">
                        Thank you for your eco-friendly purchase. Your order has been confirmed.
                      </p>
                      
                      <div className="bg-muted/50 rounded-lg p-4 mb-6 w-full">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Order Number:</span>
                          <span className="text-sm font-mono">{orderNumber}</span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Total Amount:</span>
                          <span className="text-sm font-semibold">Rs.{finalTotal}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Estimated Delivery:</span>
                          <span className="text-sm">3-5 business days</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                        <Truck className="h-4 w-4" />
                        <span>A confirmation email has been sent to {checkoutForm.email}</span>
                      </div>
                      
                      <div className="flex flex-col gap-3 w-full">
                        <Button onClick={handleNewOrder} className="w-full">
                          Continue Shopping
                        </Button>
                        
                      </div>
                    </div>
                  </>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-[160px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => {
            const isAdded = addedItems.has(product.id)
            
            return (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden mb-3">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    {product.featured && (
                      <Badge className="absolute top-2 left-2 bg-primary">
                        Featured
                      </Badge>
                    )}
                    {product.sustainable && (
                      <Badge variant="secondary" className="absolute top-2 right-2">
                        <Leaf className="h-3 w-3 mr-1" />
                        Eco
                      </Badge>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge variant="destructive">Out of Stock</Badge>
                      </div>
                    )}
                  </div>
                  
                  <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {product.description}
                  </CardDescription>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 font-medium">{product.rating}</span>
                    </div>
                    <span className="text-muted-foreground">({product.reviews})</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-primary">
                        Rs.{product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          Rs.{product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    className={`w-full transition-all duration-300 ${
                      isAdded 
                        ? 'bg-green-500 hover:bg-green-600 text-white' 
                        : ''
                    }`}
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                  >
                    {isAdded ? (
                      <>
                        <Check className="h-4 w-4 mr-2" />
                        Added to Cart!
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-16 w-16 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Eco Impact Banner */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200 dark:border-green-800">
            <div className="text-center">
              <div className="flex justify-center gap-4 mb-6">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <TreePine className="h-6 w-6 text-green-600" />
                </div>
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <Recycle className="h-6 w-6 text-blue-600" />
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Your Purchase Makes a Difference
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every product you buy supports sustainable practices, reduces waste, 
                and helps create a greener future. Together, we&apos;re building a more 
                sustainable world, one purchase at a time.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}