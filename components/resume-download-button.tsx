'use client'

import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export default function ResumeDownloadButton() {
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if the file exists first (this is basic check, server-side would be more robust)
    const pdfPath = '/PDFs/Ziad_Tamim_Resume.pdf'
    
    // Track the download event
    toast.success('Resume download started')

  }

  return (
    <div className="flex items-center justify-center">
      <a 
        href="/PDFs/Ziad_Tamim_Resume.pdf" 
        download="Ziad_Tamim_Resume.pdf"
        onClick={handleDownload}
        className="no-underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
      </a>
    </div>
  )
} 