import Head from 'next/head'
import Image from 'next/image'

import {
  Container,
  Grid,
  Paper,
  Typography,
  Link,
  Button,
} from '@material-ui/core'

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title key="title">Create Next App: Top page</title>
    </Head>
    <Container>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Typography variant="h1">
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </Typography>
          <Typography>
            Get started by editing <code>pages/index.tsx</code>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              window.alert('With typescript and Jest')
            }}
          >
            Test Button
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Link href="https://nextjs.org/docs">
            <Paper>
              <Typography variant="h3">Documentation &rarr;</Typography>
              <Typography>
                Find in-depth information about Next.js features and API.
              </Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link href="https://nextjs.org/learn">
            <Paper>
              <Typography variant="h3">Learn &rarr;</Typography>
              <Typography>
                Learn about Next.js in an interactive course with quizzes!
              </Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link href="https://github.com/vercel/next.js/tree/master/examples">
            <Paper>
              <Typography variant="h3">Examples &rarr;</Typography>
              <Typography>
                Discover and deploy boilerplate example Next.js projects.
              </Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <Paper>
              <Typography variant="h3">Deploy &rarr;</Typography>
              <Typography>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} container justify="center" alignContent="center">
          <Link
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography component="div">
              Powered by{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width="128"
                height="34"
              />
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Container>
  </>
)

export default Home
