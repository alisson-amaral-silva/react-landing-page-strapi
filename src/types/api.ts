export type LogoProps = {
  alternativeText: string
  url?: string
}

export type ButtonProps = {
  label: string
  url: string
}

export type ImageProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: ButtonProps
  image: ImageProps
}

export type AboutProjectProps = {
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
}

export type TechIconsProps = {
  icon: ImageProps
  title: string
}

export type TechProps = {
  title: string
  techIcons: TechIconsProps[]
}

export type ConceptProp = {
  title: string
}

export type ConceptsProps = {
  title: string
  concepts: ConceptProp[]
}

export type ModuleProps = {
  title: string
  subtitle: string
  description: string
}

export type ModulesProps = {
  modules: ModuleProps[]
}

export type AgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: ButtonProps
}

export type PhotoProps = {
  alternativeText: string
  url: string
}

export type SocialLinksProps = {
  title: string
  url: string
}

export type AuthorsProps = {
  photo: PhotoProps
  name: string
  role: string
  socialLinks: SocialLinksProps[]
  description
}

export type AboutUsProps = {
  title: string
  authors: AuthorsProps[]
}

export type ReviewProps = {
  name: string
  text: string
  photo: PhotoProps
}

export type ReviewsProps = {
  title: string
  reviews: ReviewProps[]
}

export type QuestionProp = {
  question: string
  answer: string
}

export type FaqProps = {
  title: string
  questions: QuestionProp[]
}


export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: AboutProjectProps
  sectionTech: TechProps
  sectionConcepts: ConceptsProps
  sectionModules: ModulesProps
  sectionAgenda: AgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: AboutUsProps
  sectionReviews: ReviewsProps
  sectionFaq: FaqProps
}

