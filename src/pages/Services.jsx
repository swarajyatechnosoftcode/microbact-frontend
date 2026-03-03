import { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Heart,
  ShoppingCart,
  Shield,
  Leaf,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Package,
  TrendingUp,
  Award,
  Zap
} from 'lucide-react';
import allP from '../images/products/all_p.png';
import areobact from '../images/products/areobact.png';
import biogasBoom from '../images/products/biogas_boom.png';
import biogass_boom_sticker from '../images/products/biogass_boom_sticker.jpg';
import bluePouch from '../images/products/blue_pouch.png';
import biologicalSolution from '../images/products/boiological_solution.png';
import dwtc from '../images/products/dwtc.png';
import Dwtc_sticker from '../images/products/Dwtc_sticker.jpg';
import easycompost from '../images/products/easycompost.png';
import easy_compost_sticker from '../images/products/easy_compost_sticker.jpg';
import greenPouch from '../images/products/green_pouch.png';
import odourCulture from '../images/products/odour_culture.png';
import odur_culture_sticker from '../images/products/odur_culture_sticker.jpg';
import fog_sticker from '../images/products/fog_sticker.jpg'
import pinkBottel from '../images/products/pink_bottel.png';
import pinkPouch from '../images/products/pink_pouch.png';
import septicTank from '../images/products/Septic_tank.png';
import septicTankSticker from '../images/products/septic_tank_sticker.jpg';
import sheti_sanjivni_sticker from '../images/products/sheti_sanjivni_sticker.jpg';
import stp_culture_sticker from '../images/products/stp_culture_sticker.jpg';
import AeroBact_sticker from '../images/products/AeroBact_sticker.jpg'
import anareobact_sticker from '../images/products/anareobact_sticker.jpg'
import back_side from '../images/products/back_side.png'

// Product Data
const products = [
  {
    // color ligth blue 
    id: 1,
    name: 'MicroBact Biogas Boom',
    category: 'Biogas Enhancement',
  color: 'bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600',
    gradient: 'from-cyan-400 to-indigo-600',
    shortDescription: 'Biogas enhancer culture for hydrolysis, acidogenesis & acetogenesis',
    fullDescription: 'MicroBact Boom is Biogas Enhancer Culture which helps in hydrolysis Acidogensis & Acetogenesis. MicroBact-Boom Enhance Growth of Existing Methenogensis processes with the help of probiotics anaerobic bacteria, macro and micro nutrients. Highly Useful in Bio-Gas Production in Anaerobic Biogas and UASB, Digrster & Reacter.',
    price: 'Contact for pricing',
    rating: 4.8,
    reviews: 120,
    images: [biogasBoom , biogass_boom_sticker,back_side],
    benefits: [
      'Instant & Fast Release of Enzymes',
      'Control Odor Fast',
      'Improve Start-up & Recovery From Shock Loading',
      'Visible Enhance in Biogas Production',
      'Acting as fast as Digester remove scum',
      'Fast recovery of Methenogenic Microorganisms'
    ],
    ingredients: ['Probiotic Blend', 'Anaerobic Bacteria', 'Macro & Micro Nutrients'],
    precautions: [
      'Used without any chemicals mixing for better results',
      'Non Hazardous and non-flammable, 100% organic and Nontoxic',
      'Store in cool place, avoid direct sunlight',
      'Keep in dry airtight container to prevent activation'
    ],
    usage: 'Add to biogas digesters and reactors. Follow specific dosage guidelines for optimal biogas production.'
  },
  {
    // color light green and blue 
    id: 2,
    name: 'MicroBact RE NIT WARANGAL',
    category: 'Wastewater Treatment',
    color: 'bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600',
    gradient: 'from-cyan-400 to-indigo-600',
    shortDescription: 'NIT Warangal tested and approved product for nutrient removal',
    fullDescription: 'MicroBact RE NIT WARANGAL is a tested and approved product by National Institute of Technology Warangal. It shows excellent results in 15 days reduction in total Kjeldahl nitrogen, ammonia nitrogen, fecal phosphate up to 90-95%. Algae degradation is very fast, 100% increase in COD, BOD reduction. Improves Biological Nutrient Removal in two step process: Oxidation and Denitrification, CO2+NH3+CH4, Endogenous decay respiration, Aerobic fermentation (methanol). Biological nitrogen removal in the form ammonia and Organic Nitrogen biologically by two steps.',
    price: 'Contact for pricing',
    rating: 4.9,
    reviews: 100,
    images: [biologicalSolution, bluePouch, greenPouch,back_side],
    benefits: [
      '90-95% reduction in nitrogen and phosphate',
      'Fast algae degradation',
      '100% increase in COD, BOD reduction',
      'Improves Biological Nutrient Removal',
      'Two-step biological process',
      'NIT Warangal tested and approved'
    ],
    ingredients: ['Heterotrophic Bacteria', 'Denitrifying Bacteria', 'Phosphorus Accumulating Bacteria'],
    precautions: [
      'For wastewater treatment applications',
      'Store in cool, dry place',
      'Avoid direct sunlight',
      'Keep in airtight container'
    ],
    usage: 'Apply in wastewater treatment systems for nutrient removal. Dosage based on system requirements and testing.'
  },
  {
    //  color yellow
    id: 3,
    name: 'MicroBact Septic Tank',
    category: 'Septic Tank Treatment',
    color: 'bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-400',
    gradient: 'from-lime-400 to-emerald-600',
    shortDescription: 'Bio culture for septic tank organic waste degradation',
    fullDescription: 'MicroBact septic tank is designed for degradation of organic waste from septic tank these microbes produce different types of enzymes like amylase, protease, lipase, cellulose, etc. MicroBact SEPTIC TANK works in both aerobic&anaerobic conditions. Best result oriented bio culture highly used in SEPTIC TANK, SINKS PRIVET/PUBLIC TOILETS, DRAINAGE SYSTEM COMPOSITING TOILETS BIO TOILETS, FICAL SLUDGE.',
    price: 'Contact for pricing',
    rating: 4.7,
    reviews: 150,
    images: [septicTank ,septicTankSticker ,back_side],
    benefits: [
      'Reduction in sludge production',
      'Brake down solid fats & smooth operation',
      'Reduce sludge production',
      'Reduce foul odor',
      'Improve plant stability',
      'Reduces H2S, ammonia, and nitrates',
      'No use any other chemicals, reduce blockage of draine system, reduce frequency of septic tank fillings, no genetically modified organisms'
    ],
    ingredients: ['Enzyme Producing Bacteria', 'Aerobic & Anaerobic Microbes'],
    precautions: [
      'Please avoid the use of chemicals, disinfectants, with use MicroBact septic tank for better and effective results',
      'Non-Hazardous and non-flammable, 100% organic and Nontoxic',
      'Store in cool place, avoid direct sunlight',
      'Keep in dry airtight container to prevent activation'
    ],
    usage: 'Apply in septic tanks, toilets, drainage systems, and bio toilets. Dosage varies by application and system size.'
  },
  {
    // color light blue
    id: 4,
    name: 'MicroBact DWTC',
    category: 'FOG Treatment',
    color: 'bg-gradient-to-br from-blue-500 via-navy-600 to-teal-600',
    gradient: 'from-emerald-400 to-teal-600',
    shortDescription: 'Natural biocatalyst for dissolving fat, oil, and grease',
    fullDescription: 'MicroBact DWTC is a natural biocatalyst made via fermentative process. MicroBact DWTC consists of selected consortium of facultative bacteria, enzymes, nutrients & co-factor, it contain high concentration of enzyme & microbes to dissolve fat, oil, grease. Highly recommended for use to dissolve fat oil & grease in systems WWTP/PHARMA/DAIRY/HOTEL/MUNICIPAL/INDUSTRIAL WASTEWATER treatment.',
    price: 'Contact for pricing',
    rating: 4.9,
    reviews: 180,
    images: [dwtc  ,Dwtc_sticker ,back_side ],
    benefits: [
      'Reduce 100% degrade fat oil grease after application',
      'Reduce sludge production',
      'Reduce BOD, COD, TSS biological nutrients',
      'Fast-acting & 100% natural & nontoxic',
      'Improves MLSS, biomass in the system',
      'Reduces the volatile organic compound',
      'Enhance nitrogen & phosphorus removal'
    ],
    ingredients: ['Facultative Bacteria', 'Enzymes', 'Nutrients & Co-factors'],
    precautions: [
      'Please avoid the use of chemicals, disinfectants, chlorine, water paints, kerosene',
      'After discontinuing chemical products, wait 3 days before using MicroBact DWTC',
      'Non-hazardous and non-flammable, 100% organic and non-toxic',
      'Store in cool place, avoid direct sunlight',
      'Keep in dry airtight container to prevent activation'
    ],
    usage: 'Apply in wastewater treatment systems prone to fat, oil, and grease accumulation. Dosage based on system requirements.'
  },
  {
    // color orange and red 
    id: 5,
    name: 'MicroBact Easy Compost',
    category: 'Composting',
    color: 'bg-gradient-to-br from-amber-400 via-orange-500 to-red-500',
    gradient: 'from-amber-400 to-red-500',
    shortDescription: 'Powerful bio-culture for composting organic waste',
    fullDescription: 'MicroBact EASY COMPOST is the best combination of bacteria, actinomycetes fungi which is powerful full to composting process in food waste, garden waste, agriculture waste organic waste with control foul odor. Best result oriented bio culture highly use in biodegradable municipal waste, society waste hotel, restaurant, poultry waste agriculture, forest parks, garden school college food industries. sugar industries just simple process use 1 gm. culture for 1kg food waste mix it properly if needed add some water turn in to week for aeration you will get good compost into 4 to 6 weeks.',
    price: 'Contact for pricing',
    rating: 4.8,
    reviews: 140,
    images: [easycompost,easy_compost_sticker ,back_side],
    benefits: [
      'MicroBact easy compost is a very effective bio-culture',
      'Control a foul odor, control fly, mosquito',
      'compost is enriched with macro and micronutrients',
      'adds lost microflora in soil with the exceptional high microbial count',
      'No Use Any Other Chemicals, Reduce Blockage Of Draine System, Reduce Frequency Of Septic Tank Fillings, No Genetically Modified Organisms'
    ],
    ingredients: ['Bacteria', 'Actinomycetes', 'Fungi'],
    precautions: [
      'if initially, waste is wet or moist then spared MicroBact EASY COMPOST Culture directly on waste mix it properly the first week rise temp 50 to 70 °c if not reach optimum temp.please add some culture to reach optimum temp. if moisture decrease then maintains moisture by spray water',
      'Non-Hazardous and non-flammable, 100% organic and Nontoxic',
      'Store in cool place, avoid direct sunlight',
      'Keep in dry airtight container to prevent activation'
    ],
    usage: 'Use 1 gm culture for 1kg food waste, mix properly, add water if needed, turn weekly for aeration. Good compost in 4-6 weeks.'
  },
  {
    // color orange 
    id: 6,
    name: 'MicroBact FOG',
    category: 'FOG Treatment',
  color: 'bg-gradient-to-br from-amber-400 via-orange-500 to-red-500',
    gradient: 'from-amber-400 to-red-500',
    shortDescription: 'Specialized formula for dissolving fat, oil, and grease',
    fullDescription: 'MicroBact FOG is natural biocatalyst made via fermentative process. MicroBact-FOG consists of selected consortium of bacteria, enzymes, nutrients & co-factor, it contain high concentration of enzyme & microbes to dissolve fat, oil, grease. Highly recommended for use to dissolve fat oil & grease in systems WWTP/PHARMA/DAIRY/HOTEL/MUNICIPAL /INDUSTRIAL WASTE WATER, treatment. Reducing just using start MicroBact FOG working in hotel grease trap slaughterhouse ETP.',
    price: 'Contact for pricing',
    rating: 4.6,
    reviews: 160,
    images: [fog_sticker ,back_side],
    benefits: [
      'Reduce 100% degrade fat oil grease after application of MicroBact FOG',
      'Reduce sludge production',
      'Reduce BOD, COD, TSS biological nutrients',
      'Fast-acting & 100% natural & nontoxic',
      'Improves MLSS, biomass in the system',
      'Reduces the volatile organic compound',
      'Enhance nitrogen & phosphorus removal'
    ],
    ingredients: ['Bacteria Consortium', 'Enzymes', 'Nutrients & Co-factors'],
    precautions: [
      'Please avoid the use of chemicals, disinfectants, chlorine, water paints, kerosene after discontinuing of use of chemical products. After 3 days you should use MicroBact-FOG for better and effective results',
      'Non-Hazardous and non-flammable, 100% organic and Nontoxic',
      'Store in cool place, avoid direct sunlight',
      'Keep in dry airtight container to prevent activation'
    ],
    usage: 'Apply in wastewater systems to dissolve FOG. Dosage based on system requirements.'
  },
  {
    // color light green 
    id: 7,
    name: 'MicroBact ODOR Culture',
    category: 'Odor Control',
    color: 'bg-gradient-to-br from-green-600 via-green-500 to-green-700',
    gradient: 'from-rose-400 to-red-500',
    shortDescription: 'Natural biocatalyst for odor reduction in waste systems',
    fullDescription: 'MicroBact ODOR is a natural biocatalyst made via fermentative process. MicroBact-odor consists of a selected consortium of bacteria, enzymes, nutrients & co-factor, it contains a high concentration of enzyme & microbes. Highly recommended for use to reduce odor in systems WWTP/PHARMA/DAIRY/MUNICIPAL/INDUSTRIAL WASTE WATER treatment and COMPOSTING SYSTEMS.',
    price: 'Contact for pricing',
    rating: 4.5,
    reviews: 130,
    images: [odourCulture ,odur_culture_sticker ,back_side],
    benefits: [
      'Reduce 100% odor after application',
      'Increase composting speed',
      'Reduce sludge production',
      'Reduce foul odor from leachate',
      'Fast-acting & 100% natural & non-toxic',
      'Reduces the volatile organic compound',
      'Improves MLSS, biomass in the system',
      'Enhance nitrogen & phosphorus removal'
    ],
    ingredients: ['Bacteria Consortium', 'Enzymes', 'Nutrients & Co-factors'],
    precautions: [
      'Please avoid the use of chemicals, disinfectants, chlorine, water paints, kerosene',
      'After discontinuing chemical products, wait 3 days before using MicroBact-ODOR',
      'Non-Hazardous and non-flammable, 100% organic and Nontoxic',
      'Store in cool place, avoid direct sunlight',
      'Keep in dry airtight container to prevent activation'
    ],
    usage: 'Apply in wastewater treatment systems, composting systems, landfills, and anaerobic digesters to reduce odor.'
  },

  {
    // color navy
    id: 8,
    name: 'MicroBact STP Culture',
    category: 'Wastewater Treatment',
    color: 'bg-gradient-to-br from-sky-700 via-blue-900 to-cyan-800',
    gradient: 'from-purple-400 to-indigo-600',
    shortDescription: 'Designed for degradation of organic waste in wastewater',
    fullDescription: 'MicroBact-STP is designed for the degradation of organic waste in wastewater along with suspended solids removal of COD, BOD, sludge from wastewater. Highly recommended for use in aerobic & Facultative anaerobic systems like MMBR, SBR, ASP, ETP, WWTP/Fruits Vegetable/ FOOD / PHARMA/DAIRY/ MUNICIPAL /INDUSTRIAL WASTE WATER treatment.',
    price: 'Contact for pricing',
    rating: 4.9,
    reviews: 150,
    images: [stp_culture_sticker ,back_side],
    benefits: [
      'Reduce COD. BOD',
      'Reduce suspended solids',
      'Reduce sludge production',
      'Reduce foul ODOR',
      'Improve plant stability',
      'Reduces H2S, ammonia, and nitrates',
      'Improves MLSS, biomass in the system',
      'Enhance nitrogen & phosphorus removal'
    ],
    ingredients: ['Aerobic & Facultative Anaerobic Microbes'],
    precautions: [
      'Please avoid the use of chemicals, disinfectants, chlorine, water paints, kerosene after discontinuing of use of chemical products. After 3 days you should use MicroBact-STP for better and effective results',
      'Non-Hazardous and non-flammable, 100% organic and Nontoxic',
      'Store in cool place, avoid direct sunlight',
      'Keep in dry airtight container to prevent activation'
    ],
    usage: 'Apply in aerobic & facultative anaerobic systems like MMBR, SBR, ASP, ETP, WWTP for wastewater treatment.'
  },
  { 
    // color gren yellow
    id: 9,
    name: 'MicroBact AnaeroBact',
    category: 'Wastewater Treatment',
    color: 'bg-gradient-to-br from-lime-700 via-lime-500 to-lime-900',
    gradient: 'from-green-400 to-teal-600',
    shortDescription: 'Anaerobic bacterial culture for wastewater treatment',
    fullDescription: 'MicroBact Anaerobic Bacterial with enzymes & co factors developed under complete Anaerobic process useful for Anaerobic conditions in waste water, USBR, Bio Reactor, Septic Tank Treatment Biogas enhance with hassle free solution for you. Used in 30 to 50 gm/KLD in waste water treatments, USBR, Bio Reactor, Septic Tank Treatment Biogas Treatment organic waste decomposing solution.',
    price: 'Contact for pricing',
    rating: 4.7,
    reviews: 140,
    images: [anareobact_sticker ,back_side],
    benefits: [
      'Control foul smell in anaerobic systems',
      'Enhance anaerobic process treatment for organic load',
      '100% output with natural environmental care',
      'Dramatic change in anaerobic process'
    ],
    ingredients: ['Anaerobic Bacterial Consortia', 'Enzymes & Co-factors'],
    precautions: [
      'Avoid direct naked hand use or inhaling',
      'For effectiveness, dissolve in tap water before 1 hour & use',
      'Non Hazardous and non-flammable, 100% organic and Nontoxic',
      'Store in cool place, avoid direct sunlight',
      'Keep in dry airtight container to prevent activation'
    ],
    usage: 'Use 30 to 50 gm/KLD in wastewater treatments, USBR, Bio Reactor, Septic Tank Treatment, Biogas Treatment, organic waste decomposing.'
  },
  {
    // color purple
    id: 10,
    name: 'MicroBact AeroBact',
    category: 'Wastewater Treatment',
    color: 'bg-gradient-to-br from-purple-400 via-purple-500 to-violet-600',
    gradient: 'from-orange-400 to-red-600',
    shortDescription: 'Aerobic bacteria consortia for wastewater treatment',
    fullDescription: 'MicroBact Bio cultures are continuously working in Bio Cultures Innovation. Now we have developed new Bacterial product AeroBact, it\'s fully purly consortia of Aerobic Bacteria with co factors. It helps in removal of pollutant as well as enhance aerobic process with hassle free. AeroBact is genuine sequence of aerobic bacteria which is in 2 billion/gm. They are used in STP process like MBR, MBBR, SBR, ASP. process ETP due to highly active strains it treats 30 to 50 gm/KLD water use in dairy, pharma, agriculture, municipal CETPS, treatment.',
    price: 'Contact for pricing',
    rating: 4.8,
    reviews: 160,
    images: [areobact ,AeroBact_sticker ,back_side],
    benefits: [
      'Immediately active bacteria start working after addition of AeroBact',
      'Treat organic load easily & hassle free',
      'Developed favourable condition in wastewater',
      'MLSS improves, COD, BOD removes',
      'Addition of extra chemical is zero',
      'Removal of Nutrients & algae degradation sincreased'
    ],
    ingredients: ['Aerobic Bacteria Consortia', 'Co-factors'],
    precautions: [
      'Avoid direct naked hand use or inhaling for effectiveness increase dissolve in tap water before 1hr & use',
      'Non-hazardous and non-flammable, 100% organic and non-toxic',
      'Store in cool place, avoid direct sunlight',
      'Keep in dry airtight container to prevent activation'
    ],
    usage: 'Use in STP processes like MBR, MBBR, SBR, ASP, ETP. Treats 30 to 50 gm/KLD water in dairy, pharma, agriculture, municipal CETPs.'
  },

 
  {
    // color green
    id: 12,
    name: 'MicroBact शेती संजीवनी',
    category: 'Agriculture',
    color: 'bg-gradient-to-br from-lime-400 via-green-500 to-emerald-600',
    gradient: 'from-lime-400 to-emerald-600',
    shortDescription: 'Bio-culture for crop growth and soil health',
    fullDescription: 'MicroBact We are happy to introduce our new product शेती संजीवनी is a combination of Bacteria + Fungi + NPK + Nutrient for any crop who does not having growth, health, flowering, root development, soil condition development remove pathogenic content from soil & availability nutrient for crop with the help of Bacteria Fungi crop showing results within 36 to 48 hrs. Drenching of plant in 15 days once or inline drip or flood water irrigation or foliar spray.',
    price: 'Contact for pricing',
    rating: 4.9,
    reviews: 120,
    images: [ sheti_sanjivni_sticker ,back_side],
    benefits: [
      'Its change soil biology with physics',
      'Crop shows immediate impact',
      'Available nutrients from soil fast recovery in to plant and soil also',
      'Stop pathogens which are available in soil or water',
      'Root shows development in absorption & white root formation',
      'Change the crop morphological characters'
    ],
    ingredients: ['Bacteria', 'Fungi', 'NPK', 'Nutrients'],
    precautions: [
      'Avoid direct contact with powder. Avoid smelling wash the hand before & after use of the संजीवनी for better results dissolve it in water & allow for 1hr & then use',
      'Non-hazardous product, 100% Organic compound & non-toxic, its environment friendly product',
      'Store in cool place, avoid direct sunlight',
      'Keep in dry airtight container to prevent activation'
    ],
    usage: 'Drenching of plant in 15 days once or inline drip or flood water irrigation or foliar spray.'
  },

];

// Product Card Component with Image Carousel
const ProductCard = ({ product, onLearnMore }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div
  className={`group relative ${product.color} rounded-3xl p-6 shadow-xl transition-all duration-700 cursor-pointer overflow-hidden flex flex-col h-[500px]`}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  style={{
    transform: isHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
  }}
>

      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl transition-all duration-700 ${isHovered ? 'scale-150' : ''}`}></div>
        <div className={`absolute bottom-4 left-4 w-40 h-40 bg-white/10 rounded-full blur-2xl transition-all duration-700 ${isHovered ? 'scale-150' : ''}`}></div>
      </div>

      {/* Shine Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-white/0 via-white/40 to-white/0 transition-transform duration-1000 ${isHovered ? 'translate-x-full' : '-translate-x-full'}`}></div>
      {/* Image Carousel */}
      <div className="relative mb-6 bg-white rounded-2xl overflow-hidden h-64 shadow-lg">
        <div className="w-full h-full bg-white flex items-center justify-center">
          <img
            src={product.images[currentImageIndex]}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-700"
            style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
          />
        </div>

        {/* Image Navigation Arrows */}
        {product.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft size={20} className="text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight size={20} className="text-gray-700" />
            </button>
          </>
        )}

        {/* Image Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {product.images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="relative z-10 space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{product.name}</h3>
            <p className="text-white/90 text-sm">{product.shortDescription}</p>
          </div>
          {/* <div className="text-2xl font-bold text-white">{product.price}</div> */}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${i < Math.floor(product.rating) ? 'fill-yellow-300 text-yellow-300' : 'fill-white/30 text-white/30'}`}
              />
            ))}
          </div>
          <span className="text-white/90 text-sm">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <button
            onClick={() => onLearnMore(product)}
            className="flex-1 bg-white text-gray-800 font-bold py-3 px-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group"
          >
            <span>Learn More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Product Detail Modal
const ProductDetailModal = ({ product, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('details');

  if (!isOpen || !product) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 hover:rotate-90"
        >
          <X size={24} className="text-gray-700" />
        </button>

        <div className="grid md:grid-cols-2 gap-0 h-full">
          {/* Left Side - Image Carousel */}
          <div className={`relative ${product.color} p-8 flex items-center justify-center overflow-hidden`}>
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            {/* Image Carousel */}
            <div className="relative w-full h-full flex items-center justify-center z-10">
              <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="max-w-full max-h-[500px] object-contain rounded-2xl shadow-2xl"
                />
              </div>

              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft size={24} className="text-gray-700" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight size={24} className="text-gray-700" />
                  </button>
                </>
              )}

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="bg-white overflow-y-auto p-8 max-h-[90vh]">
            {/* Product Header */}
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">{product.name}</h2>
              <p className="text-gray-600 text-lg">{product.fullDescription}</p>
              
              {/* Rating and Price */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={`${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                {/* <div className="text-3xl font-bold text-gray-800">{product.price}</div> */}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 border-b border-gray-200">
              {['details', 'benefits', 'ingredients', 'precautions'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 font-semibold capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-4">
              {activeTab === 'details' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="bg-blue-50 rounded-2xl p-6">
                    <div className="flex items-start gap-3">
                      <Package className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">How to Use</h4>
                        <p className="text-gray-600">{product.usage}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'benefits' && (
                <div className="space-y-3 animate-fadeIn">
                  {product.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-green-50 rounded-xl p-4 transition-all duration-300 hover:bg-green-100"
                    >
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'ingredients' && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="grid grid-cols-2 gap-3">
                    {product.ingredients.map((ingredient, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-3 transition-all duration-300 hover:shadow-md"
                      >
                        <Leaf className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700 font-medium text-sm">{ingredient}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'precautions' && (
                <div className="space-y-3 animate-fadeIn">
                  {product.precautions.map((precaution, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-orange-50 rounded-xl p-4 transition-all duration-300 hover:bg-orange-100"
                    >
                      <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{precaution}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'msds' && (
                <div className="space-y-6 animate-fadeIn">
                  {/* Company Information */}
                  

                  {/* Health Hazards */}
                  <div className="bg-red-50 rounded-2xl p-6">
                    <h4 className="font-bold text-gray-800 mb-4">Health Hazard Data</h4>
                    <div className="space-y-3 text-sm">
                      <p><strong>Routes of Entry:</strong> {msdsData.healthHazards.routes}</p>
                      <p><strong>Inhalation:</strong> {msdsData.healthHazards.inhalation}</p>
                      <p><strong>Ingestion:</strong> {msdsData.healthHazards.ingestion}</p>
                      <p><strong>Skin/Eye Contact:</strong> {msdsData.healthHazards.skinEye}</p>
                      <p><strong>Acute Effects:</strong> {msdsData.healthHazards.acute}</p>
                      <p><strong>Chronic Effects:</strong> {msdsData.healthHazards.chronic}</p>
                      <p><strong>Carcinogenicity:</strong> {msdsData.healthHazards.carcinogenicity}</p>
                      <p><strong>Medical Conditions:</strong> {msdsData.healthHazards.medicalConditions}</p>
                    </div>
                  </div>

                  {/* First Aid */}
                  <div className="bg-yellow-50 rounded-2xl p-6">
                    <h4 className="font-bold text-gray-800 mb-4">Emergency & First Aid Procedures</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Skin Contact:</strong> {msdsData.firstAid.skin}</p>
                      <p><strong>Eye Contact:</strong> {msdsData.firstAid.eye}</p>
                      <p><strong>Inhalation:</strong> {msdsData.firstAid.inhalation}</p>
                      <p><strong>Ingestion:</strong> {msdsData.firstAid.ingestion}</p>
                    </div>
                  </div>

                  {/* Fire & Explosion Hazards */}
                  <div className="bg-orange-50 rounded-2xl p-6">
                    <h4 className="font-bold text-gray-800 mb-4">Fire & Explosion Hazard Data</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Flash Point:</strong> {msdsData.fireHazards.flashPoint}</p>
                      <p><strong>Extinguishing Media:</strong> {msdsData.fireHazards.extinguishingMedia}</p>
                      <p><strong>Special Fire Fighting:</strong> {msdsData.fireHazards.specialFireFighting}</p>
                      <p><strong>Unusual Hazards:</strong> {msdsData.fireHazards.unusualHazards}</p>
                      <p><strong>Flammable Limits:</strong> {msdsData.fireHazards.flammableLimits}</p>
                      <p><strong>Special Equipment:</strong> {msdsData.fireHazards.specialEquipment}</p>
                    </div>
                  </div>

                  {/* Accidental Release */}
                  <div className="bg-purple-50 rounded-2xl p-6">
                    <h4 className="font-bold text-gray-800 mb-4">Accidental Release Measures</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Personal Precautions:</strong> {msdsData.accidentalRelease.personalPrecautions}</p>
                      <p><strong>Methods for Cleanup:</strong> {msdsData.accidentalRelease.cleanup}</p>
                      <p><strong>Fire Hazards:</strong> {msdsData.accidentalRelease.fireHazards}</p>
                    </div>
                  </div>

                  {/* Handling & Storage */}
                  <div className="bg-indigo-50 rounded-2xl p-6">
                    <h4 className="font-bold text-gray-800 mb-4">Handling & Storage</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Handling:</strong> {msdsData.handlingStorage.handling}</p>
                      <p><strong>Waste Disposal:</strong> {msdsData.handlingStorage.wasteDisposal}</p>
                      <p><strong>Storage:</strong> {msdsData.handlingStorage.storage}</p>
                      <p><strong>Notes:</strong> {msdsData.handlingStorage.notes}</p>
                    </div>
                  </div>

                  {/* Protective Measures */}
                  <div className="bg-teal-50 rounded-2xl p-6">
                    <h4 className="font-bold text-gray-800 mb-4">Personal Protective Measures</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Respiratory Protection:</strong> {msdsData.protectiveMeasures.respiratory}</p>
                      <p><strong>Ventilation:</strong> {msdsData.protectiveMeasures.ventilation}</p>
                      <p><strong>Eye Protection:</strong> {msdsData.protectiveMeasures.eyeProtection}</p>
                      <p><strong>Work/Hygienic Practices:</strong> {msdsData.protectiveMeasures.workPractices}</p>
                      <p><strong>Protective Gloves:</strong> {msdsData.protectiveMeasures.gloves}</p>
                      <p><strong>Other Protective Clothing:</strong> {msdsData.protectiveMeasures.clothing}</p>
                    </div>
                  </div>

                  {/* Physical & Chemical Characteristics */}
                  <div className="bg-cyan-50 rounded-2xl p-6">
                    <h4 className="font-bold text-gray-800 mb-4">Physical & Chemical Characteristics</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Boiling Point:</strong> {msdsData.physicalChemical.boilingPoint}</p>
                      <p><strong>Vapor Pressure:</strong> {msdsData.physicalChemical.vaporPressure}</p>
                      <p><strong>Vapor Density:</strong> {msdsData.physicalChemical.vaporDensity}</p>
                      <p><strong>Solubility in Water:</strong> {msdsData.physicalChemical.solubility}</p>
                      <p><strong>Specific Gravity:</strong> {msdsData.physicalChemical.specificGravity}</p>
                      <p><strong>Melting Point:</strong> {msdsData.physicalChemical.meltingPoint}</p>
                      <p><strong>Evaporation Rate:</strong> {msdsData.physicalChemical.evaporationRate}</p>
                      <p><strong>Appearance & Odor:</strong> {msdsData.physicalChemical.appearance}</p>
                      <p><strong>pH:</strong> {msdsData.physicalChemical.ph}</p>
                    </div>
                  </div>

                  {/* Stability & Reactivity */}
                  <div className="bg-lime-50 rounded-2xl p-6">
                    <h4 className="font-bold text-gray-800 mb-4">Stability & Reactivity Data</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Stability:</strong> {msdsData.stabilityReactivity.stability}</p>
                      <p><strong>Incompatibility:</strong> {msdsData.stabilityReactivity.incompatibility}</p>
                      <p><strong>Hazardous Polymerization:</strong> {msdsData.stabilityReactivity.polymerization}</p>
                      <p><strong>Conditions to Avoid:</strong> {msdsData.stabilityReactivity.conditionsToAvoid}</p>
                      <p><strong>Hazardous Decomposition:</strong> {msdsData.stabilityReactivity.decomposition}</p>
                    </div>
                  </div>

                  {/* Toxicological Information */}
                  <div className="bg-pink-50 rounded-2xl p-6">
                    <h4 className="font-bold text-gray-800 mb-4">Toxicological Information</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Oral Toxicity:</strong> {msdsData.toxicological.oral}</p>
                      <p><strong>Dermal Toxicity:</strong> {msdsData.toxicological.dermal}</p>
                      <p><strong>Inhalation Toxicity:</strong> {msdsData.toxicological.inhalation}</p>
                    </div>
                  </div>

                  {/* Ecological Information */}
                  <div className="bg-emerald-50 rounded-2xl p-6">
                    <h4 className="font-bold text-gray-800 mb-4">Ecological Information</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Ecological Information:</strong> {msdsData.ecological.information}</p>
                      <p><strong>Ecotoxicity Information:</strong> {msdsData.ecological.ecotoxicity}</p>
                    </div>
                  </div>

                  {/* Disposal Considerations */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="font-bold text-gray-800 mb-4">Disposal Considerations</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Disposal Method:</strong> {msdsData.disposal.method}</p>
                      <p><strong>Dermal Toxicity:</strong> {msdsData.disposal.dermal}</p>
                    </div>
                  </div>

                  {/* Transport Information */}
                  <div className="bg-amber-50 rounded-2xl p-6">
                    <h4 className="font-bold text-gray-800 mb-4">Transport Information</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>UN Number:</strong> {msdsData.transport.unNumber}</p>
                      <p><strong>UN Proper Shipping Name:</strong> {msdsData.transport.properShippingName}</p>
                      <p><strong>Dangerous Goods Class:</strong> {msdsData.transport.dangerousGoodsClass}</p>
                      <p><strong>HazChem Code:</strong> {msdsData.transport.hazChemCode}</p>
                    </div>
                  </div>

                  {/* Regulatory Information */}
                  <div className="bg-rose-50 rounded-2xl p-6">
                    <h4 className="font-bold text-gray-800 mb-4">Regulatory Information</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Symbol:</strong> {msdsData.regulatory.symbol}</p>
                      <p><strong>R-Phrases:</strong> {msdsData.regulatory.rPhrases}</p>
                      <p><strong>S-Phrases:</strong> {msdsData.regulatory.sPhrases}</p>
                    </div>
                  </div>
                </div>
              )}


            </div>

            {/* Action Buttons */}
            {/* <div className="mt-8 flex gap-4">
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold py-4 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group">
                <ShoppingCart size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span>Add to Cart</span>
              </button>
              <button className="bg-gray-100 text-gray-700 font-bold py-4 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-200 flex items-center justify-center gap-2">
                <Heart size={20} />
              </button>
            </div> */}

            {/* Features */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-xl">
                <Shield className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                <p className="text-xs font-semibold text-gray-700">Tested</p>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-xl">
                <Leaf className="w-6 h-6 text-green-600 mx-auto mb-1" />
                <p className="text-xs font-semibold text-gray-700">Natural</p>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-xl">
                <Award className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                <p className="text-xs font-semibold text-gray-700">Premium</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Product Component
const Services = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLearnMore = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-blob"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl animate-blob animation-delay-2000"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-blob animation-delay-4000"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <Sparkles className="text-blue-600 animate-spin-slow" size={24} />
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Premium Products</span>
            <Sparkles className="text-green-600 animate-spin-slow animation-delay-500" size={24} />
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 animate-gradient bg-300%">
            Our Product
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our complete range of premium skincare products designed to bring out your natural beauty
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <Award className="text-blue-600" size={24} />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-800">500+</div>
                <div className="text-xs text-gray-600">Happy Customers</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <Star className="text-yellow-500 fill-yellow-500" size={24} />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-800">4.8</div>
                <div className="text-xs text-gray-600">Average Rating</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <TrendingUp className="text-green-600" size={24} />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-800">100%</div>
                <div className="text-xs text-gray-600">Natural</div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} onLearnMore={handleLearnMore} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
       
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -60px) scale(1.1); }
          50% { transform: translate(-30px, 30px) scale(0.9); }
          75% { transform: translate(60px, 60px) scale(1.05); }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out; }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out; animation-fill-mode: both; }
        .animate-blob { animation: blob 8s infinite; }
        .animate-gradient { animation: gradient 4s ease infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .bg-300\\% { background-size: 300%; }
      `}</style>
    </div>
  );
};

export default Services;