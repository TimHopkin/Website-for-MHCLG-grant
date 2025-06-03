import { useState, useEffect } from 'react'

function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Navigation */}
      <nav className="bg-blue-600 text-white py-4 fixed w-full top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">PropTech Innovation Challenge</h1>
          <ul className="flex space-x-6">
            <li><button onClick={() => scrollToSection('home')} className="hover:underline">Home</button></li>
            <li><button onClick={() => scrollToSection('overview')} className="hover:underline">Overview</button></li>
            <li><button onClick={() => scrollToSection('solution')} className="hover:underline">Solution</button></li>
            <li><button onClick={() => scrollToSection('consortium')} className="hover:underline">Consortium</button></li>
            <li><button onClick={() => scrollToSection('impact')} className="hover:underline">Impact</button></li>
            <li><button onClick={() => scrollToSection('delivery')} className="hover:underline">Delivery</button></li>
            <li><button onClick={() => scrollToSection('budget')} className="hover:underline">Budget</button></li>
            <li><button onClick={() => scrollToSection('compliance')} className="hover:underline">Compliance</button></li>
            <li><button onClick={() => scrollToSection('partners')} className="hover:underline">Partners</button></li>
            <li><button onClick={() => scrollToSection('methodology')} className="hover:underline">Methodology</button></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold mb-4">Accelerating Housing Delivery</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our consortium is uniquely positioned to deliver scalable PropTech solutions to meet the UK government's target of 1.5 million new homes by February 2026.
          </p>
          <a
            href="https://geovation.uk/challenges/proptech-innovation-challenge/#applyPIC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Learn More About the Challenge
          </a>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-4">Our Unique Approach</h3>
          <p className="text-gray-700 mb-6">
            The PropTech Innovation Challenge, backed by MHCLG, aims to support the UK's target of 1.5 million new homes by fostering a robust supply-side ecosystem. Our consortium—Land App, Digital4Planning, Surrey County Council, and the Regional Building Foundation—addresses three key problem statements to streamline small site development for SME developers.
          </p>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-2">Enhancing Land Data Availability</h4>
              <p className="text-gray-600">
                We tackle the opacity in property ownership and land data by integrating Ordnance Survey, Land Registry, and infrastructure datasets into Land App's platform. This enables SMEs to appraise sites efficiently, reducing financial risks and ensuring informed decision-making.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Streamlining Small Site Development</h4>
              <p className="text-gray-600">
                Small sites (25-90 homes) hold untapped potential, but their complexity deters SMEs. Our solution uses Land App's heat map system to assess site suitability based on local needs, infrastructure, and constraints. Digital4Planning's AI tools automate planning processes, cutting approval times by up to 30%, while Surrey County Council facilitates collaborative appraisals.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Reducing Risks for SMEs</h4>
              <p className="text-gray-600">
                We de-risk housing projects by providing radical transparency on infrastructure capacity (water, gas, electricity, telecoms, roads) and biodiversity net gain. The Regional Building Foundation supports SMEs through cost-effective processes, enabling them to deliver affordable, sustainable homes in attractive locations.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Why We're Unique</h4>
              <p className="text-gray-600">
                Starting with Surrey County Council, our consortium combines geospatial data, AI automation, local expertise, and SME support to unlock 3.3 million small sites across England and Wales. Our approach aligns with net zero goals, decentralizes energy, and drives sustainable economic growth, making development quicker, cheaper, and less uncertain for SMEs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section id="solution" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-4">Our Solution: Unlocking Small Sites</h3>
          <p className="text-gray-700 mb-6">
            Addressing the problem statement: <em>"How might we increase the attractiveness of small sites for SME developers and other new market entrants through streamlining the processes involved in small site development?"</em>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Core Value Proposition</h4>
              <p className="text-gray-600">
                Our digital platform streamlines small site development by integrating geospatial data, automated planning tools, and real-time collaboration features to reduce costs, time, and risks for SME developers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Innovation & Uniqueness</h4>
              <p className="text-gray-600">
                Unlike existing solutions, our platform combines Land App's geospatial expertise, Digital4Planning's AI-driven planning tools, and real-world insights from Surrey County Council and Regional Building Foundation to create a seamless, end-to-end development process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consortium */}
      <section id="consortium" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-4">Our Consortium</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold">Land App</h4>
              <p className="text-gray-600">Provides geospatial data and mapping tools to identify and assess small sites.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold">Digital4Planning</h4>
              <p className="text-gray-600">Offers AI-driven planning automation to streamline applications and approvals.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold">Surrey County Council</h4>
              <p className="text-gray-600">Brings local planning authority expertise and infrastructure insights.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold">Regional Building Foundation</h4>
              <p className="text-gray-600">Coordinates SMEs and landowners to deliver sustainable, community-focused developments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact and Metrics */}
      <section id="impact" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-4">Impact and Metrics</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Increase in houses built: Targeting 10,000 additional homes on small sites by 2026.</li>
            <li>Completed schemes: Aiming for 90% completion rate for small site projects.</li>
            <li>SME developer growth: 20% increase in SME developers entering the market.</li>
            <li>Planning efficiency: 30% reduction in time to secure planning permissions.</li>
            <li>Investor confidence: 25% increase in investment in small site developments.</li>
          </ul>
        </div>
      </section>

      {/* Delivery Plan */}
      <section id="delivery" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-4">Delivery Plan</h3>
          <p className="text-gray-700 mb-6">
            Our project will be delivered in three phases by February 2026:
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold">Phase 1: Platform Development (Aug-Sep 2025)</h4>
              <p className="text-gray-600">Build and integrate geospatial and AI tools; pilot with Surrey County Council.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Phase 2: Testing and Iteration (Oct-Dec 2025)</h4>
              <p className="text-gray-600">Test with Regional Building Foundation members; refine based on feedback.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Phase 3: Scaling and Impact (Jan-Feb 2026)</h4>
              <p className="text-gray-600">Roll out to additional LPAs and developers; measure impact against metrics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Budget */}
      <section id="budget" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-4">Budget</h3>
          <p className="text-gray-700 mb-6">
            Requested funding: £100,000, allocated as follows:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Technology Development: £50,000 (platform build and integration)</li>
            <li>Personnel: £30,000 (project management and technical staff)</li>
            <li>Testing and Engagement: £15,000 (workshops and pilot programs)</li>
            <li>Compliance and Legal: £5,000 (GDPR and IP management)</li>
          </ul>
        </div>
      </section>

      {/* Compliance Section */}
      <section id="compliance" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-4">Compliance and Ethics</h3>
          <p className="text-gray-700 mb-6">
            Our solution complies with GDPR for data privacy, ensures IP ownership through clear licensing, and promotes diversity, equity, and inclusivity in stakeholder engagement. Environmental impacts are minimized through sustainable development practices.
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-4">Our Partners</h3>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="Land App Logo"
                className="w-24 h-24 mr-4 object-contain"
              />
              <div>
                <h4 className="text-xl font-semibold mb-2">Land App</h4>
                <p className="text-gray-600">
                  Land App provides a cloud-based mapping platform integrating Ordnance Survey data and planning information to identify viable small sites. Its geospatial tools reduce barriers for SME developers by streamlining site assessment and fostering collaboration with landowners and local authorities. <a href="https://thelandapp.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Visit Land App</a>
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <img
                src="https://images.unsplash.com/photo-1516321310764-898d997b2d21?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="Digital4Planning Logo"
                className="w-24 h-24 mr-4 object-contain"
              />
              <div>
                <h4 className="text-xl font-semibold mb-2">Digital4Planning</h4>
                <p className="text-gray-600">
                  Digital4Planning leverages AI to automate planning applications and analyze infrastructure capacity, cutting approval times by up to 30%. Its data-driven tools enhance transparency and reduce risks for developers and LPAs. <a href="https://digital4planning.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Visit Digital4Planning</a>
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <img
                src="https://images.unsplash.com/photo-14973662105479-3f8f6c1d7193?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="Surrey County Council Logo"
                className="w-24 h-24 mr-4 object-contain"
              />
              <div>
                <h4 className="text-xl font-semibold mb-2">Surrey County Council</h4>
                <p className="text-gray-600">
                  Surrey County Council manages a £1.2 billion property portfolio and oversees planning and infrastructure for a £51 billion economy. Its expertise in local planning and initiatives like Your Fund Surrey supports pilot programs and infrastructure transparency. <a href="https://www.surreycc.gov.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Visit Surrey County Council</a>
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="Regional Building Foundation Logo"
                className="w-24 h-24 mr-4 object-contain"
              />
              <div>
                <h4 className="text-xl font-semibold mb-2">Regional Building Foundation</h4>
                <p className="text-gray-600">
                  The Regional Building Foundation (RBF), a Community Interest Company, coordinates SMEs, landowners, and supply chains to deliver sustainable, mixed-use communities via its Place Building System. Backed by The King's Foundation and UCEM, RBF drives regional collaboration and training. <a href="https://www.kings-foundation.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Visit The King's Foundation</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-4">Methodology: Site Appraisal for Development</h3>
          <p className="text-gray-700 mb-6">
            Our methodology streamlines small site development by appraising sites for suitability using a weighted heat map system integrated into Land App, addressing the PropTech Innovation Challenge's goal of enhancing efficiency for SME developers.
          </p>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-2">Key Factors</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Physical Characteristics</strong>: Evaluates topography, soil type, and drainage to ensure construction feasibility.</li>
                <li><strong>Location and Accessibility</strong>: Assesses proximity to infrastructure (roads, utilities) and amenities (schools, shops).</li>
                <li><strong>Environmental Considerations</strong>: Analyzes flood risk, biodiversity, and protected areas to prioritize sustainable sites.</li>
                <li><strong>Legal and Planning Constraints</strong>: Reviews zoning, planning restrictions, and rights of way to identify viable sites.</li>
                <li><strong>Market and Future Potential</strong>: Considers housing demand and planned infrastructure to forecast site value.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Weighting System</h4>
              <p className="text-gray-700">
                Each factor is assigned a weight based on its impact, with scores normalized (0-1) to calculate a suitability score: <code>Suitability Score = Σ(Weight_i × Factor Score_i)</code>. Example weights include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
                <li>Proximity to Infrastructure: 0.3</li>
                <li>Proximity to Amenities: 0.25</li>
                <li>Flood Risk: -0.2</li>
                <li>Soil Type: 0.15</li>
                <li>Planning Restrictions: -0.2</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Data Integration</h4>
              <p className="text-gray-700">
                Leverages datasets from OSMasterMap (topography, infrastructure), Environment Agency (flood risk), local authorities (planning policies), and market data, integrated via Land App's platform.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Heat Map Visualization</h4>
              <p className="text-gray-700">
                Displays suitability with a color gradient (green: high, yellow: moderate, red: low) and interactive layers for toggling factors. Offers national and local resolution views.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Implementation in Land App</h4>
              <p className="text-gray-700">
                Users input site boundaries, and the tool dynamically calculates scores with adjustable weights. Outputs include heat maps, detailed reports, and site comparison tools.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                {`# Pseudocode for Site Appraisal Tool
def calculate_suitability_score(site, weights):
    scores = {
        'topography': get_topography_score(site),
        'soil_type': get_soil_type_score(site),
        'drainage': get_drainage_score(site),
        'infrastructure_proximity': get_infrastructure_score(site),
        'amenities_proximity': get_amenities_score(site),
        'flood_risk': get_flood_risk_score(site),
        'biodiversity': get_biodiversity_score(site),
        'planning_restrictions': get_planning_score(site),
        'market_demand': get_market_demand_score(site)
    }
    total_score = sum(weights[factor] * score for factor, score in scores.items())
    return normalize_score(total_score, min_score=0, max_score=100)

def generate_heatmap(sites, scores):
    heatmap = initialize_map()
    for site, score in zip(sites, scores):
        color = get_color_from_score(score)  # Green (high), Yellow (medium), Red (low)
        add_site_to_map(heatmap, site, color)
    return heatmap

def appraise_site(site_boundary):
    weights = {
        'infrastructure_proximity': 0.3,
        'amenities_proximity': 0.25,
        'flood_risk': -0.2,
        'soil_type': 0.15,
        'planning_restrictions': -0.2
    }
    score = calculate_suitability_score(site_boundary, weights)
    heatmap = generate_heatmap([site_boundary], [score])
    return {'score': score, 'heatmap': heatmap, 'report': generate_report(score)}`}
              </pre>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Creative Features</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Machine Learning</strong>: Predicts suitability using historical data.</li>
                <li><strong>User Customization</strong>: Allows custom factors (e.g., proximity to clients).</li>
                <li><strong>Future Forecasting</strong>: Identifies sites with growth potential due to planned infrastructure.</li>
                <li><strong>Collaboration Tools</strong>: Enables sharing of appraisals within Land App.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-4">Join Us in Transforming Housing Delivery</h3>
          <p className="mb-6">
            Our consortium is ready to deliver innovative, scalable solutions to unlock small sites and meet the UK's housing goals. Contact us to learn more or apply by June 15, 2025.
          </p>
          <a
            href="mailto:challenge@geovation.uk"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-200"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <div className="container mx-auto px-4">
          <p>© 2025 Land App Consortium. All rights reserved.</p>
          <p className="mt-2">
            Powered by <a href="https://geovation.uk" className="underline" target="_blank" rel="noopener noreferrer">Geovation</a> and <a href="https://www.gov.uk/government/organisations/ministry-of-housing-communities-and-local-government" className="underline" target="_blank" rel="noopener noreferrer">MHCLG</a>.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App