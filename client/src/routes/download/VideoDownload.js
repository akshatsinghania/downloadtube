import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { downloadVideo } from '../../api/downloader/Downloader';

const Style = styled.div`
	.videoInput {
		width: 80%;
		margin: 5% 20%;
		padding: 10px;
		display: flex;
	}
	.videoInput__submitButton {
		height: 10%;
		margin: 2px;
	}
	.downloadLink {
		margin: 0 20%;
	}
`;

export const VideoDownload = () => {
	const [videoId, setVideoId] = useState('');
	const [downloadableVideo, setDownloadableVideo] = useState('');
	const onVideoIdSubmit = async (e) => {
		e.preventDefault();
		setDownloadableVideo(downloadVideo(videoId));
	};
	return (
		<Style>
			<Form className='videoInput' onSubmit={onVideoIdSubmit}>
				<Form.Group controlId='formBasicEmail'>
					<Form.Control
						value={videoId}
						onChange={(e) => setVideoId(e.target.value)}
						type='text'
						placeholder='Enter video id'
					/>
					<Form.Text className='text-muted'>
						Enter the video id you to download like "jNQXAC9IVRw" in
						https://www.youtube.com/watch?v=jNQXAC9IVRw
					</Form.Text>
				</Form.Group>
				<Button
					className='videoInput__submitButton'
					variant='dark'
					type='submit'>
					Submit
				</Button>
			</Form>
			{downloadableVideo ? (
				<a className='downloadLink' target='_blank_' href={downloadableVideo}>
					click to start downloading
				</a>
			) : null}
		</Style>
	);
};
