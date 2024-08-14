import React from 'react';

const BookCard = ({ image, title, genre, description }) => {
    return (
        <div className="bg-gradient-to-r  from-[#2b1839] to-[#29213d] bg-opacity-10  rounded-lg p-6 hover:translate-y-[-10px] transition-transform duration-500">
            <img src={image} alt={title} className="rounded-lg mb-4 h-96 w-full px-1" />
            <h3 className="text-white text-xl font-bold mb-2 text-center">{genre}</h3>
            <p className="text-[#b3b3b3] text-center text-[21px] mb-4 italic font-inter">
                "{description.length > 180 ? `${description.substring(0, 100)}...` : description}"
            </p>
            <a href="#"><p className="text-[#8a2be2] text-lg font-medium text-center mx-auto">Read More</p></a>
        </div>
    );
};

export default BookCard;
