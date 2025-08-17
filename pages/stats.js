import React from 'react'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import GithubCard from '@/components/metrics/Github'
import GithubPersonalCard from '@/components/metrics/GithubPersonal'

export default function Stats() {
  return (
    <>
      <PageSEO title={`Stats - ${siteMetadata.title}`} description="GitHub Stats" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">GitHub Stats</h1>
        <div className="my-4">
          <GithubCard />
        </div>
        <div className="my-4">
          <GithubPersonalCard />
        </div>
      </div>
    </>
  )
}
