import { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Box, Stack } from '@chakra-ui/react'
import { findProjectById, getAllProjects } from '../../database/server'
import { Header } from '../../components/header'
import { CalendarHeader } from '../../components/projects/calendar/header'
import { Days } from '../../components/projects/calendar/days'
import { DaysOfWeek } from '../../components/projects/calendar/days-of-week'
import Head from 'next/head'
import { useRouter } from 'next/router'

const MyProject = ({ project }) => {
  const router = useRouter()
  const [currentDate, setCurrentDate] = useState(new Date())

  if (router.isFallback) return <div>Loading...</div>

  return (
    <>
      <Head>
        <title>{project.name} | Cronny</title>
      </Head>
      <Box
        backgroundColor="#fffafa"
        position="sticky"
        paddingY={4}
        borderTopWidth="5px"
        borderTopColor="purple.500"
        top="0"
      >
        <CalendarHeader currentDate={currentDate} setCurrentDate={setCurrentDate} />
        <DaysOfWeek currentDate={currentDate} />
      </Box>
      <Days currentDate={currentDate} projectId={project?.id} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { project } = await findProjectById(context.params.id.toString())

  return {
    props: {
      project,
    },
    revalidate: 1,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { projects } = await getAllProjects()
  const paths = projects.map((project) => ({
    params: { id: project.id },
  }))

  return {
    paths,
    fallback: true,
  }
}

export default MyProject
