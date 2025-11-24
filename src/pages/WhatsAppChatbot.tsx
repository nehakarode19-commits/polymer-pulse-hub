import { motion } from "framer-motion";

const WhatsAppChatbot = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Main Content Section */}
      <section className="container max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            PolymerBazaar Whatsapp ChatBot Powered by AI
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are proud to introduce our advanced AI-powered Chatbot. Our Chatbot provides instant information on polymer prices, news, and offers. With the power of AI, accurate 
            information is at your fingertips.
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-black">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/7b4SliEg4gE"
              title="PolymerBazaar WhatsApp ChatBot Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
          
          {/* Video Caption */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              #POLYMERBAZAAR Whatsapp ChatBot - A Game Changing Service In Plastics & Polymer biz! +91 9374624365
            </p>
          </div>

          {/* CHATBOT Section */}
          <div className="mt-12 bg-muted/30 rounded-lg p-12 text-center border-2 border-border">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-6xl font-black text-foreground mb-8 tracking-tight">
                CHATBOT
              </h2>
              <p className="text-2xl font-bold text-primary mb-6">
                Just Send Hi
              </p>
              <p className="text-xl text-muted-foreground mb-4">
                at
              </p>
              <p className="text-4xl font-black text-primary">
                +91 93746 24365
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default WhatsAppChatbot;
