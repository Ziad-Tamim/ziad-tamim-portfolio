import Link from 'next/link'
import { getHighlightedProducts } from '@/lib/products'
import Products from '@/components/products'

export default async function RecentProducts() {
  const products = await getHighlightedProducts(2)

  // Only render if there are highlighted products
  if (products.length === 0) {
    return null
  }

  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Featured products</h2>
        <Products products={products} />

        <Link
          href='/products'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <span>All products</span>
        </Link>
      </div>
    </section>
  )
} 