
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";

const ContactSection = () => {
  const handleBookCall = () => {
    window.location.href = "tel:+918451023405";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/918451023405?text=I would like to book a spa appointment", "_blank");
  };

  const handleDirections = () => {
    window.open("https://maps.google.com/?q=803, 8th Floor,1 Aerocity Coporate Park, Near Saki Naka Metro, Andheri Kurla Road,Safed pool Shivaji Nagar Jarimari,Andheri East,Mumbai.Maharashtra-400072", "_blank");
  };

  return (
    <section className="py-20 px-6 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-foreground mb-4">
            Visit Our <span className="text-primary">Luxury Sanctuary</span>
          </h2>
          <div className="divider-gold w-24 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground font-elegant max-w-3xl mx-auto">
            Located in the heart of Andheri East, easily accessible from Saki Naka metro station. 
            Book your appointment today and experience ultimate luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <div className="card-luxury">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">Our Location</h3>
                  <p className="text-muted-foreground font-elegant leading-relaxed">
                    803, 8th Floor,1 Aerocity Coporate Park,<br />
                    Near Saki Naka Metro, Andheri Kurla Road,<br />
                    Safed pool Shivaji Nagar Jarimari,<br />
                    Andheri East, Mumbai, Maharashtra-400072
                  </p>
                  <Button variant="link" onClick={handleDirections} className="text-primary hover:text-accent p-0 mt-2 font-elegant">
                    Get Directions →
                  </Button>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="card-luxury">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">Call Us</h3>
                  <p className="text-muted-foreground font-elegant mb-3">
                    Speak directly with our booking team for personalized service
                  </p>
                  <a href="tel:+918451023405" className="text-primary hover:text-accent font-semibold text-lg">
                    08451 023405
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="card-luxury">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">WhatsApp</h3>
                  <p className="text-muted-foreground font-elegant mb-3">
                    Quick and convenient booking via WhatsApp
                  </p>
                  <Button variant="link" onClick={handleWhatsApp} className="text-primary hover:text-accent p-0 font-elegant">
                    Message us on WhatsApp →
                  </Button>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="card-luxury">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">Opening Hours</h3>
                  <div className="space-y-1 font-elegant">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">All days:</span>
                      <span className="text-foreground">10:00 AM - 11:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="space-y-8">
            {/* Main CTA Card */}
            <div className="card-luxury bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <div className="text-center">
                <h3 className="font-luxury text-2xl font-bold text-primary mb-4">
                  Book Your Rosewood Experience
                </h3>
                <p className="text-muted-foreground font-elegant mb-8 leading-relaxed">
                  Experience the pinnacle of luxury spa treatments. Our expert therapists are 
                  ready to provide you with an unforgettable wellness journey.
                </p>
                
                <div className="space-y-4">
                  <Button onClick={handleBookCall} className="btn-luxury w-full text-lg py-4">
                    <Phone className="mr-3 h-5 w-5" />
                    Call to Book Now
                  </Button>
                  
                  <Button onClick={handleWhatsApp} variant="outline" className="btn-outline-luxury w-full text-lg py-4">
                    <MessageCircle className="mr-3 h-5 w-5" />
                    WhatsApp Booking
                  </Button>
                </div>
              </div>
            </div>

            {/* Special Offer Banner */}
            <div className="bg-gradient-to-r from-primary to-accent p-6 rounded-xl text-center">
              <h4 className="font-luxury text-xl font-bold text-primary-foreground mb-2">
                New Client Special
              </h4>
              <p className="text-primary-foreground/90 font-elegant mb-4">
                Enjoy 25% off your first Rosewood treatment
              </p>
              <p className="text-sm text-primary-foreground/80 font-elegant">
                *Valid for first-time clients only. Cannot be combined with other offers.
              </p>
            </div>

            {/* Metro Accessibility */}
            <div className="card-luxury border-primary/20">
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-3">
                  🚇 Metro Accessible Location
                </h4>
                <p className="text-muted-foreground font-elegant text-sm">
                  Conveniently located near Saki Naka Metro Station for easy access. 
                  Parking available for those arriving by car.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <div className="card-luxury h-64 bg-secondary/20 flex items-center justify-center border border-primary/20">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Interactive Map</h3>
              <p className="text-muted-foreground font-elegant">
                Click "Get Directions" above to view our location on Google Maps
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
