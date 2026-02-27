export const MOCK_STOCK = [
  {
    id: 1,
    category: 'Residential',
    title: 'Modern Coastal Villa',
    description: 'High-end residential property with ocean views and private access. Features include a heated infinity pool, smart home integration, and a private cinema. The property offers 5 bedrooms, all en-suite, and a expansive entertainment area.',
    priceRange: '$5M - $7M',
    location: 'Coastal Region, Western Cape (Exact location hidden)',
    features: ['5 Bedrooms', '6 Bathrooms', 'Infinity Pool', 'Home Cinema', '3 Garages'],
    image: 'https://images.unsplash.com/photo-1564703048291-bcf7f001d83d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3Njg2Njk0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1600596542815-22b845069566?w=800&auto=format&fit=crop&q=60'
    ]
  },
  {
    id: 2,
    category: 'Agricultural',
    title: 'Established Winelands Estate',
    description: 'Operating vineyard with export contracts and luxury manor house. Includes 40 hectares of planted vines, a state-of-the-art cellar, and a tasting room. The manor house dates back to the 19th century but has been modernized.',
    priceRange: '$12M - $15M',
    location: 'Winelands, Western Cape (Exact location hidden)',
    features: ['40ha Vines', 'Wine Cellar', 'Tasting Room', 'Historic Manor', 'Manager House'],
    image: 'https://images.unsplash.com/photo-1758239651753-d7cc512fa275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW5leWFyZCUyMGVzdGF0ZSUyMGx1eHVyeXxlbnwxfHx8fDE3Njg2Njk0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gallery: [
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop&q=60'
    ]
  },
  {
    id: 3,
    category: 'Commercial',
    title: 'Urban Boutique Hotel',
    description: 'Central business district location, 50 keys, recently renovated. The hotel features a rooftop bar, a fine dining restaurant, and conference facilities. Occupancy rates have averaged 85% over the last 2 years.',
    priceRange: '$20M - $25M',
    location: 'CBD, Cape Town (Exact location hidden)',
    features: ['50 Keys', 'Rooftop Bar', 'Conference Center', 'Gym', 'Restaurant'],
    image: 'https://images.unsplash.com/photo-1723465308831-29da05e011f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY4NjY5NDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-137d62341e1d?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop&q=60'
    ]
  }
];

export const MOCK_REQUESTS = [
  {
    id: 1,
    user: 'Investor042',
    topic: 'Vacant Land',
    title: 'Coastal Development Land Needed',
    content: 'Looking for 50+ hectares near coastal region for luxury development. Budget open. Ideally looking for land with existing zoning rights or potential for rezoning. Access to main roads is crucial.',
    budget: '$2M - $5M',
    location: 'Coastal Region, Western Cape',
    urgency: 'High',
    date: '2 hours ago',
    responses: 3,
    comments: [
      { user: 'Agent007', text: 'I have a listing that matches this description near Mossel Bay.', date: '1 hour ago' },
      { user: 'Investor042', text: 'Please send teaser details.', date: '45 mins ago' },
      { user: 'Admin', text: 'Reminder: Share details via the secure portal only.', date: '30 mins ago' }
    ]
  },
  {
    id: 2,
    user: 'Developer009',
    topic: 'Hotels',
    title: 'Distressed Hotel Assets',
    content: 'Seeking boutique hotel opportunities in Cape Town CBD. Distressed assets considered. We are looking for properties that can be turned around with renovation and rebranding.',
    budget: '$10M - $15M',
    location: 'Cape Town CBD',
    urgency: 'Medium',
    date: '5 hours ago',
    responses: 1,
    comments: [
      { user: 'Seller88', text: 'We are privately selling a 4-star hotel in the city bowl.', date: '3 hours ago' }
    ]
  },
  {
    id: 3,
    user: 'Investor101',
    topic: 'Farms',
    title: 'Macadamia Farm',
    content: 'Macadamia farm with existing infrastructure required. Mpumalanga region preferred. Must have water rights and established orchards (5+ years).',
    budget: '$5M - $8M',
    location: 'Mpumalanga',
    urgency: 'Low',
    date: '1 day ago',
    responses: 8,
    comments: []
  }
];

// Stock with additional status and interest tracking
export const STOCK_WITH_STATS = MOCK_STOCK.map((item, index) => ({
  ...item,
  status: index === 0 ? 'Active' : index === 1 ? 'Under Offer' : 'Active',
  interests: index === 0 ? 15 : index === 1 ? 8 : 0,
}));
