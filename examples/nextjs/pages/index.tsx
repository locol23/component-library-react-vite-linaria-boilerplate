import { PrimaryButton } from 'component-library'
import type { NextPage } from 'next'

const Home: NextPage = () => <PrimaryButton fontSize="1rem" onClick={() => alert('clicked!')} text="Primary Button" />

export default Home
