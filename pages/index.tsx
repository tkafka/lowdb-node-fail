import { PureComponent, ReactNode, ReactElement } from 'react'
import { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { getDbData } from 'services/db'

interface HomePageParams extends ParsedUrlQuery {}

interface HomeProps {
	data: any
}

interface HomeState {
}

export const getServerSideProps: GetServerSideProps<HomeProps, HomePageParams> = async () => {

	let data = await getDbData()

	return {
		props: {
			data: data
		},
	}
}

export default class Home extends PureComponent<HomeProps, HomeState> {
	static getDerivedStateFromProps(props: HomeProps, state: HomeState): HomeState {
		// hydrate
		return {
			...state,
			data: props.data
		}
	}

	static getLayout(page: ReactNode) {
		return (
			<>
				{page}
			</>
		)
	}

	state = {
		data: null,
	}

	render() {
		return (
			<div>
				{JSON.stringify(this.state.data)}
			</div>
		)
	}
}
