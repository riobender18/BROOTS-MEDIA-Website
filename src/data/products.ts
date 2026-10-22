import { SmartphoneProduct } from '../types';

export const SMARTPHONE_PRODUCTS: SmartphoneProduct[] = [
  {
    id: 'apple-iphone-17',
    name: 'Apple iPhone 17',
    brand: 'Apple',
    modelLine: 'iPhone 17 Series',
    category: 'Flagship',
    priceDisplay: 'Contact for Price',
    availability: 'Confirm availability',
    shortDescription: 'Upcoming next-phase Apple flagship with advanced LTPO ProMotion display and next-gen silicon.',
    longDescription: 'The Apple iPhone 17 represents the next frontier of iPhone engineering, featuring an advanced ProMotion display architecture, high-efficiency silicon, and upgraded optical sensor engineering for demanding mobile users.',
    specs: {
      display: '6.3-inch ProMotion 120Hz Super Retina XDR OLED',
      processor: 'Next-Generation A-Series Silicon Architecture',
      rearCamera: '48MP High-Resolution Multi-Sensor Array',
      frontCamera: '24MP Upgraded TrueDepth sensor system',
      battery: 'Optimized high-density cell with fast USB-C',
      connectivity: 'Advanced 5G, Wi-Fi 7, Bluetooth 5.4',
      variants: '128GB / 256GB / 512GB',
      os: 'iOS'
    },
    features: [
      'Smooth 120Hz ProMotion adaptive refresh rate',
      'Next-generation high-efficiency thermal architecture',
      'Advanced computational photography engine',
      'Enhanced scratch-resistant anti-reflective display'
    ],
    imagePlaceholder: 'apple-iphone-17',
    imageSrc: '/assets/aistudio/iphone-17-finish-select-202509-white_3183d455.jpg',
    colors: [
      { name: 'Pure Titanium White', hex: '#EDEDED', chassisHex: 0xedeef0, imageSrc: '/assets/aistudio/iphone-17-finish-select-202509-white_3183d455.jpg' },
      { name: 'Desert Bronze Titanium', hex: '#C66D38', chassisHex: 0xc66d38, imageSrc: '/assets/aistudio/image-1_f1665e0d.jpeg' },
      { name: 'Natural Titanium', hex: '#8F8B82', chassisHex: 0x8f8b82 },
      { name: 'Space Black', hex: '#181A1B', chassisHex: 0x181a1b }
    ],
    badge: 'Upcoming Release'
  },
  {
    id: 'apple-iphone-16',
    name: 'Apple iPhone 16',
    brand: 'Apple',
    modelLine: 'iPhone 16 Series',
    category: 'Flagship',
    priceDisplay: 'Contact for Price',
    availability: 'Confirm availability',
    shortDescription: 'Next-generation A-series architecture with Camera Control and enhanced Fusion camera performance.',
    longDescription: 'The Apple iPhone 16 features next-generation Apple silicon, dedicated Camera Control tactile interaction, vertical dual-camera layout with spatial capture capabilities, and optimized battery endurance.',
    specs: {
      display: '6.1-inch Super Retina XDR OLED with Ceramic Shield',
      processor: 'A18 Bionic Chip with 16-core Neural Engine',
      rearCamera: '48MP Fusion Camera + 12MP Ultra Wide with Macro',
      frontCamera: '12MP TrueDepth camera with Photonic Engine',
      battery: 'Fast wireless MagSafe charging & USB-C',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, Ultra Wideband',
      variants: '128GB / 256GB / 512GB',
      os: 'iOS'
    },
    features: [
      'Dedicated Camera Control visual touch interface',
      'A18 processing power with enhanced power efficiency',
      'Action Button for instant custom shortcuts',
      'Spatial video and photo recording'
    ],
    imagePlaceholder: 'apple-iphone-16',
    imageSrc: '/assets/aistudio/image-7_f5a3f18d.jpeg',
    colors: [
      { name: 'Ultramarine Blue', hex: '#2B589A', chassisHex: 0x2b589a, imageSrc: '/assets/aistudio/image-7_f5a3f18d.jpeg' },
      { name: 'Vibrant Teal', hex: '#3A7874', chassisHex: 0x3a7874 },
      { name: 'Soft Pink', hex: '#E3A8B8', chassisHex: 0xe3a8b8, imageSrc: '/assets/aistudio/image-6_6d5e87c1.jpeg' },
      { name: 'Pure White', hex: '#F2F4F3', chassisHex: 0xf2f4f3 },
      { name: 'Black Titanium', hex: '#1F2224', chassisHex: 0x1f2224 }
    ],
    badge: 'Latest Generation'
  },
  {
    id: 'apple-iphone-15',
    name: 'Apple iPhone 15',
    brand: 'Apple',
    modelLine: 'iPhone 15 Series',
    category: 'Flagship',
    priceDisplay: 'Contact for Price',
    availability: 'Confirm availability',
    shortDescription: 'Super Retina XDR display with Dynamic Island and advanced dual-camera system with 48MP main sensor.',
    longDescription: 'The Apple iPhone 15 brings Dynamic Island, an innovative 48MP camera for ultra-high-resolution photos, 2x Telephoto zoom, durable color-infused glass, and an aluminum design with USB-C convenience.',
    specs: {
      display: '6.1-inch Super Retina XDR OLED',
      processor: 'A16 Bionic Chip (6-core CPU, 5-core GPU)',
      rearCamera: '48MP Main + 12MP Ultra Wide with Sensor-shift OIS',
      frontCamera: '12MP TrueDepth front camera with autofocus',
      battery: 'All-day battery life with USB-C charging',
      connectivity: '5G (sub-6 GHz), Wi-Fi 6, Bluetooth 5.3',
      variants: '128GB / 256GB / 512GB',
      os: 'iOS'
    },
    features: [
      'Dynamic Island interactive alerts',
      '48MP Main camera with 2x Telephoto optical quality',
      'Ceramic Shield front & color-infused back glass',
      'Universal USB-C charging connector'
    ],
    imagePlaceholder: 'apple-iphone-15',
    imageSrc: '/assets/aistudio/image-6_6d5e87c1.jpeg',
    colors: [
      { name: 'Soft Pink', hex: '#F4B8C1', chassisHex: 0xf4b8c1, imageSrc: '/assets/aistudio/image-6_6d5e87c1.jpeg' },
      { name: 'Space Black', hex: '#2E3033', chassisHex: 0x2e3033 },
      { name: 'Soft Blue', hex: '#B5C7D3', chassisHex: 0xb5c7d3 },
      { name: 'Pale Green', hex: '#CDE2D0', chassisHex: 0xcde2d0 },
      { name: 'Soft Yellow', hex: '#F3E8B5', chassisHex: 0xf3e8b5 }
    ],
    badge: 'Popular Flagship'
  },
  {
    id: 'vivo-t5-lite-5g',
    name: 'vivo T5 Lite 5G',
    brand: 'vivo',
    modelLine: 'vivo Series T',
    category: 'Value 5G',
    priceDisplay: 'Contact for Price',
    availability: 'Confirm availability',
    shortDescription: 'Balanced 5G performance, slender ergonomic design, and long-lasting battery with fast charging.',
    longDescription: 'Engineered for value-driven mobile users who demand reliable 5G connectivity, clear high-refresh display output, and dependable multi-tasking capabilities tailored for Indian cellular networks.',
    specs: {
      display: '6.56-inch HD+ 90Hz High-Brightness LCD',
      processor: 'Octa-Core 5G Mobile Platform',
      rearCamera: '50MP AI Dual Rear Camera System',
      frontCamera: '8MP HD Selfie Camera with Portrait Mode',
      battery: '5000mAh Battery with 15W Fast FlashCharge',
      connectivity: 'Dual 5G Bands, Wi-Fi Dual Band, Bluetooth 5.2',
      variants: '4GB+128GB / 6GB+128GB',
      os: 'Funtouch OS (Android)'
    },
    features: [
      'Ultra-slim featherweight body profile',
      'Smooth 90Hz refresh rate for fluid scrolling',
      '5000mAh large battery capacity for all-day usage',
      'Split-screen multitasking and RAM expansion'
    ],
    imagePlaceholder: 'vivo-t5-lite-5g',
    imageSrc: '/assets/aistudio/image-4_18a83ac4.jpeg',
    colors: [
      { name: 'Seafoam Mint Green', hex: '#85D3B2', chassisHex: 0x85d3b2, imageSrc: '/assets/aistudio/image-4_18a83ac4.jpeg' },
      { name: 'Royal Metallic Purple', hex: '#5E4085', chassisHex: 0x5e4085, imageSrc: '/assets/aistudio/image-2_6c2f250e.jpeg' },
      { name: 'Starry Black', hex: '#1B221E', chassisHex: 0x1b221e }
    ],
    badge: '5G Value'
  },
  {
    id: 'poco-m8-power-5g',
    name: 'POCO M8 Power 5G',
    brand: 'POCO',
    modelLine: 'POCO M-Series',
    category: 'Performance',
    priceDisplay: 'Contact for Price',
    availability: 'Confirm availability',
    shortDescription: 'Endurance champion with high-capacity battery, dual-cell architecture, and fast charging.',
    longDescription: 'POCO M8 Power 5G brings massive battery longevity paired with responsive octa-core 5G performance, high touch-sampling rate, and rugged everyday build quality for heavy mobile usage.',
    specs: {
      display: '6.79-inch FHD+ 120Hz AdaptiveSync IPS Display',
      processor: 'Snapdragon 4 Gen Series 5G Processor',
      rearCamera: '50MP Primary Sensor with Night Mode + Depth sensor',
      frontCamera: '16MP Front-facing Camera with AI Beauty',
      battery: '6000mAh High-Density Battery with 33W Fast Charging',
      connectivity: 'Dual 5G SIM, Wi-Fi 5, Bluetooth 5.3, IR Blaster',
      variants: '6GB+128GB / 8GB+256GB',
      os: 'Xiaomi HyperOS (Android)'
    },
    features: [
      'Colossal 6000mAh endurance battery cell',
      '120Hz AdaptiveSync smooth display',
      'Signature POCO dual-tone design finish',
      'IP54 dust and splash resistance certification'
    ],
    imagePlaceholder: 'poco-m8-power-5g',
    imageSrc: '/assets/aistudio/image-3_53fb6f6e.jpeg',
    colors: [
      { name: 'Power Yellow & Black', hex: '#F6C90E', chassisHex: 0x1c1e13, imageSrc: '/assets/aistudio/image-3_53fb6f6e.jpeg' },
      { name: 'Midnight Black', hex: '#191A1C', chassisHex: 0x191a1c },
      { name: 'Cyber Silver', hex: '#A8B2BA', chassisHex: 0xa8b2ba }
    ],
    badge: 'Battery Champion'
  },
  {
    id: 'vivo-t5x-5g',
    name: 'vivo T5x 5G',
    brand: 'vivo',
    modelLine: 'vivo Series T',
    category: 'Mid-Range',
    priceDisplay: 'Contact for Price',
    availability: 'Confirm availability',
    shortDescription: 'Turbocharged 5G speed with stereo speakers, large FHD+ display, and slim chassis.',
    longDescription: 'vivo T5x 5G is built for multimedia enthusiasts and gaming with its expansive FHD+ display, dual stereo audio output, high-speed 5G processor, and military-grade drop resistance testing.',
    specs: {
      display: '6.72-inch FHD+ 120Hz Ultra Vision Display',
      processor: 'Snapdragon 6 Gen 1 5G (4nm Process)',
      rearCamera: '50MP HD Main Camera with Super Night Algorithm',
      frontCamera: '8MP HD Front Camera',
      battery: '6000mAh Massive Battery with 44W FlashCharge',
      connectivity: 'Dual-Mode 5G, Wi-Fi Dual Band, Bluetooth 5.1',
      variants: '4GB+128GB / 6GB+128GB / 8GB+128GB',
      os: 'Funtouch OS (Android)'
    },
    features: [
      'Dual stereo speakers with 300% volume boost',
      '4nm Snapdragon power efficiency',
      '44W FlashCharge rapid recharge',
      'Side-mounted capacitive fingerprint sensor'
    ],
    imagePlaceholder: 'vivo-t5x-5g',
    imageSrc: '/assets/aistudio/image-2_6c2f250e.jpeg',
    colors: [
      { name: 'Royal Metallic Purple', hex: '#5C3586', chassisHex: 0x5c3586, imageSrc: '/assets/aistudio/image-2_6c2f250e.jpeg' },
      { name: 'Mint Breeze', hex: '#84D4B3', chassisHex: 0x84d4b3, imageSrc: '/assets/aistudio/image-4_18a83ac4.jpeg' },
      { name: 'Deep Crimson Shadow', hex: '#2C1420', chassisHex: 0x2c1420 }
    ],
    badge: 'Turbo Performance'
  },
  {
    id: 'ai-plus-nova-2-neo-5g',
    name: 'Ai+ Nova 2 Neo 5G',
    brand: 'Ai+',
    modelLine: 'Nova Series',
    category: 'Value 5G',
    priceDisplay: 'Contact for Price',
    availability: 'Confirm availability',
    shortDescription: 'AI-assisted camera intelligence, clean modern aesthetics, and dual-SIM 5G connectivity.',
    longDescription: 'The Ai+ Nova 2 Neo 5G combines smart computational imaging, streamlined Android experience, and fast 5G speeds at an accessible price point for retail and commercial mobile buyers.',
    specs: {
      display: '6.6-inch HD+ 90Hz IPS Display with punch-hole',
      processor: 'Octa-Core AI Enhanced 5G Chipset',
      rearCamera: '48MP AI Dual Camera with Scene Recognition',
      frontCamera: '13MP Clear Selfie Camera',
      battery: '5000mAh Battery with 18W Smart Charging',
      connectivity: 'Dual 5G VoLTE, Wi-Fi, Bluetooth 5.2',
      variants: '6GB+128GB / 8GB+128GB',
      os: 'Clean Android OS'
    },
    features: [
      'AI Scene Optimization for vivid photo capture',
      'Minimal bloatware clean software experience',
      'Eye-care blue light filter display certification',
      'Expandable storage slot up to 1TB'
    ],
    imagePlaceholder: 'ai-plus-nova-2-neo-5g',
    imageSrc: '/assets/aistudio/image-8_8b3963e4.jpeg',
    colors: [
      { name: 'Deep Teal Emerald', hex: '#1E4E4A', chassisHex: 0x1e4e4a, imageSrc: '/assets/aistudio/image-8_8b3963e4.jpeg' },
      { name: 'Aurora Silver', hex: '#BAC7C3', chassisHex: 0xbac7c3 },
      { name: 'Obsidian Midnight', hex: '#111614', chassisHex: 0x111614 }
    ],
    badge: 'Smart Value'
  },
  {
    id: 'realme-p4-pro-5g',
    name: 'realme P4 Pro 5G',
    brand: 'realme',
    modelLine: 'realme P-Series',
    category: 'Performance',
    priceDisplay: 'Contact for Price',
    availability: 'Confirm availability',
    shortDescription: 'Pro-grade curved AMOLED display, Sony OIS camera sensor, and ultra-fast dart charging.',
    longDescription: 'Engineered for top-tier visual performance, the realme P4 Pro 5G features a 120Hz curved AMOLED panel, Sony optical stabilization, powerful MediaTek Dimensity processing, and rapid flash charging.',
    specs: {
      display: '6.7-inch 120Hz Curved OLED Display (10-bit Color)',
      processor: 'MediaTek Dimensity 7050 5G Octa-core',
      rearCamera: '50MP Sony LYT-600 with OIS + 8MP Ultra-wide',
      frontCamera: '32MP Sony Selfie Camera with 4K recording',
      battery: '5000mAh Battery with 67W SUPERVOOC Charge',
      connectivity: 'Wi-Fi 6, Dual 5G SA/NSA, Bluetooth 5.3, NFC',
      variants: '8GB+128GB / 8GB+256GB / 12GB+256GB',
      os: 'realme UI (Android)'
    },
    features: [
      'Premium curved AMOLED screen with 2160Hz PWM dimming',
      'Sony OIS sensor for blur-free low-light photography',
      '67W SUPERVOOC charging from 0 to 50% in ~19 mins',
      'Vapor chamber cooling system for thermal stability'
    ],
    imagePlaceholder: 'realme-p4-pro-5g',
    imageSrc: '/assets/aistudio/image-9_3a45dcf3.jpeg',
    colors: [
      { name: 'Brushed Titanium Silver', hex: '#C5C8C7', chassisHex: 0xc5c8c7, imageSrc: '/assets/aistudio/image-9_3a45dcf3.jpeg' },
      { name: 'Forest Emerald', hex: '#1A3B2B', chassisHex: 0x1a3b2b },
      { name: 'Sunset Gold', hex: '#D8A657', chassisHex: 0xd8a657 }
    ],
    badge: 'Pro Grade'
  },
  {
    id: 'poco-m8-5g',
    name: 'POCO M8 5G',
    brand: 'POCO',
    modelLine: 'POCO M-Series',
    category: 'Value 5G',
    priceDisplay: 'Contact for Price',
    availability: 'Confirm availability',
    shortDescription: 'Sleek design, 120Hz smooth display, and dependable 5G connectivity for daily productivity.',
    longDescription: 'POCO M8 5G delivers smooth everyday multitasking with high refresh rate, modern flat-edge frame, Corning Gorilla Glass protection, and verified dual 5G network compatibility.',
    specs: {
      display: '6.74-inch 120Hz IPS LCD Display with Gorilla Glass',
      processor: 'MediaTek Dimensity 6100+ 5G (6nm)',
      rearCamera: '50MP AI Main Camera with f/1.8 aperture',
      frontCamera: '5MP HD Front Camera',
      battery: '5000mAh Battery with 18W Quick Charge',
      connectivity: 'Dual 5G, Wi-Fi 5, Bluetooth 5.3, 3.5mm jack',
      variants: '4GB+128GB / 6GB+128GB / 8GB+256GB',
      os: 'Xiaomi HyperOS (Android)'
    },
    features: [
      'Corning Gorilla Glass screen protection',
      'Flat-edge contemporary industrial design',
      'Side fingerprint sensor and 3.5mm audio jack',
      'Dual 5G SIM standby support'
    ],
    imagePlaceholder: 'poco-m8-5g',
    imageSrc: '/assets/aistudio/image-5_d5c7f280.jpeg',
    colors: [
      { name: 'Sky Frost Blue', hex: '#4E87B2', chassisHex: 0x4e87b2, imageSrc: '/assets/aistudio/image-5_d5c7f280.jpeg' },
      { name: 'Stealth Black', hex: '#181C1E', chassisHex: 0x181c1e },
      { name: 'Sonic Yellow', hex: '#F3C623', chassisHex: 0xf3c623 }
    ],
    badge: 'Reliable 5G'
  },
  {
    id: 't5-lite',
    name: 'T5 lite',
    brand: 'vivo',
    modelLine: 'Series T Edition',
    category: 'Value 5G',
    priceDisplay: 'Contact for Price',
    availability: 'Confirm availability',
    shortDescription: 'Compact lightweight chassis with long battery backup and dependable multi-band connectivity.',
    longDescription: 'The T5 lite model is focused on core reliability, offering intuitive navigation, clear audio acoustics, long battery standby, and seamless mobile communication suited for everyday business and family use.',
    specs: {
      display: '6.5-inch HD+ Eye-Care Display',
      processor: 'High-Efficiency Octa-Core Processor',
      rearCamera: 'Dual AI Camera setup with LED Flash',
      frontCamera: '5MP AI Selfie camera',
      battery: '5000mAh Battery with Power Saving Mode',
      connectivity: '4G LTE / 5G Ready, Wi-Fi, Bluetooth',
      variants: '4GB+64GB / 4GB+128GB',
      os: 'Funtouch OS (Android)'
    },
    features: [
      'Ergonomic grip and scratch-resistant matte back',
      'Optimized memory management for swift daily tasks',
      'Dedicated microSD card slot for storage expansion',
      'Ultra Game Mode for distraction-free performance'
    ],
    imagePlaceholder: 't5-lite',
    imageSrc: '/assets/aistudio/image-2_6c2f250e.jpeg',
    colors: [
      { name: 'Deep Metallic Purple', hex: '#5C3586', chassisHex: 0x5c3586, imageSrc: '/assets/aistudio/image-2_6c2f250e.jpeg' },
      { name: 'Mint Breeze', hex: '#84D4B3', chassisHex: 0x84d4b3, imageSrc: '/assets/aistudio/image-4_18a83ac4.jpeg' },
      { name: 'Phantom Black', hex: '#141816', chassisHex: 0x141816 }
    ],
    badge: 'Compact & Lite'
  }
];
