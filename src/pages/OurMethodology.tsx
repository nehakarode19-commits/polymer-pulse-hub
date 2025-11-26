import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle, Globe, Shield, TrendingUp, Users } from "lucide-react";

const OurMethodology = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary py-20 px-4">
        <div className="container max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Methodology</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-4">
            The Science Behind the Price
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto">
            At Polymer Bazaar, we don't just gather prices; we validate them. In a bazaar driven by volatility and rumors, 
            our proprietary Triangulation Protocol ensures every number represents confirmable, tradeable reality.
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto mt-4 font-medium">
            We believe true intelligence isn't about data volume, but actionable clarity.
          </p>
        </div>
      </section>

      <div className="container max-w-6xl mx-auto py-16 px-4">
        {/* 4-Step Validation Protocol */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              🛠️ The 4-Step Validation Protocol
            </h2>
            <p className="text-xl text-muted-foreground">
              Transforming Bazaar Noise into Trusted Benchmarks
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Multi-Source Intelligence Gathering</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      Casting the Widest Net in the Polymer Ecosystem
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Domestic Producers:</p>
                          <p className="text-sm text-muted-foreground">Official prices and unannounced floor prices.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Importers & Traders:</p>
                          <p className="text-sm text-muted-foreground">Spot offers, distressed sales, and bulk discounts.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">End-Processors:</p>
                          <p className="text-sm text-muted-foreground">Actual consumption patterns and inventory levels.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Global Benchmarks:</p>
                          <p className="text-sm text-muted-foreground">Real-time international indicators and feedstock trends.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">The "Bazaar Filter" — Our Analytical Edge</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      Where Human Expertise Meets Bazaar Reality
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground">
                          <span className="font-semibold">Filtered Out:</span> One-off distressed sales distorting true price levels.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground">
                          <span className="font-semibold">Filtered Out:</span> "Paper offers" without transactional intent.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground">
                          <span className="font-semibold">Filtered Out:</span> Credit-heavy deals inflating visible prices.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground">
                          <span className="font-semibold">Filtered Out:</span> Outliers beyond statistical confidence intervals.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Triangulation & Multi-Party Verification</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      The Proof Behind Every Data Point
                    </p>
                    <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                      <p className="text-lg font-medium">"If a trader claims they sold at ₹100/kg..."</p>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <p className="text-muted-foreground">...We verify with the buyer that they purchased at ₹100/kg...</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <p className="text-muted-foreground">...And cross-reference with market makers for confirmation.</p>
                      </div>
                      <p className="text-lg font-semibold text-primary mt-4">
                        Only triple-verified data enters our assessment system.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">4</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Final Assessment & Editorial Review</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      Your Contract-Grade Benchmark
                    </p>
                    <p className="mb-4">Our Editorial Board reviews all verified data against:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p>Current supply-demand dynamics.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p>Global movements (Crude, Monomer).</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p>Currency and logistics impacts.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p>Historical statistical patterns.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Global Intelligence Integration */}
        <section className="mb-20">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <Globe className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold mb-2">🌐 Global Intelligence Integration</h2>
                  <p className="text-xl text-muted-foreground">
                    Connecting Local Bazaars to Worldwide Markets
                  </p>
                </div>
              </div>
              
              <p className="text-lg mb-6">
                While our domestic prices stem from rigorous fieldwork, we provide a 360° global perspective by tracking key hubs:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="font-bold text-lg mb-1">🇺🇸 Houston</p>
                  <p className="text-muted-foreground">Feedstock and export dynamics.</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="font-bold text-lg mb-1">🇳🇱 Rotterdam</p>
                  <p className="text-muted-foreground">European benchmark trends.</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="font-bold text-lg mb-1">🇨🇳 China</p>
                  <p className="text-muted-foreground">Asian market sentiment.</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="font-bold text-lg mb-1">🇦🇪 Dubai</p>
                  <p className="text-muted-foreground">Middle East export pricing.</p>
                </div>
              </div>

              <p className="text-lg">
                We don't just report international numbers—we translate them into actionable landed cost calculations for your specific situation.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Editorial Independence */}
        <section className="mb-20">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold mb-2">🔒 Editorial Independence & Compliance</h2>
                  <p className="text-xl text-muted-foreground">
                    The Foundation of Trust
                  </p>
                </div>
              </div>
              
              <p className="text-lg mb-6">
                Our assessment process operates under a strict Editorial Charter ensuring:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg">Complete separation between commercial and pricing teams.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg">Regular internal and external methodology audits.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg">Transparent correction and appeals process.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg">Compliance with global benchmark principles.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Comprehensive Coverage */}
        <section className="mb-20">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">📊 Comprehensive Coverage</h2>
              <p className="text-xl text-muted-foreground mb-6">
                The Complete Polymer Spectrum
              </p>
              
              <p className="text-lg mb-6">
                From virgin resins to recycled materials, we track the entire value chain with granular specificity 
                across all major delivery terms and regional variations.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Closing Statement */}
        <section>
          <Card className="bg-primary text-white border-0">
            <CardContent className="p-12 text-center">
              <p className="text-2xl md:text-3xl font-bold leading-relaxed">
                "In a bazaar full of noise, we provide the clear, actionable signal you need for confident decision-making."
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default OurMethodology;
