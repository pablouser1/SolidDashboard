export interface Group {
  title: string
  items: Link[]
}

export interface Link {
  title: string
  icon?: string
  url: string
}
