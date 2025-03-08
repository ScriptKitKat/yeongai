"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Menu, X } from "lucide-react"
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Check } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <MadisonFeatures />
        <TestimonialsSection />
        <PricingSection />
        <BookingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Image src="/placeholder.svg?height=32&width=32" width={32} height={32} alt="Logo" />
          <span>Company</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
            Features
          </Link>
          <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
            Pricing
          </Link>
          <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex gap-4">
          <Link href="/login">
            <Button variant="outline">Log in</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign up</Button>
          </Link>
        </div>
        <MobileNav />
      </div>
    </header>
  )
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </Button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-background p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                <Image src="/placeholder.svg?height=32&width=32" width={32} height={32} alt="Logo" />
                <span>Company</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="mt-6 flex flex-col gap-4">
              <Link href="#features" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                Features
              </Link>
              <Link href="#testimonials" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                Testimonials
              </Link>
              <Link href="#pricing" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
              <Link href="#contact" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <div className="mt-4 flex flex-col gap-2">
                <Link href="/login">
                  <Button variant="outline" className="w-full" onClick={() => setIsOpen(false)}>
                    Log in
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="w-full" onClick={() => setIsOpen(false)}>
                    Sign up
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}

function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Transform Your Business with Our Platform
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Our all-in-one solution helps you streamline operations, boost productivity, and drive growth.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup">
                <Button size="lg" className="gap-1">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#demo">
                <Button size="lg" variant="outline">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=550&width=550"
              width={550}
              height={550}
              alt="Hero"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Everything You Need to Succeed</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform provides all the tools and resources you need to take your business to the next level.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          {[
            {
              title: "Streamlined Workflow",
              description: "Automate repetitive tasks and optimize your processes for maximum efficiency.",
              icon: <CheckCircle className="h-12 w-12 text-primary" />,
            },
            {
              title: "Advanced Analytics",
              description: "Gain valuable insights with our powerful analytics and reporting tools.",
              icon: <CheckCircle className="h-12 w-12 text-primary" />,
            },
            {
              title: "Seamless Integration",
              description: "Connect with your favorite tools and services for a unified experience.",
              icon: <CheckCircle className="h-12 w-12 text-primary" />,
            },
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              {feature.icon}
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MadisonFeatures() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#5D3FD3]/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Simply connect your profiles and <span className="text-[#5D3FD3]">watch Madison work magic</span> ✨
          </h2>
          <div className="flex items-center justify-center gap-6 py-4">
            {[
              { icon: "facebook", color: "#1877F2" },
              { icon: "dribbble", color: "#EA4C89" },
              { icon: "mail", color: "#EA4335" },
              { icon: "instagram", color: "#E4405F" },
              { icon: "twitter", color: "#1DA1F2" },
            ].map((social, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-10 h-10 rounded-full"
                style={{ backgroundColor: social.color }}
              >
                <Image
                  src={`/placeholder.svg?height=24&width=24`}
                  width={24}
                  height={24}
                  alt={social.icon}
                  className="invert"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Feature 1 - Show up higher on Google */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="bg-[#5D3FD3] rounded-lg p-4 overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=400"
              width={400}
              height={400}
              alt="Google search results screenshot"
              className="rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Show up higher on Google</h3>
            <p className="text-muted-foreground">
              Get discovered online by customers searching for the products or services you offer by improving your
              local SEO.
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-[#5D3FD3] px-8 text-sm font-medium text-[#5D3FD3] hover:bg-[#5D3FD3] hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Feature 2 - Grow your brand reach */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-4 order-2 md:order-1">
            <h3 className="text-2xl font-bold">Grow your brand reach</h3>
            <p className="text-muted-foreground">
              Madison builds your brand awareness and helps you stay top-of-mind by creating, targeting, and scheduling
              cross-platform campaigns.
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-[#5D3FD3] px-8 text-sm font-medium text-[#5D3FD3] hover:bg-[#5D3FD3] hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
          <div className="bg-[#5D3FD3] rounded-lg p-4 overflow-hidden order-1 md:order-2">
            <Image
              src="/placeholder.svg?height=400&width=400"
              width={400}
              height={400}
              alt="Social media dashboard screenshot"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Feature 3 - Protect your reputation */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="bg-[#5D3FD3] rounded-lg p-4 overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=400"
              width={400}
              height={400}
              alt="Reputation management dashboard screenshot"
              className="rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Protect your reputation</h3>
            <p className="text-muted-foreground">
              Madison defends your online and real-world reputation by making it simple to get, respond to, and showcase
              reviews.
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-[#5D3FD3] px-8 text-sm font-medium text-[#5D3FD3] hover:bg-[#5D3FD3] hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Feature 4 - Uncover actionable insights */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 order-2 md:order-1">
            <h3 className="text-2xl font-bold">Uncover actionable insights</h3>
            <p className="text-muted-foreground">
              Madison empowers your business decisions by understanding what channel they like, analytics, and making
              understanding what your customers think as simple as possible.
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-[#5D3FD3] px-8 text-sm font-medium text-[#5D3FD3] hover:bg-[#5D3FD3] hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
          <div className="bg-[#5D3FD3] rounded-lg p-4 overflow-hidden order-1 md:order-2">
            <Image
              src="/placeholder.svg?height=400&width=400"
              width={400}
              height={400}
              alt="Analytics dashboard screenshot"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Customers Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our customers have to say about our platform.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          {[
            {
              quote:
                "This platform has completely transformed how we operate. We've seen a 30% increase in productivity since implementing it.",
              author: "Sarah Johnson",
              role: "CEO, TechStart Inc.",
              avatar: "/placeholder.svg?height=60&width=60",
            },
            {
              quote:
                "The customer support is exceptional. Any time we've had an issue, the team has been quick to respond and resolve it.",
              author: "Michael Chen",
              role: "Operations Manager, Global Solutions",
              avatar: "/placeholder.svg?height=60&width=60",
            },
          ].map((testimonial, index) => (
            <div key={index} className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
              <p className="text-lg italic text-muted-foreground">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center gap-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  width={60}
                  height={60}
                  alt={testimonial.author}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  const pricingTiers = [
    {
      name: "Essentials",
      price: isYearly ? 79 : 99,
      features: ["Review Responses", "GBP Optimization", "Social Media Campaigns", "Analytics"],
      highlighted: false,
    },
    {
      name: "Premium",
      price: isYearly ? 119 : 149,
      features: ["Essential features, plus...", "Review Removal", "Review Requests", "Listing Management"],
      highlighted: true,
    },
    {
      name: "Ultimate",
      price: isYearly ? 199 : 249,
      features: ["Premium features, plus...", "Custom Voice", "Intelligent Insights", "Success Manager"],
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Pricing that's simple,
              <br />
              predictable, and reasonable
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We're here to help you grow your business, not your bills.
              <br />
              No nickle and diming. No hidden fees.
            </p>
          </div>

          <div className="flex items-center space-x-2 mt-6">
            <Label htmlFor="billing-toggle">Monthly</Label>
            <Switch id="billing-toggle" checked={isYearly} onCheckedChange={setIsYearly} className="bg-[#5D3FD3]" />
            <Label htmlFor="billing-toggle">Yearly (4 months free)</Label>
          </div>

          <div className="grid gap-6 pt-12 lg:grid-cols-3 lg:gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative flex flex-col rounded-lg border p-6 shadow-sm ${
                  tier.highlighted ? "border-[#5D3FD3] bg-[#5D3FD3]/5" : ""
                }`}
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{tier.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">${tier.price}</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <ul className="space-y-4 text-left">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-[#5D3FD3]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Button
                    className={`w-full ${
                      tier.highlighted
                        ? "bg-[#5D3FD3] hover:bg-[#5D3FD3]/90"
                        : "border-[#5D3FD3] text-[#5D3FD3] hover:bg-[#5D3FD3] hover:text-white"
                    }`}
                    variant={tier.highlighted ? "default" : "outline"}
                  >
                    Get started today
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function BookingSection() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#5D3FD3] text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl/tight">
                Ready to attract more customers?
              </h2>
              <p className="text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get started today or book a free demo to see how Madison can help you grow your business.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button variant="secondary" size="lg" className="bg-white text-[#5D3FD3] hover:bg-white/90">
                Get started today
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="rounded-lg bg-white p-4">
              <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Get Started?</h2>
            <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of satisfied customers who are already using our platform to grow their business.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex flex-col gap-2 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-lg flex-1 bg-primary-foreground text-foreground"
              />
              <Button type="submit" variant="secondary">
                Sign Up
              </Button>
            </form>
            <p className="text-xs text-primary-foreground/60">
              By signing up, you agree to our{" "}
              <Link href="/terms" className="underline underline-offset-2">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Image src="/placeholder.svg?height=32&width=32" width={32} height={32} alt="Logo" />
          <span className="font-bold">Company</span>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Company Inc. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}

