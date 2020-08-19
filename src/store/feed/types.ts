export interface FeedState {
  medias: {
    comentarios: 15
    criadoEm: string
    imagens: {
      resolucaoMedia: {
        url: string
        width: number
        height: number
      }
      resolucaoPadrao: {
        url: string
        width: number
        height: number
      }
      thumbnail: {
        url: string
        width: number
        height: number
      }
    }
    legenda: string
    link: string
    metadados: string
    obtidoEm: string
    origem: string
    tags: []
    tipo: string
    uid: string
    upvotes: number
    usuario: {
      foto: string
      id: string
      nome: string
      username: string
    }
  }[]
  pagination: {
    max_id: string
    next_url: string
  }
}
export const FETCH_FEED = 'FETCH_FEED'

export interface FetchFeedAction {
  type: typeof FETCH_FEED
  payload: FeedState
}

export type FeedActionTypes = FetchFeedAction
