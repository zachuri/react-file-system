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
				<Files name="cat.mp4" />
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
	const parentStyle = { border: '2px solid white' };
	const childStyle = { marginLeft: '17px' };

	// Function to handle isOpen
	const handleIsOpen = () => {
		setIsOpen(!isOpen);
	};

	// Change direction of caret
	const direction = isOpen ? 'down' : 'right';

	return (
		<div style={parentStyle}>
			<span onClick={handleIsOpen}>
				<i className="blue folder icon"></i>
				<i className={`caret ${direction} icon`}></i>
				{props.name}
			</span>
			<div style={childStyle}>{isOpen ? props.children : null}</div>
		</div>
	);
};

const Files = (props) => {
	const fileExtension = props.name.split('.')[1];
	const fileIcons = {
		mp4: 'headphones',
		txt: 'file outline',
		jpeg: 'file image outline',
	};

	return (
		<div>
			<i className={`${fileIcons[fileExtension]} icon`}></i>
			{props.name}
		</div>
	);
};
