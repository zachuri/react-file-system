import React, { useState } from 'react';

export default function App() {
	return (
		<div>
			<Folder name="Desktop">
				<Folder name="Music">
					<Files name="file.txt" />
					<Files name="pic.jpeg" />
				</Folder>
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
	// console.log(props);

	// Uncomment if you don't what to write props
	// const {name, children, isOpen] = props;

	const [isOpen, setIsOpen] = useState(true);

	// Border to Show seperations
	const parentStyle = { border: '2px solid pink' };
	const childStyle = { marginLeft: '17px' };

	// Function to handle isOpen
	const handleIsOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div style={parentStyle}>
			<span onClick={handleIsOpen}>{props.name}</span>
			<div style={childStyle}>{isOpen ? props.children : null}</div>
		</div>
	);
};

const Files = (props) => {
	return <div>{props.name}</div>;
};
