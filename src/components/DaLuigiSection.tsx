import {
  MapPin, Phone, Globe, Smartphone, Zap, Palette, Code, Monitor, Users, Star, CheckCircle,
  Eye, PhoneCall, TrendingUp, Award, ArrowRight, Camera, Layers, Shield
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4 mr-2" />
              Cozzi_Web x Panetteria Da Luigi
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Da Luigi - Panetteria
            </h1>
            <p className="text-xl text-gray-500 max-w-4xl mx-auto leading-relaxed mb-8">
              Sviluppo di un sito vetrina moderno per una panetteria storica di Milano.
              Un esempio concreto di come trasformare un'attività tradizionale in una presenza digitale professionale.
            </p>
            <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-indigo-500/25 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Scopri il Progetto
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: TrendingUp, value: "2", label: "Settimane", color: "from-indigo-500 to-blue-500" },
              { icon: Layers, value: "5", label: "Sezioni", color: "from-purple-500 to-pink-500" },
              { icon: Smartphone, value: "100%", label: "Responsive", color: "from-green-500 to-emerald-500" },
              { icon: Zap, value: "95+", label: "Performance", color: "from-amber-500 to-orange-500" },
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-indigo-500 mb-2">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8 leading-tight">Il Risultato Finale</h2>
              <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                Un sito web moderno e accogliente che cattura l'essenza tradizionale della panetteria
                con un design contemporaneo e funzionale.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Smartphone, title: "Design Mobile-First", description: "Ottimizzato per smartphone, dove la maggior parte dei clienti locali naviga" },
                  { icon: Palette, title: "Palette Personalizzata", description: "Colori caldi che richiamano il pane fresco e l'atmosfera accogliente" },
                  { icon: Zap, title: "Caricamento Veloce", description: "Ottimizzato per connessioni lente, perfetto per utenti in movimento" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile & Desktop Preview */}
            <div className="flex justify-center space-x-8">
              {/* Mobile Mockup - INSERISCI QUI LE TUE IMMAGINI */}
              <div className="relative">
                <div className="w-64 h-[520px] bg-gray-800 rounded-[2.5rem] p-2 shadow-xl">
                  <div className="w-full h-full bg-gradient-to-b from-amber-50 to-orange-50 rounded-[2rem] overflow-hidden border-4 border-gray-800 relative">
                    {/* Header Mobile Mockup */}
                    <div className="flex items-center justify-between p-4 bg-orange-50">
                      <h1 className="text-xl font-bold text-amber-900">Da Luigi</h1>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-amber-900 rounded-full"></div>
                        <div className="w-2 h-2 bg-amber-900 rounded-full"></div>
                        <div className="w-2 h-2 bg-amber-900 rounded-full"></div>
                      </div>
                    </div>
                    {/* Contenuto Mobile Mockup */}
                    <div className="p-4">
                      <div className="text-center mb-4">
                        <h2 className="text-2xl font-bold text-amber-900 mb-2">Pane Fresco</h2>
                        <p className="text-amber-700">Dal 1952</p>
                      </div>
                      <div className="space-y-3">
                        {/* PRIMA IMMAGINE MOBILE */}
                        <div className="bg-amber-100 rounded-xl p-3 h-24 flex items-center justify-center">
                          <img
                            src="assets/pane.jpg"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="text-center py-2 bg-amber-50 rounded-lg">
                          <h3 className="text-sm font-semibold text-amber-900">Cornetti Freschi</h3>
                        </div>  
                        {/* SECONDA IMMAGINE MOBILE */}
                        <div className="bg-amber-100 rounded-xl p-3 h-24 flex items-center justify-center">
                          <img
                            src="/assets/pane.jpg"  
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Mockup - INSERISCI QUI LE TUE IMMAGINI */}
              <div className="relative hidden lg:block">
                <div className="w-80 h-48 bg-gray-800 rounded-2xl p-3 shadow-xl">
                  <div className="w-full h-full bg-gradient-to-b from-amber-50 to-orange-50 rounded-xl overflow-hidden border-2 border-gray-300">
                    <div className="p-2 bg-gray-200 flex items-center">
                      <div className="flex space-x-1 ml-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h1 className="text-lg font-bold text-amber-900">Da Luigi - Panetteria</h1>
                        <div className="flex space-x-3 text-xs text-amber-700">
                          <span>Home</span>
                          <span>Prodotti</span>
                          <span>Contatti</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="col-span-2 mb-2">
                          <h2 className="text-xl font-bold text-amber-900">Pane Fresco Ogni Giorno</h2>
                          <p className="text-amber-700 text-sm">Dal 1952 nel cuore di Milano</p>
                        </div>
                        {/* PRIMA IMMAGINE DESKTOP */}
                        <img
                            src="/assets/images/pane.jpg"
                          alt="Prodotto Da Luigi"
                          className="w-full h-16 object-cover rounded-lg"
                        />
                        {/* SECONDA IMMAGINE DESKTOP */}
                        <img
                          src="/assets/images/pane.jpg"
                          alt="Prodotto Da Luigi"
                          className="w-full h-16 object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client & Objectives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Il Cliente</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  <strong className="text-indigo-600">Luigi Rossi</strong>, proprietario della panetteria
                  "Da Luigi" nel centro di Milano. Attività familiare attiva da oltre 30 anni,
                  specializzata in prodotti da forno tradizionali e cornetteria fresca.
                </p>
                <div className="bg-indigo-100 rounded-lg p-4 border-l-4 border-indigo-500">
                  <h4 className="text-indigo-600 font-semibold mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    Sfida Principale:
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Mancanza di presenza online in un mercato sempre più digitale,
                    perdita di clientela giovane verso competitor più moderni.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Obiettivi del Progetto</h3>
              <div className="space-y-6">
                {[
                  { number: 1, title: "Visibilità Online Locale", description: "Essere trovati facilmente da clienti nel quartiere e zone limitrofe" },
                  { number: 2, title: "Showcase Prodotti", description: "Mostrare la qualità e varietà dei prodotti da forno artigianali" },
                  { number: 3, title: "Contatto Diretto", description: "Facilitare prenotazioni e richieste informazioni" },
                  { number: 4, title: "Credibilità Digitale", description: "Competere con panetterie più moderne del quartiere" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-sm">{item.number}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Processo di Sviluppo</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Un approccio metodico e personalizzato per creare la soluzione perfetta
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "1. Analisi & Strategia",
                description: "Studio approfondito del mercato locale, analisi competitor e definizione dell'architettura informativa ottimale.",
                features: ["Ricerca mercato locale", "Analisi competitor", "Definizione contenuti"],
                color: "from-indigo-500 to-blue-500"
              },
              {
                icon: Palette,
                title: "2. Design & Sviluppo",
                description: "Creazione di un design che bilancia tradizione e modernità, con focus sull'esperienza utente mobile.",
                features: ["Wireframe e mockup", "Sviluppo responsive", "Test cross-browser"],
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Zap,
                title: "3. Ottimizzazione & Deploy",
                description: "Ottimizzazione performance, SEO locale e pubblicazione su dominio personalizzato GitHub Pages.",
                features: ["Ottimizzazione immagini", "SEO locale", "Deploy automatico"],
                color: "from-green-500 to-emerald-500"
              },
            ].map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">{step.description}</p>
                <div className="space-y-2">
                  {step.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Funzionalità Implementate</h2>
            <p className="text-xl text-gray-500 leading-relaxed">Ogni elemento progettato per massimizzare conversioni e usabilità</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Homepage Accattivante", description: "Hero section con call-to-action strategiche, presentazione immediata dei prodotti di punta e atmosfera accogliente.", features: ["Hero section ottimizzata", "CTA strategiche"], color: "from-indigo-500 to-blue-500" },
              { icon: Users, title: 'Sezione "Chi Siamo"', description: "Storia della panetteria, valori familiari e tradizione artigianale per creare connessione emotiva con i clienti.", features: ["Storytelling efficace", "Valori aziendali"], color: "from-blue-500 to-cyan-500" },
              { icon: Camera, title: "Catalogo Prodotti", description: "Gallery fotografica professionale organizzata per categorie: pane, dolci, cornetteria e specialità stagionali.", features: ["Gallery ottimizzata", "Categorie intuitive"], color: "from-purple-500 to-pink-500" },
              { icon: Phone, title: "Contatti Integrati", description: "Informazioni complete con click-to-call, orari sempre visibili e form contatti per prenotazioni speciali.", features: ["Click-to-call", "Form prenotazioni"], color: "from-green-500 to-emerald-500" },
              { icon: MapPin, title: "Mappa Interattiva", description: "Google Maps integrata con indicazioni precise, parcheggi nelle vicinanze e trasporti pubblici.", features: ["Maps integrata", "Info parcheggi"], color: "from-red-500 to-rose-500" },
              { icon: Smartphone, title: "Design Responsive", description: "Esperienza ottimale su ogni dispositivo, con particolare attenzione alla navigazione mobile touch-friendly.", features: ["Mobile-first", "Touch optimized"], color: "from-indigo-500 to-purple-500" },
            ].map((feature, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-500 mb-4 leading-relaxed">{feature.description}</p>
                <div className="text-sm text-indigo-500 font-medium">
                  {feature.features.map((f, i) => (
                    <div key={i} className="flex items-center">
                      ✓ {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Risultati Ottenuti</h2>
            <p className="text-xl text-gray-500 leading-relaxed">Impatto concreto sul business del cliente</p>
          </div>
          <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-sm">
            <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
              {[
                { icon: Eye, value: "+150%", label: "Visibilità Online" },
                { icon: PhoneCall, value: "+80%", label: "Chiamate Ricevute" },
                { icon: TrendingUp, value: "95+", label: "Performance Score" },
                { icon: Star, value: "100%", label: "Soddisfazione Cliente" },
              ].map((stat, index) => (
                <div key={index} className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                  <div className="text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-indigo-600 font-semibold">Luigi Rossi</div>
                    <div className="text-gray-500 text-sm">Proprietario Da Luigi</div>
                  </div>
                </div>
                <blockquote className="text-xl text-gray-800 font-medium mb-6 italic leading-relaxed">
                  "Finalmente ho una vetrina digitale che rappresenta davvero la qualità
                  dei miei prodotti. Le prenotazioni sono aumentate notevolmente!"
                </blockquote>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-indigo-500 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-12 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 transform hover:scale-105">
              Contattami per il Tuo Progetto
              <ArrowRight className="w-6 h-6 ml-3 inline" />
            </button>
            <p className="text-gray-500 mt-4 leading-relaxed">
              Trasforma anche tu la tua attività con una presenza digitale professionale
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
