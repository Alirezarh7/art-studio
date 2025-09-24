'use client'
import React from 'react';
import CustomButton from '@/src/components/general/Buttons/CustomButton';
import { FaInstagram, FaPhoneAlt, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { SiAparat } from 'react-icons/si';
import { MdOutlinePhoneInTalk } from 'react-icons/md';

const ListButton = () => {

	return (
		<div className=' mt-14 px-2 flex'>
				<div className='ml-2'>
					<CustomButton variant={'iconButton'} type={'button'} onClick={() => {
					}} icon={<FaTelegramPlane className='h-4 w-4 hover:w-5 hover:h-5' />} />
				</div>
				<div className='ml-2'>
					<CustomButton variant={'iconButton'} type={'button'} onClick={() => {
					}} icon={<FaInstagram className='h-4 w-4 hover:w-5 hover:h-5' />} />
				</div>
				<div className='ml-2'>
					<CustomButton variant={'iconButton'} type={'button'} onClick={() => {
					}} icon={<SiAparat className='h-4 w-4 hover:w-5 hover:h-5' />} />
				</div>
				<div className='ml-2'>
					<CustomButton variant={'iconButton'} type={'button'} onClick={() => {
					}} icon={<FaWhatsapp className='h-4 w-4 hover:w-5 hover:h-5' />} />
				</div>
				<div className=''>
					<CustomButton variant={'iconButton'} type={'button'} onClick={() => {
					}} icon={<MdOutlinePhoneInTalk className='h-4 w-4 hover:w-5 hover:h-5' />} />
				</div>
		</div>
	);
};

export default ListButton;