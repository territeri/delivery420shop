import { NextResponse } from "next/server"
import { kv } from "@vercel/kv"
import type { Product } from "@/lib/types"

const initialProducts: Product[] = [
  {
    id: "1",
    name: "Розы",
    description: "Красивые свежие розы",
    price: 500,
    category: "Цветы",
    image: "/placeholder.svg",
    unit: "шт"
  },
  {
    id: "2",
    name: "Афганский хеш",
    description: "Высококачественный хеш",
    price: 1000,
    category: "Хеш",
    image: "/placeholder.svg",
    unit: "гр"
  },
  {
    id: "3",
    name: "Фруктовые мармеладки",
    description: "Вкусные и яркие мармеладки",
    price: 300,
    category: "Мармеладки",
    image: "/placeholder.svg",
    unit: "шт"
  }
]

export async function GET() {
  try {
    await kv.set("products", initialProducts)
    return NextResponse.json({ message: "Products initialized successfully" })
  } catch (error) {
    console.error("Failed to initialize products:", error)
    return NextResponse.json({ error: "Failed to initialize products" }, { status: 500 })
  }
}
