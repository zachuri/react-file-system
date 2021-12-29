import React from 'react';

export default function App() {
	return (
		<div>
			<Folder name="Desktop">
				<Files name="file.txt" />
				<Files name="pic.jpeg" />
			</Folder>
			<Folder name="Applications">
				<Files name="hw.txt" />
				<Files name="dog.jpeg" />
				<Files name="cat.png" />
			</Folder>
		</div>
	);
}

const Folder = (props) => {
	console.log(props);

	const parentStyle = { border: '2px solid pink' };
	const childStyle = { marginLeft: '17px' };
	return (
		<div style={parentStyle}>
			{props.name}
			<div style={childStyle}>{props.children}</div>
		</div>
	);
};

const Files = (props) => {
	return <div>{props.name}</div>;
};
