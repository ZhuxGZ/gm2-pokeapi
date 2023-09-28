import { ReactNode } from 'react';
import { Header } from '..';

interface IAppLayoutProps {
	children: ReactNode[] | ReactNode;
}

export const AppLayout = ({ children }: IAppLayoutProps) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};
