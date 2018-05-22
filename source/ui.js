'use strict';
const path = require('path');
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');
const terminalImage = require('terminal-image');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'OpenStreetMap',
		url: 'https://www.openstreetmap.org/user/yopey/history'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/yoheitaniguchi'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/yopeyt2'
	},
	{
		label: '---',
		action() {
		}
	},
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>
				Yohei Taniguchi.
				I like OSS and OpenStreetMap !
			</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
