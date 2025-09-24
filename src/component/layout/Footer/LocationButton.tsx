'use client';
import React from 'react';
import { FaMapLocationDot } from 'react-icons/fa6';
import CustomButton from '@/src/components/general/Buttons/CustomButton';

const LocationButton = () => {
	const latitude = "37.301486";
	const longitude = "49.599690";
	const handleClick = () => {
		window.location.href = `https://www.google.com/maps?q=${latitude},${longitude}`;
	};
	return (
		<div className='w-full flex justify-between mx-5 bg-customBlue rounded-xl p-2 mt-2 '>
			<div className='flex'>
				<FaMapLocationDot className='w-8 h-8 md:h-10 md:w-10  ml-1 ' />
				<strong className='md:px-3 md:mt-3 pr-2 mt-2 text-sm '>
					آدرس هنرستان دخترانه پیک آفتاب
				</strong>
			</div>
			<div>
				<CustomButton variant={'light'} type={'button'} label={'مشاهده'} onClick={handleClick} />
			</div>
		</div>
	);
};

export default LocationButton;