import { Button } from "@heroui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Card, CardBody } from "@heroui/card";
import {
  CloudUpload,
  Shield,
  Folder,
  Image as ImageIcon,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
// ...existing code...
// ...existing code...
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-lime-600">
      {/* Use the unified Navbar component */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1">
        {/* Hero section */}
        <section className="py-12 md:py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-lime-400 leading-tight drop-shadow-lg">
                    Store your <span className="text-lime-500">images</span> with
                    energy
                  </h1>
                  <p className="text-lg md:text-xl text-lime-200">
                    Unleash. Secure. Fast.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                  <SignedOut>
                    <Link href="/sign-up">
                      <Button size="lg" variant="solid" className="bg-lime-500 hover:bg-lime-400 text-black font-bold">
                        Get Started
                      </Button>
                    </Link>
                    <Link href="/sign-in">
                      <Button size="lg" variant="flat" className="border border-lime-400 text-lime-400 hover:bg-lime-900">
                        Sign In
                      </Button>
                    </Link>
                  </SignedOut>
                  <SignedIn>
                    <Link href="/dashboard">
                      <Button
                        size="lg"
                        variant="solid"
                        className="bg-black hover:bg-lime-700 text-lime-400 font-bold border border-lime-400"
                        endContent={<ArrowRight className="h-4 w-4 text-lime-400" />}
                      >
                        Go to Dashboard
                      </Button>
                    </Link>
                  </SignedIn>
                </div>
              </div>

              <div className="flex justify-center order-first lg:order-last">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 bg-gradient-to-tr from-lime-500 via-black to-lime-700 rounded-full blur-3xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="h-24 md:h-32 w-24 md:w-32 text-lime-400 drop-shadow-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="py-12 md:py-16 px-4 md:px-6 bg-gradient-to-r from-black via-gray-900 to-lime-700">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-lime-400 drop-shadow">
                What You Get
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <Card className="border-2 border-lime-400 bg-black/40 shadow-lg hover:shadow-2xl transition-shadow">
                <CardBody className="p-6 text-center">
                  <CloudUpload className="h-10 md:h-12 w-10 md:w-12 mx-auto mb-4 text-lime-400" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-lime-300">
                    Quick Uploads
                  </h3>
                  <p className="text-lime-200">Drag, drop, done.</p>
                </CardBody>
              </Card>

              <Card className="border-2 border-lime-600 bg-black/40 shadow-lg hover:shadow-2xl transition-shadow">
                <CardBody className="p-6 text-center">
                  <Folder className="h-10 md:h-12 w-10 md:w-12 mx-auto mb-4 text-lime-600" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-lime-300">
                    Smart Organization
                  </h3>
                  <p className="text-lime-200">
                    Keep it tidy, find it fast.
                  </p>
                </CardBody>
              </Card>

              <Card className="border-2 border-lime-500 bg-black/40 shadow-lg hover:shadow-2xl transition-shadow sm:col-span-2 md:col-span-1 mx-auto sm:mx-0 max-w-md sm:max-w-full">
                <CardBody className="p-6 text-center">
                  <Shield className="h-10 md:h-12 w-10 md:w-12 mx-auto mb-4 text-lime-500" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-lime-300">
                    Locked Down
                  </h3>
                  <p className="text-lime-200">
                    Your images, your eyes only.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-r from-lime-700 via-black to-lime-500">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-lime-400 drop-shadow">
              Ready?
            </h2>
            <SignedOut>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link href="/sign-up">
                  <Button
                    size="lg"
                    variant="solid"
                    className="bg-lime-500 hover:bg-lime-400 text-black font-bold"
                    endContent={<ArrowRight className="h-4 w-4 text-black" />}
                  >
                    Let's Go
                  </Button>
                </Link>
              </div>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard">
                <Button
                  size="lg"
                  variant="solid"
                  className="bg-black hover:bg-lime-700 text-lime-400 font-bold border border-lime-400"
                  endContent={<ArrowRight className="h-4 w-4 text-lime-400" />}
                >
                  Dashboard
                </Button>
              </Link>
            </SignedIn>
          </div>
        </section>
      </main>

      {/* Simple footer */}
      <footer className="bg-gradient-to-r from-black via-gray-900 to-lime-600 border-t-2 border-lime-400 py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <CloudUpload className="h-5 w-5 text-lime-400" />
              <h2 className="text-lg font-bold text-lime-300">Droply</h2>
            </div>
            <p className="text-lime-200 text-sm">
              &copy; {new Date().getFullYear()} Droply
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
