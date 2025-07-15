import bluePhox from "../Plants/BluePhlox.jpg"
import AloeVera from "../Plants/Aloevera.jpg"
import pineApple from "../Plants/PineApple.jpg"
import sugarCane from "../Plants/sugarCane.jpg"
import corn from "../Plants/corn.jpg"
import cheesePumpkin from "../Plants/cheesePumpkin.png"
import cinderellaPumpkin from "../Plants/cinderellaPumpkin.png"
import facePumpkin from "../Plants/facePumpkin.png"
import faceXLPumpkin from "../Plants/faceXLPumpkin.jpg"
import gooseguard from "../Plants/gooseguard.jpg"
import jackB from "../Plants/jackB.png"
import jackBorange from "../Plants/jackBorange.png"
import orange_whitePumpkin from "../Plants/orange_whitePumpkin.png"
import PolarBearPumpkin from "../Plants/PolarBearPumpkin.png"
import pumpkemon from "../Plants/pumpkemon.png"
import SpookiePumpkin from "../Plants/SpookiePumpkin.png"
import TurksTurbanPumpkin from "../Plants/TurksTurbanPumpkin.jpg"
import romaTomatoes from "../Plants/RomaTomatoes.jpg"
import MarglobleTomatoes from "../Plants/MarglobeTomatoes.jpg"
import CherryTomatoes from "../Plants/CherryTomatoes.jpg"
import NilManel from "../Plants/NilManel.png"
import ArianeFern from "../Plants/HouseHold/ArianeFern.jpg"
import cactus from "../Plants/HouseHold/Cactus.jpg"
import ChrismasCactus_HolidayCactus from "../Plants/HouseHold/ChrismasCactus_HolidayCactus.jpg"
import Chrysanthemum from "../Plants/HouseHold/Chrysanthemum.jpg"
import Creeping_Torenia from "../Plants/HouseHold/Creeping_Torenia.jpg"
import Diamond_frost from "../Plants/HouseHold/Diamond_frost.jpg"
import Emina from "../Plants/HouseHold/Emina.jpg"
import English_Ivy from "../Plants/HouseHold/English_Ivy.jpg"
import Fern from "../Plants/HouseHold/Fern.jpg"
import GaZania from "../Plants/HouseHold/GaZania.jpg"
import Murano_Fern from "../Plants/HouseHold/Murano_Fern.jpg"
import Pelargonium from "../Plants/HouseHold/Pelargonium.jpg"
import Petunia from "../Plants/HouseHold/Petunia.jpg"
import Silver_dust from "../Plants/HouseHold/Silver_dust.jpg"
import Succulents from "../Plants/HouseHold/Succulents.jpg"
import Guava from "../Plants/Trees/Guava.webp"
import Poinsettia from "../Plants/Flowers/Poinsettia.webp"
import RedTailCatcus from "../Plants/Cacti/redtailCatcus.webp"
import jackfruit from "../Plants/Trees/jackfruit.webp"

export const categories = [
      "All Plants",
      "Houseplants",
      "Cacti/Succs",
      "Succulents",
      "Flowers",
      "Trees",
      "Vegetables",
      "Fruits",
      "Spices",
      "Grasses",
      "Shrubs",
      "Ferns",
      "Herbs",
      "Foliage",
    ]
  

const assets = {
    bluePhox,
    AloeVera,
    pineApple,
    sugarCane,
    corn,
    cheesePumpkin,
    cinderellaPumpkin,
    facePumpkin,
    faceXLPumpkin,
    gooseguard,
    jackB,
    jackBorange,
    orange_whitePumpkin,
    PolarBearPumpkin,
    pumpkemon,
    SpookiePumpkin,
    TurksTurbanPumpkin,
    romaTomatoes,
    MarglobleTomatoes,
    CherryTomatoes,
    NilManel,
    ArianeFern,
    cactus,
    ChrismasCactus_HolidayCactus,
    Chrysanthemum,
    Creeping_Torenia,
    Diamond_frost,
    Emina,
    English_Ivy,
    Fern,
    GaZania,
    Murano_Fern,
    Pelargonium,
    Petunia,
    Silver_dust,
    Succulents,
    Guava,
    Poinsettia,
    RedTailCatcus,
    jackfruit,
    
}

export const plants = [
  { name: "Aloe Vera", category: "Succulents", image: `${assets.AloeVera}`, light: "Full Sun", water: "Low", difficulty: "Easy" },
  { name: "Blue phlox/indigo", category: "Flowers", image: `${assets.bluePhox}`, light: "Partial Shade", water: "Medium", difficulty: "Moderate" },
  { name: "Pine Apple", category: "Fruits", image: `${assets.pineApple}`, light: "Shade", water: "High", difficulty: "Difficult" },
  { name: "Sugar Cane", category: "Fruits", image: `${assets.sugarCane}`, light: "Full Sun", water: "Low", difficulty: "Easy" },
  { name: "Corn", category: "Vegetables", image: `${assets.corn}`, light: "Partial Shade", water: "Medium", difficulty: "Moderate" },

  { name: "Cinderella Pumpkin", category: "Vegetables", image: `${assets.cinderellaPumpkin}`, light: "Shade", water: "High", difficulty: "Difficult" },
  { name: "Face Pumpkin", category: "Vegetables", image: `${assets.facePumpkin}`, light: "Full Sun", water: "Low", difficulty: "Easy" },
  { name: "Cheese Pumpkin", category: "Vegetables", image: `${assets.cheesePumpkin}`, light: "Partial Shade", water: "Medium", difficulty: "Moderate" },
  { name: "Face XL Pumpkin", category: "Vegetables", image: `${assets.faceXLPumpkin}`, light: "Shade", water: "High", difficulty: "Difficult" },
  { name: "Jack B Little White", category: "Vegetables", image: `${assets.jackB}`, light: "Full Sun", water: "Low", difficulty: "Easy" },
  { name: "Jack B Little Orange", category: "Vegetables", image: `${assets.jackBorange}`, light: "Partial Shade", water: "Medium", difficulty: "Moderate" },
  { name: "Orange & White Pumpkin", category: "Vegetables", image: `${assets.orange_whitePumpkin}`, light: "Shade", water: "High", difficulty: "Difficult" },
  { name: "Goose Gouard", category: "Vegetables", image: `${assets.gooseguard}`, light: "Full Sun", water: "Low", difficulty: "Easy" },
  { name: "Polar Bear Pumpkin", category: "Vegetables", image: `${assets.PolarBearPumpkin}`, light: "Partial Shade", water: "Medium", difficulty: "Moderate" },
  { name: "Turks Turban Pumpkin", category: "Vegetables", image: `${assets.TurksTurbanPumpkin}`, light: "Shade", water: "High", difficulty: "Difficult" },
  { name: "Pump-ke-Mon", category: "Vegetables", image: `${assets.pumpkemon}`, light: "Full Sun", water: "Low", difficulty: "Easy" },
  { name: "Spookie Pumpkin", category: "Vegetables", image: `${assets.SpookiePumpkin}`, light: "Partial Shade", water: "Medium", difficulty: "Moderate" },
  { name: "Cherry Tomatoes", category: "Vegetables", image: `${assets.CherryTomatoes}`, light: "Shade", water: "High", difficulty: "Difficult" },
  { name: "Marglobe Tomatoes", category: "Vegetables", image: `${assets.MarglobleTomatoes}`, light: "Full Sun", water: "Low", difficulty: "Easy" },
  { name: "Roma Tomatoes", category: "Vegetables", image: `${assets.romaTomatoes}`, light: "Partial Shade", water: "Medium", difficulty: "Moderate" },

  { name: "Ariane Fern", category: "Houseplants", image: `${assets.ArianeFern}`, light: "Shade", water: "High", difficulty: "Difficult" },
  { name: "Cactus", category: "Houseplants", image: `${assets.cactus}`, light: "Full Sun", water: "Low", difficulty: "Easy" },
  { name: "Chrismas Cactus / Holiday Cactus", category: "Houseplants", image: `${assets.ChrismasCactus_HolidayCactus}`, light: "Partial Shade", water: "Medium", difficulty: "Moderate" },
  { name: "Chrysanthemum", category: "Houseplants", image: `${assets.Chrysanthemum}`, light: "Shade", water: "High", difficulty: "Difficult" },
  { name: "Creeping Torenia", category: "Houseplants", image: `${assets.Creeping_Torenia}`, light: "Full Sun", water: "Low", difficulty: "Easy" },
  { name: "Diamond Frost", category: "Houseplants", image: `${assets.Diamond_frost}`, light: "Partial Shade", water: "Medium", difficulty: "Moderate" },
  { name: "Emerald Queen Fern", category: "Houseplants", image: `${assets.Fern}`, light: "Shade", water: "High", difficulty: "Difficult" },
  { name: "Emina Fern", category: "Houseplants", image: `${assets.Emina}`, light: "Full Sun", water: "Low", difficulty: "Easy" },
  { name: "English Ivy", category: "Houseplants", image: `${assets.English_Ivy}`, light: "Partial Shade", water: "Medium", difficulty: "Moderate" },
  { name: "Gazania", category: "Houseplants", image: `${assets.GaZania}`, light: "Shade", water: "High", difficulty: "Difficult" },
  { name: "Murano Fern", category: "Houseplants", image: `${assets.Murano_Fern}`, light: "Full Sun", water: "Low", difficulty: "Easy" },
  { name: "Petunia", category: "Houseplants", image: `${assets.Petunia}`, light: "Partial Shade", water: "Medium", difficulty: "Moderate" },
  { name: "Pelargonium", category: "Houseplants", image: `${assets.Pelargonium}`, light: "Shade", water: "High", difficulty: "Difficult" },
  { name: "Silver Dust", category: "Houseplants", image: `${assets.Silver_dust}`, light: "Full Sun", water: "Low", difficulty: "Easy" },
  { name: "Succulents", category: "Succulents", image: `${assets.Succulents}`, light: "Partial Shade", water: "Medium", difficulty: "Moderate" },

  { name: "Guava", category: "Trees", image: `${Guava}`, light: "Shade", water: "High", difficulty: "Difficult" },
  { name: "Jackfruit", category: "Trees", image: `${jackfruit}`, light: "Full Sun", water: "Low", difficulty: "Easy" },

  { name: "Poinsettia", category: "Flowers", image: `${Poinsettia}`, light: "Partial Shade", water: "Medium", difficulty: "Moderate" },
  { name: "Blue Water Lily", category: "Flowers", image: `${assets.NilManel}`, light: "Shade", water: "High", difficulty: "Difficult" },

  { name: "Rat tail catcus", category: "Cacti/Succs", image: `${assets.RedTailCatcus}`, light: "Full Sun", water: "Low", difficulty: "Easy" },
]

