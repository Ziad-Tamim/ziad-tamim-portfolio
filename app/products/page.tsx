import Products from '@/components/products'
import { getProducts } from '@/lib/products'

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <section className='pb-16 pt-30'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-8'>Products</h1>

        <Products products={products} />
      </div>
    </section>
  )
} 