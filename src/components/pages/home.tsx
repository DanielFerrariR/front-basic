import React, { useEffect, useState } from 'react'
import { logo } from 'src/images'
import {
  Container,
  Box,
  Image,
  Skeleton,
  Typography
} from 'src/components/atoms'
import { useSelector, useDispatch } from 'src/store'
import { fetchFeed } from 'src/store/feed'
import { Favorite, CalendarToday, Chat } from '@material-ui/icons'
import { formatDate } from 'src/utils'

const Home: React.FC = () => {
  const [openImageDetails, setOpenImageDetails] = useState<string | false>(
    false
  )
  const feed = useSelector((state) => state.feed)
  const dispatch = useDispatch()

  useEffect(() => {
    document.title = 'Squid Instagram Feed | Home'
  }, [])

  useEffect(() => {
    const asyncEffect = async () => {
      dispatch(await fetchFeed())
    }

    asyncEffect()
  }, [])

  return (
    <Container
      maxWidth="md"
      display="flex"
      alignItems="center"
      flexDirection="column"
      my={3}
    >
      <Image
        src={logo}
        alt="Logo"
        width={{ xs: 120, sm: 150, md: 180, lg: 210, xl: 240 }}
        mb={3}
      />
      <Box display="flex" justifyContent="center" flexWrap="wrap" width={1}>
        {feed
          ? feed.medias.map((each) => (
              <Box position="relative" key={each.uid} p={1}>
                <a target="_blank" rel="noreferrer" href={each.link}>
                  <Image
                    src={each.imagens.thumbnail.url}
                    height={each.imagens.thumbnail.height}
                    width={each.imagens.thumbnail.width}
                    borderRadius={16}
                    onMouseEnter={() => setOpenImageDetails(each.uid)}
                  />
                </a>
                {openImageDetails === each.uid && (
                  <a target="_blank" rel="noreferrer" href={each.link}>
                    <Box
                      position="absolute"
                      width={150}
                      left={8}
                      top={8}
                      height={150}
                      borderRadius={16}
                      bgcolor="custom.overlayColor"
                      alignItems="center"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      onMouseLeave={() => setOpenImageDetails(false)}
                    >
                      <Typography color="common.white" variant="caption">
                        @{each.usuario.nome}
                      </Typography>
                      <Box
                        display="flex"
                        alignItems="center"
                        color="common.white"
                        fontSize={12}
                      >
                        <Favorite fontSize="inherit" />
                        <Typography
                          color="common.white"
                          ml={0.5}
                          variant="caption"
                        >
                          {each.upvotes}
                        </Typography>
                      </Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        color="common.white"
                        fontSize={12}
                      >
                        <Chat fontSize="inherit" />
                        <Typography
                          color="common.white"
                          ml={0.5}
                          variant="caption"
                        >
                          {each.comentarios}
                        </Typography>
                      </Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        color="common.white"
                        fontSize={12}
                      >
                        <CalendarToday fontSize="inherit" />
                        <Typography
                          color="common.white"
                          ml={0.5}
                          variant="caption"
                        >
                          {formatDate(new Date(each.obtidoEm))}
                        </Typography>
                      </Box>
                    </Box>
                  </a>
                )}
              </Box>
            ))
          : [...Array(30).keys()].map((_each, index) => (
              <Box p={1} key={index}>
                <Skeleton width={142} height={142} borderRadius={16} />
              </Box>
            ))}
      </Box>
    </Container>
  )
}

export default Home
