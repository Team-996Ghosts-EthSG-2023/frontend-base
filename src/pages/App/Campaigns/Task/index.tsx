import React from 'react'
import { styled } from 'styled-components'

export const Task = (props) => {
    const descUrl = new URL('./1.jpg', import.meta.url).href
    const submissionUrl = new URL('./2.jpg', import.meta.url).href
  return(
    <Container>
        <TaskDescription src={descUrl}/>
        <Submission src={submissionUrl}/>
    </Container>
   )
  }

const TaskDescription = styled.img`
  width: 70%;
  margin: 0 auto;
`
const Submission = styled.img`
  width: 70%;
  margin: 0 auto;
`

const Container = styled.div`
  display: flex;
  flex-flow: column;
  overflow: scroll;
`
