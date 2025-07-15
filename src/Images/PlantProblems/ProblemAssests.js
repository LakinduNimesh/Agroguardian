
import Thrips from "../PlantProblems/Pests/Thrips.webp"
import ShotHole from "../PlantProblems/Deceases/ShotHole.jpg"
import sheildBugs from "../PlantProblems/Pests/sheildBugs.jpg"
import ScaleInsect from "../PlantProblems/Pests/ScaleInsect.webp"
import PeachLeafCurl from "../PlantProblems/Deceases/PeachCurl.jpg"
import MechanicalDamage from "../PlantProblems/Deceases/MechanicalDamage.jpg"
import NutrientExcess from "../PlantProblems/Deceases/NutrientExcess.jpg"
import Mealybugs from "../PlantProblems/Pests/Mealybugs.jpg"
import FrostInjury from "../PlantProblems/Environmental/FrostInjury.jpg"
import LightDamage from "../PlantProblems/Environmental/LightDamage.webp"
import CreepingCharlie from "../PlantProblems/weeds/CreepingCharlie.jpg"
import Nutsedge from "../PlantProblems/weeds/Nutsedge.jpg"


export const tabs = [
  "All Problems",
  "Diseases",
  "Pests",
  "Weeds",
  "Environmental",
  "Physical"
]

const problemAssests = {
  Thrips,
  ShotHole,
  sheildBugs,
  ScaleInsect,
  PeachLeafCurl,
  MechanicalDamage,
  NutrientExcess,
  Mealybugs,
  FrostInjury,
  LightDamage,
  Nutsedge,
  CreepingCharlie

}




export const problemsData = {
  1: {
    id: 1,
    name: "Thrips",
    category: "Pests",
    severity: "Medium",
    image: problemAssests.Thrips,
    shortDescription: "Small, slender insects that feed on plant sap and cause silvery streaks on leaves.",
    fullDescription:
      "Thrips are tiny, slender insects that are barely visible to the naked eye. They feed by puncturing plant cells and sucking out the contents, which causes a distinctive silvery or bronze stippling on leaves. These pests are particularly problematic because they can transmit plant viruses and reproduce rapidly in warm conditions.",
    symptoms: [
      "Silvery or bronze stippling on leaf surfaces",
      "Black specks of excrement on leaves",
      "Distorted or curled leaves",
      "Premature leaf drop",
      "Stunted plant growth",
      "Scarred fruit surfaces",
    ],
    causes: [
      "Warm, dry weather conditions",
      "Poor air circulation",
      "Overcrowded plants",
      "Stressed or weakened plants",
      "Introduction from infected plants",
    ],
    treatment: {
      immediate: [
        "Isolate affected plants immediately",
        "Rinse plants with strong water spray",
        "Remove heavily damaged leaves",
        "Apply insecticidal soap spray",
      ],
      ongoing: [
        "Use blue sticky traps to monitor population",
        "Apply neem oil every 7-10 days",
        "Introduce beneficial insects like predatory mites",
        "Maintain proper humidity levels (40-60%)",
      ],
      prevention: [
        "Quarantine new plants for 2 weeks",
        "Maintain good air circulation",
        "Regular plant inspection",
        "Avoid over-fertilizing with nitrogen",
        "Keep plants properly watered and healthy",
      ],
    },
    timeline: "2-4 weeks for full recovery with proper treatment",
    difficulty: "Moderate",
    commonPlants: ["Roses", "Tomatoes", "Peppers", "Houseplants", "Greenhouse plants"],
    relatedProblems: ["Spider Mites", "Aphids", "Whiteflies"],
  },
  2: {
    id: 2,
    name: "Shot Hole Disease",
    category: "Diseases",
    severity: "High",
    image: problemAssests.ShotHole,
    shortDescription: "Fungal disease causing circular holes in leaves, resembling shotgun damage.",
    fullDescription:
      "Shot hole disease is a fungal infection that creates distinctive circular holes in leaves, making them appear as if they've been shot with a shotgun. This disease is caused by various fungi including Coryneum beijerinckii and affects stone fruit trees primarily. The disease thrives in wet, humid conditions and can severely impact plant health if left untreated.",
    symptoms: [
      "Small, circular holes in leaves (2-5mm diameter)",
      "Brown or purple spots before holes form",
      "Yellowing around hole margins",
      "Premature leaf drop",
      "Cankers on twigs and branches",
      "Reduced fruit quality and yield",
    ],
    causes: [
      "Wet, humid weather conditions",
      "Poor air circulation",
      "Overhead watering",
      "Infected plant debris",
      "Wounds from pruning or insects",
    ],
    treatment: {
      immediate: [
        "Remove and destroy infected leaves",
        "Prune affected branches below infection point",
        "Apply copper-based fungicide",
        "Improve air circulation around plant",
      ],
      ongoing: [
        "Continue fungicide applications every 2 weeks",
        "Monitor for new infections",
        "Maintain proper plant spacing",
        "Water at soil level, not on leaves",
      ],
      prevention: [
        "Choose resistant plant varieties",
        "Ensure good drainage",
        "Avoid overhead watering",
        "Clean up fallen leaves and debris",
        "Prune during dry weather",
      ],
    },
    timeline: "4-6 weeks for recovery, prevention ongoing",
    difficulty: "Challenging",
    commonPlants: ["Cherry trees", "Plum trees", "Peach trees", "Apricot trees", "Almond trees"],
    relatedProblems: ["Brown Rot", "Leaf Curl", "Canker"],
  },

  3: {
    id: 3,
    name: "Shield Bugs",
    category: "Pests",
    severity: "Medium",
    image: problemAssests.sheildBugs,
    shortDescription: "Stink bugs that feed on plant juices, causing discoloration and deformities.",
    fullDescription:
      "Shield bugs, also known as stink bugs, are piercing-sucking insects that extract sap from plant tissues. Their feeding causes distorted fruits, discolored spots, and weakened plant growth. They also emit a foul odor when disturbed, which can deter predators but also signal infestations.",
    symptoms: [
      "Deformed or shriveled fruits",
      "Discolored spots on fruit and leaves",
      "Wilting and stunted growth",
      "Visible shield-shaped bugs on plants",
      "Strong odor near infested plants",
    ],
    causes: [
      "Warm, dry climates",
      "Nearby infested crops or weeds",
      "Overgrown or unmanaged garden areas",
      "Lack of natural predators",
    ],
    treatment: {
      immediate: [
        "Handpick bugs and drop into soapy water",
        "Use insecticidal soap or neem oil",
        "Install row covers for protection",
      ],
      ongoing: [
        "Encourage natural predators like birds",
        "Use pheromone traps to reduce populations",
        "Keep weeds and debris cleared",
      ],
      prevention: [
        "Plant bug-resistant varieties",
        "Regular inspection during fruiting seasons",
        "Maintain garden hygiene",
      ],
    },
    timeline: "1-3 weeks with consistent control measures",
    difficulty: "Moderate",
    commonPlants: ["Tomatoes", "Peppers", "Beans", "Okra", "Fruit trees"],
    relatedProblems: ["Aphids", "Thrips", "Leaf-footed Bugs"],
  },

  4: {
    id: 4,
    name: "Scale Insects",
    category: "Pests",
    severity: "High",
    image: problemAssests.ScaleInsect,
    shortDescription: "Small, immobile pests that suck sap and form waxy shells on stems and leaves.",
    fullDescription:
      "Scale insects are sap-sucking pests that attach to plant stems, branches, and leaves. They appear as small, dome-shaped bumps and often secrete sticky honeydew, promoting sooty mold. Heavy infestations weaken plants and may lead to dieback.",
    symptoms: [
      "Sticky residue (honeydew) on leaves",
      "Presence of sooty mold",
      "Yellowing or dropping leaves",
      "Stunted growth",
      "Clusters of waxy, immobile bumps",
    ],
    causes: [
      "Lack of air circulation",
      "Over-fertilization",
      "Warm, dry environments",
      "Poorly monitored indoor plants",
    ],
    treatment: {
      immediate: [
        "Manually remove with a soft brush or cotton swab",
        "Apply horticultural oil or insecticidal soap",
        "Cut off heavily infested branches",
      ],
      ongoing: [
        "Introduce natural predators like ladybugs",
        "Repeat oil applications every 7-10 days",
        "Clean sticky residue to prevent mold",
      ],
      prevention: [
        "Avoid nitrogen overuse",
        "Regularly inspect houseplants",
        "Maintain healthy plant conditions",
      ],
    },
    timeline: "3-6 weeks with repeated treatments",
    difficulty: "Challenging",
    commonPlants: ["Citrus", "Ficus", "Orchids", "Succulents", "Houseplants"],
    relatedProblems: ["Mealybugs", "Aphids", "Whiteflies"],
  },

  5: {
    id: 5,
    name: "Peach Leaf Curl",
    category: "Diseases",
    severity: "High",
    image: problemAssests.PeachLeafCurl,
    shortDescription: "Fungal disease causing curled, thickened, and discolored peach leaves.",
    fullDescription:
      "Peach Leaf Curl is caused by the fungus Taphrina deformans. It primarily affects peach and nectarine trees, deforming new leaves and reducing fruit production. The disease is most aggressive in cool, wet spring weather.",
    symptoms: [
      "Bright red or purple curled leaves",
      "Thickened or blistered leaf tissue",
      "Leaf drop and reduced vigor",
      "Decreased fruit size and yield",
    ],
    causes: [
      "Wet, cool weather during bud break",
      "Infected tree from previous seasons",
      "Lack of preventive fungicide application",
    ],
    treatment: {
      immediate: [
        "Remove and dispose of infected leaves",
        "Apply copper-based fungicide in fall and late winter",
      ],
      ongoing: [
        "Maintain proper pruning for airflow",
        "Continue seasonal fungicide treatments",
      ],
      prevention: [
        "Use resistant peach varieties",
        "Avoid overhead watering",
        "Apply fungicide before buds swell",
      ],
    },
    timeline: "Season-long management required",
    difficulty: "Challenging",
    commonPlants: ["Peach trees", "Nectarine trees"],
    relatedProblems: ["Shot Hole Disease", "Brown Rot", "Leaf Spot"],
  },

  6: {
    id: 6,
    name: "Nutrient Excess",
    category: "Diseases",
    severity: "Medium",
    image: problemAssests.NutrientExcess,
    shortDescription: "Over-fertilization leads to toxicity and poor plant health.",
    fullDescription:
      "Excess nutrients, especially nitrogen, phosphorus, or potassium, can cause toxic build-up in plants. This disrupts nutrient balance, causes leaf burn, and weakens the plant’s ability to absorb water and other minerals.",
    symptoms: [
      "Leaf tip burn or margin scorch",
      "Dark green, overly lush foliage",
      "Weak stems prone to breakage",
      "Salt crust on soil surface",
      "Reduced flowering or fruiting",
    ],
    causes: [
      "Overuse of fertilizers",
      "Frequent use of chemical nutrient boosters",
      "Poor soil drainage",
    ],
    treatment: {
      immediate: [
        "Flush soil with clean water (leaching)",
        "Remove visible fertilizer granules",
        "Trim damaged leaves",
      ],
      ongoing: [
        "Test soil regularly for nutrient balance",
        "Switch to organic or slow-release fertilizers",
      ],
      prevention: [
        "Follow recommended fertilizer dosages",
        "Use compost-based soil amendments",
        "Avoid fertilizing during dormancy",
      ],
    },
    timeline: "1-2 weeks after flushing and corrective action",
    difficulty: "Moderate",
    commonPlants: ["Leafy greens", "Potted houseplants", "Lawn grasses", "Fruit trees"],
    relatedProblems: ["Nutrient Deficiency", "Salt Buildup", "Leaf Burn"],
  },

  7: {
    id: 7,
    name: "Mechanical Damage",
    category: "Physical",
    severity: "Low",
    image: problemAssests.MechanicalDamage,
    shortDescription: "Physical injury to plants from tools, wind, animals, or handling.",
    fullDescription:
      "Mechanical damage includes any non-biological injury to plants caused by humans, animals, machinery, or the environment. Though usually not fatal, such injuries can invite pathogens and stress the plant.",
    symptoms: [
      "Broken stems or branches",
      "Torn or bruised leaves",
      "Scars on bark or fruit",
      "Uneven growth patterns",
    ],
    causes: [
      "Improper pruning or cutting",
      "Wind or storm damage",
      "Animal grazing or trampling",
      "Transport or handling damage",
    ],
    treatment: {
      immediate: [
        "Cleanly trim damaged areas",
        "Disinfect pruning tools",
        "Support broken stems with ties",
      ],
      ongoing: [
        "Protect with barriers or cages",
        "Avoid working on wet plants",
      ],
      prevention: [
        "Prune properly using sharp tools",
        "Secure tall plants with stakes",
        "Minimize traffic in planting areas",
      ],
    },
    timeline: "Recovery in 1-2 weeks for minor damage",
    difficulty: "Easy",
    commonPlants: ["All garden plants", "Ornamentals", "Seedlings"],
    relatedProblems: ["Pest Damage", "Fungal Infections (secondary)", "Sunscald"],
  },

  8: {
    id: 8,
    name: "Mealybugs",
    category: "Pests",
    severity: "Medium",
    image: problemAssests.Mealybugs,
    shortDescription: "White, cottony pests that feed on plant sap and attract mold.",
    fullDescription:
      "Mealybugs are small, white, soft-bodied insects that form cottony masses on plant parts. They feed on sap, weaken the plant, and excrete honeydew, which can lead to sooty mold development.",
    symptoms: [
      "White, cotton-like masses on leaves and stems",
      "Sticky leaves from honeydew secretion",
      "Sooty mold growth",
      "Leaf yellowing and drop",
      "Stunted plant growth",
    ],
    causes: [
      "High indoor humidity",
      "Overwatering and poor ventilation",
      "Spread from contaminated plants",
    ],
    treatment: {
      immediate: [
        "Wipe affected areas with alcohol-dipped cotton swab",
        "Apply neem oil or insecticidal soap",
        "Isolate affected plants",
      ],
      ongoing: [
        "Repeat treatments weekly until resolved",
        "Introduce beneficial insects like ladybugs",
      ],
      prevention: [
        "Inspect new plants before bringing home",
        "Avoid over-fertilizing",
        "Improve air circulation",
      ],
    },
    timeline: "2-4 weeks with consistent control",
    difficulty: "Moderate",
    commonPlants: ["Houseplants", "Succulents", "Citrus", "Tropical plants"],
    relatedProblems: ["Scale Insects", "Whiteflies", "Aphids"],
  },

  9: {
    id: 9,
    name: "Chilling and Frost Injury",
    category: "Environmental",
    severity: "High",
    image: problemAssests.FrostInjury,
    shortDescription: "Cold temperatures damage plant tissues, causing browning and dieback.",
    fullDescription:
      "Chilling and frost injury occurs when sensitive plants are exposed to low temperatures. This leads to cell damage, water stress, and often tissue death. Young leaves, flowers, and fruits are most vulnerable.",
    symptoms: [
      "Blackened or wilted leaves and stems",
      "Brown or translucent spots on leaves",
      "Fruit cracking or scarring",
      "Delayed growth or dieback",
    ],
    causes: [
      "Sudden drop in nighttime temperatures",
      "Improper planting time",
      "Lack of frost protection",
    ],
    treatment: {
      immediate: [
        "Remove dead or mushy tissues",
        "Water stressed plants moderately",
        "Move container plants to shelter",
      ],
      ongoing: [
        "Mulch base to insulate roots",
        "Use frost cloths or covers overnight",
      ],
      prevention: [
        "Plant cold-sensitive crops after frost risk passes",
        "Use windbreaks or protective structures",
      ],
    },
    timeline: "Recovery varies by extent; weeks to full season",
    difficulty: "Challenging",
    commonPlants: ["Tomatoes", "Peppers", "Tropical plants", "Young fruit trees"],
    relatedProblems: ["Sunscald", "Mechanical Damage", "Leaf Burn"],
  },

  10: {
    id: 10,
    name: "Light or Heat Source Damage",
    category: "Environmental",
    severity: "Medium",
    image: problemAssests.LightDamage,
    shortDescription: "Scorching or bleaching of leaves due to intense sunlight or artificial lights.",
    fullDescription:
      "Excessive light or heat exposure can cause plant leaves to scorch, fade, or develop dry patches. Indoor plants placed too close to windows or grow lights are especially susceptible to damage.",
    symptoms: [
      "Brown, crispy leaf edges",
      "Bleached or faded leaves",
      "Dry or curling foliage",
      "Leaf drop",
    ],
    causes: [
      "Direct sunlight through glass",
      "Grow lights placed too close",
      "Sudden increase in temperature",
    ],
    treatment: {
      immediate: [
        "Move plant to indirect light",
        "Trim damaged leaves",
        "Increase humidity if needed",
      ],
      ongoing: [
        "Adjust grow light distance and timing",
        "Use sheer curtains for window plants",
      ],
      prevention: [
        "Acclimate plants to brighter conditions gradually",
        "Monitor light intensity and duration",
      ],
    },
    timeline: "1-2 weeks for leaf recovery and growth to resume",
    difficulty: "Moderate",
    commonPlants: ["Ferns", "Orchids", "Houseplants", "Seedlings"],
    relatedProblems: ["Frost Injury", "Nutrient Deficiency", "Sunscald"],
  },
  11: {
    id: 11,
    name: "Creeping Charlie (Ground Ivy)",
    category: "Weeds",
    severity: "High",
    image: problemAssests.CreepingCharlie,
    shortDescription: "An aggressive invasive weed with rounded leaves and creeping stems.",
    fullDescription:
      "Creeping Charlie, also known as Ground Ivy, is a fast-spreading weed that thrives in moist, shady areas. It forms dense mats that crowd out desirable plants. Its scalloped leaves and purple flowers make it recognizable but difficult to eradicate.",
    symptoms: [
      "Thick mats of low-growing foliage",
      "Scalloped, shiny green leaves",
      "Purple flowers in late spring",
      "Choking out lawn and ground cover",
    ],
    causes: [
      "Overwatering or poor drainage",
      "Shady, moist environments",
      "Weak or sparse turfgrass",
    ],
    treatment: {
      immediate: [
        "Hand-pull or dig out with roots",
        "Apply post-emergent broadleaf herbicide",
      ],
      ongoing: [
        "Improve lawn density with overseeding",
        "Enhance drainage and sunlight exposure",
      ],
      prevention: [
        "Maintain thick, healthy lawn",
        "Avoid overwatering shaded areas",
        "Mulch garden beds to suppress growth",
      ],
    },
    timeline: "Several weeks to full season for control and prevention",
    difficulty: "Challenging",
    commonPlants: ["Lawns", "Groundcovers", "Flower Beds"],
    relatedProblems: ["Dandelions", "Clover", "Bindweed"],
  },
  12: {
    id: 12,
    name: "Nutsedge (Nutgrass)",
    category: "Weeds",
    severity: "Medium",
    image: problemAssests.Nutsedge,
    shortDescription: "A grassy weed with shiny, yellow-green leaves that grow faster than turf.",
    fullDescription:
      "Nutsedge is a perennial weed that resembles grass but grows faster and has a triangular stem. It spreads via underground tubers called nutlets, making it hard to eliminate completely without targeted herbicide treatment.",
    symptoms: [
      "Shiny, upright yellow-green blades",
      "Rapid vertical growth above lawn level",
      "Triangular stem (when rolled in fingers)",
      "Patchy appearance in turf",
    ],
    causes: [
      "Poor drainage or overwatering",
      "Disturbed soil or open lawn spots",
      "Warm, humid conditions",
    ],
    treatment: {
      immediate: [
        "Use sedge-specific herbicide (e.g., halosulfuron)",
        "Avoid hand-pulling (stimulates tuber growth)",
      ],
      ongoing: [
        "Improve drainage in affected areas",
        "Mow regularly and adjust height",
      ],
      prevention: [
        "Maintain thick turfgrass",
        "Correct underlying moisture issues",
        "Avoid disturbing soil unnecessarily",
      ],
    },
    timeline: "2–3 applications over a season for effective control",
    difficulty: "Moderate",
    commonPlants: ["Lawns", "Garden Beds", "Agricultural Fields"],
    relatedProblems: ["Crabgrass", "Dallisgrass", "Quackgrass"],
  },

}



export const problems = [
  {
    id: 1,
    name: "Thrips",
    description: "These insects are also known by their scientific name Thysanoptera, and they...",
    image: problemAssests.Thrips,
    category: "Pests",
  },
  {
    id: 2,
    name: "Shot Hole Disease",
    description: "The disease's name couldn't be more accurate because it is about the holes...",
    image: problemAssests.ShotHole,
    category: "Diseases",
  },
  {
    id: 3,
    name: "Shield Bugs",
    description: "This bug is also known as a stink bug, and such a nickname is not coinciden...",
    image: problemAssests.sheildBugs,
    category: "Pests",
  },
  {
    id: 4,
    name: "Scale Insects",
    description: "Scale insects suck sap from plants, thus depriving them of vital nutrients...",
    image: problemAssests.ScaleInsect,
    category: "Pests",
  },
  {
    id: 5,
    name: "Peach Leaf Curl",
    description: "This fungus Taphrina deformans causes this plant's disease. As you can gues...",
    image: problemAssests.PeachLeafCurl,
    category: "Diseases",
  },
  {
    id: 6,
    name: "Nutrient excess",
    description: "The most common issues for plants are nutrient-related. And they can be eas...",
    image: problemAssests.NutrientExcess,
    category: "Diseases",
  },
  {
    id: 7,
    name: "Mechanical damage",
    description: "Mechanical damage is a physical violation of the integrity of the plant. Th...",
    image: problemAssests.MechanicalDamage,
    category: "Physical",
  },
  {
    id: 8,
    name: "Mealybugs",
    description: "Mealybugs are wingless insects that look like white cottony masses. You can...",
    image: problemAssests.Mealybugs,
    category: "Pests",
  },
  {
    id: 9,
    name: "Chilling and Frost injury",
    description: "Frost damage occurs if the plant stays in unexpectedly low-temperature cond...",
    image: problemAssests.FrostInjury,
    category: "Environmental",
  },
  {
    id: 10,
    name: "Light or Heat Source Damage",
    description: "The increased temperature of the environment in which your plant grows can...",
    image: problemAssests.LightDamage,
    category: "Environmental",
  },
  {
    id: 11,
    name: "Creeping Charlie (Ground Ivy)",
    description: "An invasive weed forming dense mats, crowding out plants in moist, shady areas.",
    image: problemAssests.CreepingCharlie,
    category: "Weeds",
  },
  {
    id: 12,
    name: "Nutsedge (Nutgrass)",
    description: "Fast-growing grassy weed with shiny yellow-green leaves and underground tubers.",
    image: problemAssests.Nutsedge,
    category: "Weeds",
  },
]