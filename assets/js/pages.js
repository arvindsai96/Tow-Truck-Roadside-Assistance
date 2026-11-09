(() => {
  const services = [
    { id: "vehicle-recovery", title: "Vehicle recovery", category: "Recovery", icon: "bi-truck-front-fill", image: "assets/images/services/service-vehicle-recovery.jpg", imageAlt: "A tow truck loading a passenger car onto its recovery bed", imageWidth: 1280, imageHeight: 960, imageCredit: `Photo by <a href="https://commons.wikimedia.org/wiki/File:Istanbul_Ahtapot_Cekici_Hasarsiz_Kurtarma.jpg" target="_blank" rel="noopener noreferrer">İstanbulcekici via Wikimedia Commons</a>; cropped to fit. Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>.`, summary: "Planned transport for a disabled, damaged, or otherwise unsafe-to-drive vehicle.", details: "A recovery provider assesses the vehicle, pickup location, access, and destination before choosing suitable equipment. A flatbed or another recovery method may be appropriate depending on the vehicle and its condition. Share any drivetrain, ground-clearance, loading, or damage concerns when requesting a quote.", included: ["Confirm the proposed recovery method and destination", "Tell the provider whether the vehicle can roll, steer, or start", "Discuss access limits, timing, and the complete estimate before authorizing work"], when: "A vehicle cannot continue safely, needs transport to a repair facility, or must be moved from a location it cannot leave under its own power.", recoveryGuidance: [{ title: "Before you request recovery", summary: "A few details can help the provider assess access and suitable equipment.", items: ["Give the exact pickup location, travel direction, and a safe meeting point; describe garages, narrow entrances, or other access limits.", "Share the vehicle make, model, approximate size, and whether it can roll, steer, or start. Mention collision damage or a locked wheel.", "Identify all-wheel or four-wheel drive, low ground clearance, and electric or hybrid systems, and ask whether they affect the loading method.", "Choose a preferred destination and ask about estimated arrival, transport distance, and any extra fees."] }, { title: "At pickup and delivery", summary: "Confirm the handoff plan and follow the recovery operator's safety instructions.", items: ["Verify the agreed destination and estimate before loading begins; ask how you will receive updates.", "Keep clear of the vehicle and recovery equipment while it is being loaded. Do not try to attach or guide recovery gear yourself.", "If safe, note existing damage and remove essential personal items before the vehicle leaves.", "Confirm the receiving shop or destination can accept the vehicle and ask how the drop-off will be documented."] }], recoveryFaqs: [{ question: "Can I choose the repair shop or destination?", answer: "Tell the provider your preferred destination before agreeing to the recovery. Confirm distance, opening hours, access, and any destination-related charges in the written or verbal estimate." }, { question: "Does every vehicle use a flatbed?", answer: "Not always. The suitable method depends on the vehicle, drivetrain, condition, road access, and equipment available. Mention manufacturer towing restrictions or special handling needs and confirm the plan with the provider." }, { question: "Should I stay with the vehicle while it is loaded?", answer: "Follow the recovery operator's instructions and keep clear of the loading area. If the scene is unsafe or emergency services are involved, follow their directions and do not approach the vehicle until it is safe." }, { question: "What should I tell the recovery provider?", answer: "Share your exact location, vehicle make and model, whether it can roll or steer, visible damage, access restrictions, and your preferred destination. Mention low clearance, all-wheel drive, or an electric or hybrid system because these details can affect loading." }, { question: "How should I prepare the vehicle before pickup?", answer: "If it is safe, remove essential personal items and have the keys available. Tell the provider about locked wheels, collision damage, or anything that could make loading difficult. Do not put yourself near traffic or recovery equipment to prepare the vehicle." }, { question: "Can a provider recover a vehicle from a garage or tight space?", answer: "Possibly, but height limits, narrow entrances, steep ramps, and turning space affect which equipment can reach the vehicle. Give the provider measurements or photos when practical and ask them to confirm access before dispatch." }, { question: "How can I avoid unexpected recovery charges?", answer: "Before work begins, ask for the full estimate and confirm what it covers, including mileage, winching, waiting, storage, tolls, and any special equipment. Ask how the price may change if access or vehicle conditions differ from what was described." }, { question: "What if the vehicle contains important belongings?", answer: "Remove essential belongings before loading if it is safe and allowed. If you cannot access the vehicle, tell the provider and ask how personal items will be handled during transport and delivery." }] },
    { id: "flat-tire", title: "Flat tire assistance", category: "Roadside", icon: "bi-life-preserver", image: "assets/images/blog/blog-flat-tire-safety.jpg", imageAlt: "Roadside technician changing a car tire beside an assistance vehicle", imageWidth: 1360, imageHeight: 768, summary: "Practical help for a puncture, damaged tire, or roadside tire change.", details: "A roadside tire visit can help install a usable spare when one is available and the vehicle is in a safe, accessible location. If there is no suitable spare or the wheel is damaged, towing to a tire shop may be the safer option.", included: ["Tire and spare availability check", "Safe roadside assessment", "Towing option if a tire change is not possible"], when: "A tire is flat or visibly damaged and you need help deciding whether a spare can be fitted.", faqs: [{ question: "Can roadside assistance repair any flat tire?", answer: "No. A repair may not be safe or possible if the damage is on the sidewall, the tire has been driven while flat, or the wheel is damaged. A technician can assess it and explain whether a repair, spare, or tow is appropriate." }, { question: "What should I tell the provider before they arrive?", answer: "Share your exact location, vehicle make and model, which tire is affected, whether you have a usable spare, and whether the wheel or tire has visible damage. Mention narrow access, a parking garage, or other hazards." }, { question: "Can I drive on a flat tire to reach a safer place?", answer: "Driving on a flat can damage the wheel and may cause loss of control. If you can move out of traffic safely, do so cautiously; otherwise stay in a safe place and follow local emergency or roadside guidance. Do not attempt a tire change beside moving traffic." }, { question: "What if my vehicle has no spare tire?", answer: "Tell the provider that no spare is available. Depending on the tire damage, vehicle, and local options, they may arrange a mobile tire service or towing to a repair shop." }, { question: "What does the tire pressure warning light mean after a tire change?", answer: "The tire pressure monitoring system may need time or a reset after a change, and the spare may not have a sensor. Check the vehicle manual and ask the technician what to expect. If the warning remains or handling feels unusual, stop safely and have the tire pressure checked." }, { question: "What should I confirm before agreeing to tire assistance?", answer: "Ask whether the quoted service includes labor, a repair or spare installation, parts, travel, and any after-hours or access charges. Confirm the final estimate before work starts." }] },
    {
      id: "battery-jump-start",
      title: "Battery jump start",
      category: "Roadside",
      icon: "bi-battery-charging",
      image: "assets/images/services/battery-jump-start.jpg",
      imageAlt: "Roadside service technician safely connecting heavy-duty booster jumper cables to vehicle battery terminals under open hood",
      imageCaption: "Certified roadside technician connecting heavy-duty surge-protected booster cables to a 12V vehicle battery under open hood",
      imageWidth: 1376,
      imageHeight: 768,
      summary: "Fast 24/7 mobile battery boost and testing for stranded vehicles that will not start.",
      details: "A jump-start visit is intended for common low-battery situations. Our mobile technician arrives equipped with heavy-duty surge-protected booster packs and professional diagnostic gear. Tell the dispatcher your vehicle make and model and describe any warning lights, unusual sounds, or battery symptoms so the right equipment is dispatched.",
      included: [
        "Vehicle make, model, and location confirmed for fast dispatch",
        "Safe heavy-duty booster cable connection with polarity protection",
        "12V battery and alternator charging system verification",
        "Guidance and towing options if the vehicle cannot restart"
      ],
      when: "The engine will not turn over, rapid clicking occurs, or lights and dashboard electronics are dim after the vehicle has been parked.",
      extraVisualSection: `
        <div class="detail-feature-card page-panel">
          <div class="row g-4 align-items-center">
            <div class="col-lg-6">
              <img class="detail-feature-image" src="assets/images/services/battery-diagnostics-testing.jpg" alt="Automotive technician testing 12V battery with digital diagnostic voltage analyzer" width="1376" height="768" loading="lazy">
            </div>
            <div class="col-lg-6">
              <span class="category-pill mb-2"><i class="bi bi-lightning-charge-fill me-1" aria-hidden="true"></i> Starting-System Check</span>
              <h3 class="h4">Battery &amp; Alternator Diagnostic Health Test</h3>
              <p>Before and after boosting, our certified technician conducts a digital terminal and state-of-charge evaluation to verify your battery and alternator health.</p>
              <ul class="check-list mt-2">
                <li><i class="bi bi-check-circle-fill" aria-hidden="true"></i><span>Digital 12V voltage &amp; cold-cranking test</span></li>
                <li><i class="bi bi-check-circle-fill" aria-hidden="true"></i><span>Terminal corrosion &amp; connection check</span></li>
                <li><i class="bi bi-check-circle-fill" aria-hidden="true"></i><span>Alternator charging output confirmation</span></li>
              </ul>
            </div>
          </div>
        </div>
      `,
      faqs: [
        { question: "What details should I share when requesting a jump start?", answer: "Give your exact location, vehicle make and model, what happens when you try to start it, and whether any dashboard lights or warning messages appear. Mention a damaged, leaking, or swollen battery and any difficult access." },
        { question: "Will a jump start fix a battery that keeps going flat?", answer: "A jump may get the vehicle started, but it does not identify or fix the underlying root cause. If the battery repeatedly loses charge, ask our technician to check the battery health and charging alternator system." },
        { question: "Can every vehicle be jump-started?", answer: "No. Some vehicles have specific jump-start procedures or restrictions, especially certain hybrids and electric vehicles. Check the owner's manual and tell the provider the exact vehicle before service so they can confirm the correct approach." },
        { question: "Should I try to connect jumper cables myself?", answer: "Only if you know the correct procedure for your vehicle and can do it safely. Incorrect connections can damage the vehicle ECU or cause injury. Do not attempt a jump if the battery is damaged, leaking, or swollen; follow the owner's manual and contact a qualified provider." },
        { question: "What if the vehicle still will not start after a boost?", answer: "A weak or failed battery is only one possible cause. Tell the provider what happened and ask whether further diagnosis, a battery replacement, or towing is appropriate. Confirm any additional charges before authorizing more work." },
        { question: "What should I confirm before agreeing to a jump-start service?", answer: "Ask whether the estimate includes the visit, testing, and any additional work, and whether battery replacement or towing would cost extra. Confirm the total price and the proposed next step before service begins." }
      ]
    },
    {
      id: "fuel-delivery",
      title: "Emergency fuel delivery",
      category: "Roadside",
      icon: "bi-fuel-pump-fill",
      image: "assets/images/services/emergency-fuel-delivery.jpg",
      imageAlt: "Roadside service technician safely dispensing emergency fuel into vehicle tank on roadside shoulder",
      imageCaption: "Certified roadside technician dispensing emergency fuel from safety container on highway shoulder",
      imageWidth: 1376,
      imageHeight: 768,
      summary: "Rapid on-demand fuel delivery providing 2–5 gallons of regular, premium, or diesel to get you to safety.",
      details: "Running out of fuel on a busy highway or rural route can be stressful and hazardous. Our roadside dispatch delivers fresh, uncontaminated fuel directly to your stranded vehicle with spill-proof safety equipment, so you can restart safely without walking along traffic or paying for a tow.",
      included: [
        "Exact breakdown location, highway direction, and safety perimeter confirmed",
        "Vehicle make, model, and fuel type (Regular 87, Premium 93, or Diesel) verified",
        "Sufficient fuel (2–5 gallons) delivered to reach the nearest open fueling station",
        "Spill-proof no-drip pouring with vapor-lock nozzle to protect vehicle finish",
        "Engine restart and priming assistance included"
      ],
      when: "Your fuel gauge reads empty, the low-fuel warning is active, or the engine has stalled due to fuel starvation.",
      extraVisualSection: `
        <div class="detail-feature-card page-panel">
          <div class="row g-4 align-items-center">
            <div class="col-lg-6">
              <img class="detail-feature-image" src="assets/images/services/fuel-dispatch-safety.jpg" alt="Certified roadside fuel containers and dispenser nozzle equipment" width="1376" height="768" loading="lazy">
            </div>
            <div class="col-lg-6">
              <span class="category-pill mb-2"><i class="bi bi-shield-check me-1" aria-hidden="true"></i> Quality &amp; Safety Protocol</span>
              <h3 class="h4">Certified Fuel Types &amp; Spill-Proof Dispensing</h3>
              <p>We supply verified, fresh gasoline and ultra-low sulfur diesel stored in DOT/EPA-approved safety containers. Our technicians use capless tank adaptors and vapor-sealed spouts to safeguard your vehicle engine and paint.</p>
              <ul class="check-list mt-2">
                <li><i class="bi bi-check-circle-fill" aria-hidden="true"></i><span>Regular 87, 91/93 Premium &amp; Diesel fuel options</span></li>
                <li><i class="bi bi-check-circle-fill" aria-hidden="true"></i><span>Anti-spill vapor-lock spouts &amp; capless funnel adaptors</span></li>
                <li><i class="bi bi-check-circle-fill" aria-hidden="true"></i><span>Air pocket bleeding &amp; engine restart verification</span></li>
              </ul>
            </div>
          </div>
        </div>
      `,
      faqs: [
        { question: "What information should I provide when requesting fuel delivery?", answer: "Share your exact location (highway, exit number, mile marker, or cross streets), vehicle make, model, and year, and the exact fuel type needed (Regular 87, Premium 91/93, or Diesel). Mention if your vehicle is on a narrow shoulder or bridge." },
        { question: "How much fuel is delivered?", answer: "Our technicians deliver 2 to 5 gallons of fuel—enough to safely restart your vehicle and drive 30 to 75 miles to the nearest filling station of your choice." },
        { question: "Can fuel be delivered to an electric vehicle (EV)?", answer: "Electric vehicles do not use liquid fuel. For depleted EV batteries, we dispatch mobile EV charging support or a damage-free flatbed tow to the nearest DC Fast Charger." },
        { question: "What if my car won't restart even after adding fuel?", answer: "Running completely dry can pull air into the fuel lines or injectors. Our technician will assist with priming the fuel system and cycling the ignition to clear air pockets. If a fuel pump issue is detected, we can arrange immediate towing to a trusted repair facility." },
        { question: "What should I do while waiting for fuel delivery?", answer: "Switch on your hazard flashers, pull as far onto the right shoulder as safely possible, and set parking brakes. If traffic is heavy or high-speed, remain buckled inside your vehicle until our marked service vehicle arrives with flashing safety beacons." },
        { question: "What charges should I confirm before dispatch?", answer: "We provide upfront, transparent flat-rate pricing covering the roadside callout and the cost of the delivered fuel with zero surprise fees." }
      ]
    },
    {
      id: "vehicle-lockout",
      title: "Vehicle lockout",
      category: "Roadside",
      icon: "bi-key-fill",
      image: "assets/images/services/vehicle-lockout-service.jpg",
      imageAlt: "Professional roadside technician using gentle non-destructive lockout tools to unlock car door",
      imageCaption: "Certified technician safely unlocking vehicle with non-destructive inflatable air wedge and bypass tool",
      imageWidth: 1376,
      imageHeight: 768,
      summary: "Non-destructive, scratch-free entry assistance for keys locked inside a vehicle or trunk.",
      details: "Locking keys inside your car or trunk can disrupt your day. Our roadside lockout specialists use professional, damage-free automotive entry equipment—including scratch-proof inflatable air wedges and specialized reach tools—to safely unlock your vehicle without damaging weatherstripping, tint, or electronic door locks.",
      included: [
        "Prompt on-scene dispatch with professional automotive lockout tools",
        "100% non-destructive entry with scratch-proof air wedges and bypass rods",
        "Passenger door, power lock switch, and internal trunk release access",
        "Vehicle ownership and identification check for customer security",
        "Zero-damage guarantee to door frame, glass, and weather seals"
      ],
      when: "Keys or fobs are locked inside the passenger cabin or trunk, or keyless entry fails to respond.",
      extraVisualSection: `
        <div class="detail-feature-card page-panel">
          <div class="row g-4 align-items-center">
            <div class="col-lg-6">
              <img class="detail-feature-image" src="assets/images/services/lockout-equipment-tools.jpg" alt="Professional automotive locksmith lockout equipment and smart key programmer" width="1376" height="768" loading="lazy">
            </div>
            <div class="col-lg-6">
              <span class="category-pill mb-2"><i class="bi bi-shield-lock-fill me-1" aria-hidden="true"></i> Damage-Free Guarantee</span>
              <h3 class="h4">Non-Destructive Tools &amp; Identity Verification</h3>
              <p>We use gentle, specialized automotive locksmith tools designed specifically for modern vehicles. Our technicians verify photo ID and vehicle registration before unlocking to ensure complete security.</p>
              <ul class="check-list mt-2">
                <li><i class="bi bi-check-circle-fill" aria-hidden="true"></i><span>Protective vinyl air wedges &amp; rubberized reach rods</span></li>
                <li><i class="bi bi-check-circle-fill" aria-hidden="true"></i><span>Electronic keyless &amp; frameless window capability</span></li>
                <li><i class="bi bi-check-circle-fill" aria-hidden="true"></i><span>Verified ownership protocol protecting your vehicle</span></li>
              </ul>
            </div>
          </div>
        </div>
      `,
      faqs: [
        { question: "What information should I share when requesting lockout help?", answer: "Provide your exact location, vehicle year, make and model, and explain whether the keys are locked inside the cabin or trunk. Mention if a child, vulnerable person, or pet is inside so our dispatch team can treat it as an emergency priority." },
        { question: "Will I need to prove that I own or can use the vehicle?", answer: "Yes. For security and anti-theft protection, our technician will request a matching photo ID and vehicle registration or insurance document before or immediately upon opening the door." },
        { question: "Can a provider unlock a vehicle with keyless entry or deadbolts?", answer: "Yes. Our technicians carry specialized equipment designed for modern vehicles with electronic deadbolts, recessed lock buttons, and frameless door glass without causing damage." },
        { question: "Could unlocking the vehicle damage the door or window tint?", answer: "No. Unlike improvised coat hangers or stiff metal rods, our technicians use inflatable vinyl wedges and rubber-sleeved tools specifically engineered to protect glass, door alignment, weather seals, and window tint." },
        { question: "What if the key is lost or the key fob does not work?", answer: "An unlock service safely opens the vehicle so you can retrieve your belongings. If your key is lost, damaged, or deprogrammed, we can coordinate with an automotive locksmith or arrange towing to your dealership or preferred mechanic." },
        { question: "What should I confirm about the cost?", answer: "We provide upfront flat-rate lockout quotes before dispatch with zero surprise fees or hidden on-site surcharges." }
      ]
    },
    {
      id: "winch-out",
      title: "Winch-out recovery",
      category: "Recovery",
      icon: "bi-cone-striped",
      image: "assets/images/services/winch-out-recovery.jpg",
      imageAlt: "Heavy-duty recovery tow truck winching a passenger vehicle stuck off-road back onto safe pavement",
      imageCaption: "Certified recovery operator winching a stranded vehicle out of an off-road ditch with heavy-duty rigging",
      imageWidth: 1376,
      imageHeight: 768,
      summary: "Expert off-road extraction and winching assistance for vehicles stuck in mud, snow, sand, or roadside ditches.",
      details: "Sliding off the road into deep mud, snowbanks, soft sand, or an embankment requires calculated pulling power and damage-free rigging. Our certified recovery operators use heavy-duty hydraulic winches with high-strength synthetic lines, snatch blocks, and recovery bridles to safely extract your car, SUV, or truck without damaging the drivetrain, steering alignment, or bumper.",
      included: [
        "Scene safety, slope angles, and ground firmness assessment before rigging",
        "Damage-free connection to factory recovery points and chassis tow eyes",
        "High-capacity hydraulic winching with synthetic low-recoil recovery lines",
        "Multi-angle snatch block rigging for controlled, safe vehicle extraction",
        "Post-extraction tire, steering, and undercarriage safety check before departure"
      ],
      when: "Your vehicle is stuck in deep snow, thick mud, wet sand, or a roadside ditch/embankment and wheels spin without traction.",
      extraVisualSection: `
        <div class="detail-feature-card page-panel">
          <div class="row g-4 align-items-center">
            <div class="col-lg-6">
              <img class="detail-feature-image" src="assets/images/services/winch-rigging-equipment.jpg" alt="Professional heavy-duty winching and recovery rigging equipment" width="1376" height="768" loading="lazy">
            </div>
            <div class="col-lg-6">
              <span class="category-pill mb-2"><i class="bi bi-shield-check me-1" aria-hidden="true"></i> Heavy-Duty Rigging Protocol</span>
              <h3 class="h4">Damage-Free Rigging &amp; Multi-Point Pulling Technology</h3>
              <p>We deploy high-strength synthetic winch lines and heavy-duty snatch block pulleys to distribute pulling force evenly across the vehicle frame, eliminating bumper tear or axle strain.</p>
              <ul class="check-list mt-2">
                <li><i class="bi bi-check-circle-fill" aria-hidden="true"></i><span>High-strength synthetic line with zero metal snapback risk</span></li>
                <li><i class="bi bi-check-circle-fill" aria-hidden="true"></i><span>Soft shackles and recovery bridles protecting suspension</span></li>
                <li><i class="bi bi-check-circle-fill" aria-hidden="true"></i><span>Controlled extraction back onto solid pavement safely</span></li>
              </ul>
            </div>
          </div>
        </div>
      `,
      faqs: [
        { question: "What should I tell the provider about where the vehicle is stuck?", answer: "Give your exact location and describe the terrain (mud, deep snow, gravel embankment, sand, or water ditch). Mention how far the vehicle is from a firm paved surface and whether all four wheels are off the roadway." },
        { question: "What vehicle details help plan a winch-out?", answer: "Share the vehicle make, model, drive type (AWD, 4WD, FWD, or RWD), whether wheels are buried to the axle, and if any factory recovery tow hooks are accessible." },
        { question: "Can I attach a strap or try to pull the vehicle out with another car?", answer: "Never attempt to jerk a stuck vehicle with a tow ball or chain. Tow balls can shear under load and become lethal projectiles. Professional winching uses controlled steady tension and certified rigging points." },
        { question: "Could winching out damage my car's bumper or alignment?", answer: "No. Our certified recovery operators attach recovery bridles directly to reinforced chassis frame points—never to tie rods, axles, or plastic bumpers." },
        { question: "What should I do while waiting for the winch truck?", answer: "Stay inside your vehicle if it is resting safely away from traffic, or move to a safe, dry location up-slope from the roadway. Avoid spinning your tires, which only digs the vehicle deeper." },
        { question: "What charges should I confirm before recovery begins?", answer: "We provide clear upfront estimates covering the recovery setup, distance, and winching time with zero hidden site surcharges." }
      ]
    },
    {
      id: "motorcycle-towing",
      title: "Motorcycle towing",
      category: "Towing",
      icon: "bi-bicycle",
      image: "assets/images/services/motorcycle-towing-service.jpg",
      imageAlt: "Professional flatbed tow truck with specialized front wheel chock securing a motorcycle with soft-tie straps",
      imageCaption: "Certified technician safely securing a motorcycle upright on a specialized recovery flatbed using soft-tie straps",
      imageWidth: 1376,
      imageHeight: 768,
      summary: "Specialized damage-free transport and roadside towing for cruisers, sportbikes, touring motorcycles, and scooters.",
      details: "Towing a motorcycle requires specialized loading ramps, upright locking wheel chocks, and 4-point soft tie-down straps to protect delicate chrome, painted fairings, and handlebar alignment. Our certified operators transport your bike fully upright without compressing suspension seals or risking tip-overs.",
      included: [
        "Specialized motorcycle loading ramps and low-angle deck approach",
        "Self-locking front wheel chock keeping motorcycle 100% upright",
        "4-point soft-loop ratchet tie-downs attached to triple tree & frame (no metal contact)",
        "Paint, fairing, and handlebar alignment protection guarantee",
        "Transport to your preferred motorcycle repair shop, dealership, or residence"
      ],
      when: "Your motorcycle suffers a flat tire, engine breakdown, dead battery, or mechanical fault and cannot be ridden safely.",
      extraVisualSection: `
        <div class="detail-feature-card page-panel">
          <div class="row g-4 align-items-center">
            <div class="col-lg-6">
              <img class="detail-feature-image" src="assets/images/services/motorcycle-chock-equipment.jpg" alt="Specialized motorcycle wheel chock cradle and soft-tie securement equipment" width="1376" height="768" loading="lazy">
            </div>
            <div class="col-lg-6">
              <span class="category-pill mb-2"><i class="bi bi-shield-check me-1" aria-hidden="true"></i> Specialized Bike Protocol</span>
              <h3 class="h4">Locking Wheel Chocks &amp; Soft-Tie Technology</h3>
              <p>We never use metal hooks or tow dollies that can bend handlebars or scratch paint. Our flatbeds feature adjustable locking wheel cradles and microfiber-lined soft loops designed specifically for two-wheel vehicles.</p>
              <ul class="check-list mt-2">
                <li><i class="bi bi-check-circle-fill" aria-hidden="true"></i><span>Self-locking front-wheel chock holds bike upright without side stand</span></li>
                <li><i class="bi bi-check-circle-fill" aria-hidden="true"></i><span>Microfiber soft-loop straps eliminate paint and chrome friction</span></li>
                <li><i class="bi bi-check-circle-fill" aria-hidden="true"></i><span>Zero suspension bottoming-out or fork seal stress</span></li>
              </ul>
            </div>
          </div>
        </div>
      `,
      faqs: [
        { question: "What details should I share when requesting motorcycle towing?", answer: "Provide your exact breakdown location, motorcycle make, model, and style (cruiser, sportbike, touring with saddlebags, or trike/scooter). Mention if wheels are locked or if a flat tire affects rolling." },
        { question: "Does motorcycle towing use special equipment?", answer: "Yes. Standard car tow dollies or sling trucks should never be used on a motorcycle. We deploy flatbeds equipped with wide aluminum loading ramps, adjustable locking wheel chocks, and specialized 4-point soft-tie securement straps." },
        { question: "Should I remove accessories or luggage before pickup?", answer: "We recommend removing loose personal valuables, tank bags, or detachable helmets before loading. Sturdy OEM hard saddlebags and fairings remain safe and protected during transport." },
        { question: "Can a motorcycle with a flat tire still be transported?", answer: "Yes. Our operators utilize specialized motorcycle dollies and winching glides to roll bikes with punctured or seized tires smoothly up the ramp without rim contact." },
        { question: "Can I ride along in the tow vehicle?", answer: "Yes, our recovery trucks feature air-conditioned passenger cabs so you can travel safely with your motorcycle directly to your destination." },
        { question: "What should I confirm about the towing price?", answer: "We provide upfront flat-rate pricing based on transport distance and specialized equipment with zero hidden hookup or tie-down charges." }
      ]
    },
    { id: "heavy-duty-towing", title: "Heavy-duty towing", category: "Commercial", icon: "bi-truck-flatbed", image: "assets/images/fleet/fleet-roadside-response.jpg", imageAlt: "Large roadside response truck representing commercial vehicle support", summary: "Coordinated towing for larger vehicles and commercial equipment.", details: "Heavy-duty requests require a careful review of vehicle dimensions, gross weight, load, access, and destination. Availability depends on location and equipment; provide as much detail as possible before dispatch.", included: ["Vehicle and load details reviewed", "Access and route constraints discussed", "Equipment and availability confirmed before dispatch"], when: "A bus, truck, RV, or other large vehicle is disabled and needs a recovery plan.", faqs: [{ question: "What details are needed for a heavy-duty towing request?", answer: "Share the vehicle type, approximate dimensions and weight, whether it is loaded, its condition, exact location, access limits, and destination. Mention low bridges, narrow roads, soft ground, or other route constraints you know about." }, { question: "Why does the provider need the vehicle's weight and dimensions?", answer: "The information helps the provider identify equipment with suitable capacity and plan safe access and transport. Give the best available estimates and disclose cargo or unusual equipment that could affect the total weight or height." }, { question: "Can a loaded truck or bus be towed?", answer: "It depends on the vehicle, load, condition, location, and available equipment. Tell the provider what the vehicle is carrying and ask whether it must be unloaded or handled by a specialist before recovery." }, { question: "How quickly can heavy-duty towing arrive?", answer: "Arrival time varies with location, traffic, equipment availability, and the complexity of the recovery. Ask for an estimated arrival window and how the provider will update you if it changes." }, { question: "Can the provider tow from a restricted or difficult-access location?", answer: "Possibly, but access restrictions can require specialized equipment or a different recovery plan. Describe the site and route in advance, and ask the provider to confirm the equipment can reach the vehicle safely." }, { question: "What should I confirm in a heavy-duty towing estimate?", answer: "Ask what the quote includes, such as mileage, recovery labor, special equipment, waiting time, tolls, storage, and destination charges. Confirm the total and any conditions that could change it before authorizing work." }] },
    { id: "accident-recovery", title: "Accident recovery", category: "Recovery", icon: "bi-shield-exclamation", image: "assets/images/fleet/recovery-vehicle.jpg", summary: "Vehicle recovery coordination after a collision or roadway incident.", details: "After an incident, prioritize personal safety and follow emergency-service instructions. Recovery can be coordinated once the scene is safe and the vehicle can be accessed by an appropriate provider.", included: ["Scene access and vehicle condition reviewed", "Destination and handling needs confirmed", "Specialist recovery coordinated when required"], when: "Emergency services have cleared the scene and a damaged vehicle needs transport.", faqs: [{ question: "When should I arrange accident recovery?", answer: "Prioritize people and follow emergency-service instructions first. Arrange vehicle recovery after the scene is safe and authorities allow the vehicle to be moved. Tell the provider if the vehicle or roadside location remains hazardous." }, { question: "What information should I give the recovery provider?", answer: "Share the exact location, vehicle type and condition, visible damage, whether it can roll or steer, any leaking fluids, and the destination. Mention airbag deployment, blocked wheels, or hazards that could affect loading." }, { question: "Can a damaged vehicle be towed if it will not roll?", answer: "Often, but the damage and position may require specialized equipment. Describe the vehicle's condition and ask the provider to confirm the recovery method and access before dispatch." }, { question: "Where can the damaged vehicle be taken?", answer: "Tell the provider your preferred repair shop, storage facility, or other destination. Confirm it is open and can accept the vehicle, and ask whether destination, mileage, or storage charges apply." }, { question: "Should I remove belongings from the vehicle?", answer: "Only if the scene is safe and authorities permit access. Do not enter a damaged or unstable vehicle or stand near traffic. Ask the recovery provider how belongings can be retrieved if the vehicle cannot be accessed." }, { question: "What costs should I confirm before recovery?", answer: "Ask for the complete estimate and what it includes, such as scene recovery, loading, distance, special equipment, after-hours service, storage, and destination fees. Confirm how additional work or changed conditions could affect the total." }] },
    { id: "long-distance-transport", title: "Vehicle transport", category: "Towing", icon: "bi-arrow-left-right", image: "assets/images/blog/vehicle-maintenance.jpg", summary: "Planned vehicle transport for longer trips, relocations, or shop transfers.", details: "Scheduled transport is arranged around vehicle condition, pickup and delivery access, timing, and distance. Confirm the vehicle's operability and any special handling needs when requesting a quote.", included: ["Pickup and delivery locations recorded", "Vehicle condition and handling requirements noted", "Timing and quote confirmed before booking"], when: "A vehicle needs to be moved between locations without being driven.", faqs: [{ question: "What details should I provide when booking vehicle transport?", answer: "Share the pickup and delivery addresses, vehicle make and model, whether it runs, its approximate size, and any access restrictions. Provide your preferred dates and mention modifications or low ground clearance that may affect loading." }, { question: "Can a non-running vehicle be transported?", answer: "Often, but the provider needs to know whether it can roll, steer, and brake. Non-running vehicles may require special loading equipment or incur additional charges, so describe the condition before booking." }, { question: "How should I prepare the vehicle for pickup?", answer: "Follow the provider's instructions. Typically, remove personal belongings and loose accessories, leave only the agreed fuel level, and make sure the vehicle is accessible. Ask whether keys must be provided and document the vehicle's condition at handoff." }, { question: "Can I choose the pickup and delivery dates?", answer: "You can request preferred dates, but availability and timing depend on the route, schedule, and transport method. Confirm the pickup window, estimated delivery date, and how you will receive updates." }, { question: "Will the vehicle be driven during transport?", answer: "Transport methods vary. Confirm whether your vehicle will be loaded onto a carrier or moved another way, and ask how it will be secured and whether additional mileage or handling is expected." }, { question: "What should I confirm in the transport quote?", answer: "Ask whether the quote includes pickup, delivery, distance, loading, fuel or toll charges, insurance or coverage terms, and any access or waiting fees. Confirm cancellation terms and the process for noting existing damage before you book." }] },
    { id: "fleet-assistance", title: "Fleet roadside assistance", category: "Commercial", icon: "bi-collection-fill", image: "assets/images/fleet/fleet-roadside-response.jpg", imageAlt: "RACQ traffic response vehicle providing roadside assistance in Brisbane", imageWidth: 1280, imageHeight: 909, imageCredit: `Photo by <a href="https://commons.wikimedia.org/wiki/File:RACQ_Traffic_Response_Unit,_Roadside_assistance_vehicle_in_Brisbane,_Queensland.jpg" target="_blank" rel="noopener noreferrer">Kgbo via Wikimedia Commons</a>; cropped to fit. Licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>.`, summary: "A single point of contact for roadside support across a business fleet.", details: "Fleet assistance helps businesses coordinate service requests for multiple vehicles. A program can be configured around fleet size, operating hours, service areas, approvals, and reporting needs.", included: ["Fleet and dispatch requirements reviewed", "Service-area and authorization preferences documented", "A proposed support workflow for your team"], when: "Your organization needs a consistent way to request and track vehicle support.", faqs: [{ question: "What information is needed to set up fleet roadside assistance?", answer: "A provider may ask for fleet size, vehicle types, operating locations, service hours, preferred contacts, approval rules, and reporting needs. Identify any vehicle groups or routes that require special handling." }, { question: "How can drivers request assistance through a fleet program?", answer: "Ask the provider how drivers should submit a request, what details they need to provide, and how dispatch updates will reach both the driver and fleet contact. Share the process with drivers before an incident occurs." }, { question: "Can a fleet require approval before service is authorized?", answer: "Many programs can define authorization steps, but options vary by provider. Confirm who can approve service, how urgent requests are handled, and whether spending limits or after-hours exceptions apply." }, { question: "Does fleet assistance cover every vehicle and location?", answer: "Coverage depends on the program terms, vehicle types, service area, and provider availability. Review exclusions and confirm how to request help when a vehicle is outside the normal coverage area." }, { question: "Can fleet managers track requests and costs?", answer: "Reporting varies by provider. Ask what request status, service details, invoices, and usage reports are available, how often they are provided, and who can access them." }, { question: "What should we compare when choosing a fleet roadside provider?", answer: "Compare service area, supported vehicle types, response process, hours, approval controls, reporting, billing, and escalation support. Review the full fees and service terms before enrolling the fleet." }] },
    {
      id: "mobile-mechanic",
      title: "Mobile mechanic",
      category: "Roadside",
      icon: "bi-tools",
      image: "assets/images/services/mobile-mechanic-repair.jpg",
      imageAlt: "A mechanic working on the suspension of a raised vehicle in a repair shop",
      imageWidth: 960,
      imageHeight: 1438,
      imageCredit: `Photo by <a href="https://commons.wikimedia.org/wiki/File:Car_mechanic_worker_repairing_suspension_of_lifted_automobile_at_auto_repair_garage_shop.jpg" target="_blank" rel="noopener noreferrer">Shixart1985 via Wikimedia Commons</a>; cropped to fit. Licensed under <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>.`,
      summary: "On-location diagnostic support for selected common vehicle problems.",
      details: "Mobile repair availability depends on the issue, vehicle, parts, and area. A technician can assess whether an on-site fix is practical or if a tow to a workshop is the better next step.",
      included: ["Issue and warning signs recorded", "On-site service availability checked", "Repair or towing options discussed"],
      when: "The vehicle may have a minor fault that can be assessed where it is parked.",
      faqs: [
        { question: "What problems can a mobile mechanic assess?", answer: "Services vary by provider, vehicle, and location. Describe the symptoms, warning lights, and when the problem began; ask whether the provider can assess that issue at your location before booking." },
        { question: "What information should I provide before the visit?", answer: "Share the vehicle year, make, model, exact location, symptoms, warning lights, and whether it starts or can move. Mention any modifications, recent repairs, or access restrictions that could affect the inspection." },
        { question: "Should I keep trying to start or drive the vehicle?", answer: "If the vehicle shows a serious warning, unusual smoke, leaking fluids, or unsafe handling, stop and follow the owner's manual or local emergency guidance. Tell the provider what you observed and ask whether it should be moved before inspection." },
        { question: "Can a mobile mechanic complete every repair roadside?", answer: "No. Some work needs a workshop, parts, or equipment that cannot be brought to the vehicle. The mechanic can explain whether an on-site repair is practical or whether a repair shop or tow is a better next step." },
        { question: "What if the mechanic cannot fix the problem on site?", answer: "Ask what was diagnosed, what work remains, and whether the vehicle is safe to move. Confirm any diagnostic fee and discuss repair-shop or towing options and their costs before arranging more service." },
        { question: "What should I confirm about the estimate?", answer: "Ask whether the quote includes travel, diagnosis, labor, parts, and taxes, and how additional work will be approved. Request the total or a clear estimate range before work begins." }
      ]
    }
  ];

  const posts = [
    { id: "breakdown-safety", title: "What to do when your car breaks down", category: "Safety", date: "October 21, 2026", read: "5 min read", image: "assets/images/blog/blog-breakdown-safety.jpg", alt: "Passenger car safely pulled onto highway shoulder with hazard triangles and response vehicle", intro: "A breakdown can be unsettling, especially in traffic or poor weather. A few calm, safety-first steps can help you protect yourself while arranging support.", sections: ["Move away from traffic if you can do so safely. Turn on hazard lights and use a safe pull-off area when possible.", "Stay aware of your surroundings. If your vehicle is exposed to moving traffic, remain inside with your seat belt on unless staying there is more dangerous.", "Share your location clearly when requesting help. Road names, mile markers, landmarks, and travel direction all help responders find you.", "Avoid attempting repairs in an unsafe location. If the scene feels dangerous, contact emergency services before roadside support."] },
    { id: "flat-tire-guide", title: "A practical guide to handling a flat tire", category: "Maintenance", date: "October 14, 2026", read: "4 min read", image: "assets/images/blog/blog-flat-tire-safety.jpg", alt: "Roadside technician changing flat tire on car using hydraulic jack and torque wrench", intro: "A damaged tire does not always mean the same repair is appropriate. Start with a safe location and a quick check before deciding what to do next.", sections: ["Pull over to a firm, level area well away from traffic if possible, then switch on hazard lights.", "Check whether your vehicle has a spare, jack, and wheel-lock key. Do not work beside fast-moving traffic or on unstable ground.", "If a tire is shredded, a wheel is damaged, or you do not have the right equipment, request roadside help or a tow.", "Have the tire inspected by a qualified shop before continuing a longer trip."] },
    { id: "battery-warning-signs", title: "Battery warning signs drivers should know", category: "Maintenance", date: "October 7, 2026", read: "4 min read", image: "assets/images/blog/blog-battery-diagnostics.jpg", alt: "Automotive technician testing car battery with digital diagnostic analyzer under open hood", intro: "Slow cranking and dim lights can be signs of a weak battery, but charging-system issues may look similar. Recognizing the clues helps you plan a safe next step.", sections: ["Notice slow engine cranking, dim headlights, or dashboard warnings, especially after the vehicle has been parked.", "Check for visible damage or a strong sulfur smell without touching leaking or swollen batteries.", "If a boost is attempted, use the vehicle manufacturer's jump-start points and instructions. Incorrect connections can cause injury or damage.", "A battery that repeatedly loses charge should be tested along with the vehicle's charging system."] },
    { id: "motorcycle-trip-checklist", title: "A quick motorcycle trip checklist", category: "Travel", date: "September 30, 2026", read: "6 min read", image: "assets/images/blog/motorcycle-travel.jpg", alt: "Motorcycle on a roadway prepared for travel", intro: "A short pre-ride check can catch common issues before they turn into a roadside delay. Use your owner's manual for model-specific requirements.", sections: ["Check tire condition and pressure while the tires are cool, using the recommended figures for your motorcycle.", "Test lights, indicators, horn, and brakes before setting off.", "Secure luggage and carry basic identification, emergency contacts, and protective equipment.", "Plan a route with realistic fuel stops and check weather and road conditions before departure."] },
    { id: "running-out-of-fuel", title: "If you run out of fuel on the road", category: "Safety", date: "September 23, 2026", read: "3 min read", image: "assets/images/blog/blog-fuel-delivery.jpg", alt: "Roadside service technician refueling car on shoulder with safety fuel can", intro: "Running out of fuel can happen on an unfamiliar route or in heavy traffic. Focus first on reaching a safe place and making your location easy to identify.", sections: ["Use remaining momentum only to reach a safe stopping point; do not walk along a highway to find fuel.", "Turn on hazard lights and follow local road-safety guidance for your location.", "Share the fuel type, vehicle location, and access restrictions when asking about delivery.", "If fuel delivery is unavailable or the vehicle is in a dangerous position, ask about a safe relocation or towing option."] },
    { id: "pre-trip-vehicle-check", title: "Simple checks before a longer drive", category: "Maintenance", date: "September 16, 2026", read: "5 min read", image: "assets/images/blog/vehicle-maintenance.jpg", alt: "Passenger vehicle undergoing pre-trip safety checks", intro: "A little preparation can reduce avoidable stops and help you notice problems early. These checks complement, rather than replace, routine maintenance.", sections: ["Review tire pressure, tread, lights, wipers, and fluid levels before departure.", "Check your vehicle maintenance schedule and address warning lights before a long trip.", "Keep charging cables, basic emergency supplies, and important roadside contacts accessible.", "Allow time for rest breaks and check weather, traffic, and road closures along your route."] },
    { id: "choosing-tow-service", title: "How to choose the right towing service", category: "Roadside", date: "September 9, 2026", read: "4 min read", image: "assets/images/blog/blog-tow-selection.jpg", alt: "Modern flatbed tow truck safely loading disabled vehicle on highway", intro: "The right towing option depends on your vehicle, location, condition, and destination. A few details can help a dispatcher recommend appropriate equipment.", sections: ["Describe the vehicle, whether it can roll or steer, and any visible damage.", "Share where it is parked and whether there are height, access, or traffic constraints.", "Confirm the destination and ask what the quoted service includes before dispatch.", "For motorcycles, specialty vehicles, or larger trucks, ask whether the provider has suitable equipment."] },
    { id: "winter-roadside-kit", title: "Build a useful roadside kit for changing weather", category: "Travel", date: "September 2, 2026", read: "5 min read", image: "assets/images/blog/blog-winter-kit.jpg", alt: "Complete winter roadside emergency kit neatly organized in vehicle trunk", intro: "A compact roadside kit can make an unexpected stop more manageable. Choose items suited to your climate and vehicle, and keep safety ahead of convenience.", sections: ["Carry a flashlight, reflective vest, first-aid supplies, phone charger, and drinking water where practical.", "In cold-weather areas, consider warm layers, gloves, a blanket, and supplies recommended by local authorities.", "Keep the kit secured so it cannot become a hazard during sudden braking.", "Review supplies periodically and replace items that are expired, damaged, or unsuitable for the season."] }
  ];

  const serviceGrid = document.querySelector("[data-service-grid]");
  if (serviceGrid) {
    serviceGrid.innerHTML = services.map((service) => `
      <div class="col-md-6 col-lg-4">
        <article class="card service-card service-card--page">
          <div class="card__body">
            <span class="service-card__icon"><i class="bi ${service.icon}" aria-hidden="true"></i></span>
            <div class="service-card__meta"><span>${service.category}</span></div>
            <h2 class="h3">${service.title}</h2>
            <p>${service.summary}</p>
            <a class="service-card__link" href="service-details.html?service=${service.id}">View service details <i class="bi bi-arrow-up-right icon-directional" aria-hidden="true"></i></a>
          </div>
        </article>
      </div>
    `).join("");
  }

  const serviceDetails = document.querySelector("[data-service-details]");
  if (serviceDetails) {
    const selectedService = new URLSearchParams(window.location.search).get("service");
    const service = services.find((item) => item.id === selectedService);
    if (!service) {
      serviceDetails.innerHTML = `<div class="results-empty"><h2>Choose a service to explore</h2><p>Select one of our roadside or recovery services to see what to expect.</p><a class="button button--primary" href="services.html">Browse all services</a></div>`;
    } else {
      document.title = `${service.title} | RoadRescue`;
      if (service.id === "fleet-assistance") {
        serviceDetails.closest(".section")?.classList.add("fleet-assistance-detail-section");
      }
      const showImageCredit = service.imageCredit && !["vehicle-recovery", "fleet-assistance", "mobile-mechanic"].includes(service.id);
      const detailImage = `<img class="detail-image${showImageCredit ? " detail-image--cropped" : ""}${service.id === "vehicle-recovery" ? " detail-image--vehicle-recovery" : ""}${service.id === "fleet-assistance" ? " detail-image--fleet-assistance" : ""}" src="${service.image}" alt="${service.imageAlt || `${service.title} roadside assistance`}"${service.imageWidth ? ` width="${service.imageWidth}"` : ""}${service.imageHeight ? ` height="${service.imageHeight}"` : ""} fetchpriority="high">`;
      const detailImageMarkup = showImageCredit
        ? `<figure class="detail-figure">${detailImage}<figcaption class="detail-image-credit">${service.imageCredit}</figcaption></figure>`
        : `<figure class="detail-figure">${detailImage}<figcaption class="detail-image-caption"><i class="bi bi-camera-fill text-accent" aria-hidden="true"></i> <span>${service.imageCaption || service.imageAlt || `${service.title} roadside assistance`}</span></figcaption></figure>`;
      const recoveryGuidance = service.recoveryGuidance
        ? `<div class="detail-guidance-grid">${service.recoveryGuidance.map((section) => `
            <section class="page-panel detail-guidance-card" aria-label="${section.title}">
              <h2>${section.title}</h2>
              <p>${section.summary}</p>
              <ul class="check-list">${section.items.map((item) => `<li><i class="bi bi-check-circle-fill" aria-hidden="true"></i><span>${item}</span></li>`).join("")}</ul>
            </section>
          `).join("")}</div>`
        : "";
      const serviceFaqs = service.recoveryFaqs || service.faqs;
      const recoveryFaqs = serviceFaqs
        ? `<section class="detail-faq" aria-labelledby="detail-faq-title">
            <h2 id="detail-faq-title">${service.id === "vehicle-recovery" ? "Vehicle recovery questions" : `${service.title} questions`}</h2>
            <div class="detail-faq__list">${serviceFaqs.map((item) => `
              <details><summary>${item.question}</summary><p>${item.answer}</p></details>
            `).join("")}</div>
          </section>`
        : "";
      serviceDetails.innerHTML = `
        <ul class="breadcrumb mb-4" aria-label="Breadcrumb"><li><a href="index.html">Home</a></li><li><a href="services.html">Services</a></li><li aria-current="page">${service.title}</li></ul>
        <div class="detail-layout">
          <article class="detail-copy">
            <header class="detail-header">
              ${service.id === "fleet-assistance" ? "" : `<span class="category-pill"><i class="bi ${service.icon} me-1" aria-hidden="true"></i>${service.category}</span>`}
              <h1 class="detail-title detail-title--${service.id}">${service.title}</h1>
              <p class="page-hero__lead">${service.summary}</p>
            </header>
            ${detailImageMarkup}
            <p>${service.details}</p>
            <h2>When this service may help</h2>
            <p>${service.when}</p>
            <h2>What to expect</h2>
            <ul class="check-list">${service.included.map((item) => `<li><i class="bi bi-check-circle-fill" aria-hidden="true"></i><span>${item}</span></li>`).join("")}</ul>
            ${service.extraVisualSection || ""}
            ${recoveryGuidance}
            ${recoveryFaqs}
            <div class="article-callout"><p>Service availability and pricing depend on location, vehicle, and conditions. Confirm the details with the provider before dispatch.</p></div>
            <h2>Related services</h2>
            <div class="grid grid--2">${services.filter((item) => item.id !== service.id).slice(0, 2).map((item) => `<a class="page-panel" href="service-details.html?service=${item.id}"><strong>${item.title}</strong><p>${item.summary}</p></a>`).join("")}</div>
          </article>
          <aside class="page-panel sticky-card" aria-label="Request roadside assistance">
            <p class="eyebrow">Need help now?</p>
            <h2>Talk through your situation</h2>
            <p>Share your location and vehicle details so the next step can be assessed.</p>
            <a class="button button--primary" href="tel:+18005550199"><i class="bi bi-telephone-fill" aria-hidden="true"></i> Call (800) 555-0199</a>
            <a class="button button--secondary mt-2" href="contact.html">Send a message</a>
          </aside>
        </div>
      `;
    }
  }

  const coverageGrid = document.querySelector("[data-coverage-grid]");
  if (coverageGrid) {
    const areas = [
      { name: "Central District", region: "Metro", services: ["Towing", "Roadside", "Recovery"], note: "Downtown and surrounding neighborhoods" },
      { name: "Northside", region: "Metro", services: ["Towing", "Roadside"], note: "Residential and business corridors" },
      { name: "West County", region: "County", services: ["Towing", "Roadside", "Commercial"], note: "Major routes and nearby communities" },
      { name: "Lakeside", region: "County", services: ["Towing", "Recovery"], note: "Service subject to access and conditions" },
      { name: "Airport Corridor", region: "Metro", services: ["Towing", "Roadside", "Commercial"], note: "Airport access roads and nearby lots" },
      { name: "South County", region: "County", services: ["Towing", "Roadside"], note: "Selected towns and connecting highways" }
    ];
    const regionFilter = document.querySelector("#coverage-region");
    const serviceFilter = document.querySelector("#coverage-service");
    const status = document.querySelector("[data-coverage-status]");
    const renderCoverage = () => {
      const region = regionFilter.value;
      const service = serviceFilter.value;
      const results = areas.filter((area) => (!region || area.region === region) && (!service || area.services.includes(service)));
      status.textContent = `${results.length} sample ${results.length === 1 ? "area" : "areas"} match your selection.`;
      coverageGrid.innerHTML = results.length
        ? results.map((area) => `<div class="col-sm-6 col-lg-4"><article class="area-card"><i class="bi bi-geo-alt-fill" aria-hidden="true"></i><div><h2>${area.name}</h2><p>${area.note}</p><span class="service-card__meta">${area.services.join(" · ")}</span></div></article></div>`).join("")
        : `<p class="results-empty">No sample areas match these filters. Try another region or service.</p>`;
    };
    regionFilter.addEventListener("change", renderCoverage);
    serviceFilter.addEventListener("change", renderCoverage);
    renderCoverage();
  }

  const blogGrid = document.querySelector("[data-blog-grid]");
  if (blogGrid) {
    const search = document.querySelector("#blog-search");
    const category = document.querySelector("#blog-category");
    const pagination = document.querySelector("[data-blog-pagination]");
    const status = document.querySelector("[data-blog-status]");
    const pageSize = 6;
    let currentPage = 1;
    const renderBlog = () => {
      const query = search.value.trim().toLocaleLowerCase();
      const selectedCategory = category.value;
      const results = posts.filter((post) => {
        const matchesText = `${post.title} ${post.intro} ${post.category}`.toLocaleLowerCase().includes(query);
        return matchesText && (!selectedCategory || post.category === selectedCategory);
      });
      const pageCount = Math.max(1, Math.ceil(results.length / pageSize));
      currentPage = Math.min(currentPage, pageCount);
      const visiblePosts = results.slice((currentPage - 1) * pageSize, currentPage * pageSize);
      status.textContent = `${results.length} ${results.length === 1 ? "article" : "articles"} found.`;
      blogGrid.innerHTML = visiblePosts.length
        ? visiblePosts.map((post) => `
          <div class="col-md-6 col-lg-4">
            <article class="card article-card">
              <figure class="article-card__figure">
                <img class="article-card__image" src="${post.image}" alt="${post.alt}" loading="lazy" width="600" height="375">
              </figure>
              <div class="card__body">
                <span class="category-pill">${post.category}</span>
                <div class="article-meta mt-3"><span><i class="bi bi-calendar3" aria-hidden="true"></i>${post.date}</span><span>${post.read}</span></div>
                <h2>${post.title}</h2>
                <p>${post.intro}</p>
                <a class="article-card__link" href="blog-details.html?post=${post.id}">Read article <i class="bi bi-arrow-up-right icon-directional" aria-hidden="true"></i></a>
              </div>
            </article>
          </div>
        `).join("")
        : `<p class="results-empty">No articles match your search. Try another phrase or category.</p>`;
      pagination.innerHTML = pageCount > 1
        ? `<button type="button" data-page="${currentPage - 1}" ${currentPage === 1 ? "disabled" : ""} aria-label="Previous page"><i class="bi bi-chevron-left" aria-hidden="true"></i></button>${Array.from({ length: pageCount }, (_, index) => `<button type="button" data-page="${index + 1}" ${currentPage === index + 1 ? 'aria-current="page"' : ""} aria-label="Page ${index + 1}">${index + 1}</button>`).join("")}<button type="button" data-page="${currentPage + 1}" ${currentPage === pageCount ? "disabled" : ""} aria-label="Next page"><i class="bi bi-chevron-right" aria-hidden="true"></i></button>`
        : "";
    };
    search.addEventListener("input", () => { currentPage = 1; renderBlog(); });
    category.addEventListener("change", () => {
      const chips = document.querySelectorAll("[data-category-chip]");
      chips.forEach((c) => c.classList.toggle("is-active", (c.dataset.categoryChip || "") === category.value));
      currentPage = 1;
      renderBlog();
    });

    const categoryChips = document.querySelectorAll("[data-category-chip]");
    categoryChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const cat = chip.dataset.categoryChip || "";
        category.value = cat;
        categoryChips.forEach((c) => c.classList.toggle("is-active", c === chip));
        currentPage = 1;
        renderBlog();
      });
    });
    pagination.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-page]");
      if (!button || button.disabled) return;
      currentPage = Number(button.dataset.page);
      renderBlog();
      document.querySelector("#blog-results").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    renderBlog();
  }

  const articleDetail = document.querySelector("[data-article-detail]");
  if (articleDetail) {
    const selectedPost = new URLSearchParams(window.location.search).get("post");
    const post = posts.find((item) => item.id === selectedPost);
    if (!post) {
      articleDetail.innerHTML = `<div class="results-empty"><h1>Article not found</h1><p>Choose an article from the RoadRescue guide to read more.</p><a class="button button--primary" href="blog.html">Browse the guide</a></div>`;
    } else {
      document.title = `${post.title} | RoadRescue Guide`;
      articleDetail.innerHTML = `
        <div class="detail-layout">
          <article class="article-body">
            <ul class="breadcrumb" aria-label="Breadcrumb"><li><a href="index.html">Home</a></li><li><a href="blog.html">Roadside guide</a></li><li aria-current="page">${post.title}</li></ul>
            <span class="category-pill">${post.category}</span>
            <h1>${post.title}</h1>
            <div class="article-meta"><span><i class="bi bi-calendar3" aria-hidden="true"></i>${post.date}</span><span>${post.read}</span><span>RoadRescue Team</span></div>
            <figure class="article-detail-figure">
              <img class="detail-image article-detail-image" src="${post.image}" alt="${post.alt}" fetchpriority="high" width="1280" height="720">
              <figcaption class="article-detail-caption"><i class="bi bi-camera-fill text-accent" aria-hidden="true"></i> <span>${post.alt}</span></figcaption>
            </figure>
            <p class="page-hero__lead">${post.intro}</p>
            ${post.sections.map((paragraph, index) => `<h2>${["Start with safety", "Check what is practical", "Ask for the right support", "Plan the next step"][index] || "A safer next step"}</h2><p>${paragraph}</p>`).join("")}
            <div class="article-callout"><p>This guide is general information, not a substitute for emergency services, your vehicle manual, or advice from a qualified technician.</p></div>
            <a class="button button--secondary" href="blog.html"><i class="bi bi-arrow-left icon-directional" aria-hidden="true"></i> Back to all articles</a>
          </article>
          <aside class="page-panel sticky-card">
            <p class="eyebrow">Roadside support</p>
            <h2>Need help with your vehicle?</h2>
            <p>Explore assistance options or contact the team to discuss your situation.</p>
            <a class="button button--primary" href="services.html">Explore services</a>
            <a class="button button--secondary mt-2" href="tel:+18005550199">Call (800) 555-0199</a>
          </aside>
        </div>
      `;
    }
  }

  const contactForm = document.querySelector("[data-demo-contact-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = contactForm.querySelector("[data-form-status]");
      const submit = contactForm.querySelector('button[type="submit"]');
      if (!contactForm.reportValidity()) return;
      const submission = {
        name: contactForm.elements.name.value.trim(),
        email: contactForm.elements.email.value.trim(),
        phone: contactForm.elements.phone ? contactForm.elements.phone.value.trim() : "",
        topic: contactForm.elements.topic ? contactForm.elements.topic.value : "General",
        preference: contactForm.elements.preference ? contactForm.elements.preference.value : "Either",
        message: contactForm.elements.message.value.trim(),
        submittedAt: new Date().toISOString()
      };
      const storageKey = contactForm.dataset.storageKey || "roadrescue-contact-demo";
      try {
        const previous = JSON.parse(localStorage.getItem(storageKey) || "[]");
        if (!Array.isArray(previous)) throw new Error("Stored submissions are not in the expected format.");
        previous.push(submission);
        localStorage.setItem(storageKey, JSON.stringify(previous));
      } catch (error) {
        status.dataset.state = "error";
        status.textContent = `Your message could not be sent: ${error.message}`;
        return;
      }
      contactForm.reset();
      status.dataset.state = "success";
      status.textContent = "Thank you! Your message has been sent successfully. Our team will contact you shortly.";
      submit.blur();
    });
  }

})();
