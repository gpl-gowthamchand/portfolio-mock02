import siteMetadata from '@/data/siteMetadata'
import ContactLink from '@/components/ContactLink'
import { PageSEO } from '@/components/SEO'

const Contact = () => {
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description="All my contacts" />
      <div className="mx-auto max-w-3xl overflow-hidden">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
          Contact
        </h1>
        <div className="pt-10 pb-8">
          <ul className="font-semi-bold flex flex-col space-y-4">
            <ContactLink
              href="mailto:gpl.gowthamchand@gmail.com"
              title="gmail"
              icon="gpl.gowthamchand"
            />
            <ContactLink
              href="https://github.com/gpl-gowthamchand"
              title="github"
              icon="gpl-gowthamchand"
            />
            <ContactLink
              href="https://www.instagram.com/gowth4m_xx/"
              title="instagram"
              icon="gowth4m_xx"
            />
            <ContactLink
              href="https://www.linkedin.com/in/gplgowthamchand/"
              title="linkedin"
              icon="gplgowthamchand"
            />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contact
