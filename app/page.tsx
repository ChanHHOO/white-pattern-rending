import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Zap, Eye, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          White-Pattern: Focus on information you want, and reduce your
          spending.
        </h1>
        <p className="text-xl mb-8">
          Enjoy a cleaner, safer, and more transparent e-commerce experience.
        </p>
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Install Extension
        </Button>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose White-Pattern?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ShieldCheck className="h-12 w-12 text-primary" />}
              title="Ad-Free Browsing"
              description="Say goodbye to intrusive ads and enjoy a cleaner browsing experience."
            />
            <FeatureCard
              icon={<Zap className="h-12 w-12 text-primary" />}
              title="Dark Pattern Detection"
              description="Identify and neutralize manipulative design tactics on e-commerce sites."
            />
            <FeatureCard
              icon={<Eye className="h-12 w-12 text-primary" />}
              title="Enhanced Privacy"
              description="Protect your personal information from trackers and data collectors."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li className="text-lg">
              Install the White-Pattern extension on your browser.
            </li>
            <li className="text-lg">
              Browse your favorite e-commerce sites as usual.
            </li>
            <li className="text-lg">
              Turn on the Focus Mode to enhance your browsing experience.
            </li>
            <li className="text-lg">Get the summary of product reviews.</li>
          </ol>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="flex justify-center">
            <Card className="max-w-lg">
              <CardContent className="pt-6">
                <p className="text-lg mb-4">
                  "White-Pattern has completely transformed my online shopping
                  experience. No more annoying ads or tricky design patterns.
                  It's a must-have extension!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary mr-4"></div>
                  <div>
                    <p className="font-semibold">Jane Doe</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Enhance Your Online Shopping?
        </h2>
        <p className="text-xl mb-8">
          Join thousands of satisfied users and install White-Pattern today!
        </p>
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Get White-Pattern Now
        </Button>
      </section>
    </div>
  );
}

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card>
      <CardContent className="pt-6 text-center">
        <div className="mb-4 flex justify-center">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
