/* ============================================================================
   PROJECT DATA
   ----------------------------------------------------------------------------
   Single source of truth for the portfolio grid AND the modals.

   TO ADD A NEW PROJECT:
     1. Drop its images into /images/  (e.g. images/newproject_1.jpg …)
     2. Copy one object below, fill in the fields, add it to the PROJECTS array.
     No other file needs to change — the grid and modal render from this data.

   FIELD REFERENCE
     id          unique slug (used internally)
     title       project name (modal heading + card name)
     location    line under the title
     category    'experiential' | 'content'   (drives the filter buttons)
     hero        card image path (shown in the grid)
     heroSize    card image height: 'tall' | 'medium' | 'short' | 'portrait'
     gallery     modal gallery style: omitted (default) = scroll-snap carousel
                 (filmstrip, swipe/arrows/dots) | 'grid' = 2-column masonry
     card        the compact copy shown on the grid card:
                   { tags:[…up to 3…], desc:'…', impact:'…' | null,
                     name:'…' (optional, defaults to title),
                     location:'…' (optional, defaults to location) }
     tags        fuller tag list shown in the modal header
     description full modal description paragraph
     impact      modal impact line (shown with a ↗) | null
     roles       list of role chips in the modal sidebar
     videoId     YouTube video id (the part after v= or youtu.be/) | null
     videoType   'regular' (16:9) | 'shorts' (9:16 vertical) | null
     poster      thumbnail shown before the video loads. Clicking it swaps in
                 the real inline YouTube player. Local image in /images/.
                 (Inline play requires "Allow embedding" + Public/Unlisted
                 visibility on the video in YouTube Studio.)
     images      modal gallery, in display order. Laid out as a 2-column
                 masonry, so portrait and landscape shots keep their natural
                 shape (verticals stay vertical). Each: { src, w, h } — the
                 w/h are the pixel size, used to reserve space (no layout jump).
   ========================================================================== */

const PROJECTS = [
  {
    id: 'youtube',
    client: 'YouTube',
    work: 'Olympic Creator Studio',
    title: 'YouTube Olympic Creator Studio',
    location: 'Winter Olympics 2026 · Milano Cortina, Italy',
    category: 'experiential',
    hero: 'images/youtube_athletes.jpg',
    heroSize: 'tall',
    card: {
      tags: ['Experiential', 'Live', 'International'],
      desc: "Live broadcast studio inside NBC's IBC. Talent: Kylie & Jason Kelce, Bowen Yang, Mikaela Shiffrin & more.",
      impact: '65M+ social reach target'
    },
    tags: ['Experiential', 'Live Production', 'International', 'Broadcast'],
    description: "Oversaw creative and production teams across the full project lifecycle — creative design, fabrication, build phase, and international shipments to Italy. Managed day-to-day on-site production including camera and audio operators for live creator podcasts and interviews inside NBC's broadcast center. Talent: Kylie & Jason Kelce, Bowen Yang, Tom Daley, Mikaela Shiffrin, and more.",
    impact: 'NBC × YouTube Creator Collective · 65M+ social reach target',
    roles: ['Client Lead', 'Creative Direction', 'Full Build Lifecycle', 'On-Site Production', 'Budget Ownership', 'International Logistics'],
    videoId: 'mLCX1JhOIYs',
    videoType: 'shorts',
    poster: 'images/youtube_poster.jpg',
    images: [
      { src: 'images/youtube_athletes.jpg', w: 1600, h: 1200 },
      { src: 'images/youtube_medalists.jpg', w: 1200, h: 1600 },
      { src: 'images/youtube_studio.jpg', w: 1600, h: 1200 },
      { src: 'images/youtube_set.jpg', w: 1600, h: 1200 },
      { src: 'images/youtube_sofa.jpg', w: 1600, h: 1200 },
      { src: 'images/youtube_selfie.jpg', w: 1200, h: 1600 },
      { src: 'images/youtube_mascot.jpg', w: 1200, h: 1600 },
      { src: 'images/youtube_wide.jpg', w: 1600, h: 1066 },
      { src: 'images/youtube_set2.jpg', w: 1200, h: 1600 },
      { src: 'images/youtube_sofa2.jpg', w: 1600, h: 1200 },
      { src: 'images/youtube_wide2.jpg', w: 1600, h: 1066 },
      { src: 'images/youtube_studio2.jpg', w: 1600, h: 1200 },
      { src: 'images/youtube_mascot2.jpg', w: 1600, h: 1066 }
    ]
  },

  {
    id: 'meta',
    client: 'Meta',
    work: 'Conversations 2026',
    title: 'Meta Conversations 2026',
    location: 'Westminster Hall · London, UK',
    category: 'experiential',
    hero: 'images/meta_stage.jpg',
    heroSize: 'medium',
    card: {
      tags: ['Experiential', 'Speaker Ops', 'Conference'],
      desc: 'Speaker Operations Lead. 100+ speakers across nine program tracks.',
      impact: null
    },
    tags: ['Experiential', 'Speaker Operations', 'Conference'],
    description: "Meta's premier global business messaging conference — 100+ industry leaders, brand executives, and innovators across two days at Westminster Hall, exploring the future of AI-powered customer engagement across WhatsApp and Meta's platforms. Served as Speaker Operations Lead and primary point of contact across Meta, Cogs & Marvel, and the production team.",
    impact: '100+ speakers · Nine program tracks',
    roles: ['Speaker Operations Lead', 'Client Lead', 'End-to-End Logistics', 'VIP & Executive Hospitality', 'Stakeholder Management'],
    videoId: 'awEN4CmDm3Q',
    videoType: 'regular',
    poster: 'images/meta_poster.jpg',
    images: [
      { src: 'images/meta_stage.jpg', w: 1600, h: 1067 },
      { src: 'images/meta_hall.jpg', w: 1600, h: 1066 },
      { src: 'images/meta_westminster.jpg', w: 1066, h: 1600 }
    ]
  },

  {
    id: 'empire',
    client: 'EMPIRE',
    work: 'Home Turf',
    title: "EMPIRE's Home Turf",
    location: 'Super Bowl LX · San Francisco · Forbes-featured',
    category: 'experiential',
    hero: 'images/empire_exhibition.jpg',
    heroSize: 'tall',
    card: {
      tags: ['Experiential', 'Forbes', 'Fashion'],
      desc: "Museum-style exhibition celebrating 15 years of artist-first culture. Levi's + Nike Jordan.",
      impact: '15,000+ visitors',
      location: 'Super Bowl LX · San Francisco'
    },
    tags: ['Experiential', 'Forbes', 'Fashion', 'Music'],
    description: "Directed production and delivery of EMPIRE 15: Full Circle — a multi-day, museum-style exhibition celebrating 15 years of artist-first culture. Led creative, narrative, and full build lifecycle from concept through fabrication, installation, and breakdown. Partners: Levi's + Nike Jordan.",
    impact: '15,000+ visitors · $500K+ in retail sales',
    roles: ['Client Lead', 'Creative Direction', 'Narrative Development', 'Fabrication & Install', 'Brand Partnership', 'Budget Ownership'],
    videoId: 'tryQ6j93NKU',
    videoType: 'shorts',
    poster: 'images/empire_poster.jpg',
    images: [
      { src: 'images/empire_exhibition.jpg', w: 1600, h: 1067 },
      { src: 'images/empire_screen.jpg', w: 1600, h: 1066 },
      { src: 'images/empire_quote.jpg', w: 1600, h: 1066 },
      { src: 'images/empire_4.jpg', w: 1066, h: 1600 },
      { src: 'images/empire_5.jpg', w: 1066, h: 1600 },
      { src: 'images/empire_6.jpg', w: 1066, h: 1600 },
      { src: 'images/empire_7.jpg', w: 1600, h: 1066 },
      { src: 'images/empire_8.jpg', w: 1066, h: 1600 },
      { src: 'images/empire_9.jpg', w: 1066, h: 1600 },
      { src: 'images/empire_10.jpg', w: 1066, h: 1600 },
      { src: 'images/empire_11.jpg', w: 1600, h: 1066 },
      { src: 'images/empire_12.jpg', w: 1066, h: 1600 },
      { src: 'images/empire_13.jpg', w: 1600, h: 1067 },
      { src: 'images/empire_14.jpg', w: 1067, h: 1600 }
    ]
  },

  {
    id: 'fendace',
    client: 'Fendi × Versace',
    work: 'Fendace Pop-Up',
    title: "Fendi × Versace 'Fendace' Retail Pop-Up",
    location: 'Soho, NYC · 2022',
    category: 'experiential',
    hero: 'images/fendace_interior.jpg',
    heroSize: 'medium',
    card: {
      tags: ['Fashion', 'Retail', 'Luxury'],
      desc: 'Landmark luxury collab retail pop-up. On-site build through install and store opening.',
      impact: null,
      name: "Fendi × Versace 'Fendace'",
      location: 'Retail Pop-Up · Soho, NYC · 2022'
    },
    tags: ['Fashion', 'Retail', 'Luxury'],
    description: "Produced the on-site retail pop-up celebrating the landmark Fendi × Versace collab — one of luxury fashion's most talked-about moments of 2022. Oversaw creative and production with contractors, fabrication, AV vendor, and retail staff through install and store opening.",
    impact: null,
    roles: ['Client Lead', 'On-Site Build Oversight', 'Creative & Production Supervision', 'Fabrication', 'Vendor Management'],
    videoId: null,
    videoType: null,
    images: [
      { src: 'images/fendace_interior.jpg', w: 1600, h: 1200 },
      { src: 'images/fendace_store.jpg', w: 1600, h: 1200 },
      { src: 'images/fendace_entrance.jpg', w: 1600, h: 1200 },
      { src: 'images/fendace_billboard.jpg', w: 1200, h: 1600 },
      { src: 'images/fendace_corridor.jpg', w: 1200, h: 1600 }
    ]
  },

  {
    id: 'nascar',
    client: 'NASCAR',
    work: "Bubba's Block Party",
    title: "NASCAR: Bubba's Block Party",
    location: 'Richmond, VA',
    category: 'experiential',
    hero: 'images/nascar_car.jpg',
    heroSize: 'medium',
    card: {
      tags: ['Experiential', 'Sports', 'Community'],
      desc: "NASCAR's inaugural community activation with Bubba Wallace. Nine Black-owned vendors, Wale headlining.",
      impact: 'Sold out in 3 days · 2,000+ attendees'
    },
    tags: ['Experiential', 'Sports', 'Community'],
    description: "Produced NASCAR's inaugural community activation designed to authentically engage Black audiences. Led production and end-to-end delivery in partnership with Bubba Wallace. Activated nine Black-owned food vendors, live performances headlined by Wale, the Virginia State Marching Band, and family programming.",
    impact: 'Sold out within 3 days · 2,000+ attendees',
    roles: ['Client Lead', 'Strategy & Concept', 'Community Programming', 'Talent Partnerships', 'Vendor Sourcing', 'Budget Ownership'],
    videoId: 'iFtLw04u9iU',
    videoType: 'regular',
    poster: 'images/nascar_poster.jpg',
    images: [
      { src: 'images/nascar_car.jpg', w: 1600, h: 1066 },
      { src: 'images/nascar_stage.jpg', w: 1600, h: 1064 },
      { src: 'images/nascar_band.jpg', w: 1600, h: 1066 },
      { src: 'images/nascar_crowd.jpg', w: 1600, h: 1066 },
      { src: 'images/nascar_tshirts.jpg', w: 1600, h: 1066 },
      { src: 'images/nascar_family.jpg', w: 1600, h: 1064 },
      { src: 'images/nascar_workshop.jpg', w: 1600, h: 1066 },
      { src: 'images/nascar_sim.jpg', w: 1600, h: 1066 }
    ]
  },

  {
    id: 'xbox',
    client: 'Xbox',
    work: 'Brooklyn Nets',
    title: 'Xbox × Brooklyn Nets',
    location: 'Bed-Stuy, Brooklyn',
    category: 'experiential',
    hero: 'images/xbox_jacket.jpg',
    heroSize: 'tall',
    card: {
      tags: ['Experiential', 'Sports', 'Gaming'],
      desc: '10th anniversary brand experience — gaming lounges, projection mapping, live DJ.',
      impact: null
    },
    tags: ['Experiential', 'Sports', 'Gaming', 'Community'],
    description: "Led production of a community-driven brand experience celebrating the Brooklyn Nets' 10th anniversary through gaming, transforming Seed Brooklyn into a multi-sensory hub. Gaming lounges, projection mapping, live DJ programming, curated gifting throughout the night, and custom merch with local designer Mz. Icar.",
    impact: null,
    roles: ['Client Lead', 'Spatial Design', 'Cross-Functional Teams', 'Partner Management', 'On-Site Execution', 'Budget Ownership'],
    videoId: 'LeVUOXZW9a8',
    videoType: 'regular',
    poster: 'images/xbox_poster.jpg',
    images: [
      { src: 'images/xbox_brooklyn.jpg', w: 1600, h: 1066 },
      { src: 'images/xbox_partymode.jpg', w: 1066, h: 1600 },
      { src: 'images/xbox_controller.jpg', w: 1600, h: 1066 },
      { src: 'images/xbox_jacket.jpg', w: 1600, h: 1066 },
      { src: 'images/xbox_merch.jpg', w: 1600, h: 1066 },
      { src: 'images/xbox_couch.jpg', w: 1600, h: 1066 }
    ]
  },

  {
    id: 'aperol',
    client: 'Aperol',
    work: 'Spritz × Bowen Yang',
    title: 'Aperol Spritz × Bowen Yang',
    location: 'US Open 2026',
    category: 'content',
    hero: 'images/aperol_bottle.jpg',
    heroSize: 'portrait',
    card: {
      tags: ['Content', 'Campaign', 'Lifestyle'],
      desc: 'Creator-driven campaign. Full production from creative direction through post.',
      impact: null
    },
    tags: ['Content', 'Campaign', 'Lifestyle'],
    description: 'Creator-driven campaign featuring Bowen Yang. Led creative direction, crew build, on-site execution, and client partnership through final delivery.',
    impact: null,
    roles: ['Client Lead', 'Creative Direction', 'Crew Hiring', 'Budget Ownership', 'On-Set Execution', 'Post-Production'],
    videoId: 'Wcw5yMx_N3U',
    videoType: 'shorts',
    poster: 'images/aperol_poster.jpg',
    images: [
      { src: 'images/aperol_bottle.jpg', w: 1067, h: 1600 },
      { src: 'images/aperol_bench.jpg', w: 1067, h: 1600 }
    ]
  },

  {
    id: 'brooks',
    client: 'Brooks',
    work: 'Running × Patrick Schwarzenegger',
    title: 'Brooks Running × Patrick Schwarzenegger',
    location: 'Social Campaign',
    category: 'content',
    hero: 'images/brooks_poster.jpg',
    heroSize: 'medium',
    card: {
      tags: ['Content', 'Sports', 'Campaign'],
      desc: 'Platform-native hero, cutdowns, and short-form assets — concept through post.',
      impact: null
    },
    tags: ['Content', 'Sports', 'Campaign'],
    description: 'Social-first campaign delivering platform-native content across digital channels. Hero, cutdowns, and short-form assets — full production from concept through post.',
    impact: null,
    roles: ['Client Lead', 'Creative Direction', 'Crew Hiring', 'Budget Ownership', 'Production Systems', 'Post-Production'],
    videoId: 'hg42sVUuUOo',
    videoType: 'shorts',
    poster: 'images/brooks_poster.jpg',
    images: []
  },

  {
    id: 'google',
    client: 'Google',
    work: 'at AdWeek',
    title: 'Google at AdWeek',
    location: 'Highline Stages · NYC',
    category: 'experiential',
    hero: 'images/google_find.jpg',
    heroSize: 'tall',
    card: {
      tags: ['Experiential', 'Conference'],
      desc: 'Four-day event series for 1,500+ guests across 60+ countries and 800+ organizations.',
      impact: null
    },
    tags: ['Experiential', 'Conference'],
    description: 'Lead Producer of four-day event series for 1,500+ guests across 60+ countries and 800+ organizations. Eight show events: general sessions, cocktail receptions, workshops, demo experiences, and musical performances.',
    impact: '1,500+ guests · 60+ countries · 800+ organizations',
    roles: ['Client Lead', 'Multi-Format Programming', 'Budget Management', 'Vendor Oversight'],
    videoId: null,
    videoType: null,
    images: [
      { src: 'images/google_find.jpg', w: 1600, h: 1067 },
      { src: 'images/google_perform.jpg', w: 1600, h: 1066 },
      { src: 'images/google_audience.jpg', w: 1600, h: 1067 },
      { src: 'images/google_loft.jpg', w: 1600, h: 1067 },
      { src: 'images/google_ytstage.jpg', w: 1600, h: 1067 },
      { src: 'images/google_shelf.jpg', w: 1600, h: 1066 },
      { src: 'images/google_dinner.jpg', w: 1600, h: 1374 },
      { src: 'images/google_engage.jpg', w: 1600, h: 545 },
      { src: 'images/google_icecream.jpg', w: 1600, h: 1066 },
      { src: 'images/google_stagewide.jpg', w: 1600, h: 1084 }
    ]
  },

  {
    id: 'underarmour',
    client: 'Under Armour',
    work: 'All-Star Weekend',
    title: 'Under Armour: All-Star Weekend',
    location: 'NBA All-Star Weekend · Charlotte & Fayetteville, NC',
    category: 'experiential',
    hero: 'images/ua_7.jpg',
    heroSize: 'tall',
    card: {
      tags: ['Experiential', 'Sports', 'Community'],
      desc: 'Five-day citywide give-back with Steph Curry & Dennis Smith Jr. — court relaunches, the Curry 6 launch, and a mobile bus tour.',
      impact: 'ESPN SportsCenter #1 Play of the Day'
    },
    tags: ['Experiential', 'Sports', 'Community', 'Brand Partnership'],
    description: "A five-day, citywide series with Under Armour and NBA All-Stars Steph Curry and Dennis Smith Jr. — a give-back to the North Carolina communities where they got their start. We relaunched two community centers with state-of-the-art courts, revealed Jr. NBA team jerseys, launched the Curry 6, and ran a mobile command-center double-decker bus with custom LED content touring the city. The Curry Family Community Center opened with a 3-point shootout between Steph, Seth, Dell, and Sonya Curry — and Sonya's winning shot became ESPN SportsCenter's #1 Play of the Day.",
    impact: 'ESPN SportsCenter #1 Play of the Day',
    roles: ['Senior Lead Producer', 'Double-Decker Bus Production', 'Custom Interior Buildout', 'City-Tour Activation', 'Budget Ownership', 'Vendor Management', 'Staffing & BAs', 'Inventory / Load-in & Out'],
    videoId: null,
    videoType: null,
    images: [
      { src: 'images/ua_1.jpg', w: 1600, h: 1066 },
      { src: 'images/ua_2.jpg', w: 1600, h: 1066 },
      { src: 'images/ua_3.jpg', w: 1600, h: 1066 },
      { src: 'images/ua_4.jpg', w: 1600, h: 1067 },
      { src: 'images/ua_5.jpg', w: 1600, h: 1067 },
      { src: 'images/ua_6.jpg', w: 1600, h: 1067 },
      { src: 'images/ua_7.jpg', w: 1600, h: 1067 },
      { src: 'images/ua_8.jpg', w: 1066, h: 1600 },
      { src: 'images/ua_9.jpg', w: 1600, h: 1066 },
      { src: 'images/ua_10.jpg', w: 1600, h: 1066 },
      { src: 'images/ua_11.jpg', w: 1066, h: 1600 }
    ]
  },

  {
    id: 'rockefeller',
    client: 'Rockefeller Center',
    work: 'Holiday Truck',
    title: 'Rockefeller Center Holiday Truck',
    location: 'Rockefeller Plaza · New York, NY',
    category: 'experiential',
    hero: 'images/rock_1.jpg',
    heroSize: 'medium',
    card: {
      tags: ['Experiential', 'Retail', 'Holiday'],
      desc: "Custom holiday truck on Rockefeller Plaza — 'Share the Light' ornaments and a month of daily programming.",
      impact: null
    },
    tags: ['Experiential', 'Retail', 'Holiday', 'Activation'],
    description: "“Share the Light” — a custom-wrapped holiday truck on Rockefeller Plaza for all of December, selling ornaments made with a bulb from a past Rockefeller Center Christmas tree. I ran it end to end: custom truck design and branding, a month-long programming calendar (photo booths, family illustrations, carolers, boutique takeovers, a silent-disco night), and daily operations in lock-step with Rockefeller security.",
    impact: null,
    roles: ['Lead Producer', 'Strategy & Sourcing', 'Creative & Branding', 'Month-Long Programming', 'Budget Ownership', 'Vendor Management', 'Rockefeller Security Coordination', 'Staffing & BAs'],
    videoId: null,
    videoType: null,
    images: [
      { src: 'images/rock_1.jpg', w: 1600, h: 1066 },
      { src: 'images/rock_2.jpg', w: 1600, h: 1066 },
      { src: 'images/rock_3.jpg', w: 1066, h: 1600 },
      { src: 'images/rock_4.jpg', w: 1600, h: 1066 },
      { src: 'images/rock_5.jpg', w: 1600, h: 1066 },
      { src: 'images/rock_6.jpg', w: 1600, h: 1066 },
      { src: 'images/rock_7.jpg', w: 1600, h: 1066 },
      { src: 'images/rock_8.jpg', w: 1600, h: 1066 }
    ]
  },

  {
    id: 'bundesliga',
    client: 'Bundesliga',
    work: 'Common Ground',
    title: 'Bundesliga: Common Ground',
    location: 'New York, NY',
    category: 'experiential',
    hero: 'images/bund_1.jpg',
    heroSize: 'tall',
    card: {
      tags: ['Experiential', 'Sports', 'Community'],
      desc: "NYC launch of Bundesliga's global community-pitch platform — tournaments, FIFA esports, and an ESPN+ lounge.",
      impact: '200+ attendees'
    },
    tags: ['Experiential', 'Sports', 'Community'],
    description: "Bundesliga — Germany's national soccer league — launched “Common Ground,” a platform building soccer pitches worldwide for communities to play on. Palette Group activated the NYC launch: boys' and girls' tournaments, a FIFA esports zone, an ESPN+ lounge, and a DJ powering the crowd all day. I led the activation end to end — production and on-site delivery, vendor sourcing and management, full budget ownership, and stakeholder management across the league, ESPN+, and partners to keep every moving piece aligned.",
    impact: '200+ attendees',
    roles: ['Client Lead', 'End-to-End Production', 'Vendor Management', 'Budget Ownership', 'Stakeholder Management', 'On-Site Execution'],
    videoId: 'rpL_u5oJj-A',
    videoType: 'shorts',
    poster: 'images/bund_poster.jpg',
    images: [
      { src: 'images/bund_1.jpg', w: 1600, h: 1066 },
      { src: 'images/bund_2.jpg', w: 1600, h: 1066 },
      { src: 'images/bund_3.jpg', w: 1600, h: 1066 },
      { src: 'images/bund_4.jpg', w: 1600, h: 1066 },
      { src: 'images/bund_5.jpg', w: 1600, h: 1066 },
      { src: 'images/bund_6.jpg', w: 1600, h: 1066 },
      { src: 'images/bund_7.jpg', w: 1600, h: 1066 },
      { src: 'images/bund_8.jpg', w: 1600, h: 1066 },
      { src: 'images/bund_9.jpg', w: 1600, h: 1066 },
      { src: 'images/bund_10.jpg', w: 1600, h: 1066 },
      { src: 'images/bund_11.jpg', w: 1600, h: 1066 },
      { src: 'images/bund_12.jpg', w: 1600, h: 1066 },
      { src: 'images/bund_13.jpg', w: 1600, h: 1066 },
      { src: 'images/bund_14.jpg', w: 1600, h: 1066 }
    ]
  },

  {
    id: 'metgala',
    client: 'YouTube',
    work: 'Met Gala Watch Party',
    title: 'The Met Gala Watch Party 2025',
    location: 'Atlanta, GA',
    category: 'experiential',
    hero: 'images/met_1.jpg',
    heroSize: 'portrait',
    card: {
      tags: ['Experiential', 'Event Production', 'Talent'],
      desc: "YouTube's Black-Dandyism Met Gala watch party in ATL — end-to-end event production.",
      impact: null
    },
    tags: ['Experiential', 'Event Production', 'Talent', 'Creator Culture'],
    description: "YouTube's Met Gala Watch Party in Atlanta — a celebration of Black Dandyism and creator culture timed to fashion's biggest night. Palette Group owned end-to-end event production: venue, creative build, creator and talent hospitality, run of show, and on-site delivery. Creators showed out in their finest Dandy looks, and the room matched the energy — Superfine, golden-hour, and unmistakably YouTube.",
    impact: null,
    roles: ['Client Lead', 'End-to-End Event Production', 'Creative Build', 'Creator & Talent Hospitality', 'Run of Show', 'On-Site Execution', 'Budget Ownership'],
    videoId: 'UeuvWiT9wCY',
    videoType: 'regular',
    poster: 'images/met_poster.jpg',
    images: [
      { src: 'images/met_1.jpg', w: 1065, h: 1600 },
      { src: 'images/met_2.jpg', w: 1600, h: 1065 },
      { src: 'images/met_3.jpg', w: 1065, h: 1600 },
      { src: 'images/met_4.jpg', w: 1065, h: 1600 },
      { src: 'images/met_5.jpg', w: 1600, h: 1065 },
      { src: 'images/met_6.jpg', w: 1065, h: 1600 },
      { src: 'images/met_7.jpg', w: 1600, h: 1065 },
      { src: 'images/met_8.jpg', w: 1600, h: 1065 },
      { src: 'images/met_9.jpg', w: 1600, h: 1065 },
      { src: 'images/met_10.jpg', w: 1065, h: 1600 },
      { src: 'images/met_11.jpg', w: 1065, h: 1600 },
      { src: 'images/met_12.jpg', w: 1065, h: 1600 },
      { src: 'images/met_13.jpg', w: 1065, h: 1600 },
      { src: 'images/met_14.jpg', w: 1065, h: 1600 },
      { src: 'images/met_15.jpg', w: 1065, h: 1600 },
      { src: 'images/met_16.jpg', w: 1600, h: 1065 },
      { src: 'images/met_17.jpg', w: 1065, h: 1600 },
      { src: 'images/met_18.jpg', w: 1600, h: 1065 }
    ]
  },

  {
    id: 'puma',
    client: 'PUMA',
    work: 'Suede Classics',
    title: 'Puma Suede Classics',
    location: 'Global Campaign',
    category: 'content',
    hero: 'images/puma_1.jpg',
    heroSize: 'medium',
    card: {
      tags: ['Content', 'Campaign', 'Lifestyle'],
      desc: "PUMA's global Suede Classic campaign — street-shot stills and 8 social films across NA and global markets.",
      impact: null
    },
    tags: ['Content', 'Campaign', 'Lifestyle', 'Film'],
    description: "PUMA's annual global campaign for the Suede Classic. Palette Group took the kicks to the streets to capture the lifestyle of the audience — shooting stills for social, digital, retail, and print, and cutting eight social films from the production footage. The creative deployed across North America and global markets.",
    impact: '8 social films · North America + global markets',
    roles: ['Client Lead', 'Creative Direction', 'Production', 'Stills & Motion', 'Social Film Edits', 'Multi-Market Delivery'],
    video: [
      { id: 'KZyCfAEMRfE', type: 'regular', poster: 'images/puma_poster_a.jpg' },
      { id: 'HDM5I-zxrw8', type: 'regular', poster: 'images/puma_poster_b.jpg' }
    ],
    images: [
      { src: 'images/puma_1.jpg', w: 1600, h: 1200 },
      { src: 'images/puma_2.jpg', w: 1600, h: 1200 },
      { src: 'images/puma_3.jpg', w: 1200, h: 1600 },
      { src: 'images/puma_4.jpg', w: 1600, h: 1200 },
      { src: 'images/puma_5.jpg', w: 1600, h: 1200 },
      { src: 'images/puma_6.jpg', w: 1600, h: 1200 },
      { src: 'images/puma_7.jpg', w: 1200, h: 1600 },
      { src: 'images/puma_8.jpg', w: 1200, h: 1600 },
      { src: 'images/puma_9.jpg', w: 1200, h: 1600 }
    ]
  },

  {
    id: 'clarks',
    client: 'Clarks',
    work: 'Back to School AW23',
    title: 'Clarks: Back to School AW23',
    location: 'Journeys × Clarks',
    category: 'content',
    hero: 'images/clarks_1.jpg',
    heroSize: 'portrait',
    card: {
      tags: ['Content', 'Campaign', 'Fashion'],
      desc: 'Journeys × Clarks Wallabee Evo — early-2000s energy, reimagined. Concept through post.',
      impact: null
    },
    tags: ['Content', 'Campaign', 'Fashion', 'Film'],
    description: "Journeys × Clarks, Wallabee Evo: a back-to-school campaign channeling early-2000s nostalgia through a fresh, fearless lens. We owned it concept-through-delivery — creative direction, production, and post — casting real high-school energy and staging it across courts, bleachers, and city underpasses in bold, saturated color. The result: confident, playful, platform-first content built to stop the scroll.",
    impact: null,
    roles: ['Client Lead', 'Creative Direction', 'Production', 'Casting & Styling', 'On-Set Direction', 'Post-Production'],
    videoId: 'n9hTO94KxXw',
    videoType: 'shorts',
    poster: 'images/clarks_poster.jpg',
    images: [
      { src: 'images/clarks_1.jpg', w: 1066, h: 1600 },
      { src: 'images/clarks_2.jpg', w: 1066, h: 1600 },
      { src: 'images/clarks_3.jpg', w: 1600, h: 1066 },
      { src: 'images/clarks_4.jpg', w: 1066, h: 1600 },
      { src: 'images/clarks_5.jpg', w: 1066, h: 1600 },
      { src: 'images/clarks_6.jpg', w: 1066, h: 1600 },
      { src: 'images/clarks_7.jpg', w: 1066, h: 1600 },
      { src: 'images/clarks_8.jpg', w: 1066, h: 1600 }
    ]
  }
];
