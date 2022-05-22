import { Td } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

type Props = {
  lang: string
  text: string
}

const TableRow = (props: Props) => {
  const [isPlaying, setPlaying] = useState<boolean>(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (audio == null) return
    audio.addEventListener('ended', () => setPlaying(false))
    audio.play().catch(console.log)
  }, [audio])

  return (
    <Td
      textAlign="center"
      _hover={{ backgroundColor: 'gray.100', cursor: 'pointer' }}
      onClick={async () => {
        if (isPlaying) {
          setPlaying(false)
          audio?.pause()
          setAudio(null)
        } else {
          setPlaying(true)
          setAudio(
            new Audio(
              `https://translate.google.com.vn/translate_tts?ie=UTF-8&q=${encodeURIComponent(
                props.text
              )}&tl=${props.lang}&client=tw-ob`
            )
          )
        }
      }}
    >
      {props.text}
      {isPlaying ? ' 🔊' : ''}
    </Td>
  )
}

export default TableRow
