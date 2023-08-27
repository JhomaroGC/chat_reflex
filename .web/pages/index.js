import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { E, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, set_val, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Button, Container, HStack, Input, Text, useColorMode } from "@chakra-ui/react"
import NextHead from "next/head"


export default function Component() {
  const default_state = useContext(StateContext)
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const focusRef = useRef();
  
  // Main event loop.
  const [Event, notConnected] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => Event([E('default_state.hydrate', {})])
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
  <Fragment><Fragment>
  <Container>
  <Box>
  <Box sx={{"marginY": "1rem"}}>
  <Box sx={{"textAlign": "right"}}>
  {`What is Reflex?`}
</Box>
  <Box sx={{"textAlign": "left"}}>
  {`A way to build web apps in pure Python`}
</Box>
</Box>
  <Box sx={{"marginY": "1rem"}}>
  <Box sx={{"textAlign": "right"}}>
  {`What i can make with it`}
</Box>
  <Box sx={{"textAlign": "left"}}>
  {`Anything from a simple website to a complex web app!`}
</Box>
</Box>
</Box>
  <HStack>
  <Input placeholder={`Ask a question`} type={`text`}/>
  <Button>
  {`Ask`}
</Button>
</HStack>
</Container>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
    </Fragment>
  )
}
