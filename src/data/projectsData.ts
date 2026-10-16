import { ProjectItem } from '../types';
import mamelodiFireStationImg from '../assets/images/mamelodi-fire-station.jpg';
import sowetoRoadImg from '../assets/images/soweto-jabulani-molele-road.jpg';
import aloeHouseImg from '../assets/images/graaf-reinet-aloe-house.jpg';
import sowetoAsphaltImg from '../assets/images/soweto-road-asphalt.jpg';
import bridgeOverRailImg from '../assets/images/bridge-over-rail-soweto.png';
import alexandraBridgeImg from '../assets/images/alexandra-bridge-extension.jpg';
import graaffReinetDormitoryImg from '../assets/images/graaff-reinet-saps-dormitory.jpg';
import hammanskraalStormwaterImg from '../assets/images/hammanskraal-kudube-stormwater.jpg';
import nwuLectureHallsImg from '../assets/images/nwu-lecture-halls.jpg';
import steytlervilleSapsImg from '../assets/images/steytlerville-saps.jpg';
import babelegiIndustrialImg from '../assets/images/babelegi-industrial-park.jpg';
import udTrucksWarehouseImg from '../assets/images/ud-trucks-warehouse.jpg';

export const projectsData: ProjectItem[] = [
  {
    id: 'mamelodi-fire-station',
    name: 'Mamelodi Fire Station – Mamelodi Pretoria',
    subtitle: 'Emergency Services Headquarters & Dispatch Facility',
    location: 'Mamelodi, Pretoria, Gauteng',
    province: 'Gauteng',
    category: 'GOVERNMENT',
    categoryLabel: 'Government & Civic Building',
    description: 'Construction of a modern municipal emergency services complex serving the greater Mamelodi community. The facility incorporates high-clearance engine bays, rapid deployment zones, administrative office suites, personnel dormitories, drill towers, and independent emergency power back-up systems.',
    scopeHighlights: [
      'Reinforced structural steel and masonry emergency engine bays',
      'Specialist industrial rapid-fold doors and exhaust extraction ducting',
      'Administrative wings, training auditorium, and dispatch control room',
      'Integrated backup generator and dedicated municipal water reservoir',
      'Paved heavy vehicle forecourt designed for rapid response deployment'
    ],
    imageUrl: mamelodiFireStationImg,
    galleryUrls: [
      mamelodiFireStationImg
    ],
    isFeatured: true
  },
  {
    id: 'soweto-jabulani-molele-road',
    name: 'Soweto: Jabulani Molele Road Construction',
    subtitle: 'Arterial Road Construction & Subbase Infrastructure',
    location: 'Jabulani, Soweto, Gauteng',
    province: 'Gauteng',
    category: 'ROADS',
    categoryLabel: 'Roads & Civil Infrastructure',
    description: 'Full-depth civil road construction, bulk earthworks, and subbase aggregate layer stabilization for the Jabulani Molele transport corridor in Soweto. Scope includes subgrade stabilization, stormwater drainage culverts, precision grading, and heavy vehicular road preparation.',
    scopeHighlights: [
      'Bulk earthworks, subgrade ripping, compaction and laser leveling',
      'Crushed stone aggregate G1/G2 base layer installation',
      'Integrated stormwater drainage channels and kerbing',
      'Arterial township transport corridor civil construction'
    ],
    imageUrl: sowetoRoadImg,
    galleryUrls: [
      sowetoRoadImg
    ],
    isFeatured: true
  },
  {
    id: 'graaf-reinet-aloe-house',
    name: 'Graaf-Reinet: Aloe House Renovation',
    subtitle: 'South African Police Services (SAPS) Institutional Refurbishment',
    location: 'Graaff-Reinet, Eastern Cape',
    province: 'Eastern Cape',
    category: 'GOVERNMENT',
    categoryLabel: 'Institutional & Government Building',
    description: 'Comprehensive structural refurbishment, architectural renovation, and institutional modernization of the South African Police Services (SAPS) Aloe House complex in Graaff-Reinet. Project works included exterior masonry revitalization, perimeter security walls, high-durability interlock paved parking bays, interior administrative reconfigurations, and facility services upgrades.',
    scopeHighlights: [
      'Full institutional building refurbishment and structural upgrades',
      'Masonry perimeter boundary walls with integrated SAPS institutional signage',
      'Interlocking concrete block paving and designated parking bays',
      'Interior administrative reconfiguration and secure facility fittings'
    ],
    imageUrl: aloeHouseImg,
    galleryUrls: [
      aloeHouseImg
    ],
    isFeatured: true
  },
  {
    id: 'road-construction-asphalt-soweto',
    name: 'Road Construction & Asphalt – Soweto',
    subtitle: 'Heavy-Duty Asphalt Paving, Layer Works & Road Surfacing',
    location: 'Soweto, Gauteng',
    province: 'Gauteng',
    category: 'ROADS',
    categoryLabel: 'Roads & Asphalt Surfacing',
    description: 'High-specification asphalt paving and mechanical road surfacing operations across arterial sectors in Soweto. Utilizing modern Hamm vibratory compaction rollers, continuous asphalt pavers, and prime-coat bituminous binders to deliver durable, skid-resistant municipal road carriageways conforming to COLTO engineering standards.',
    scopeHighlights: [
      'Hot-mix asphalt (HMA) mechanical paving and wearing course laying',
      'Heavy tandem vibratory roller compaction to specified field density',
      'Tack-coat application and bituminous road surfacing',
      'Municipal road network rehabilitation and long-life carriageway delivery'
    ],
    imageUrl: sowetoAsphaltImg,
    galleryUrls: [
      sowetoAsphaltImg
    ],
    isFeatured: true
  },
  {
    id: 'bridge-crossing-over-rail-soweto',
    name: 'Bridge Crossing Over Rail Construction - Soweto',
    subtitle: 'Reinforced Concrete Bridge Superstructure & Railway Overpass',
    location: 'Soweto, Gauteng',
    province: 'Gauteng',
    category: 'BRIDGES',
    categoryLabel: 'Bridges & Structural Civil',
    description: 'Major civil and structural engineering contract delivering a heavy reinforced concrete road bridge crossing over an active electrified railway line in Soweto. Encompassing deep pier substructures, precast and in-situ concrete bridge deck slabs placed via mobile concrete boom pump, safety balustrades, approach road transitions, and specialized rail-corridor safety compliance.',
    scopeHighlights: [
      'In-situ concrete deck casting via high-reach boom pump trucks',
      'Reinforced structural bridge piers, abutments, and wing walls',
      'Heavy structural steel reinforcement installation over active rail tracks',
      'Approach embankment civil roadworks, parapets, and pedestrian safety barriers'
    ],
    imageUrl: bridgeOverRailImg,
    galleryUrls: [
      bridgeOverRailImg
    ],
    isFeatured: true
  },
  {
    id: 'alexandra-bridge-extension',
    name: 'Alexandra: Bridge Extension',
    subtitle: 'Bridge Deck Widening, Pedestrian Safety Railings & Embankment Works',
    location: 'Alexandra, Gauteng',
    province: 'Gauteng',
    category: 'BRIDGES',
    categoryLabel: 'Bridges & Civil Infrastructure',
    description: 'Structural extension and widening of an urban river-crossing bridge in Alexandra. Project works included reinforced concrete bridge abutment extensions, approach embankment earthworks, steel safety balustrade installation, universal pedestrian walkway integration, and stormwater drainage transitions.',
    scopeHighlights: [
      'Reinforced concrete bridge deck widening and structural abutment extension',
      'Heavy-duty galvanized steel pedestrian barrier and safety railing installation',
      'Embankment stabilization, earthworks compaction, and approach paving',
      'Pedestrian walkway expansion and commuter safety enhancements'
    ],
    imageUrl: alexandraBridgeImg,
    galleryUrls: [
      alexandraBridgeImg
    ],
    isFeatured: true
  },
  {
    id: 'graaff-reinet-saps-dormitory',
    name: 'Graaff-Reinet: SAPS Police Dormitory Renovations',
    subtitle: 'Multi-Storey Residential Complex, Security Perimeter & Facility Modernization',
    location: 'Graaff-Reinet, Eastern Cape',
    province: 'Eastern Cape',
    category: 'GOVERNMENT',
    categoryLabel: 'Government & Institutional Housing',
    description: 'Extensive turnkey renovation and structural modernization of the multi-building SAPS Police Dormitory residential facilities in Graaff-Reinet. Project works comprised complete building envelope repairs, roof tiling replacement, high-security anti-climb welded-mesh perimeter fencing, automated access control security gates, concrete aprons, and complete interior living quarter refurbishments.',
    scopeHighlights: [
      'Turnkey refurbishment of multi-storey police dormitory accommodation wings',
      'High-security anti-climb perimeter fence installation with automated gates',
      'Structural roof overhaul, weatherproofing, and facade revitalizations',
      'Civil concrete access aprons, internal stormwater channels, and security lighting'
    ],
    imageUrl: graaffReinetDormitoryImg,
    galleryUrls: [
      graaffReinetDormitoryImg
    ],
    isFeatured: true
  },
  {
    id: 'hammanskraal-kudube-stormwater',
    name: 'Hammanskraal: Kudube Construction of New Stormwater',
    subtitle: 'Bulk Stormwater Drainage Reticulation, Culverts & Civil Site Establishment',
    location: 'Kudube, Hammanskraal, Gauteng',
    province: 'Gauteng',
    category: 'INFRASTRUCTURE',
    categoryLabel: 'Civil Infrastructure & Stormwater',
    description: 'Large-scale municipal civil engineering contract delivering new bulk stormwater management infrastructure across the Kudube township precinct in Hammanskraal. Scope of delivery encompassed extensive trench excavation, precast concrete portal culvert installation, discharge energy dissipators, stormwater retention structures, subsoil drainage, and civil site operations.',
    scopeHighlights: [
      'Comprehensive site establishment, plant compound setup, and logistics security',
      'Bulk trenching, pipeline bedding, and precast concrete culvert laying',
      'Stormwater attenuation ponds, inlet structures, and outlet headwalls',
      'Erosion control, gabion basket revetments, and ground rehabilitation'
    ],
    imageUrl: hammanskraalStormwaterImg,
    galleryUrls: [
      hammanskraalStormwaterImg
    ],
    isFeatured: true
  },
  {
    id: 'nwu-4-new-lecture-halls',
    name: 'North West University: Construction of 4 x New Lecture Halls',
    subtitle: 'Academic Precinct Expansion, Tiered Lecture Auditoriums & Structural Facilities',
    location: 'Potchefstroom / Mahikeng, North West',
    province: 'North West',
    category: 'BUILDING',
    categoryLabel: 'Educational & Institutional Building',
    description: 'Major building and structural contract for North-West University (NWU), delivering four new state-of-the-art tiered academic lecture halls. Scope incorporated reinforced concrete column foundations, heavy structural steel roof trusses, high-specification facebrick facades, electrical reticulation substations, acoustics treatment, and modern university learning facilities.',
    scopeHighlights: [
      'Turnkey construction of 4 large-capacity tiered university lecture auditoriums',
      'Structural steel roof superstructure and architectural facebrick masonry',
      'Reinforced cast concrete structural columns and load-bearing foundations',
      'Integrated electrical sub-station kiosk, HVAC ducting, and campus walkway connections'
    ],
    imageUrl: nwuLectureHallsImg,
    galleryUrls: [
      nwuLectureHallsImg
    ],
    isFeatured: true
  },
  {
    id: 'new-steytlerville-saps',
    name: 'New Steytlerville SAPS – Steytlerville Eastern Cape',
    subtitle: 'Standardised Police Station Complex & Municipal Security Precinct',
    location: 'Steytlerville, Eastern Cape',
    province: 'Eastern Cape',
    category: 'GOVERNMENT',
    categoryLabel: 'Government Building & Civil Security',
    description: 'Construction of a modern South African Police Service (SAPS) station complex in Steytlerville. Engineered to national public works security standards, featuring reinforced facebrick perimeter walls, heavy-duty galvanized palisade security gates, interlock paved access walkways, solar lighting fixtures, and secure community service center facilities.',
    scopeHighlights: [
      'Turnkey construction of institutional police station buildings and holding facilities',
      'Heavy-duty galvanized palisade security perimeter and access control gates',
      'Architectural facebrick boundary walling with integrated security signage',
      'Interlocking concrete block pedestrian pathways and solar-powered exterior lighting'
    ],
    imageUrl: steytlervilleSapsImg,
    galleryUrls: [
      steytlervilleSapsImg
    ],
    isFeatured: true
  },
  {
    id: 'babelegi-industrial-park',
    name: 'Babelegi Industrial Park Revitalization – Hammanskraal',
    subtitle: 'Industrial Facility Modernization, Warehouse Canopies & Infrastructure Renewal',
    location: 'Babelegi, Hammanskraal, Gauteng',
    province: 'Gauteng',
    category: 'BUILDING',
    categoryLabel: 'Commercial & Industrial Building',
    description: 'Major industrial infrastructure revitalisation program within the historic Babelegi Industrial Park in Hammanskraal. Works included structural rehabilitation of factory warehouse wings, installation of heavy-duty covered steel loading canopies, IBR profile roof retrofitting, industrial stormwater drainage, concrete service apron refurbishments, and industrial unit modernization.',
    scopeHighlights: [
      'Structural steel loading canopy fabrication, corrosion protection, and installation',
      'Industrial building roof overhaul with insulated IBR profile sheeting and flashings',
      'Factory courtyard concrete apron repairs, drainage sumps, and logistics access',
      'Facebrick structural repairs and industrial tenancy revitalization works'
    ],
    imageUrl: babelegiIndustrialImg,
    galleryUrls: [
      babelegiIndustrialImg
    ],
    isFeatured: true
  },
  {
    id: 'ud-trucks-warehouse-rosslyn',
    name: 'Construction of New Warehouse for UD Trucks – Rosslynn Pretoria',
    subtitle: 'Industrial Logistics Warehouse, Steel Portal Frame & High-Load Concrete Apron',
    location: 'Rosslyn, Pretoria, Gauteng',
    province: 'Gauteng',
    category: 'BUILDING',
    categoryLabel: 'Commercial & Industrial Warehouse',
    description: 'Turnkey industrial engineering and construction of a high-bay logistics warehouse for multinational commercial vehicle manufacturer UD Trucks Southern Africa in Rosslyn, Pretoria. Scope included clear-span structural steel portal frames, high-durability reinforced concrete floor slabs, fire suppression and sprinkler reticulation, high-bay LED illumination, and heavy-vehicle staging yard infrastructure.',
    scopeHighlights: [
      'Clear-span structural steel portal warehouse frame and gantry installation',
      'Heavy-duty post-tensioned reinforced concrete industrial floor slab',
      'Integrated overhead fire protection sprinkler piping and high-bay lighting',
      'Heavy vehicle logistics yard, loading docks, and access corridors'
    ],
    imageUrl: udTrucksWarehouseImg,
    galleryUrls: [
      udTrucksWarehouseImg
    ],
    isFeatured: true
  },
  {
    id: 'ud-trucks-workshop-extension-stand-90',
    name: 'Workshop Extension and New Warehouse for UD Trucks',
    subtitle: 'Workshop extension and new warehouse facility on Stand 90 Rosslyn',
    location: 'Rosslyn, Pretoria, Gauteng',
    province: 'Gauteng',
    category: 'BUILDING',
    categoryLabel: 'Commercial & Industrial Building',
    completionPeriod: '2022',
    client: 'UD Trucks Southern Africa',
    consultant: 'Celankobe Engineering & Architectural Consultants',
    description: 'Turnkey workshop extension and new industrial logistics warehouse construction for UD Trucks Southern Africa on Stand 90 in Rosslyn, Pretoria.',
    scopeHighlights: [
      'Structural steel workshop extension and industrial warehouse construction',
      'High-load concrete flooring and heavy vehicle bay reticulation',
      'Commercial administrative and logistics support infrastructure'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'steytlerville-saps-houses-renovation',
    name: 'Construction of New Steytlerville SAPS and Renovations of Houses',
    subtitle: 'New South African Police Service station and residential house renovations',
    location: 'Steytlerville, Eastern Cape',
    province: 'Eastern Cape',
    category: 'GOVERNMENT',
    categoryLabel: 'Government & Institutional Building',
    completionPeriod: 'Completed',
    client: 'Department of Public Works',
    consultant: 'Afriplan Associate Architects',
    description: 'Construction of a new standardized SAPS police station along with comprehensive residential renovations of official housing in Steytlerville, Eastern Cape.',
    scopeHighlights: [
      'Turnkey construction of SAPS administrative facilities and community service center',
      'Refurbishment and structural renovations of official institutional housing',
      'Perimeter security walling and external civil services'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'jabulani-soweto-road-bridge-crossing',
    name: 'Construction of New Road & Bridge Crossing Railway Line at Jabulani',
    subtitle: 'Arterial roadworks and concrete railway overpass bridge construction',
    location: 'Jabulani, Soweto, Gauteng',
    province: 'Gauteng',
    category: 'BRIDGES',
    categoryLabel: 'Bridges & Civil Infrastructure',
    completionPeriod: 'Completed',
    client: 'Johannesburg Development Agency (JDA)',
    consultant: 'NN Architects',
    description: 'Construction of an arterial roadway and a major reinforced concrete road bridge crossing an active electrified railway corridor in Jabulani, Soweto.',
    scopeHighlights: [
      'Reinforced concrete railway overpass bridge deck and pier construction',
      'Full-depth arterial roadway layer works, surfacing and kerbing',
      'Railway corridor protection works and pedestrian safety balustrades'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'queenstown-magistrate-court-renovations',
    name: 'Renovations of Queenstown Magistrate Court',
    subtitle: 'Justice department judicial court facility refurbishment',
    location: 'Queenstown, Eastern Cape',
    province: 'Eastern Cape',
    category: 'GOVERNMENT',
    categoryLabel: 'Judicial & Civic Building',
    completionPeriod: 'Completed',
    client: 'Department of Public Works',
    consultant: 'NN Architects',
    description: 'Full structural and interior architectural renovations of the Queenstown Magistrate Court facilities for the Department of Public Works.',
    scopeHighlights: [
      'Courtroom chambers and administrative facility refurbishment',
      'Structural masonry repairs, exterior facade revitalization, and painting',
      'Modernization of public interface security and access infrastructure'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'mamelodi-fire-station-dispatch',
    name: 'Construction of New Mamelodi Fire Station',
    subtitle: 'Municipal emergency fire and rescue dispatch complex',
    location: 'Mamelodi, Pretoria, Gauteng',
    province: 'Gauteng',
    category: 'GOVERNMENT',
    categoryLabel: 'Emergency Services & Civic Facility',
    completionPeriod: 'Completed',
    client: 'City of Tshwane Metropolitan Municipality',
    consultant: 'Silver Horns Consulting',
    description: 'Comprehensive construction of a new emergency fire and rescue headquarters in Mamelodi, Pretoria, serving the municipal region.',
    scopeHighlights: [
      'Structural engine bays, rapid deployment zones, and control rooms',
      'Heavy-duty concrete paved staging apron and vehicle turning areas',
      'Integrated administrative quarters, personnel facilities, and emergency power'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'rooiwaal-regiment-sa-army-refurbishment',
    name: 'Rooiwaal Regiment – SA Army Refurbishment & New Fence',
    subtitle: 'Military base building refurbishment, mess hall & high-security fencing',
    location: 'Rooiwaal, Pretoria, Gauteng',
    province: 'Gauteng',
    category: 'GOVERNMENT',
    categoryLabel: 'Military & Defense Infrastructure',
    completionPeriod: '2019 – 2021',
    contractValue: 'R48M',
    client: 'Development Bank of Southern Africa (DBSA)',
    consultant: 'Silverhorns Engineers & Consultants / T2-Tech Engineers',
    description: 'Comprehensive refurbishment of South African Army base facilities at Rooiwaal Regiment, including accommodation wings, military mess facilities, and installation of extensive high-security perimeter fencing.',
    scopeHighlights: [
      'Turnkey refurbishment of military barracks, operational facilities, and central mess hall',
      'Supply and installation of heavy-duty high-security boundary fencing and automated access gates',
      'Electrical, plumbing, and structural building services overhaul'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'alexandra-joe-hlahla-bridge-upgrade',
    name: 'Alexandra: The Joe Hlahla Bridge Upgrade and Rehabilitation',
    subtitle: 'Urban river bridge structural upgrade and civil rehabilitation',
    location: 'Alexandra, Johannesburg, Gauteng',
    province: 'Gauteng',
    category: 'BRIDGES',
    categoryLabel: 'Bridges & Municipal Civil',
    completionPeriod: '2020 – 2021',
    contractValue: 'R18M',
    client: 'Johannesburg Road Agency (JRA)',
    consultant: 'Kit Solutions Consulting Engineers',
    description: 'Structural widening, rehabilitation, and pedestrian capacity upgrade for the Joe Hlahla Bridge crossing in Alexandra, Johannesburg.',
    scopeHighlights: [
      'Structural concrete bridge deck extension and substructure repairs',
      'Installation of heavy galvanized pedestrian safety barriers and approach railings',
      'Embankment stabilization, approach roadway surfacing, and stormwater discharge upgrades'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'diepkloof-crime-combating-unit',
    name: 'Diepkloof Crime & Combating Unit: Refurbishment & Civil Works',
    subtitle: 'Police tactical base refurbishment, MEP installations & security fencing',
    location: 'Diepkloof, Soweto, Gauteng',
    province: 'Gauteng',
    category: 'GOVERNMENT',
    categoryLabel: 'Police & Security Precinct',
    completionPeriod: '2018 – 2019',
    contractValue: 'R24M',
    client: 'Department of Public Works',
    consultant: 'Rajuli and Masi Consulting',
    description: 'Complete refurbishment, architectural renovation, electrical, mechanical, and civil engineering works including high-security fence installations for the SAPS Crime Combating Unit base in Diepkloof.',
    scopeHighlights: [
      'Structural building refurbishment, interior reconfigurations, and institutional finishes',
      'Comprehensive mechanical HVAC, electrical reticulation, and standby generator systems',
      'Heavy civil works, perimeter fence replacement, and concrete operational aprons'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'emm-head-offices-refurbishment',
    name: 'EMM Head Offices Refurbishment',
    subtitle: 'Civic municipal administrative headquarters complex modernization',
    location: 'Germiston, Ekurhuleni, Gauteng',
    province: 'Gauteng',
    category: 'BUILDING',
    categoryLabel: 'Commercial & Civic Headquarters',
    completionPeriod: 'August 2014 – August 2016',
    contractValue: 'R75M',
    client: 'Ekurhuleni Metropolitan Municipality',
    consultant: 'KWP Create Consultants',
    description: 'Large-scale commercial modernization and architectural refurbishment of the Ekurhuleni Metropolitan Municipality Head Office complex.',
    scopeHighlights: [
      'Multi-storey administrative building architectural fit-out and structural renewal',
      'HVAC mechanical upgrades, modern electrical distribution, and energy-efficient lighting',
      'Civic public engagement halls, executive office suites, and municipal compliance standards'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'mabopane-ext-2-infrastructure-services',
    name: 'Mabopane EXT 2(EW) Infrastructure Services',
    subtitle: 'Township bulk civil engineering services, water & reticulation',
    location: 'Mabopane, Gauteng',
    province: 'Gauteng',
    category: 'INFRASTRUCTURE',
    categoryLabel: 'Municipal Infrastructure & Reticulation',
    completionPeriod: 'February 2015 – November 2016',
    contractValue: 'R24M',
    client: 'City of Tshwane',
    consultant: 'Paul & Partners Consultant',
    description: 'Delivery of essential township bulk municipal engineering services, underground civil utilities, and infrastructure development in Mabopane Extension 2.',
    scopeHighlights: [
      'Bulk water supply distribution pipes and sewer reticulation networks',
      'Earthworks trenching, pipe bedding, valve chambers, and backfill compaction',
      'Road crossing civil installations and municipal connection infrastructure'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'bloemfontein-tempe-1-parachute-battalion',
    name: 'Bloemfontein Tempe: 1 Parachute Battalion Facilities',
    subtitle: 'Airborne military base structural facilities and infrastructure',
    location: 'Tempe Military Base, Bloemfontein, Free State',
    province: 'Free State',
    category: 'GOVERNMENT',
    categoryLabel: 'Military & Defense Infrastructure',
    completionPeriod: 'February 2015 – November 2016',
    client: 'Department of Public Works',
    consultant: 'SNA Civil and Structural Engineers',
    description: 'Structural construction and institutional facility upgrades for the elite 1 Parachute Battalion at Tempe Military Base in Bloemfontein.',
    scopeHighlights: [
      'Military training quarters and operational defense accommodation upgrades',
      'Structural reinforced concrete foundations, masonry works, and steel framework',
      'Specialist institutional amenities and high-durability finishes'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'non-motorized-transport-madiba-street',
    name: 'Non-Motorized Transport – Madiba Street',
    subtitle: 'Urban pedestrian mobility corridors, paved walkways & cycle ways',
    location: 'Madiba Street, Pretoria CBD, Gauteng',
    province: 'Gauteng',
    category: 'ROADS',
    categoryLabel: 'Urban Civil & Transport Infrastructure',
    completionPeriod: 'June 2013 – January 2015',
    contractValue: 'R10M',
    client: 'City of Tshwane',
    consultant: 'Themba Consultants',
    description: 'Urban regeneration civil engineering contract developing dedicated non-motorized transport infrastructure, wide paved pedestrian boulevards, and cycling corridors along Madiba Street in Pretoria.',
    scopeHighlights: [
      'High-durability urban paving, universal disability access ramps, and tactile paving',
      'Stormwater drainage adaptations, kerb realignments, and bollard installations',
      'Urban traffic calming measures and streetscape civil infrastructure'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'loftus-versveld-stadium-renovation',
    name: 'Loftus Versveld Stadium 2010 Renovation & Upgrade',
    subtitle: 'FIFA 2010 World Cup host stadium structural upgrade & modernization',
    location: 'Pretoria, Gauteng',
    province: 'Gauteng',
    category: 'BUILDING',
    categoryLabel: 'Sports Stadium & Public Infrastructure',
    completionPeriod: 'June 2008 – July 2009',
    contractValue: 'R54M',
    client: 'City of Tshwane',
    consultant: 'Ingplan Africa',
    description: 'Major sports and public event facility modernization and structural upgrade for Loftus Versveld Stadium ahead of the 2010 FIFA World Cup tournament.',
    scopeHighlights: [
      'Structural concourse expansions, spectator seating enhancements, and VIP facilities',
      'Turnkey electrical, lighting, communications, and life-safety systems modernization',
      'High-capacity turnstile entrance precincts and spectator circulation civil works'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'kudube-unit-6-stormwater-upgrade',
    name: 'Kudube Unit 6 Stormwater Infrastructure Upgrade',
    subtitle: 'Bulk stormwater culverts, drainage channels & flood management',
    location: 'Kudube, Hammanskraal, Gauteng',
    province: 'Gauteng',
    category: 'INFRASTRUCTURE',
    categoryLabel: 'Civil Stormwater & Hydrology',
    completionPeriod: 'June 2018 – June 2020',
    contractValue: 'R18M',
    client: 'City of Tshwane',
    consultant: 'Impande Consulting Engineering',
    description: 'Comprehensive civil hydrology and municipal stormwater infrastructure installation serving the residential and commercial areas of Kudube Unit 6 in Hammanskraal.',
    scopeHighlights: [
      'Deep excavation, portal precast concrete culvert laying, and stormwater pipelines',
      'In-situ cast inlet catchpits, manholes, and energy-dissipating headwalls',
      'Erosion prevention gabion mattresses and canal stabilization works'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'matoks-new-police-station',
    name: 'Matoks New Police Station',
    subtitle: 'Greenfields SAPS institutional police station complex',
    location: 'Matoks, Limpopo',
    province: 'Limpopo',
    category: 'GOVERNMENT',
    categoryLabel: 'Government & Police Infrastructure',
    completionPeriod: 'February 2007 – November 2009',
    contractValue: 'R23M',
    client: 'Department of Public Works',
    consultant: 'Mashilo Lambrechts Architects',
    description: 'Turnkey construction of a complete new SAPS police station precinct at Matoks, Limpopo, built to Department of Public Works institutional security standards.',
    scopeHighlights: [
      'Multi-wing administrative complex, holding cells, and secure armory facilities',
      'Heavy security perimeter fencing, automated access control, and guardhouse',
      'External civil services, parking areas, and standby infrastructure systems'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'vereeniging-prison-upgrades',
    name: 'Vereeniging Prison Correctional Facility Upgrades',
    subtitle: 'High-security correctional facility structural renovations',
    location: 'Vereeniging, Gauteng',
    province: 'Gauteng',
    category: 'GOVERNMENT',
    categoryLabel: 'Correctional & Institutional Facility',
    completionPeriod: 'October 2012',
    contractValue: 'R32M',
    client: 'Department of Public Works',
    consultant: 'Manong and Associate',
    description: 'Security and structural facility revitalization at Vereeniging Correctional Centre, upgrading security housing, perimeter barriers, and institutional infrastructure.',
    scopeHighlights: [
      'Heavy-duty reinforced masonry, cell block security refurbishments, and locking systems',
      'High-security physical barriers, guard walkways, and access control points',
      'Structural plumbing, sanitation upgrades, and resilient institutional services'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'joe-nhlanhla-bridge-rehabilitation',
    name: 'Construction, Repair and Rehabilitation of Joe Nhlanhla Bridge',
    subtitle: 'Civil bridge structural repair, abutment strengthening & road link',
    location: 'Johannesburg, Gauteng',
    province: 'Gauteng',
    category: 'BRIDGES',
    categoryLabel: 'Bridges & Structural Civil',
    completionPeriod: 'July 2019 – January 2021',
    client: 'Johannesburg Road Agency (JRA)',
    consultant: 'City Of Joburg',
    description: 'Comprehensive structural repairs, deck rehabilitation, and abutment reinforcement for the Joe Nhlanhla Bridge to restore vital municipal road connectivity.',
    scopeHighlights: [
      'Reinforced concrete deck crack injection, spall repairs, and cathodic protection',
      'Bridge joint expansion replacements and bearing pad adjustments',
      'Embankment scour protection, approach resurfacing, and guardrail replacement'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'randburg-revitalisation-traders-market',
    name: 'Randburg Revitalisation Trader’s Market',
    subtitle: 'Municipal informal trade market, covered stalls & civil precinct',
    location: 'Randburg, Johannesburg, Gauteng',
    province: 'Gauteng',
    category: 'BUILDING',
    categoryLabel: 'Commercial & Urban Public Space',
    completionPeriod: 'March 2006 – August 2007',
    contractValue: 'R8.8M',
    client: 'Johannesburg Development Agency (JDA)',
    consultant: 'PD Naidoo & Associates',
    description: 'Urban revitalization project creating dedicated commercial trade kiosks, sheltered merchant facilities, and pedestrianized public plazas in central Randburg.',
    scopeHighlights: [
      'Steel canopy construction and weather-resistant merchant stall stalls',
      'High-durability urban paving, stormwater runoff channels, and decorative lighting',
      'Ablution facilities, storage lockers, and perimeter security enclosures'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'esselen-street-upgrade-phase-2',
    name: 'Esselen Street Upgrade – Phase 2',
    subtitle: 'Commercial corridor revitalization, pedestrian walkways & roadworks',
    location: 'Sunnyside, Pretoria, Gauteng',
    province: 'Gauteng',
    category: 'ROADS',
    categoryLabel: 'Urban Roads & Streetscape Upgrade',
    completionPeriod: 'January 2005 – August 2006',
    contractValue: 'R6.5M',
    client: 'Johannesburg Development Agency (JDA)',
    consultant: 'Phahlana Hunadi QS',
    description: 'Major streetscape revitalization and roadway infrastructure upgrade along Esselen Street, enhancing pedestrian accessibility and traffic circulation.',
    scopeHighlights: [
      'Roadway resurfacing, asphalt overlay, and precision levelling',
      'Wide concrete block paved pedestrian walkways and granite kerbing',
      'Upgraded street lighting conduits, street furniture, and drainage grates'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'mankweng-taxi-rank-intermodal',
    name: 'Mankweng Taxi Rank Intermodal Facility',
    subtitle: 'Public commuter transport terminus, vehicle lanes & passenger shelters',
    location: 'Mankweng, Polokwane, Limpopo',
    province: 'Limpopo',
    category: 'INFRASTRUCTURE',
    categoryLabel: 'Public Transport Infrastructure',
    completionPeriod: 'August 2006 – August 2007',
    contractValue: 'R1.7M',
    client: 'Department of Public Works',
    consultant: 'Mamabolo Architects',
    description: 'Construction of a centralized taxi rank and passenger transfer facility in Mankweng, Limpopo, featuring heavy vehicle concrete paving and covered waiting areas.',
    scopeHighlights: [
      'Reinforced concrete pavement designed for heavy minibus taxi loadings',
      'Structural steel passenger waiting shelters with durable roof sheeting',
      'Administration office, commuter ablution blocks, and security perimeter'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'johannesburg-general-hospital-works',
    name: 'Johannesburg General Hospital Facility Works',
    subtitle: 'Charlotte Maxeke Academic Hospital specialized maintenance & services',
    location: 'Parktown, Johannesburg, Gauteng',
    province: 'Gauteng',
    category: 'BUILDING',
    categoryLabel: 'Healthcare & Institutional Building',
    completionPeriod: 'June 2005 – February 2006',
    contractValue: 'R0.75M',
    client: 'Gauteng Department of Public Works',
    consultant: 'ASCH Engineers',
    description: 'Specialized building maintenance, structural repairs, and facility refurbishment works at the Johannesburg General Hospital (Charlotte Maxeke).',
    scopeHighlights: [
      'Clinical facility interior refurbishment and hygienic surface finishes',
      'Structural moisture barrier repairs and roof maintenance',
      'Upgrades to hospital ward access routes and emergency transit corridors'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'hillbrow-health-precinct',
    name: 'Hillbrow Health Precinct',
    subtitle: 'Inner-city public healthcare campus upgrade & external civil works',
    location: 'Hillbrow, Johannesburg, Gauteng',
    province: 'Gauteng',
    category: 'BUILDING',
    categoryLabel: 'Healthcare & Civic Facility',
    completionPeriod: 'October 2005 – May 2006',
    contractValue: 'R1.74M',
    client: 'Johannesburg Development Agency (JDA)',
    consultant: 'Archway Project',
    description: 'Urban healthcare infrastructure revitalization project providing upgraded clinical facilities, secure access ways, and civil works within the Hillbrow Health Precinct.',
    scopeHighlights: [
      'Medical facility refurbishment and patient consultation room renovations',
      'Heavy-duty external concrete block paving and secure courtyard developments',
      'Perimeter security fences, automated gates, and lighting reticulation'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'phefeni-recreation-centre',
    name: 'Phefeni Recreation Centre',
    subtitle: 'Community sports hall, multi-purpose recreational center & amenities',
    location: 'Phefeni, Soweto, Gauteng',
    province: 'Gauteng',
    category: 'BUILDING',
    categoryLabel: 'Community & Sports Building',
    completionPeriod: 'January 2006 – July 2006',
    contractValue: 'R2.2M',
    client: 'City of Johannesburg',
    consultant: 'Kago Engineers',
    description: 'Turnkey construction of the Phefeni Recreation Centre in Soweto, providing multi-purpose community sports and social activity facilities.',
    scopeHighlights: [
      'Steel portal framed multi-purpose sports hall and community stage',
      'Exterior sports courts, security boundary fencing, and spectator seating',
      'Administrative offices, changing rooms, and modern public ablutions'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'makhulong-stadium-construction-upgrade',
    name: 'Construction of Makhulong Stadium Upgrades',
    subtitle: 'Municipal football stadium spectator stands, access & civil facilities',
    location: 'Tembisa, Ekurhuleni, Gauteng',
    province: 'Gauteng',
    category: 'BUILDING',
    categoryLabel: 'Sports Stadium & Municipal Infrastructure',
    completionPeriod: 'February 2005 – June 2005',
    contractValue: 'R1.33M',
    client: 'Ekurhuleni Metropolitan Municipality',
    consultant: 'ACG Gauteng',
    description: 'Construction and structural upgrading of Makhulong Stadium in Tembisa, enhancing spectator seating capacity, turnstiles, and stadium civil access.',
    scopeHighlights: [
      'Precast and in-situ concrete spectator terrace seating stands',
      'High-security stadium perimeter fencing and access control turnstile gates',
      'Match-day emergency egress paving and storm runoff drainage channels'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'johannesburg-mortuary-facility',
    name: 'Johannesburg Mortuary Facility',
    subtitle: 'Medico-legal mortuary building renovations & cold-storage facilities',
    location: 'Johannesburg, Gauteng',
    province: 'Gauteng',
    category: 'GOVERNMENT',
    categoryLabel: 'Institutional & Medico-Legal Facility',
    completionPeriod: 'January 2005 – June 2005',
    contractValue: 'R1M',
    client: 'Johannesburg Development Agency (JDA)',
    consultant: 'Jam Architects',
    description: 'Specialized institutional building renovations and services overhaul for the municipal Johannesburg Mortuary facility.',
    scopeHighlights: [
      'Specialized sanitary floor finishes, sterile wall coatings, and medical drainage',
      'Structural renovations of cold-storage plant rooms and examination suites',
      'Administrative reception and bereavement consultation area refurbishments'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'ekurhuleni-toilet-structures',
    name: 'Construction of Toilets Structures',
    subtitle: 'Municipal sanitation blocks & public health infrastructure',
    location: 'Ekurhuleni, Gauteng',
    province: 'Gauteng',
    category: 'INFRASTRUCTURE',
    categoryLabel: 'Water & Municipal Sanitation',
    completionPeriod: 'Completed',
    client: 'Ekurhuleni Metropolitan Municipality',
    consultant: 'KYD Engineers',
    description: 'Civil construction of durable municipal public sanitation ablution structures serving community settlements in the Ekurhuleni district.',
    scopeHighlights: [
      'Reinforced concrete raft slab foundations and vandal-resistant masonry',
      'Complete sanitary plumbing, sewer line connections, and water supply reticulation',
      'Ventilation blocks, security steel doors, and roof coverings'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'ekurhuleni-embankment-seating',
    name: 'Construction of Embankment Seating',
    subtitle: 'Terraced concrete outdoor stadium seating & earth embankment works',
    location: 'Ekurhuleni, Gauteng',
    province: 'Gauteng',
    category: 'CIVIL',
    categoryLabel: 'Civil Structures & Public Works',
    completionPeriod: 'November 2004 – June 2005',
    contractValue: 'R2.2M',
    client: 'Ekurhuleni Metropolitan Municipality',
    consultant: 'BCP Engineers',
    description: 'Civil earthworks shaping and concrete terrace step seating installation on natural sports ground embankments across municipal facilities.',
    scopeHighlights: [
      'Precision slope grading, retaining structures, and soil compaction',
      'In-situ cast concrete step seating with integrated expansion joints',
      'Pedestrian access stairways, handrails, and stormwater interceptor drains'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'newtown-railway-sidings-revitalization',
    name: 'Newtown Railway Sidings Revitalization',
    subtitle: 'Historic urban rail siding precinct conversion & heavy civil works',
    location: 'Newtown, Johannesburg, Gauteng',
    province: 'Gauteng',
    category: 'CIVIL',
    categoryLabel: 'Rail & Urban Regeneration Civil',
    completionPeriod: 'March 2004',
    contractValue: 'R6.0M',
    client: 'Johannesburg Development Agency (JDA)',
    consultant: 'D Naidoo and Associates',
    description: 'Urban renewal civil engineering contract transforming the historic railway sidings precinct into modern public and cultural urban space in Newtown.',
    scopeHighlights: [
      'Civil earthworks, historic railway track preservation, and industrial paving',
      'Heavy stormwater retention basins and underground reticulation',
      'Structural masonry retaining walls, public lighting, and security perimeter'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'winnie-mandela-taxi-rank',
    name: 'Winnie Mandela Taxi Rank',
    subtitle: 'Intermodal public transport rank, commuter shelters & road access',
    location: 'Tembisa, Ekurhuleni, Gauteng',
    province: 'Gauteng',
    category: 'INFRASTRUCTURE',
    categoryLabel: 'Public Transport Infrastructure',
    completionPeriod: 'March 2004',
    contractValue: 'R2.2M',
    client: 'Ekurhuleni Metropolitan Municipality',
    consultant: 'Corli Havenga Engineers',
    description: 'Construction of the Winnie Mandela Taxi Rank commuter terminus in Tembisa, featuring heavy-duty concrete pavement, vehicle bays, and canopies.',
    scopeHighlights: [
      'Industrial concrete pavement slabs designed for high-density minibus loading',
      'Welded structural steel commuter queue canopies and shelter roofs',
      'Public ablution blocks, taxi association administration kiosk, and solar lighting'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'diepsloot-primary-school',
    name: 'Diepsloot Primary School Construction',
    subtitle: 'Educational school facility campus, classrooms & sports grounds',
    location: 'Diepsloot, Gauteng',
    province: 'Gauteng',
    category: 'BUILDING',
    categoryLabel: 'Educational & School Infrastructure',
    completionPeriod: 'September 2004',
    contractValue: 'R6.3M',
    client: 'Gauteng Department of Education',
    consultant: 'Mashabane Rose Architects',
    description: 'Full turnkey primary school construction delivering permanent brick classrooms, administration center, and school sporting grounds in Diepsloot.',
    scopeHighlights: [
      'Multi-block facebrick classroom buildings with timber trusses and IBR roofing',
      'Central administrative offices, staff rooms, and computer laboratory facilities',
      'Secure school perimeter fence, access gates, and grassed sports grounds'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'esselen-street-upgrade-phase-1',
    name: 'Esselen Street Upgrade – Phase 1',
    subtitle: 'Urban precinct revitalization, vehicular roadway & walkway paving',
    location: 'Pretoria, Gauteng',
    province: 'Gauteng',
    category: 'ROADS',
    categoryLabel: 'Urban Roads & Street Infrastructure',
    completionPeriod: 'January 2004 – June 2005',
    contractValue: 'R2.2M',
    client: 'Johannesburg Development Agency (JDA)',
    consultant: 'WSM Leshika',
    description: 'Phase 1 civil works for the comprehensive upgrade and traffic calming of Esselen Street, enhancing vehicular circulation and pedestrian walkways.',
    scopeHighlights: [
      'Road carriageway asphalt resurfacing and road marking applications',
      'Interlocking paving installation along pedestrian paths and curbside trees',
      'Underground drainage stormwater pipe installation and manhole realignments'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'midrand-west-clinic',
    name: 'Midrand West Clinic',
    subtitle: 'Municipal community primary healthcare clinic & dispensary',
    location: 'Midrand, Gauteng',
    province: 'Gauteng',
    category: 'BUILDING',
    categoryLabel: 'Healthcare & Municipal Building',
    completionPeriod: 'July 2004',
    contractValue: 'R1.4M',
    client: 'City of Joburg',
    consultant: 'James Reid Architects',
    description: 'Construction and fit-out of the Midrand West municipal healthcare clinic, providing local residents with accessible primary healthcare and maternity care.',
    scopeHighlights: [
      'Clinical consulting rooms, dispensary pharmacy, and sterile treatment areas',
      'Backup water storage reservoir and emergency diesel generator connections',
      'Paved patient parking bays, ambulance emergency drop-off, and security fencing'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'dube-hostel-refurbishment',
    name: 'Dube Hostel Refurbishment',
    subtitle: 'High-density municipal residential housing renewal & services',
    location: 'Dube, Soweto, Gauteng',
    province: 'Gauteng',
    category: 'BUILDING',
    categoryLabel: 'Residential & Community Housing',
    completionPeriod: 'September 2004',
    contractValue: 'R0.39M',
    client: 'City of Joburg',
    consultant: 'Motse LMI Architects',
    description: 'Structural refurbishment and building repairs at the Dube municipal residential hostel in Soweto, improving sanitation, living quarters, and security.',
    scopeHighlights: [
      'Roof repairs, weatherproofing, and structural masonry crack restorations',
      'Internal ablution facility overhaul and potable water reticulation plumbing',
      'Perimeter access gate repairs and exterior lighting upgrades'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'mayibuye-clinic',
    name: 'Mayibuye Clinic',
    subtitle: 'Primary healthcare clinic facility & emergency treatment suites',
    location: 'Mayibuye, Gauteng',
    province: 'Gauteng',
    category: 'BUILDING',
    categoryLabel: 'Healthcare & Civic Facility',
    completionPeriod: 'October 2000',
    contractValue: 'R2M',
    client: 'Edenvale Metropolitan Local Council',
    consultant: 'KAGO Consultants Architects',
    description: 'Construction of the Mayibuye Primary Healthcare Clinic serving the growing community of Mayibuye with modern clinical and treatment amenities.',
    scopeHighlights: [
      'Brick masonry healthcare clinic, immunization bays, and pharmaceutical store',
      'Dedicated ambulance drop-off zone, pedestrian ramps, and paved parking',
      'Reliable backup utilities, perimeter security fence, and guardhouse'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'kloof-mine-refrigeration-plant',
    name: 'Kloof Mine Refrigeration Plant Infrastructure',
    subtitle: 'Deep underground mine ventilation & industrial cooling plant works',
    location: 'Kloof Gold Mine, Gauteng / North West',
    province: 'North West',
    category: 'INFRASTRUCTURE',
    categoryLabel: 'Industrial & Mining Infrastructure',
    completionPeriod: 'July 2003',
    contractValue: 'R10M',
    client: 'North West Department of Public Works',
    consultant: 'Johan van Wyk Engineers',
    description: 'Heavy industrial civil and mechanical infrastructure installation for large-scale refrigeration and underground ventilation cooling systems at Kloof Mine.',
    scopeHighlights: [
      'Heavy reinforced concrete foundation slabs for industrial refrigeration chillers',
      'Structural steel framework supports and piping gantry installations',
      'Chilled water circulation civil trenching and industrial protective coatings'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'ivory-park-precinct-iii-development',
    name: 'Ivory Park Precinct III Development',
    subtitle: 'Township urban precinct center, trading stalls & civil paving',
    location: 'Ivory Park, Midrand, Gauteng',
    province: 'Gauteng',
    category: 'INFRASTRUCTURE',
    categoryLabel: 'Urban Precinct & Municipal Infrastructure',
    completionPeriod: 'October 2003',
    contractValue: 'R4.5M',
    client: 'City of Joburg',
    consultant: 'KAGO Consultants Architects',
    description: 'Comprehensive multi-use municipal precinct development in Ivory Park Precinct III, incorporating commercial vendor stalls, community roads, and public squares.',
    scopeHighlights: [
      'Bulk earthworks, municipal road paving, and stormwater channels',
      'Steel sheltered community trading stalls and public meeting amphitheater',
      'Municipal water connections, public street lighting, and perimeter walling'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'jeppe-station-precinct-renewal',
    name: 'Jeppe Station Precinct Urban Renewal',
    subtitle: 'Railway commuter transport node revitalisation & public concourses',
    location: 'Jeppestown, Johannesburg, Gauteng',
    province: 'Gauteng',
    category: 'INFRASTRUCTURE',
    categoryLabel: 'Transport Precinct & Urban Civil',
    completionPeriod: 'November 2003',
    contractValue: 'R5M',
    client: 'Johannesburg Development Agency (JDA)',
    consultant: 'GAPP Architects',
    description: 'Major urban civil engineering and station precinct regeneration surrounding Jeppe Railway Station, improving commuter safety, pedestrian traffic, and informal trade.',
    scopeHighlights: [
      'High-volume urban interlock paving and commuter concourse expansion',
      'Structural steel commuter shelters, taxi holding areas, and drop-off loops',
      'Stormwater drainage restructuring, public lighting, and security cameras masts'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  },
  {
    id: 'braamfontein-regeneration-streetscape',
    name: 'Braamfontein Regeneration Streetscape',
    subtitle: 'Inner-city urban revitalization, sidewalk civil works & granite kerbs',
    location: 'Braamfontein, Johannesburg, Gauteng',
    province: 'Gauteng',
    category: 'ROADS',
    categoryLabel: 'Urban Regeneration & Civil Infrastructure',
    completionPeriod: 'June 2003',
    contractValue: 'R0.228M',
    client: 'Johannesburg Development Agency (JDA)',
    consultant: 'Hamlyn Gebhart',
    description: 'Streetscape and sidewalk civil renewal within the historic Braamfontein business district, upgrading pedestrian pathways and civic aesthetics.',
    scopeHighlights: [
      'High-specification architectural pavement laying and granite kerbing',
      'Subsurface electrical ducting for street fixtures and tree planters',
      'Stormwater catchpit realignments and urban street furniture installation'
    ],
    imageUrl: '',
    galleryUrls: [],
    isFeatured: false
  }
];

