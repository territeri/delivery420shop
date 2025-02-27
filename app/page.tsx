import Header from "@/components/Header"
import DeliveryForm from "@/components/DeliveryForm"
import CategoryShowcase from "@/components/CategoryShowcase"
import ProductList from "@/components/ProductList"
import AdminLoginButton from "@/components/AdminLoginButton"
import Metadata from "@/components/Metadata"
import { Suspense } from "react"

export default function Home() {
  return (
    <>
      <Metadata
        title="4:20 Delivery Shop - Доставка в течение 30 минут Phuket"
        description="Быстрая доставка цветов, хеша и мармеладок на Пхукете. Закажите сейчас и получите через 30 минут!"
      />
      <main className="min-h-screen bg-black text-white">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-8">
            <Suspense fallback={<div>Загрузка формы доставки...</div>}>
              <DeliveryForm />
            </Suspense>
            <Suspense fallback={<div>Загрузка категорий...</div>}>
              <CategoryShowcase />
            </Suspense>
            <Suspense fallback={<div>Загрузка товаров...</div>}>
              <ProductList />
            </Suspense>
            <AdminLoginButton />
          </div>
        </div>
      </main>
    </>
  )
}
