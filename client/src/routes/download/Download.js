import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { VideoDownload } from './VideoDownload';

export const Download = () => {
	return (
		<Switch>
			<Route path='/' component={VideoDownload} />
		</Switch>
	);
};
