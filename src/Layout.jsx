import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Home, 
  Info, 
  Sparkles, 
  MapPin, 
  Menu,
  Sprout,
  Send,
  Facebook,
  Instagram,
  Twitter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

const navigationItems = [
  { title: "Home", url: createPageUrl("Home"), icon: Home },
  { title: "About", url: createPageUrl("About"), icon: Info },
  { title: "Services", url: createPageUrl("Services"), icon: Sparkles },
  { title: "Find Centers", url: createPageUrl("Centers"), icon: MapPin },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 to-sky-50">
      <style>{`
        :root {
          --sage-50: #f6f7f6;
          --sage-100: #e8ebe8;
          --sage-200: #d1d7d1;
          --sage-300: #b0bcb0;
          --sage-400: #879687;
          --sage-500: #6b7a6b;
          --sage-600: #556255;
          --sage-700: #464f46;
          --sage-800: #3a413a;
          --sage-900: #323632;
          --sky-50: #f0f9ff;
          --sky-100: #e0f2fe;
          --sky-200: #bae6fd;
          --sky-300: #7dd3fc;
          --sky-400: #38bdf8;
          --sky-500: #0ea5e9;
          --sky-600: #0284c7;
          --sky-700: #0369a1;
          --sky-800: #075985;
          --sky-900: #0c4a6e;
        }
        
        .bg-sage-50 { background-color: var(--sage-50); }
        .bg-sage-100 { background-color: var(--sage-100); }
        .bg-sage-500 { background-color: var(--sage-500); }
        .bg-sage-600 { background-color: var(--sage-600); }
        .bg-sage-700 { background-color: var(--sage-700); }
        .bg-sage-800 { background-color: var(--sage-800); }
        .text-sage-100 { color: var(--sage-100); }
        .text-sage-200 { color: var(--sage-200); }
        .text-sage-300 { color: var(--sage-300); }
        .text-sage-600 { color: var(--sage-600); }
        .text-sage-700 { color: var(--sage-700); }
        .text-sage-800 { color: var(--sage-800); }
        .border-sage-200 { border-color: var(--sage-200); }
        .border-sage-600 { border-color: var(--sage-600); }
        .border-sage-700 { border-color: var(--sage-700); }
        .hover\\:bg-sage-100:hover { background-color: var(--sage-100); }
        .hover\\:text-sage-800:hover { color: var(--sage-800); }
        
        .bg-sky-50 { background-color: var(--sky-50); }
        .bg-sky-500 { background-color: var(--sky-500); }
        .bg-sky-600 { background-color: var(--sky-600); }
        .text-sky-600 { color: var(--sky-600); }
        .text-sky-700 { color: var(--sky-700); }
        .hover\\:bg-sky-700:hover { background-color: var(--sky-700); }
        
        .font-lora { font-family: 'Lora', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
      `}</style>
      
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-sage-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-lora font-bold text-sage-800">Serenity</h1>
                <p className="text-xs text-sage-600">Wellness & Spirituality</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`px-3 py-2 rounded-lg transition-all duration-200 font-medium text-sm ${
                    location.pathname === item.url
                      ? "bg-sage-100 text-sage-800"
                      : "text-sage-600 hover:text-sage-800 hover:bg-sage-50"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to={createPageUrl("Contact")}>
                <Button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-200">
                  Book Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white">
                <div className="flex flex-col space-y-2 mt-6">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.url}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        location.pathname === item.url
                          ? "bg-sage-100 text-sage-800"
                          : "text-sage-600 hover:text-sage-800 hover:bg-sage-50"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  ))}
                  <Link to={createPageUrl("Contact")}>
                    <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-full font-medium mt-4">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-sage-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Company Info & Socials */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center">
                  <Sprout className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-lora font-bold">Serenity</h3>
              </div>
              <p className="text-sage-100 text-sm leading-relaxed">
                Discover peace wherever you travel. We provide holistic wellness through yoga, 
                spirituality, and mental health counseling across India and online.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-sage-100 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="text-sage-100 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="text-sage-100 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>

            {/* Quick Links (Company) */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><Link to={createPageUrl("About")} className="text-sage-100 hover:text-white transition-colors text-sm">About Us</Link></li>
                <li><Link to={createPageUrl("Services")} className="text-sage-100 hover:text-white transition-colors text-sm">Our Services</Link></li>
                <li><Link to={createPageUrl("Centers")} className="text-sage-100 hover:text-white transition-colors text-sm">Find a Center</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                <li><Link to={createPageUrl("Contact")} className="text-sage-100 hover:text-white transition-colors text-sm">Contact & Book</Link></li>
                <li><a href="#" className="text-sage-100 hover:text-white transition-colors text-sm">FAQ</a></li>
                <li><a href="#" className="text-sage-100 hover:text-white transition-colors text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-sage-100 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-lg font-semibold">Stay in Touch</h4>
              <p className="text-sage-100 text-sm">Subscribe to our newsletter for wellness tips, updates, and special offers.</p>
              <div className="flex space-x-2">
                <Input type="email" placeholder="Enter your email" className="bg-sage-700 border-sage-600 text-white placeholder:text-sage-300" />
                <Button type="submit" size="icon" className="bg-sky-600 hover:bg-sky-700">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-sage-700 mt-12 pt-8 text-center text-sm text-sage-200">
            <p>© {new Date().getFullYear()} Serenity Wellness. All Rights Reserved. A youth-led initiative for holistic well-being.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}