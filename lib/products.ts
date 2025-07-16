import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'content', 'products')

export type Product = {
  metadata: ProductMetadata
  content: string
}

export type ProductMetadata = {
  title?: string
  summary?: string
  image?: string
  publishedAt?: string
  slug: string
  status?: 'active' | 'inactive'
  highlight?: boolean
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { data, content } = matter(fileContent)
    return { metadata: { ...data, slug }, content }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null
  }
}

export async function getProducts(limit?: number): Promise<ProductMetadata[]> {
  try {
    const files = fs.readdirSync(rootDirectory)

    const products = files
      .map(file => getProductMetadata(file))
      .sort((a, b) => {
        if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
          return 1
        } else {
          return -1
        }
      })

    if (limit) {
      return products.slice(0, limit)
    }

    return products
  } catch (error) {
    // Return empty array if directory doesn't exist
    return []
  }
}

export async function getHighlightedProducts(limit?: number): Promise<ProductMetadata[]> {
  const allProducts = await getProducts()
  
  const highlightedProducts = allProducts.filter(product => product.highlight === true)
  
  if (limit) {
    return highlightedProducts.slice(0, limit)
  }
  
  return highlightedProducts
}

export function getProductMetadata(filepath: string): ProductMetadata {
  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, filepath)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
  const { data } = matter(fileContent)
  
  return { ...data, slug }
} 